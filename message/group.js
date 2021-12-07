module.exports = welcome = async (iky, anu) => {
const fs = require("fs-extra")
const { color, bgcolor } = require('../lib/color')
const { getBuffer } = require('../lib/myfunc')
const moment = require("moment-timezone")
const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const isWelcome = welkom.includes(anu.jid)
if (!isWelcome) return
try {
mem = anu.participants[0]
console.log(anu)
try {
ppimg = await iky.getProfilePicture(mem)
} catch (e) {
ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
pp_grup = await iky.getProfilePicture(anu.jid)
} catch (e) {
pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
 }
 if (anu.action == 'add' && !mem.includes(iky.user.jid)) {
 if (!welkom.includes(anu.jid)) return
mdata = await iky.groupMetadata(anu.jid)
num = anu.participants[0]
let v = iky.contacts[num] || { notify: num.replace(/@.+/, '') }
anu_user = v.vname || v.notify || num.split('@')[0]
teks = `*Hi @${mem.split('@')[0]}*\n*Welcome in group ${mdata.subject}*\n*Jangan Jadi Kutu Lomcat Ya~~*`
buff = await getBuffer(ppimg)
iky.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Jangan Lupa Baca Rules Group Ya🐣`, buttons: [{buttonId: `#rulesgroup`,buttonText:{displayText: 'Rules Group'},type:1},{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
}
if (anu.action == 'remove' && !mem.includes(iky.user.jid)) {
if (!welkom.includes(anu.jid)) return
mdata = await iky.groupMetadata(anu.jid)
num = anu.participants[0]
let w = iky.contacts[num] || { notify: num.replace(/@.+/, '') }
anu_user = w.vname || w.notify || num.split('@')[0]
memeg = mdata.participants.length
out = `*Selamat Tinggal* *@${num.split('@')[0]}*\n*Semoga Tenang Di Alam Sana*`
buff = await getBuffer(ppimg)
iky.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Mari Kita Doakan Bersama² Agar Jasadnya Tenang😀`, buttons: [{buttonId: `!bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
}