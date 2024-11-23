const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© POWER BY ᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew" 


global.devs = "94763412103" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94763412103";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94763412103";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_50_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZjR1ZGZUa2V6VklwUzhRN0I2VW1JWWpSWitFb2ZOcUozQjQrZEJzVS9wND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXZBMVRYbnNRS2lmZHQ2N21ldzNRZ1wiLFxuICBcInBob25lSWRcIjogXCJlNDQ3NWMyYy1hYTBiLTQ3ZjYtODQ1ZS00MDkyNTVjZjc1Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAyNTAsXG4gICAgICAyNDQsXG4gICAgICAyMDQsXG4gICAgICAyNDcsXG4gICAgICAxMDgsXG4gICAgICA1LFxuICAgICAgMTE4LFxuICAgICAgOTAsXG4gICAgICA5LFxuICAgICAgNTgsXG4gICAgICA3MCxcbiAgICAgIDYzLFxuICAgICAgMSxcbiAgICAgIDU5LFxuICAgICAgMjMwLFxuICAgICAgMjIwLFxuICAgICAgMjQwLFxuICAgICAgMjEwLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDE2OSxcbiAgICAgIDE2MSxcbiAgICAgIDExNyxcbiAgICAgIDk0LFxuICAgICAgMjEyLFxuICAgICAgNzMsXG4gICAgICAyMzUsXG4gICAgICAyMDgsXG4gICAgICAxNDAsXG4gICAgICAyNyxcbiAgICAgIDkxLFxuICAgICAgMyxcbiAgICAgIDksXG4gICAgICAyMTIsXG4gICAgICAxNDIsXG4gICAgICAzLFxuICAgICAgMTczLFxuICAgICAgMjMzLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRCVzJGTFRKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzUwNDE5MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwMjYyMDc3NjUzMjM1OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043d3FkMEhFS3Z6aDdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSE9tZFA3M25jOStqQVplVFdQR3VGOEVNMURjZ0Nxd3Q5YlNWS29aYmFWbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKcG5jUC9Eay8renVuQzZKeW9Vdk5YaGZ0THpWVitHMzMxOVQwOE5Ic1F2M2IrUEJkWTREVVUrSnZSRCs0bUtaQVRkRW83V1h3a2RUVHpNem5nNWFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOZzJ1T3NjWmFFOGhSdWdBWW9OQzJPcWhqeVpmNFdwbFd3SDFWWkdsZWVOUlA5UEZ2dWhNK2NKa09NN0lZK3plNlcvU1hCdHZxWUx1OStSTE1pZXdoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMzUwNDE5MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzNzcwMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJUzdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlTNy5qc29uIjogIntcImtleURhdGFcIjpcImNFemxWK0J1NEJ3eXVPR01kNzZMeGxwSm8yYU9TTk45ems5WkRXMExKdDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3NDc2OTUwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjM3Njk5MDEyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "POWER BY ᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew",
  packname: process.env.PACK_NAME || "᳆⃞🇱🇰⃟ ʀͥᴇᷧᴀͫʟᴷⁱⁿᴳ᭄Randew",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Randew-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
