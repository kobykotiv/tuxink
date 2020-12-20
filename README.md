# Tuxink

<!-- <img class="logo" src="img/logo.svg" style="height: 1.75in;"/> -->

![the tuxink logo](img/logo.svg | height=100)
<p style="font-size: x-large;"> - = | &#128190;&#32;&#128214;&#32;&#128218;&#32;&#128212;&#32;&#128246; | = - </p>

## What is this project?

This is an open hardware eink device with general purpose usage in mind. Tuxink utilizes a battery-operated raspberry pi zero w and an e-paper display. I was inspired by [this hacked together solution](https://archive.org/details/n-o-d-e_archive/node/Projects/doomsday_archive.mkv) by [N.O.D.E.!](https://n-o-d-e.net)

## Ideal Final Project

<!-- <center>  </center> -->

- ePaper or eInk Display.
- Powered with a LiPo battery and trickle-charged by a solar charger.
- Weigh 500 grams or less.
- All the parts are off-the-shelf components.
- Soldering is optional.
- Use pushbuttons for navigation.
- Use a CLI OS for most compatibility.

<!-- <div>
  <img class="mockup" src="img/mockup.svg"/>
  <style>
.mockup{
  /* background-color:transp; */
  /* color: green; */
  /* fill: green; */
  width: 3in;
}
</style>
  </div> -->

![tuxink book mockup](img/mockup.svg | height=100)

## Minimum Hardware Requirements

- Raspberry Pi (Any model) (0WH, 3A+)
- Waveshare 7.5" ePaper Display (or equivilant)
- 16 GB (or larger) MicroSD card
- Keyboard (HID)

## Software Needed

- Python 3.X
- Web Browser
- Node.js
<!-- - Flat File CMS -->

## Roadmap / To do

0. Design nodejs server
1. Bridge nodejs to bash
2. Make WebApp with containerization user interface in mind
3. Push changes onto display
4. Implement `cool features`

## Tasks

<details>
  <summary>WebApp / EPD Display</summary>

- Nodejs server-side application
- Select commands are executed server-side with bash
- Get input with tactile push buttons
- Push rendered changes to the ePaper Display
- Increase refresh rate of epd

</details>

### Cool Features & Small scripts to implement

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
