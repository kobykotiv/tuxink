---
layout: page
title: About
permalink: /about/
---

## What is this project?

This is an open hardware eink device with general purpose usage in mind. Tuxink utilizes a battery-operated raspberry pi zero w and an e-paper display. I was inspired by [this hacked together solution](https://archive.org/details/n-o-d-e_archive/node/Projects/doomsday_archive.mkv) by [N.O.D.E.!](https://n-o-d-e.net)

## Ideal Final Project

- ePaper or eInk Display.
- Powered with a LiPo battery and trickle-charged by a solar charger.
- Weigh 500 grams or less.
- All the parts are off-the-shelf components.
- Soldering is optional.
- Use pushbuttons for navigation.
- Use a CLI OS for most compatibility.

## Minimum Hardware Requirements

- Raspberry Pi (Any model) (0WH, 3A+)
- Waveshare 7.5" ePaper Display (or equivalent)
- 16 GB (or larger) MicroSD card
- Keyboard (HID)

## Software Needed

- Python 3.X
- Web Browser
- Node.js

<!-- - Flat File CMS - -->

<!-- ## Roadmap / To do

1. Design nodejs server
2. Bridge nodejs to bash
3. Make WebApp with containerization user interface in mind
4. Push changes onto display
5. Implement `cool features` -->

## Tasks

- Nodejs server-side application
- Select commands are executed server-side with bash
- Get input with tactile push buttons
- Push rendered changes to the ePaper Display
- Increase refresh rate of epd

### Features to implement

- Audio playback - Audiobooks, music, etc
- Newsfeeds - RSS or news websites rendered in a ['reader' view](https://lmgtfy.app/?q=what+is+reader+mode&iie=1)
- [youtube-dl](https://youtube-dl.org/) - to treat video as audio podcasts
- [ffmpeg](https://ffmpeg.org/) - to convert or compress video / audio files to a smaller size
- [calibre-web](https://github.com/janeczku/calibre-web)
- android-style [quick settings](https://lmgtfy.app/?q=android+quick+settings&t=i&iie=1)
- [web SSH](https://en.wikipedia.org/wiki/Web-based_SSH)
- [OpenSSL Self-signed certificate](https://www.openssl.org/)
- some kind of mobile WiFi hotspot with DNS redicrect
  - network bridging is optional
  - [qr code](https://en.wikipedia.org/wiki/QR_code) generator
  - dynamic sharing of files via DNS redirect directly to file
