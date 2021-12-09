module.exports = welcome = async (iky, anu) => {
const { MessageType } = require("@adiwajshing/baileys")
const fs = require("fs-extra")
const encodeUrl = require('encodeurl')
const { color, bgcolor } = require('../lib/color')
const { getBuffer } = require('../lib/myfunc')
const moment = require("moment-timezone")
const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const isWelcome = welkom.includes(anu.jid)
if (!isWelcome) return
try {
mem = anu.participants[0]
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
num = anu.participants[0]
ini_user = iky.contacts[num]
namaewa = ini_user.notify
mdata = await iky.groupMetadata(anu.jid)
try {
ppimg = await iky.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*Hi @${num.split('@')[0]}*\n*Welcome in group ${mdata.subject}*\n*Jangan Jadi Kutu Lomcat Ya~~*`
let buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeUrl(namaewa)}&descriminator=${mdata.participants.length}&memcount=${mdata.participants.length}&gcname=${encodeUrl(mdata.subject)}&pp=${ppimg}&bg=https://telegra.ph/file/ec7859cd2bc54b8d6b313.jpg`)
iky.sendMessage(mdata.id, buffer, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
} else if (anu.action == 'remove') {
num = anu.participants[0]
ini_user = iky.contacts[num]
namaewa = ini_user.notify
mdata = await iky.groupMetadata(anu.jid)
try {
ppimg = await iky.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*Sayonara Onechan* *@${num.split('@')[0]}👋*`
let buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeUrl(namaewa)}&descriminator=${mdata.participants.length}&memcount=${mdata.participants.length}&gcname=${encodeUrl(mdata.subject)}&pp=${ppimg}&bg=https://telegra.ph/file/ec7859cd2bc54b8d6b313.jpg`)
iky.sendMessage(mdata.id, buffer, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
}
} catch (e) {
}
}
