module.exports = welcome = async (kxd, anu) => {const { MessageType } = require("@adiwajshing/baileys");const fs = require("fs-extra")const { color, bgcolor } = require('../lib/color')const { getBuffer } = require('../lib/myfunc')const moment = require("moment-timezone")const axios = require("axios")const Welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))const isWelcome = welkom.includes(anu.jid)const a = '```'const time_wel = moment.tz('Asia/Jakarta').format("HH:mm")				  if (!welkom.includes(anu.jid)) return				  try {				  groupMet = await iky.groupMetadata(anu.jid)				  groupMembers = groupMet.participants				  groupAdmins = getGroupAdmins(groupMembers)				  mem = anu.participants[0]			      console.log(anu)			      try {			        pp_user = await iky.getProfilePicture(mem)			      } catch (e) {			        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"			      }			      try {			        pp_grup = await iky.getProfilePicture(anu.jid)			      } catch (e) {			        pp_grup =			          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"			      }			      if (anu.action == "add" && mem.includes(iky.user.jid)) {			        iky.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")			      }                if (!isWelkom) return                if (anu.action == "add" && mem.includes(iky.user.jid)) {                iky.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")}                if (anu.action == 'add' && !mem.includes(iky.user.jid)) {                if (!isWelkom) return                mdata = await iky.groupMetadata(anu.jid)	            num = anu.participants[0]                groupName = mdata.subject                memeg = mdata.participants.length                let v = iky.contacts[num] || { notify: num.replace(/@.+/, '') }                anu_user = v.vname || v.notify || num.split('@')[0]                 teks = `Selamat Datang Kak @${mem.split('@')[0]}*\n*Welcome in group *${groupName}*\n*Semoga betah~~*`                buff = await getBuffer(pp_user)                iky.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Jangan Lupa Baca Rules Group Ya`, buttons: [{buttonId: `#rulesgroup`,buttonText:{displayText: 'Rules Group'},type:1},{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')		        }                if (anu.action == 'remove' && !mem.includes(iky.user.jid)) {                if (!isWelkom) return                                 mdata = await iky.groupMetadata(anu.jid)	            num = anu.participants[0]                let w = iky.contacts[num] || { notify: num.replace(/@.+/, '') }                anu_user = w.vname || w.notify || num.split('@')[0]                memeg = mdata.participants.length                out = `*Sepertinya beban grup berkurang satu*\n*Selamat Tinggal* *@${num.split('@')[0]}*\n*Semoga Tenang Di Alam Sana*`                buff = await getBuffer(pp_user)                iky.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Mari Kita Doakan Bersama� Agar Jasadnya Tenang`, buttons: [{buttonId: `!bay`,buttonText:{displayText: 'BYE KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')                }} catch (e) {console.log('Error : %s', color(e, 'red'))}}