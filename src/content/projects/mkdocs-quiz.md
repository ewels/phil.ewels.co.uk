---
title: mkdocs-quiz
description: Create interactive quizzes directly in your MkDocs markdown documentation.
projectURL: https://ewels.github.io/mkdocs-quiz/
github: ewels/mkdocs-quiz
heroImage: /images/projects/mkdocs-quiz_hero.png
heroImageDark: /images/projects/mkdocs-quiz_hero_dark.png
iconImage: /images/projects/mkdocs-quiz_icon.svg
logoImage: /images/projects/mkdocs-quiz_logo.svg
logoImageDark: /images/projects/mkdocs-quiz_logo_dark.svg
personal: true
order: 16
---

[**mkdocs-quiz**](https://ewels.github.io/mkdocs-quiz/) is a plugin for [MkDocs](https://www.mkdocs.org/) that lets you build interactive quizzes directly inside your markdown documentation.
It's perfect for educational content, tutorials, and any documentation that benefits from a bit of user engagement.

Quizzes are written using familiar GitHub-flavoured markdown checkboxes inside a `<quiz>` block — mark the correct answers with `- [x]` and the incorrect ones with `- [ ]`.
The plugin works out the rest: questions with a single correct answer become radio buttons, and those with several become checkboxes.

```text
<quiz>
What's the best static site generator?
- [x] mkdocs
- [ ] Jekyll
- [ ] Sphinx
</quiz>
```

Key features include:

- **Simple markdown syntax** using GitHub-flavoured checkboxes
- **Multiple quiz types**: single choice (radio), multiple choice (checkboxes), and fill-in-the-blank
- **Instant feedback** with visual indicators for correct and incorrect answers
- **Progress tracking** with an automatic sidebar and a results panel, complete with confetti
- **Results saved** to the browser's local storage
- **Internationalisation** support for multi-lingual sites
- **LMS export** in QTI format, compatible with Canvas, Blackboard, and Moodle
- **CLI quiz runner** for taking quizzes in the terminal, from local files or deployed sites

The project was originally created by Sebastian Jörz, and I rewrote it to add the interactive feedback, progress tracking, QTI export, and terminal runner.

For more information, check out the [documentation](https://ewels.github.io/mkdocs-quiz/) and [source code on GitHub](https://github.com/ewels/mkdocs-quiz).
