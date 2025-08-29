---
title: "PyCon Sweden: Rich-click"
description: "Accidentally popular: Beautiful CLI interfaces with rich-click"
online: false
location: Stockholm
countryFlag: "se"
type: Conference talk
logoImage: /talks/2024/11/14/pycon_sweden_rich-click/pycon_sweden_logo.png
eventURLs:
  - https://pycon.se/
  - https://pretalx.com/pyconse-2024/talk/XP7GWN/
pdfURLs:
  - /talks/2024/11/14/pycon_sweden_rich-click/Ewels-PyCon-Sweden-2024.pdf
youtubeIDs:
  - vGSYj_5tGmY
date: 2024-11-14
---

My first time going to a PyCon event and I was lucky enough to be accepted to give a talk. It was about a hobby project of mine: rich-click.
It was great fun to write the talk as it was totally different to all of my usual topics, so I got to start with a clean slate.
I was able to make it a bit fun and nerdy, and also talk about some of my favourite topics such as open-source.

The talk seemed to go down well and the event was great fun. I hope I'll be able to go back again in future years :)

## Abstract

In the past few years, Will McGugan's [Rich](https://github.com/Textualize/rich) for formatting terminal outputs has had a meteoric rise in the Python community. As a user and fanboy of Rich, I felt that my otherwise beautiful CLI tools had drab and plain help text outputs from the [Click CLI toolkit](https://github.com/pallets/click).

With a little help from Will and others, I put together the [rich-click](https://github.com/ewels/rich-click) package that makes Click's outputs delight your eyeballs with only a simple import alias required: `import rich_click as click`.

In this talk I'll describe a little bit about how it works and what you can use it for, and how I dealt with it becoming accidentally quite popular and receiving a deluge of issues and contributions. Spoiler: the Python open-source community is amazing and Daniel Reeves ([@dwreeves](https://github.com/dwreeves)) came to my aid to co-maintain the project 🎉
