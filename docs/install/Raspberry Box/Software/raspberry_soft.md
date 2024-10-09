---
sidebar_position: 1
slug: raspberry_OS
title: Install Raspberry OS
description: Construct your own cash and cashless register box. 
keywords: [ cashless, billetterie, ticketing ]
wiktags: [ cashless, billetterie, ticketing ]
authors: jonas, mike
---

 


# install Raspberry PiOS on Raspberry :
Prerequisite: 
- If you don't have an ssh key on your computer, create one: open a command prompt and type : 
``` ssh-keygen ```
- Download raspberry imager : https://www.raspberrypi.com/software/
- Make sure you can connect a micro SD card to your computer .  
> Note : At this time, LaBoutik, only works with PI 3B/B+ and Pi4 .  
> PiZero doesn't work and Pi5 has not been tested .

##  Install Raspberry Pi OS (Legacy,32-bit) Lite : 
Before doing so, I advise you to place the Pi on the simply support that has been 3D printed previously, to avoid contact with the table and any screws or other objects that might be on it.
> Note : place the power connector on the narrowest corner.  
![Coner_support_pi.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2FConer_support_pi.png)  

Open raspberry imager and chose model "Raspberry Pi 3" :   
![soft_1.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_1.png)  
![soft_2.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_2.png)  
Choose Raspberry Pi OS(Other) :  
![soft_3.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_3.png)  
And choose Raspberry Pi OS (Legacy,32-bit) Lite :  
![soft_4.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_4.png)  
Then choose your SD card inserted in your computer :  
![soft_5.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_5.png)  
Click Next , and the following screen appears:  
![soft_6.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_6.png)  
Click on “MODIFIER LES REGLAGES”.

In the “GENERAL” tab:

Enter :

- The host name (of your choice but not already present on your LAN)

- > WARNING The user name MUST BE “sysop” and nothing else

- The password of your choice

- Your wifi settings

- Your local settings .  
![soft_7.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_7.png)  

  

In the “SERVICES” tab:

Click on “Authentification via clef publique”
and paste your public key (not your private key!!) which is usually found in :

/Users/YourNameUser/.ssh/id_rsa.pub  
![soft_8.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_8.png)  
Click on “Save”.

The message reappears:  
![soft_9.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_9.png)  
Click on “OUI”  
![soft_10.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_10.png)  
Click on “OUI”  
Please allow 10 to 20 minutes for your SD card to be created,  
depending on your bit rate and whether the image has already been downloaded to your PC.
![soft_11.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_11.png)  
Once finished, click on “CONTINUER”.  
![soft_12.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_12.png)  
- Remove your SD card and insert it into the Pi (the Pi must not be powered, of course :) )

- Now power your Pi , wait , the green LED is blinking , it will start , then reboot .

- Go to your BOX, in the amin interface to look for its IP address .  
As long as you are in the admin interface of your Box, you can assign it a fixed IP, this is done in DHCP by fixing the IP address to the MAC address of your Pi.  
This way it will always keep the same IP address.(No screenshots here, as this depends on your router).

- On your PC, open a terminal , and type:
```ssh sysop@IPofYourPi```
the message appear : 
![soft_13.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fpi_diy%2Fsoft_13.png)  

type : "yes" .

You are now connected to your Pi :)  






