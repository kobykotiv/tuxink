# Inspired by the Open Book Project

# Tuxink: The Free (as in freedom) eBook Reader

<i> *The Open Source eReader*</i>

## Goals for the project

- Make the 'final product' as a kit cost under $149 USD
  
- Utilize a large, easy-to-see ePaper Display.

- Design the kit to be assembled without soldering or 3D Printing.
  
- Battery should last more than 60 days @ 30 minutes worth of reading / day.
  
# Ideal Final Product

1. A completely DIY eBook reader made of off the shelf components.

2. Physically weigh no more than similarry sized hard-back book or large tablet. (About 500 grams)

3. Encase this kit inside a book!

4. Use the ePaper display for as much as possible to avoid reinventing the wheel.

## Quick List of Hardware Needed

- ePaper Display and its HAT & PCB in various sizes. Either by WAVESHARE or GOODISPLAY
  
  - 6"
    
  - 7.5"
  
- Raspberry Pi Zero W or equivalent!
  
- Multiple Large Storage Options
  
  - Minimum 16 GB micro SD card. Used as the boot disk for the OS. This should be plenty of space to start with. You can add more space if you feel like it.
    
  - 2 or more expandable micro SD or full-size SD card slots.
  
  - USB? Maybe a USB Hub for the inside and outside of the book? (Not required, but it's cool to have.)
  
- A way to charge this thing
  
  - Utilize a solar charger's circuit to "trickle charge" the secondary battery one that should be over 5000 mAh LiPo or LiIon. (Not required, but allows you to be totally off the grid.)
    
  - Utilize a standard LiPo or LiIon battery as the primary battery with 750 - 1500 mAh.
    
  - Charging the secondary battery via a micro USB or USB - C. @ 0.5 to 2.1 Amps
    
  - Use USB micro USB or Type - C @ 0.5 to 2.1 Amps --> secondary battery
    
  - Second battery can then charge the primary battery
    
  - Primary battery powers the Raspberry Pi Zero W
    
- Data Transfer
  
  - Use USB to transfer data between this device and a host computer by mounting the 'media' partition of partition 1 on disk 0 and all external disks.
  
  - Use FTP to transfer files over the wLAN or local network.

- Peripherals and Module ideas
  
  - 3.5 mm Aux jack(s) and sound chip
    
  - Internal stereo speakers
    
  - Absurdly high range WiFi

## How do we Acquire Information?

- Local Files
  
  - Utilize Calibre (or similar) to manage ebooks
    
  - Internal SD card (dedicated media partition)
    
  - External SD card(s)
    
  - Internal/External USB drives
    
- Nearby peer to peer communication
  
  - Bluetooth file exchange between any two computers or this class of device.
    
  - Run simple web server, using Raspberry Pi Zero W's Wifi as a 'mobile hotspot', when other devices are connected, redirects them to a web interface where clients can upload and download files. (kinda like PirateBox or LibraryBox)
    
- Online Resources
  
  - Use Bluetooth or WiFi networking when needed for...
    
    - HTTP(S) requests
      
    - (S)FTP requests
    
  - Wikipedia and similar sites
    
  - Github / Gitlab repositories
    
  - Project Gutenberg
    
  - Archive.org
    
  - Oxford English Dictionary

## Media Classes to Support

- Text Files - Books
  
  - txt
    
  - rtf
    
  - epub
    
  - pdf
    
  - md
    
  - mobi
    
  - lit
    
  - azw
    
- Audio - Music / Podcasts / Audiobooks
  
  - ogg
    
  - wav
    
  - mp3
    
  - aac
    
  - m4a
    
- Images
  
  - jpeg
    
  - jpg
    
  - jpeg2000
    
- Web
  
  - html5
    
  - css3
    
  - js
    
- Comic Books / Graphic Novels
  
  - pdf
    
  - mobi
    
  - azw3
    
  - cbz
    

## Cool Scripts to Implement as Applets

- youtube-dl(g)
  
  - Grabs youtube "videos" to extract audio, either temporarily or on a schedule
    
  - Keeps thumbnail & description
    
- RSS feed for News and Podcasts
  
  - Grabs latest complete news articles from your sourcelist and downloads articles as epub
    
  - Grabs podcast episodes from your sourcelist and downloads episodes as ogg (compressed further if needed)
    
- Complete news sources e.g. NYT
  
  - Grabs latest issue(s) completely and downloads them as epub or md
  
- Search for Things
  
  - Existing books/files
    
  - Internet (duckduckgo / google)
    
  - Repositories
    
  - Packages
    
  - Eventually make an ePaper-friendly browser or extention

## How do I save battery? (theoretical solutions)

1. Keep the Raspberry Pi Zero W powered on while idle while there is an ongoing process or is charging
  
2. 'Wake up' the Raspberry Pi Zero W to respond to user input, e.g. turning pages, pressing buttons
  
3. Underclock the CPU between 600 to 900mHz
  
4. Use a Fastboot method
  
5. Recompile the kernel and OS with only necessary components, optimizing for tiny file sizes.

## Ideal Development Environment

Raspberry OS Lite or Buster. CLI PREFERED

Make sure to enable SSH and SPI by using raspbi-config

# Expand this project with Applets! (Coming Soon)

- This feature is coming soon!
