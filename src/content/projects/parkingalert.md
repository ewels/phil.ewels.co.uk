---
title: Parking Alert
description: Remember where your car is parked and get automated alerts when you need to move it.
projectURL: https://parkingalert.se
github: ewels/parkingalert.se
heroImage: /images/projects/parkingalert_hero.png
iconImage: /images/projects/parkingalert_logo.svg
noIconPadding: true
personal: true
order: 20
---

[ParkingAlert.se](https://parkingalert.se) is a website that you can save to your phone home-screen.
It uses native GPS to locate you and show available parking regions with data from [openparking.stockholm.se](https://openparking.stockholm.se).

In Stockholm, snow-plows roam the streets during the winter.
Almost all street parking comes with road signs telling you which day of the week the plow will come past.
If you don't move your car on that day, you get a hefty fine (and blocked in with a wall of snow).

Each strip of parking has a different day, so it's incredibly difficult to remember when
you need to go and move your car - especially if you don't use it all that often.

When I bought a car in Sweden I racked up a couple of tickets within a few weeks and quickly started on this project.
Once you've picked a spot in the app, you get automatic reminders the evening and morning before you need to move your car.

I used it a lot and it grew over the period of a couple of years.
It has a history page and can even show a heatmap of all of the places you've parked:

![Heatmap screenshot](/images/projects/parking_alerts_heatmap_screenshot.png)

<div style="float:right; max-width: 20em;">
    <img src="/images/projects/parkingalert_add_parking.png" alt="Add alert screenshot" style="margin-top:0;">
</div>

The use of real-time GPS positioning on maps with integrated parking data is also
super helpful for driving around when looking for good parking spots - it shows
a little virtual street sign in the corner which is really useful.

I added support for email notifications, push (via [IFTTT](https://ifttt.com/)) and an ical feed.
It got good enough that I have thought about trying to get the word out about it,
but for now I think that I'm the only user.
Sadly, since moving house I no longer need the app myself, so it has been on ice for the past few years.

The site is live for now, and free for anyone to use.
The source code is open source and on GitHub at [ewels/parkingalert.se](https://github.com/ewels/parkingalert.se)
