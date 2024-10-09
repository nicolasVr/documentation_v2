---
sidebar_position: 2
slug: laboutik
title: Install LaBoutik
description: Construct your own cash and cashless register box. 
keywords: [ cashless, billetterie, ticketing ]
wiktags: [ cashless, billetterie, ticketing ]
authors: jonas, mike
---
## Download and launch the script to install: "LaBoutik" :  
Connect to your Pi via ssh : 
```
updates the package list
sudo apt-get update  

#install git on your Pi
sudo apt-get install git -y  

#git clone this repro
git clone https://github.com/TiBillet/client-raspberry-cashless-LaBoutik  

#go to the repositorie
cd client-raspberry-cashless-LaBoutik  

#permit exec
sudo chmod +x LaBoutik.sh
```
run the script  
```
sudo ./LaBoutik.sh 
```  
And take a coffe :) around 20 minutes .
> Note: Run the script, without parameters, is for an installation hosted by Tibillet with the default settings.
> If you have hosted your own server, read more below  
## if you use your own server :
Run the script like this

sudo ./LaBoutik.sh nfc_type :: server_pin_code :: nfc_server_port :: nfc_server_address :: nfc_server_version :: front_type :: rotate

with :  
nfc_type : gpio or usb

server_pin_code : Your pin code server address

nfc_server_port: by default :3000

nfc_server_address: by default :localhost

nfc_server_version: by default(to day) :2.24.04.11.15.58

front_type:for raspberry : FPI for laptop: FPO

rotate: 0 -> Normal , 1 -> 90°, 2 -> 180°, 3 -> 270°

## Troubleshooting :
#### After "sudo apt-get install git -y" I have return "E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?"
Make sudo apt-get update and try again


