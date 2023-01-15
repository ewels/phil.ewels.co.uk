#!/usr/bin/env python

from pathlib import Path
from rich import print
import requests
import typer
import yaml


def main(doi: str):
    print(f"Adding publication: '{doi}'")

    # Fetch the DOI from the Crossref API
    response = requests.get(f"https://api.crossref.org/works/{doi}")
    if response.status_code == 404:
        print(f"DOI not found: {doi}")
        exit(1)
    data = response.json()
    pub = data["message"]

    # Parse the authors nicely
    authors_data = pub["author"]
    max_authors = 10
    if len(authors_data) > max_authors:
        authors_data = "{}...{}".format(
            authors_data[0, max_authors - 1], authors_data[-1]
        )
    authors = []
    for author in authors_data:
        if "family" in author:
            authors.append(
                "{} {}".format(
                    author["family"], author["given"][0] if "given" in author else ""
                )
            )
        else:
            authors.append(author["name"])

    # Clean journal name and publication year
    if len(pub.get("container-title", "")):
        journal = pub["container-title"][0]
    else:
        journal = pub["institution"][0]["name"]
    pub_year = pub["published"]["date-parts"][0][0]

    # Build a slug from the first author surname and the year
    slug = (
        "{}-{}".format(authors_data[0]["family"], journal)
        .lower()
        .replace(" ", "-")
        .replace("--", "-")
    )

    # Build the publication dict
    publication = {
        "doi": doi,
        "slug": slug,
        "title": pub["title"][0],
        "journal": journal,
        "pub_year": pub_year,
        "authors_short_text": ", ".join(authors),
        "pub": pub,
    }

    # Check if we don't already have this publication
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
                        print(f"Error: Publication already exists: {filepath}")
                        exit(1)
            elif filepath.is_dir():
                check_pubs_directory(filepath, doi)

    root_directory = Path("src/pages/publications/")
    check_pubs_directory(root_directory, doi)
    print("No existing publication found")

    # Create the publication directory
    publication_directory = root_directory / str(pub_year)
    publication_directory.mkdir(parents=True, exist_ok=True)

    # Create the publication markdown file
    publication_filepath = publication_directory / f"{slug}.md"
    print(f"Creating {publication_filepath}")
    with publication_filepath.open("w") as f:
        f.write("---\n")
        f.write(yaml.dump(publication, sort_keys=False))
        f.write("---\n")
        if "abstract" in pub:
            f.write(pub["abstract"] + "\n")
    print(publication)


if __name__ == "__main__":
    typer.run(main)
