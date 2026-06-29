---
title: starlight-quiz
description: Create interactive quizzes directly in your Astro Starlight markdown documentation.
projectURL: https://ewels.github.io/starlight-quiz/
github: ewels/starlight-quiz
iconImage: /images/projects/starlight-quiz_icon.svg
logoImage: /images/projects/starlight-quiz_logo.svg
logoImageDark: /images/projects/starlight-quiz_logo_dark.svg
personal: true
order: 17
---

[**starlight-quiz**](https://ewels.github.io/starlight-quiz/) is a plugin for [Astro Starlight](https://starlight.astro.build/) that lets you build interactive quizzes inside your markdown documentation, handy for tutorials and educational content.

It's a port of my earlier [mkdocs-quiz](/projects/mkdocs-quiz) plugin to Astro and Starlight. Quizzes use the same GitHub-flavoured markdown task-list syntax, so there's no new syntax to learn and no configuration required. Mark the correct answers with `- [x]` and the incorrect ones with `- [ ]`.

```text
<quiz>
What's the best documentation framework?
- [x] Starlight
- [ ] Jekyll
- [ ] Sphinx
</quiz>
```

Features:

- **Simple markdown syntax** using GitHub-flavoured task lists
- **Multiple quiz types**: single choice (radio), multiple choice (checkboxes), and fill-in-the-blank
- **Instant feedback** marking correct and incorrect answers
- **Progress tracking** with score indicators and a results panel
- **Results saved** to the browser's local storage, so they survive page reloads
- **Internationalisation** with English, French, German, and Spanish
- **Accessible** with ARIA labels and full keyboard navigation
- **LMS export** in QTI 1.2 / 2.1 format for Canvas, Moodle, and Blackboard
- **CLI quiz runner** for taking quizzes in the terminal, from local files or deployed sites

It runs as a zero-config Starlight plugin, or standalone in any Astro project.

See the [documentation](https://ewels.github.io/starlight-quiz/) and [source code on GitHub](https://github.com/ewels/starlight-quiz).
