#!/usr/bin/env python

from rich import print
from glob import glob
import os
import questionary
import shutil
import yaml
import re


def copy_local_file(src, dest_dir):
    """
    Given a file path for a talk asset, prompt for a new filename
    and copy to the talk assets directory.
    """
    src = src.strip()
    while not os.path.isfile(src):
        print("[red]File not found. Please try again. Leave empty to skip question.")
        src = questionary.text("Filename:", src).unsafe_ask().strip()
        if src == "":
            return False

    dest_dir = dest_dir.strip()
    dest_filename = questionary.text(
        "Destination filename:", os.path.basename(src)
    ).unsafe_ask()
    dest_path = os.path.join(dest_dir, dest_filename)
    shutil.copy(src, dest_path)
    dest_path = re.sub("^public", "", dest_path)
    return dest_path


# Questionary prompt for base directory of talks
base_dir = "/Users/ewels/Library/CloudStorage/Dropbox/Phil/Work/Presentations"
if not questionary.confirm(f"Use default base directory? ({base_dir})").unsafe_ask():
    base_dir = os.path.expanduser(
        questionary.path("Base directory for talks:").unsafe_ask().strip()
    )

# Loop through each directory (year) in base directory
for year in sorted(os.listdir(base_dir), reverse=True):
    # Ignore if directory name is not in format YYYY
    if not year.isdigit():
        continue

    # Confirm with questionary if we want to process this directory
    if not questionary.confirm(f"Process year folder {year}?").unsafe_ask():
        continue

    # Loop through each directory (talk) in year directory
    for talk in sorted(os.listdir(os.path.join(base_dir, year)), reverse=True):
        # Parse date and talk name from directory name
        # Format: YYYY-MM-DD - Talk Name
        talk_date = talk[:10]
        raw_name = talk[11:].strip().strip("-").strip()

        # Check if talk_date is in format YYYY-MM-DD
        if not re.match(r"\d{4}-\d{2}-\d{2}", talk_date):
            continue

        # Check if we have a date directory already
        date_directory = os.path.join(
            "src", "content", "talks", talk_date.replace("-", "/")
        )
        if os.path.exists(date_directory):
            continue
            # NOTE: Add config to choose whether to confirm or not
            # Confirm with questionary if we want to process this directory
            md_files = "\n - ".join(glob(os.path.join(date_directory, "*.md")))
            print(f"[white bold]Directory '{date_directory}' already exists:")
            print(f"[cyan] - {md_files}")
            if not questionary.confirm("Continue?").unsafe_ask():
                continue

        # Confirm with questionary if we want to process this directory
        if not questionary.confirm(f"Process talk folder {talk}?").unsafe_ask():
            continue

        title = questionary.text("Title:", raw_name).unsafe_ask().strip()

        name = (
            questionary.text(
                "Name (for file paths):",
                title.replace(" ", "_").replace(":", "").lower(),
            )
            .unsafe_ask()
            .strip()
        )

        # Prepare filename for assets and markdown
        talk_assets_dir = os.path.join(
            "public",
            "talks",
            talk_date.replace("-", "/"),
            name.replace(" ", "_").replace(":", "").lower(),
        )
        talk_md = os.path.join(
            "src",
            "content",
            "talks",
            talk_date.replace("-", "/"),
            name.replace(" ", "_").replace(":", "").lower() + ".md",
        )

        # Check if either talk_assets_dir or talk_md already exist
        if os.path.exists(talk_assets_dir) or os.path.exists(talk_md):
            # Overwrite if wanted
            print("[red]Warning: files / folders for talk already exist!")
            if os.path.exists(talk_assets_dir):
                print(f"[red] - {talk_assets_dir}")
            if os.path.exists(talk_md):
                print(f"[red] - {talk_md}")
            if questionary.confirm("Overwrite?").unsafe_ask():
                shutil.rmtree(talk_assets_dir, ignore_errors=True)
                shutil.rmtree(talk_md, ignore_errors=True)
                print("[orange]Files deleted. Continuing.")
            else:
                # Ok, skip this talk
                print("[orange]Talk already exists, skipping: " + name)
                continue

        # Glob any PDFs in talk directory
        all_pdfs = glob(os.path.join(base_dir, year, talk, "*.pdf"))

        # Use questionary multiple select to choose PDFs
        if len(all_pdfs):
            pdfs = questionary.checkbox(
                "Choose PDFs: (use space to select, enter to submit)",
                choices=all_pdfs,
            ).unsafe_ask()
        else:
            pdfs = []

        copied_pdfs = []
        if len(pdfs):
            # Create directory for talk assets in public/talks/YYYY/MM/DD/name
            os.makedirs(talk_assets_dir, exist_ok=True)
            # Copy PDFs to talk directory, replacing spaces with underscores, use shutil
            for pdf in pdfs:
                new_pdf_path = os.path.join(
                    talk_assets_dir, os.path.basename(pdf).replace(" ", "_")
                )
                shutil.copy(pdf, new_pdf_path)
                copied_pdfs.append(new_pdf_path)

        # Create markdown file for talk in src/content/talks/YYYY/MM/DD/{name}.md
        frontmatter = {}
        frontmatter["title"] = title
        frontmatter["description"] = (
            questionary.text("Description:").unsafe_ask().strip()
        )
        frontmatter["online"] = questionary.confirm("Online?").unsafe_ask()
        if not frontmatter["online"]:
            frontmatter["location"] = questionary.text("Location:").unsafe_ask().strip()
            frontmatter["countryFlag"] = (
                questionary.text("Country flag 2-letter code:")
                .unsafe_ask()
                .lower()
                .strip()
            )
        frontmatter["type"] = questionary.select(
            "Type:",
            choices=[
                "Talk",
                "Webinar",
                "Bytesize",
                "Invited speaker",
                "Conference talk",
                "Workshop",
            ],
        ).unsafe_ask()
        if questionary.confirm("Keynote speaker?").unsafe_ask():
            frontmatter["keynote"] = True

        if frontmatter["type"] == "Bytesize":
            frontmatter["logoImage"] = "/images/projects/nf-core-logo-square.svg"
            frontmatter["logoImageDark"] = (
                "/images/projects/nf-core-logo-square-dark.svg"
            )
        else:
            if logoImage := questionary.path("Logo image:").unsafe_ask().strip():
                # Copy to assets folder if needed
                if not logoImage.startswith(talk_assets_dir):
                    # Create directory for talk assets in public/talks/YYYY/MM/DD/name
                    os.makedirs(talk_assets_dir, exist_ok=True)
                    logoImage = copy_local_file(logoImage, talk_assets_dir)
                if logoImage:
                    frontmatter["logoImage"] = logoImage

            if (
                logoImageDark := questionary.path("Logo image dark:")
                .unsafe_ask()
                .strip()
            ):
                # Copy to assets folder if needed
                if not logoImageDark.startswith(talk_assets_dir):
                    # Create directory for talk assets in public/talks/YYYY/MM/DD/name
                    os.makedirs(talk_assets_dir, exist_ok=True)
                    logoImageDark = copy_local_file(logoImageDark, talk_assets_dir)
                if logoImageDark:
                    frontmatter["logoImageDark"] = logoImageDark

        frontmatter["eventURLs"] = []
        event_url_idx = 1
        while (
            url := questionary.text(f"Event URL ({event_url_idx}):")
            .unsafe_ask()
            .strip()
        ):
            frontmatter["eventURLs"].append(url)
            event_url_idx += 1
        frontmatter["pdfURLs"] = [re.sub("^public", "", pdf) for pdf in copied_pdfs]
        frontmatter["youtubeIDs"] = []
        youtube_idx = 1
        while (
            url := questionary.text(
                f"YouTube URL ID ({youtube_idx}):",
                validate=lambda text: True
                if (len(text) == 0 or len(text) == 11)
                else "Please enter a 11 character YouTube ID",
            )
            .unsafe_ask()
            .strip()
        ):
            frontmatter["youtubeIDs"].append(url)
            youtube_idx += 1
        frontmatter["date"] = talk_date

        if len(frontmatter["eventURLs"]) == 0:
            frontmatter.pop("eventURLs")
        if len(frontmatter["youtubeIDs"]) == 0:
            frontmatter.pop("youtubeIDs")

        page_text = questionary.text("Page text:", multiline=True).unsafe_ask().strip()

        # Write frontmatter to markdown file
        frontmatter_string = "---\n" + yaml.dump(frontmatter, sort_keys=False) + "---\n"
        # Use regex to remove quotes around date string
        frontmatter_string = re.sub(r"date: '(.*)'", r"date: \1", frontmatter_string)
        os.makedirs(os.path.dirname(talk_md), exist_ok=True)
        with open(talk_md, "w") as f:
            f.write(frontmatter_string)
            f.write("\n" + page_text)

        print(f"[magenta bold]Talk created: [orange bold]{talk_md}\n\n\n")

        # Ask if we want to exit the script
        if not questionary.confirm("Continue to next talk?").unsafe_ask():
            exit()
