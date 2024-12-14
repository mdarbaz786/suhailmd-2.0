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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/plvhb2.jpeg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 💗≛⃝𝐀𝐫𝐛𝐚𝐳-𝐤𝐡𝐚𝐧≛⃝🌸🌚" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,918879696134";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_55_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM1LFxuICAgICAgICA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGbmcrZWwvSkhvcGJVYndnSW1NWDFyNktickZmTFNhSERxWkdMY2NsV09JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiT2pZWmtOcFFSLWxhei1lYmZmMXd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5ZTk3ODhjLWZmNTktNGNlMS04ZTZiLTQ3OTRiZjYxYzJiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxMDMsXG4gICAgICAyMjksXG4gICAgICAxNjYsXG4gICAgICAyMTMsXG4gICAgICAxNDEsXG4gICAgICAxNjUsXG4gICAgICAyNDYsXG4gICAgICAzNSxcbiAgICAgIDEzLFxuICAgICAgMjU1LFxuICAgICAgMjI4LFxuICAgICAgOCxcbiAgICAgIDE3OSxcbiAgICAgIDE2MCxcbiAgICAgIDgsXG4gICAgICA0MSxcbiAgICAgIDc5LFxuICAgICAgMTM1LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjA3LFxuICAgICAgMTE1LFxuICAgICAgOTcsXG4gICAgICAxNjAsXG4gICAgICAxNTAsXG4gICAgICAxMDIsXG4gICAgICA1OCxcbiAgICAgIDE1NixcbiAgICAgIDY4LFxuICAgICAgMjIxLFxuICAgICAgMTQ0LFxuICAgICAgMjEsXG4gICAgICA2MCxcbiAgICAgIDE5OSxcbiAgICAgIDgzLFxuICAgICAgMjI0LFxuICAgICAgMTUxLFxuICAgICAgNzAsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVRMUlY1QlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODg3OTY5NjEzNDo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAolxcblxcblxcbuKAolxcblxcblxcbuKAolxcblxcblxcbuKAolxcblxcblxcbuKAolxcblxcblxcbuKAolxcblxcblxcblxcbuKAolxcblxcblxcblxcbuKAolxcblxcblxcblxcbuKAolxcblxcblxcblxcbuKAolxcblxcblxcblxcbuKAolxcblxcblxcblxcbuKAolxcblxcblxcblxcbiAgIPCdkbXwnZGw8J2RufCdkbTwnZGo8J2Rs/Cdkagg8J2RsvCdkbzwnZG08J2RqPCdkbnwnZGwLi4uXCIsXG4gICAgXCJsaWRcIjogXCIxNTI0OTc1NDUwNDQxMTk6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGVmMEtRQkVQK005N29HR0JNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsNE90Z3N0Vjg1NUh3djNscEQyNThJZXU5dkEwTEJQSmY4cW83SXBCMEFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9iUFFSaG9rMHlFcjEvbks3dFM0OFBBN1VqRWJuT3BtVm9qcTdlNmpWWERwbFBLeXNoZW43djRleEFYSVJLTCtRa2VscENqa1dGRkwzbitoUkJGckJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkx5YjY0TUFDMVhld253TVVKR0JzOXZabUdkSzJrMERRMXNZTGNiRk5TYVloSmRvZjZMeGt0RGVoRThjZWd4K2wrc2lKc2duYm5hRWZtYXkyMGpEMUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODg3OTY5NjEzNDo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDE5ODkxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt3R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3dHLmpzb24iOiAie1wia2V5RGF0YVwiOlwib1dUVHBHQ2JROEcyNXhBemJqU0sra0tGM09CcStpMS93eXhKRkdYcGNSbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDUyNDc3MzQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 > © *ᴘᴏᴡᴇʀᴇᴅ ʙʏ💗≛⃝𝐀𝐫𝐛𝐚𝐳-𝐤𝐡𝐚𝐧≛⃝🌸🌚* 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Arbaz-XMD",
  ownername:process.env.OWNER_NAME|| "Arbaz-khan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
