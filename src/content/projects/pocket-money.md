---
title: Pocket Money
description: A family pocket money tracking app to help manage children's allowances and savings.
projectURL: https://ewels.github.io/pocket-money/
github: ewels/pocket-money
heroImage: /images/projects/pocket-money_featured.png
iconImage: /images/projects/pocket-money_favicon.png
logoImage: /images/projects/pocket-money_icon.svg
personal: true
order: 30
---

[**Pocket Money**](https://ewels.github.io/pocket-money/) is a family pocket money tracking app that I built to help manage my daughter's allowance and savings.

We were looking for an app to track pocket money and they were all either poorly made, filled with ads, tied to specific banks, required the child to have their own phone, or expensive to buy / subscribe to. I figured that I could make something better myself, so I did!

The entire app was vibe-coded with Claude Code - I didn't write a single line of code myself. Starting one evening after my wife went to bed, I had a working app within a couple of hours. A few tweaks over the following day and I'm pretty happy with the result. I even got Claude to generate a full docs website and capture screenshots for the project using Playwright.

![Child Profile Screenshot](/images/projects/pocket-money_featured.png)

## Features

- **Family System** - Invite family members (grandparents, partners) to share access to children's accounts
- **Multi-Child Support** - Track pocket money for multiple children
- **Saving Targets** - Visual progress tracking toward savings goals, with projected completion dates
- **Recurring Payments** - Automatic allowance deposits on any schedule (daily, weekly, monthly)
- **Transaction History** - Full audit trail showing who made each deposit or withdrawal
- **Balance History** - Interactive charts showing financial trends over time
- **PIN Protection** - Optional security for shared devices
- **Multi-Currency** - Support for 12 different currencies
- **Mobile-Friendly** - Progressive Web App that can be installed on phone home screens

## Tech Stack

Built with modern web technologies:

- **Framework**: SvelteKit 5 with runes
- **Database**: Cloudflare D1 (SQLite)
- **Hosting**: Cloudflare Pages
- **Styling**: Tailwind CSS 4
- **Charts**: Chart.js

The app is designed to run entirely within Cloudflare's free tier, making it perfect for family use without any ongoing costs.

Check out the [documentation](https://ewels.github.io/pocket-money/) and source code on [GitHub](https://github.com/ewels/pocket-money).
