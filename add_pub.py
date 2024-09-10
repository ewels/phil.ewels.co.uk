#!/usr/bin/env python

from pathlib import Path
from rich import print
import requests
import typer
import yaml
import re
import json
from typing import Optional
from unidecode import unidecode


def main(doi: Optional[str] = typer.Argument(None)):
    # Load publications.json file
    with open("src/publications.json") as f:
        publications = json.load(f)

    # Only do all DOIs if one wasn't requested
    if doi is None:
        print("[green]Updating all publications")
        dois = publications.keys()
    else:
        print(f"[green]Adding publication: '{doi}'")
        dois = [doi]

    # Go through requested DOIs
    for this_doi in dois:
        # Get info from crossref
        fetch_pub = fetch_publication(this_doi)
        if not fetch_pub:
            exit(1)
        pub, slug, journal, md_path, md_exists = fetch_pub
        publications[this_doi] = pub
        # Create the markdown file if it doesn't exist
        if not md_exists:
            create_markdown(md_path, this_doi, slug, journal, pub)

    # Save the publications.json file
    with open("src/publications.json", "w") as f:
        json.dump(publications, f, indent=2)


def fetch_publication(doi: str):
    # Fetch the DOI from the Crossref API
    response = requests.get(f"https://api.crossref.org/works/{doi}")
    if response.status_code == 404:
        print(f"[red]DOI not found: {doi}")
        return False
    data = response.json()
    pub = data["message"]

    # Clean journal name and publication year
    if len(pub.get("container-title", "")):
        journal = pub["container-title"][0]
    else:
        journal = pub["institution"][0]["name"]
    pub_year = pub["published"]["date-parts"][0][0]

    # Build a slug from the first author surname and the year
    try:
        slug = "{}-{}".format(pub["author"][0]["family"], journal)
    except KeyError:
        slug = "{}-{}".format(journal, pub_year)
    slug = slug.lower().replace(" ", "-").replace("--", "-").replace(",", "")

    # Check if we already have are markdown file for this DOI
    def check_pubs_directory(directory, doi):
        for filepath in directory.iterdir():
            if filepath.is_file() and filepath.suffix == ".md":
                with filepath.open() as f:
                    lines = f.readlines()
                    yaml_lines = []
                    for line in lines:
                        if len(yaml_lines) and line.strip() == "---":
                            break
                        yaml_lines.append(line)
                    yaml_data = yaml.safe_load("\n".join(yaml_lines))
                    if yaml_data and yaml_data.get("doi", "") == doi:
                        return filepath
            elif filepath.is_dir():
                md_path = check_pubs_directory(filepath, doi)
                if md_path is not None:
                    return md_path

    root_directory = Path("src/content/publications/")
    md_path = check_pubs_directory(root_directory, doi)
    md_exists = True
    if md_path is None:
        md_exists = False
        md_path = root_directory / str(pub_year) / f"{unidecode(slug)}.md"
    else:
        print(f"Found DOI '{doi}': [yellow]{md_path}")

    return (pub, slug, journal, md_path, md_exists)


def create_markdown(md_path: Path, doi: str, slug: str, journal: str, pub: dict):
    frontmatter = {
        "doi": doi,
        "title": pub["title"][0],
        "journal": journal,
    }
    try:
        pubDate = "pubDate: {}-{:02}-{:02}".format(*pub["published"]["date-parts"][0])
    except IndexError:
        pubDate = "pubDate: {}-{:02}-01".format(*pub["published"]["date-parts"][0])

    # Create the publication markdown file
    print(f"[magenta]Creating [green]'{doi}': [yellow]{md_path}")
    md_path.parent.mkdir(parents=True, exist_ok=True)
    with md_path.open("w") as f:
        f.write("---\n")
        f.write(yaml.dump(frontmatter, sort_keys=False, width=180))
        f.write(f"{pubDate}\n")  # No quote marks
        f.write("---\n\n")
        abstract_replace = {
            "<jats:title>": "## ",
            "</jats:title>": "\n",
            "<jats:sec>": "\n",
            "</jats:sec>": "\n",
            "<jats:p>": "\n",
            "</jats:p>": "\n\n",
            "<jats:italic>": "_",
            "</jats:italic>": "_",
            "<jats:bold>": "**",
            "</jats:bold>": "**",
        }
        if "abstract" in pub:
            abstract = pub["abstract"]
            for k, v in abstract_replace.items():
                abstract = abstract.replace(k, v)
            abstract = "\n".join([line.strip() for line in abstract.splitlines()])
            abstract = re.sub(r"\n\n+", r"\n\n", abstract)
            f.write(abstract + "\n")


if __name__ == "__main__":
    typer.run(main)
