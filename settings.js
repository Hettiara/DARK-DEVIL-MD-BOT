//════════════(00)═══════════════════════════════════════//
//
//                      ➳ᴹᴿ᭄ᴰᴬᴿᴷ ᴰᴱᵛᴵᴸ❦🇱🇰
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `➳ᴹᴿ᭄ᴮᴸᴬᶜᴷ ˢᴴᴬᴿᴷ❦🇱🇰
My Creator is *SASINDU MALSHAN` //Costomize Alive Message (type your message in `` )

global.owner = ['+94770452884'] //Owner number in aive msg
global.premium = ['+94770452884'] //Owner Number info
global.ownernomer = '+94770452884' //Owner Number <<<

global.ownername = 'Sandaru hansaka❦🇱🇰' //Owner Name
global.botname = '𝙱𝙻𝙰𝙲𝙺⚓𝚂𝙷𝙰𝚁𝙺-𝙱𝙾𝚃✨' //Bot Name

global.button = '🖥️GITHUB〽️' //Costomize A Button Name In Alive Message
global.btnurl = 'https://github.com/malindunimsara' //Change Your Button's URL

global.region = 'srilanka' //Country Region

global.packname = '👹𝗗𝗘𝗩𝗜𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦࿐' //Bot Pacage Name
global.author = 'Sasindu Malshan❦🇱🇰' //Author Name
global.prefa = ['','❗','.','😂','👹','🎊'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://github.com/malindunimsara' //Github Account!
global.footer = 'ᴅᴇᴠɪʟ-ʙᴏᴛ © ᴘʀɪᴠᴇᴛ ᴇᴅɪᴛɪᴏɴ' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'Done ✅',
    admin: 'Only Admins can use it!කමක් නෑනෙ😉...',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!කමක් නෑනෙ😉...',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: 'ටිකක් ඉන්න👉👈...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
