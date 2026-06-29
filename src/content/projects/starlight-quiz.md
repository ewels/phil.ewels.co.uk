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

[**starlight-quiz**](https://ewels.github.io/starlight-quiz/) is a plugin for [Astro Starlight](https://starlight.astro.build/) that lets you build interactive quizzes directly inside your markdown documentation.
It's perfect for educational content, tutorials, and any documentation that benefits from a bit of reader engagement.

It's a port of my earlier [mkdocs-quiz](/projects/mkdocs-quiz) plugin to the Astro and Starlight ecosystem.
Quizzes are written with the same familiar GitHub-flavoured markdown task-list syntax — mark the correct answers with `- [x]` and the incorrect ones with `- [ ]` — so there's no new syntax to learn and no configuration required.

```text
<quiz>
What's the best documentation framework?
- [x] Starlight
- [ ] Jekyll
- [ ] Sphinx
</quiz>
```

Key features include:

- **Simple markdown syntax** using GitHub-flavoured task lists — no custom syntax
- **Multiple quiz types**: single choice (radio), multiple choice (checkboxes), and fill-in-the-blank
- **Instant feedback** with visual indicators for correct and incorrect answers
- **Progress tracking** with score indicators and a results panel, complete with confetti
- **Results saved** to the browser's local storage so they survive page reloads
- **Internationalisation** with English, French, German, and Spanish out of the box
- **Accessible** with ARIA labels and full keyboard navigation
- **LMS export** in QTI 1.2 / 2.1 format, compatible with Canvas, Moodle, and Blackboard
- **CLI quiz runner** for taking quizzes in the terminal, from local files or deployed sites

It works as a zero-config Starlight plugin, or standalone in any Astro project.

For more information, check out the [documentation](https://ewels.github.io/starlight-quiz/) and [source code on GitHub](https://github.com/ewels/starlight-quiz).
