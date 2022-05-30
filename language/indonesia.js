exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⌛ Mohon tunggu sebentar~`
}
exports.ok = () => {
    return `✅ Done. Ok desu~`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Di Perbaiki`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (tips) =>{
	return`📖 Tips : ${tips}
`
}
exports.list = (pushname) =>{
	return`Hai ${pushname}, Silahkan dipilih list menu dibawah ini
`
}
exports.allmenu = (prefix, time, salam, pushname, botname, quotes) => {
    return `Selamat ${salam} ${pushname}

⏰ Time Server : ${time}
📚 List Menu : ${botname}

🌱 Quotes : ${quotes}
    
❒「 *BOT INFO* 」 
⤿ ${prefix}owner
⤿ ${prefix}rules
⤿ ${prefix}script
⤿ ${prefix}ping
⤿ ${prefix}runtime
⤿ ${prefix}donate
⤿ ${prefix}sewabot
⤿ ${prefix}jam
⤿ ${prefix}jamdunia

❒「 *OWNER MENU* 」 
⤿ < / > / $ / =>
⤿ ${prefix}setmenu [query]
⤿ ${prefix}setallmenu [query]
⤿ ${prefix}setwm packname|author
⤿ ${prefix}sendsesi
⤿ ${prefix}listpc
⤿ ${prefix}listgc
⤿ ${prefix}broadcast
⤿ ${prefix}bc
⤿ ${prefix}bcgc
⤿ ${prefix}bctext
⤿ ${prefix}nsfw
⤿ ${prefix}autoreact
⤿ ${prefix}autorespond
⤿ ${prefix}antiviewonce
⤿ ${prefix}anticall
⤿ ${prefix}join
⤿ ${prefix}self
⤿ ${prefix}public
⤿ ${prefix}del
⤿ ${prefix}setppbot
⤿ ${prefix}yolag
⤿ ${prefix}lagriy
⤿ ${prefix}buggc
⤿ ${prefix}bugpc

❒「 *GROUP MENU* 」 
⤿ ${prefix}listonline
⤿ ${prefix}sider
⤿ ${prefix}infochat
⤿ ${prefix}setdesk [text]
⤿ ${prefix}setppgrup [reply image]
⤿ ${prefix}antilink [on/off]
⤿ ${prefix}antivirtex [on/off]
⤿ ${prefix}antiwame [on/off]
⤿ ${prefix}antiasing [on/off]
⤿ ${prefix}event [on/off]
⤿ ${prefix}revoke
⤿ ${prefix}leave
⤿ ${prefix}add [62***]
⤿ ${prefix}kick @tag
⤿ ${prefix}leave
⤿ ${prefix}linkgc
⤿ ${prefix}group [open/close]
⤿ ${prefix}tagall [text]
⤿ ${prefix}hidetag [text]
⤿ ${prefix}stickertag
⤿ ${prefix}videotag [query]
⤿ ${prefix}vntag [query]
⤿ ${prefix}imagetag [query]
⤿ ${prefix}absenstart
⤿ ${prefix}absen
⤿ ${prefix}cekabsen
⤿ ${prefix}deleteabsen
⤿ ${prefix}afk [reason]

❒「 *RPG MENU* 」 
—————————————
*masih ada sedikit bug, lagi proses di fix*
*tapi masih aman kok kalau di gunain.*
—————————————
⤿ ${prefix}profile
⤿ ${prefix}leaderboard
⤿ ${prefix}daily
⤿ ${prefix}monthly
⤿ ${prefix}gajian
⤿ ${prefix}judi
⤿ ${prefix}berburu
⤿ ${prefix}nebang
⤿ ${prefix}mancing
⤿ ${prefix}mining
⤿ ${prefix}adventure
⤿ ${prefix}berpetualang
⤿ ${prefix}kill
⤿ ${prefix}slot
⤿ ${prefix}buy
⤿ ${prefix}sell
⤿ ${prefix}heal
⤿ ${prefix}bansos

❒「 *DATABASE MENU* 」 
⤿ ${prefix}setcmd [reply stiker]
⤿ ${prefix}delcmd [reply stiker]
⤿ ${prefix}listcmd
⤿ ${prefix}addmsg [nama file]
⤿ ${prefix}getmsg [nama file]
⤿ ${prefix}listmsg
⤿ ${prefix}delmsg [nama file]

❒「 *STALKING MENU* 」 
⤿ ${prefix}igstalk [username]
⤿ ${prefix}ghstalk [username]
⤿ ${prefix}ytstalk [channel]

❒「 *SEARCH MENU* 」 
⤿ ${prefix}ytsearch [query]
⤿ ${prefix}wallpaper [query]
⤿ ${prefix}wikimedia [query]
⤿ ${prefix}wattpad [query]
⤿ ${prefix}webtoons [query]
⤿ ${prefix}drakor [query]
⤿ ${prefix}pinterest [query]
⤿ ${prefix}quotesanime
⤿ ${prefix}anime [query]
⤿ ${prefix}manga [query]
⤿ ${prefix}character [query]
⤿ ${prefix}sfile [query]
⤿ ${prefix}rexdl [query]
⤿ ${prefix}thelazy [query]
⤿ ${prefix}shopee [query]
⤿ ${prefix}amazon [query]
⤿ ${prefix}arena [query]
⤿ ${prefix}groupwa [query]

❒「 *DOWNLOADER MENU* 」 
⤿ ${prefix}tiktok [link]
⤿ ${prefix}tiktoknowm [link]
⤿ ${prefix}tiktokwm [link]
⤿ ${prefix}tiktokaudio [link]
⤿ ${prefix}ytdl [link]
⤿ ${prefix}play [query]
⤿ ${prefix}ytmp3 [link]
⤿ ${prefix}ytshortmp3 [link]
⤿ ${prefix}ytmp4 [link]
⤿ ${prefix}ytshorts [link]
⤿ ${prefix}facebook [link]
⤿ ${prefix}facebooksd [link]
⤿ ${prefix}facebookhd [link]
⤿ ${prefix}fbaudio [link]
⤿ ${prefix}igstory [username]
⤿ ${prefix}igdl [link]
⤿ ${prefix}igphoto [link]
⤿ ${prefix}igvideo [link]
⤿ ${prefix}igreels [link]
⤿ ${prefix}igtv [link]
⤿ ${prefix}soundcloud [link]
⤿ ${prefix}gitclone [link repo]
⤿ ${prefix}gitrepo [username repo branch]
⤿ ${prefix}mediafire [link]
⤿ ${prefix}twitter link

❒「 *CONVERTER MENU* 」
⤿ ${prefix}sticker [reply image]
⤿ ${prefix}toimg [reply sticker]
⤿ ${prefix}wm [packname|author]
⤿ ${prefix}takewm [packname|author]
⤿ ${prefix}tourl [image/video/stiker]
⤿ ${prefix}tomp4 [sticker]
⤿ ${prefix}tomp3 [video]
⤿ ${prefix}toaudio [video]
⤿ ${prefix}tovn [video]
⤿ ${prefix}togif [sticker]
⤿ ${prefix}smeme [text]
⤿ ${prefix}smeme2 [text¹|text²]
⤿ ${prefix}memegen [text¹|text²]
⤿ ${prefix}nulisbiasa [text]
⤿ ${prefix}nuliskanan[text]
⤿ ${prefix}nuliskiri [text]
⤿ ${prefix}foliokanan [text]
⤿ ${prefix}foliokiri [text]
⤿ ${prefix}attp [text]
⤿ ${prefix}ttp [text]
⤿ ${prefix}emojimix [😔+😅]
⤿ ${prefix}emojilg [emote]
⤿ ${prefix}emojipedia [emote]
⤿ ${prefix}emojimoji [emote]
⤿ ${prefix}emojijoy [emote]
⤿ ${prefix}emojiskype [emote]
⤿ ${prefix}emojifacebook [emote]
⤿ ${prefix}emojitwitter [emote]
⤿ ${prefix}emojiwhatsapp [emote]
⤿ ${prefix}emojimicrosoft [emote]
⤿ ${prefix}emojisamsung [emote]
⤿ ${prefix}emojigoogle [emote]
⤿ ${prefix}emojiapple [emote]

❒「 *TOOLS MENU* 」
⤿ ${prefix}translate [kode_bahasa] [text]
⤿ ${prefix}kalkulator
⤿ ${prefix}bilangangka
⤿ ${prefix}jumlahangka
⤿ ${prefix}balikangka
⤿ ${prefix}balikhuruf
⤿ ${prefix}besarkecil
⤿ ${prefix}kapital
⤿ ${prefix}halah
⤿ ${prefix}hilih
⤿ ${prefix}huluh
⤿ ${prefix}heleh
⤿ ${prefix}holoh

❒「 *IMAGE EFFECT* 」 
⤿ ${prefix}wanted
⤿ ${prefix}utatoo
⤿ ${prefix}unsharpen
⤿ ${prefix}thanos
⤿ ${prefix}sniper
⤿ ${prefix}sharpen
⤿ ${prefix}sepia
⤿ ${prefix}scary
⤿ ${prefix}rip
⤿ ${prefix}redple
⤿ ${prefix}rejected
⤿ ${prefix}posterize
⤿ ${prefix}ps4
⤿ ${prefix}pixelize
⤿ ${prefix}missionpassed
⤿ ${prefix}moustache
⤿ ${prefix}lookwhatkarenhave
⤿ ${prefix}jail
⤿ ${prefix}invert
⤿ ${prefix}instagram
⤿ ${prefix}greyscale
⤿ ${prefix}glitch
⤿ ${prefix}gay
⤿ ${prefix}frame
⤿ ${prefix}fire
⤿ ${prefix}distort
⤿ ${prefix}dictator
⤿ ${prefix}deepfry
⤿ ${prefix}ddungeon
⤿ ${prefix}circle
⤿ ${prefix}challenger
⤿ ${prefix}burn
⤿ ${prefix}brazzers
⤿ ${prefix}beautiful

❒「 *STICKER EFFECT* 」 
⤿ ${prefix}jail
⤿ ${prefix}red
⤿ ${prefix}gay
⤿ ${prefix}bloo
⤿ ${prefix}blue
⤿ ${prefix}sepia
⤿ ${prefix}green
⤿ ${prefix}glass
⤿ ${prefix}invert
⤿ ${prefix}blurple
⤿ ${prefix}blurple2
⤿ ${prefix}wasted
⤿ ${prefix}passed
⤿ ${prefix}triggered
⤿ ${prefix}comrade
⤿ ${prefix}greyscale
⤿ ${prefix}threshold
⤿ ${prefix}brightness
⤿ ${prefix}invertgreyscale

❒「 *RANDOM ANIME* 」
⤿ ${prefix}loli
⤿ ${prefix}waifu
⤿ ${prefix}neko
⤿ ${prefix}shinobu
⤿ ${prefix}megumin
⤿ ${prefix}bully
⤿ ${prefix}cuddle
⤿ ${prefix}cry
⤿ ${prefix}hug
⤿ ${prefix}awoo
⤿ ${prefix}kiss
⤿ ${prefix}lick
⤿ ${prefix}pat
⤿ ${prefix}smug
⤿ ${prefix}bonk
⤿ ${prefix}yeet
⤿ ${prefix}blush
⤿ ${prefix}smile
⤿ ${prefix}wave
⤿ ${prefix}highfive
⤿ ${prefix}handhold
⤿ ${prefix}nom
⤿ ${prefix}bite
⤿ ${prefix}glomp
⤿ ${prefix}slap
⤿ ${prefix}happy
⤿ ${prefix}wink
⤿ ${prefix}poke
⤿ ${prefix}dance
⤿ ${prefix}cringe
⤿ ${prefix}anime-kill
⤿ ${prefix}anime-waifu
⤿ ${prefix}anime-loli
⤿ ${prefix}anime-zoro
⤿ ${prefix}anime-luffy
⤿ ${prefix}anime-sanji
⤿ ${prefix}anime-ussop
⤿ ${prefix}anime-nami
⤿ ${prefix}anime-copper
⤿ ${prefix}anime-naruto 
⤿ ${prefix}anime-minato
⤿ ${prefix}anime-sasuke
⤿ ${prefix}anime-sakura
⤿ ${prefix}anime-boruto
⤿ ${prefix}anime-sarada
⤿ ${prefix}anime-mitsuki
⤿ ${prefix}anime-orochimaru
⤿ ${prefix}anime-tsunade
⤿ ${prefix}anime-kakashi
⤿ ${prefix}anime-killua
⤿ ${prefix}anime-gon
⤿ ${prefix}anime-rimuru 
⤿ ${prefix}anime-sagiri
⤿ ${prefix}anime-natsu
⤿ ${prefix}anime-tanjirou
⤿ ${prefix}anime-nezuko
⤿ ${prefix}anime-senku

❒「 *NSFW MENU* 」
⤿ ${prefix}hentai
⤿ ${prefix}ahegao
⤿ ${prefix}ass
⤿ ${prefix}bdsm
⤿ ${prefix}blowjob
⤿ ${prefix}cuckold
⤿ ${prefix}cum
⤿ ${prefix}ero
⤿ ${prefix}femdom
⤿ ${prefix}foot
⤿ ${prefix}gangbang
⤿ ${prefix}glasses
⤿ ${prefix}jahy
⤿ ${prefix}manga
⤿ ${prefix}masturbation
⤿ ${prefix}neko
⤿ ${prefix}orgy
⤿ ${prefix}panties
⤿ ${prefix}pussy
⤿ ${prefix}tentacles
⤿ ${prefix}thighs
⤿ ${prefix}yuri
⤿ ${prefix}feet
⤿ ${prefix}lewdkemo
⤿ ${prefix}woof
⤿ ${prefix}gasm
⤿ ${prefix}solo
⤿ ${prefix}8ball
⤿ ${prefix}goose
⤿ ${prefix}avatar
⤿ ${prefix}hololewd
⤿ ${prefix}gecg
⤿ ${prefix}holo
⤿ ${prefix}fox_girl
⤿ ${prefix}tits
⤿ ${prefix}eroyuri
⤿ ${prefix}holoyero
⤿ ${prefix}lizard
⤿ ${prefix}keta
⤿ ${prefix}eron
⤿ ${prefix}erok
⤿ ${prefix}kemonomimi
⤿ ${prefix}cum_jpg
⤿ ${prefix}nsfw_avatar
⤿ ${prefix}erofeet
⤿ ${prefix}meow
⤿ ${prefix}wallpaper
⤿ ${prefix}waifu
⤿ ${prefix}trap
⤿ ${prefix}lewd
⤿ ${prefix}pussy_jpg
⤿ ${prefix}futanari
⤿ ${prefix}lewdk
⤿ ${prefix}solog
⤿ ${prefix}smug
⤿ ${prefix}cum
⤿ ${prefix}slap
⤿ ${prefix}les
⤿ ${prefix}erokemo
⤿ ${prefix}bj
⤿ ${prefix}pwankg
⤿ ${prefix}pat
⤿ ${prefix}poke
⤿ ${prefix}feed
⤿ ${prefix}nsfw_neko_gif
⤿ ${prefix}pussy
⤿ ${prefix}feetg
⤿ ${prefix}baka
⤿ ${prefix}hug
⤿ ${prefix}kiss
⤿ ${prefix}tickle
⤿ ${prefix}spank
⤿ ${prefix}kuni
⤿ ${prefix}classic
⤿ ${prefix}boobs
⤿ ${prefix}anal
⤿ ${prefix}ngif
⤿ ${prefix}cuddle
⤿ ${prefix}zettai

❒「 *TEXTPRO MENU* 」
⤿ ${prefix}halloween2
⤿ ${prefix}horror
⤿ ${prefix}game8bit
⤿ ${prefix}layered
⤿ ${prefix}glitch2
⤿ ${prefix}coolg
⤿ ${prefix}coolwg
⤿ ${prefix}realistic
⤿ ${prefix}space3d
⤿ ${prefix}gtiktok
⤿ ${prefix}stone
⤿ ${prefix}marvel
⤿ ${prefix}marvel2
⤿ ${prefix}pornhub
⤿ ${prefix}avengers
⤿ ${prefix}metalr
⤿ ${prefix}metalg
⤿ ${prefix}metalg2
⤿ ${prefix}halloween2
⤿ ${prefix}lion
⤿ ${prefix}wolf_bw
⤿ ${prefix}wolf_g
⤿ ${prefix}ninja
⤿ ${prefix}3dsteel
⤿ ${prefix}horror2
⤿ ${prefix}lava
⤿ ${prefix}bagel
⤿ ${prefix}blackpink
⤿ ${prefix}rainbow2
⤿ ${prefix}water_pipe
⤿ ${prefix}halloween
⤿ ${prefix}sketch
⤿ ${prefix}sircuit
⤿ ${prefix}discovery
⤿ ${prefix}metallic2
⤿ ${prefix}fiction
⤿ ${prefix}demon
⤿ ${prefix}transformer
⤿ ${prefix}berry
⤿ ${prefix}thunder
⤿ ${prefix}magma
⤿ ${prefix}3dstone
⤿ ${prefix}neon
⤿ ${prefix}glitch
⤿ ${prefix}harry_potter
⤿ ${prefix}embossed
⤿ ${prefix}broken
⤿ ${prefix}papercut
⤿ ${prefix}gradient
⤿ ${prefix}glossy
⤿ ${prefix}watercolor
⤿ ${prefix}multicolor
⤿ ${prefix}neon_devil
⤿ ${prefix}underwater
⤿ ${prefix}bear
⤿ ${prefix}wonderfulg
⤿ ${prefix}christmas
⤿ ${prefix}neon_light
⤿ ${prefix}snow
⤿ ${prefix}cloudsky
⤿ ${prefix}luxury2
⤿ ${prefix}gradient2
⤿ ${prefix}summer
⤿ ${prefix}writing
⤿ ${prefix}engraved
⤿ ${prefix}summery
⤿ ${prefix}3dglue
⤿ ${prefix}metaldark
⤿ ${prefix}neonlight
⤿ ${prefix}oscar
⤿ ${prefix}minion
⤿ ${prefix}holographic
⤿ ${prefix}purple
⤿ ${prefix}glossyb
⤿ ${prefix}deluxe2
⤿ ${prefix}glossyc
⤿ ${prefix}fabric
⤿ ${prefix}neonc
⤿ ${prefix}newyear
⤿ ${prefix}newyear2
⤿ ${prefix}metals
⤿ ${prefix}xmas
⤿ ${prefix}blood
⤿ ${prefix}darkg
⤿ ${prefix}joker
⤿ ${prefix}wicker
⤿ ${prefix}natural
⤿ ${prefix}firework
⤿ ${prefix}skeleton
⤿ ${prefix}balloon
⤿ ${prefix}balloon2
⤿ ${prefix}balloon3
⤿ ${prefix}balloon4
⤿ ${prefix}balloon5
⤿ ${prefix}balloon6
⤿ ${prefix}balloon7
⤿ ${prefix}steel
⤿ ${prefix}gloss
⤿ ${prefix}denim
⤿ ${prefix}decorate
⤿ ${prefix}decorate2
⤿ ${prefix}peridot
⤿ ${prefix}rock
⤿ ${prefix}glass
⤿ ${prefix}glass2
⤿ ${prefix}glass3
⤿ ${prefix}glass4
⤿ ${prefix}glass5
⤿ ${prefix}glass6
⤿ ${prefix}glass7
⤿ ${prefix}glass8
⤿ ${prefix}captain_as2
⤿ ${prefix}robot
⤿ ${prefix}equalizer
⤿ ${prefix}toxic
⤿ ${prefix}sparkling
⤿ ${prefix}sparkling2
⤿ ${prefix}sparkling3
⤿ ${prefix}sparkling4
⤿ ${prefix}sparkling5
⤿ ${prefix}sparkling6
⤿ ${prefix}sparkling7
⤿ ${prefix}decorative
⤿ ${prefix}chocolate
⤿ ${prefix}strawberry
⤿ ${prefix}koifish
⤿ ${prefix}bread
⤿ ${prefix}matrix
⤿ ${prefix}blood2
⤿ ${prefix}neonligth2
⤿ ${prefix}thunder2
⤿ ${prefix}3dbox
⤿ ${prefix}neon2
⤿ ${prefix}roadw
⤿ ${prefix}bokeh
⤿ ${prefix}gneon
⤿ ${prefix}advanced
⤿ ${prefix}dropwater
⤿ ${prefix}wall
⤿ ${prefix}chrismast
⤿ ${prefix}honey
⤿ ${prefix}drug
⤿ ${prefix}marble
⤿ ${prefix}marble2
⤿ ${prefix}ice
⤿ ${prefix}juice
⤿ ${prefix}rusty
⤿ ${prefix}abstra
⤿ ${prefix}biscuit
⤿ ${prefix}wood
⤿ ${prefix}scifi
⤿ ${prefix}metalr
⤿ ${prefix}purpleg
⤿ ${prefix}shiny 
⤿ ${prefix}jewelry
⤿ ${prefix}jewelry2
⤿ ${prefix}jewelry3
⤿ ${prefix}jewelry4
⤿ ${prefix}jewelry5
⤿ ${prefix}jewelry6
⤿ ${prefix}jewelry7
⤿ ${prefix}jewelry8
⤿ ${prefix}metalh
⤿ ${prefix}golden
⤿ ${prefix}glitter
⤿ ${prefix}glitter2
⤿ ${prefix}glitter3
⤿ ${prefix}glitter4
⤿ ${prefix}glitter5
⤿ ${prefix}glitter6
⤿ ${prefix}glitter7
⤿ ${prefix}metale
⤿ ${prefix}carbon
⤿ ${prefix}candy
⤿ ${prefix}metalb
⤿ ${prefix}gemb
⤿ ${prefix}3dchrome
⤿ ${prefix}metalb2
⤿ ${prefix}metalg
⤿ ${prefix}metalg

❒「 *EPHOTO360 MENU* 」
⤿ ${prefix}youtubegold
⤿ ${prefix}youtubesilver
⤿ ${prefix}facebookgold
⤿ ${prefix}facebooksilver
⤿ ${prefix}instagramgold
⤿ ${prefix}instagramsilver
⤿ ${prefix}twittergold
⤿ ${prefix}twittersilver
⤿ ${prefix}retrotext
⤿ ${prefix}halloweenbats
⤿ ${prefix}texthalloween
⤿ ${prefix}cardhalloween
⤿ ${prefix}birthdaycake
⤿ ${prefix}thundertext
⤿ ${prefix}icetext
⤿ ${prefix}milkcake
⤿ ${prefix}snowontext
⤿ ${prefix}metalstar
⤿ ${prefix}dragonfire
⤿ ${prefix}zombie3d
⤿ ${prefix}merrycard
⤿ ${prefix}generalexam 
⤿ ${prefix}viettel
⤿ ${prefix}embroider
⤿ ${prefix}graffititext
⤿ ${prefix}graffititext2
⤿ ${prefix}graffititext3
⤿ ${prefix}covergraffiti
⤿ ${prefix}moderngold
⤿ ${prefix}capercut
⤿ ${prefix}lovecard
⤿ ${prefix}heartflashlight
⤿ ${prefix}heartcup
⤿ ${prefix}sunglightshadow
⤿ ${prefix}graffiti3d
⤿ ${prefix}moderngoldsilver
⤿ ${prefix}moderngold2
⤿ ${prefix}moderngold3
⤿ ${prefix}fabrictext
⤿ ${prefix}masteryavatar
⤿ ${prefix}messagecoffee
⤿ ${prefix}announofwin
⤿ ${prefix}writeblood
⤿ ${prefix}horrorletter
⤿ ${prefix}writehorror
⤿ ${prefix}shirtclub
⤿ ${prefix}angelwing
⤿ ${prefix}christmasseason
⤿ ${prefix}projectyasuo
⤿ ${prefix}lovelycute
⤿ ${prefix}womansday
⤿ ${prefix}covergamepubg
⤿ ${prefix}nameonheart
⤿ ${prefix}funnyhalloween
⤿ ${prefix}lightningpubg
⤿ ${prefix}greetingcardvideo 
⤿ ${prefix}christmascard 
⤿ ${prefix}galaxybat
⤿ ${prefix}writegalaxy
⤿ ${prefix}starsnight
⤿ ${prefix}noeltext
⤿ ${prefix}textcakes
⤿ ${prefix}pubgbirthday
⤿ ${prefix}galaxywallpaper
⤿ ${prefix}pubgglicthvideo 
⤿ ${prefix}pubgmascotlogo
⤿ ${prefix}realembroidery
⤿ ${prefix}vintagetelevision
⤿ ${prefix}funnyanimations
⤿ ${prefix}glowingtext
⤿ ${prefix}textonglass
⤿ ${prefix}cartoonstyle
⤿ ${prefix}multicolor
⤿ ${prefix}watercolor2
⤿ ${prefix}textsky
⤿ ${prefix}summerbeach
⤿ ${prefix}1917text
⤿ ${prefix}puppycute
⤿ ${prefix}rosebirthday

❒「 *LOGO MENU* 」
⤿ ${prefix}coverbannerlol 
⤿ ${prefix}pubglogomaker 
⤿ ${prefix}colorfulpubg 
⤿ ${prefix}astronotspace 
⤿ ${prefix}wallpaperaov 
⤿ ${prefix}maketeamlogo 
⤿ ${prefix}circlemarcotteam 
⤿ ${prefix}wallpaperml 
⤿ ${prefix}dragonballfb 
⤿ ${prefix}bannerofaov 
⤿ ${prefix}effect3donbeach 
⤿ ${prefix}cutegirlgamer 
⤿ ${prefix}footballteam 
⤿ ${prefix}beautifulshimmering 
⤿ ${prefix}pubgcutelogo 
⤿ ${prefix}elegantrotation 
⤿ ${prefix}logogamingassasin 
⤿ ${prefix}introvideomaker 
⤿ ${prefix}gaminglogo4fvs
⤿ ${prefix}blueneon 
⤿ ${prefix}metalmascot 
⤿ ${prefix}anonymous
⤿ ${prefix}lolpentakill 
⤿ ${prefix}avatarleagueofking 
⤿ ${prefix}avatarff 
⤿ ${prefix}overwatchwallpaper 
⤿ ${prefix}rovwallpaperhd 
⤿ ${prefix}rovwallpaper 
⤿ ${prefix}beautifulgalaxylol 
⤿ ${prefix}crossfirecover 
⤿ ${prefix}lolwallpaper 
⤿ ${prefix}coverdota2 
⤿ ${prefix}coverleagueofking 
⤿ ${prefix}avatar3q360 
⤿ ${prefix}coverofwarface 
⤿ ${prefix}newlolavatar 
⤿ ${prefix}csgocover 
⤿ ${prefix}coverloknew
⤿ ${prefix}coverfblol 
⤿ ${prefix}overwatchcover 
⤿ ${prefix}crossfirestyle 
⤿ ${prefix}avatarlolbyname 
⤿ ${prefix}lolcoverbyname 
⤿ ${prefix}cyberhunterfb 
⤿ ${prefix}coverfreefirefb 
⤿ ${prefix}gamingmascot 
⤿ ${prefix}coveronepiecefb 
⤿ ${prefix}bannerytcsgo 
⤿ ${prefix}fbgamepubgcover 
⤿ ${prefix}banneroflol 
⤿ ${prefix}bannerofaov2 
⤿ ${prefix}teamlogo 
⤿ ${prefix}companylogo2 
⤿ ${prefix}companylogo 
⤿ ${prefix}gradientlogo 
⤿ ${prefix}pencilsketch 
⤿ ${prefix}gunlogogaming 
⤿ ${prefix}banneroffreefire 
⤿ ${prefix}letterlogos 
⤿ ${prefix}bannerofoverwatch 
⤿ ${prefix}bannerofapex 
⤿ ${prefix}bannerofpubg 
⤿ ${prefix}mascotstyle
⤿ ${prefix}logoaccording 
⤿ ${prefix}avataroverwatch

❒「 *CERPEN MENU* 」
⤿ ${prefix}cerpen anak
⤿ ${prefix}cerpen bahasa daerah
⤿ ${prefix}cerpen bahasa inggris
⤿ ${prefix}cerpen bahasa jawa
⤿ ${prefix}cerpen bahasa sunda
⤿ ${prefix}cerpen budaya
⤿ ${prefix}cerpen cinta
⤿ ${prefix}cerpen cinta islami
⤿ ${prefix}cerpen cinta pertama
⤿ ${prefix}cerpen cinta romantis
⤿ ${prefix}cerpen cinta sedih
⤿ ${prefix}cerpen cinta segitiga
⤿ ${prefix}cerpen cinta sejati
⤿ ${prefix}cerpen galau
⤿ ${prefix}cerpen gokil
⤿ ${prefix}cerpen inspiratif
⤿ ${prefix}cerpen jepang
⤿ ${prefix}cerpen kehidupan
⤿ ${prefix}cerpen keluarga
⤿ ${prefix}cerpen kisah nyata
⤿ ${prefix}cerpen korea
⤿ ${prefix}cerpen kristen
⤿ ${prefix}cerpen liburan
⤿ ${prefix}cerpen lingkungan
⤿ ${prefix}cerpen lucu
⤿ ${prefix}cerpen malaysia
⤿ ${prefix}cerpen mengharukan
⤿ ${prefix}cerpen misteri
⤿ ${prefix}cerpen motivasi
⤿ ${prefix}cerpen nasihat
⤿ ${prefix}cerpen nasionalisme
⤿ ${prefix}cerpen olahraga
⤿ ${prefix}cerpen patah hati
⤿ ${prefix}cerpen penantian
⤿ ${prefix}cerpen pendidikan
⤿ ${prefix}cerpen pengalaman pribadi
⤿ ${prefix}cerpen pengorbanan
⤿ ${prefix}cerpen penyesalan
⤿ ${prefix}cerpen perjuangan
⤿ ${prefix}cerpen perpisahan
⤿ ${prefix}cerpen persahabatan
⤿ ${prefix}cerpen petualangan
⤿ ${prefix}cerpen ramadhan
⤿ ${prefix}cerpen remaja
⤿ ${prefix}cerpen renungan
⤿ ${prefix}cerpen rindu
⤿ ${prefix}cerpen rohani
⤿ ${prefix}cerpen romantis
⤿ ${prefix}cerpen sastra
⤿ ${prefix}cerpen sedih
⤿ ${prefix}cerpen sejarah
⤿ ${prefix}cerpen slice of life
⤿ ${prefix}cerpen terjemahan
⤿ ${prefix}cerpen thriller

❒「 *BERITA MENU* 」
⤿ ${prefix}merdeka-news 
⤿ ${prefix}kontan-news 
⤿ ${prefix}cnbc-news 
⤿ ${prefix}tribun-news 
⤿ ${prefix}indozone-news 
⤿ ${prefix}kompas-news 
⤿ ${prefix}detik-news 
⤿ ${prefix}daily-news 
⤿ ${prefix}inews-news 
⤿ ${prefix}okezone-news 
⤿ ${prefix}sindo-news 
⤿ ${prefix}tempo-news 
⤿ ${prefix}antara-news 
⤿ ${prefix}cnn-news 
⤿ ${prefix}fajar-news
⤿ ${prefix}berita
⤿ ${prefix}kompas
⤿ ${prefix}okezone
⤿ ${prefix}antara
⤿ ${prefix}infohoax
⤿ ${prefix}coronameninggal

❒「 *PRIMBON MENU* 」
⤿ ${prefix}nomorhoki 6281575886399
⤿ ${prefix}artimimpi [query]
⤿ ${prefix}artinama [query]
⤿ ${prefix}ramaljodoh
⤿ ${prefix}ramaljodohbali
⤿ ${prefix}suamiistri
⤿ ${prefix}ramalcinta
⤿ ${prefix}cocoknama
⤿ ${prefix}pasangan
⤿ ${prefix}jadiannikah
⤿ ${prefix}sifatusaha
⤿ ${prefix}rezeki
⤿ ${prefix}pekerjaan
⤿ ${prefix}nasib
⤿ ${prefix}penyakit
⤿ ${prefix}tarot
⤿ ${prefix}fengshui
⤿ ${prefix}haribaik
⤿ ${prefix}harisangar
⤿ ${prefix}harisial
⤿ ${prefix}nagahari
⤿ ${prefix}arahrezeki
⤿ ${prefix}peruntungan
⤿ ${prefix}weton
⤿ ${prefix}karakter
⤿ ${prefix}keberuntungan
⤿ ${prefix}memancing
⤿ ${prefix}masasubur
⤿ ${prefix}zodiak 
⤿ ${prefix}shio [query]

❒「 *ISLAMIC MENU* 」
⤿ ${prefix}asmaulhusna
⤿ ${prefix}kisahnabi [nabi]
⤿ ${prefix}jadwalshalat [daerah]
⤿ ${prefix}randomquran
⤿ ${prefix}randomquran2
⤿ ${prefix}listsurah
⤿ ${prefix}tafsirsurah [surah]
⤿ ${prefix}alquranaudio [surah|ayat]

❒「 *GAME MENU* 」
⤿ ${prefix}tebakgambar 
⤿ ${prefix}tebakbendera 
⤿ ${prefix}tebakkabupaten 
⤿ ${prefix}tebakkimia 
⤿ ${prefix}tebaklirik 
⤿ ${prefix}tebakkalimat 
⤿ ${prefix}tebaktebakan 
⤿ ${prefix}tebaksiapa 
⤿ ${prefix}tebakkata 
⤿ ${prefix}kuismath 
⤿ ${prefix}tekateki 
⤿ ${prefix}susunkata 
⤿ ${prefix}caklontong 
⤿ ${prefix}tictactoe
⤿ ${prefix}aduayam
⤿ ${prefix}suit @tag 
⤿ ${prefix}suit2

❒「 *FUN MENU* 」
⤿ ${prefix}apakah
⤿ ${prefix}kapankah
⤿ ${prefix}gimanakah
⤿ ${prefix}gimana
⤿ ${prefix}bisakah
⤿ ${prefix}wangy
⤿ ${prefix}rate
⤿ ${prefix}wibucek
⤿ ${prefix}nolepcek
⤿ ${prefix}jagocek
⤿ ${prefix}bebancek
⤿ ${prefix}halalcek
⤿ ${prefix}haramcek
⤿ ${prefix}pintarcek
⤿ ${prefix}begocek
⤿ ${prefix}sadboycek
⤿ ${prefix}sadgirlcek
⤿ ${prefix}baikcek
⤿ ${prefix}jahatcek
⤿ ${prefix}hebatcek
⤿ ${prefix}pakboycek
⤿ ${prefix}pakgirlcek
⤿ ${prefix}gantengcek
⤿ ${prefix}cantikcek
⤿ ${prefix}jelekcek
⤿ ${prefix}sangecek
⤿ ${prefix}gaycek
⤿ ${prefix}lesbicek
⤿ ${prefix}cekmati

❒「 *ASUPAN MENU* 」
⤿ ${prefix}chika
⤿ ${prefix}delvira
⤿ ${prefix}ayu
⤿ ${prefix}bunga
⤿ ${prefix}aura
⤿ ${prefix}nisa
⤿ ${prefix}ziva
⤿ ${prefix}yana
⤿ ${prefix}viona
⤿ ${prefix}syania
⤿ ${prefix}riri
⤿ ${prefix}syifa
⤿ ${prefix}mama_gina
⤿ ${prefix}alcakenya
⤿ ${prefix}mangayutri
⤿ ${prefix}rikagusriani
⤿ ${prefix}asupan
⤿ ${prefix}bocil
⤿ ${prefix}geayubi
⤿ ${prefix}santuy
⤿ ${prefix}ukhty
⤿ ${prefix}syifa

❒「 *CECAN MENU* 」
⤿ ${prefix}china 
⤿ ${prefix}indonesia 
⤿ ${prefix}malaysia 
⤿ ${prefix}thailand 
⤿ ${prefix}korea 
⤿ ${prefix}japan 
⤿ ${prefix}vietnam 
⤿ ${prefix}jenni 
⤿ ${prefix}jiso 
⤿ ${prefix}lisa  
⤿ ${prefix}rose

❒「 *TELEGRAM STICKER* 」
⤿ ${prefix}awoawo
⤿ ${prefix}benedict
⤿ ${prefix}chat
⤿ ${prefix}dbfly
⤿ ${prefix}dino_kuning
⤿ ${prefix}doge
⤿ ${prefix}gojosatoru
⤿ ${prefix}hope_boy
⤿ ${prefix}jisoo
⤿ ${prefix}kr_robot
⤿ ${prefix}kucing
⤿ ${prefix}lonte
⤿ ${prefix}manusia_lidi
⤿ ${prefix}menjamet
⤿ ${prefix}meow
⤿ ${prefix}nicholas
⤿ ${prefix}patrick
⤿ ${prefix}popoci
⤿ ${prefix}sponsbob
⤿ ${prefix}kawan_sponsbob
⤿ ${prefix}tyni

❒「 *ANONYMOUS CHAT* 」
⤿ ${prefix}anonymous
⤿ ${prefix}start
⤿ ${prefix}skip
⤿ ${prefix}leave

❒「 *VOICE CHARGER* 」
⤿ ${prefix}bass
⤿ ${prefix}blown
⤿ ${prefix}deep
⤿ ${prefix}earrape
⤿ ${prefix}fast
⤿ ${prefix}fat
⤿ ${prefix}nightcore
⤿ ${prefix}reverse
⤿ ${prefix}robot
⤿ ${prefix}slow
⤿ ${prefix}tupai

❒「 *OTHERS MENU* 」
⤿ ${prefix}jalantikus-meme
⤿ ${prefix}quotes
⤿ ${prefix}quotesanime
⤿ ${prefix}darkjokes
⤿ ${prefix}wikipedia
⤿ ${prefix}resepmasakan
⤿ ${prefix}katajago
⤿ ${prefix}jadwalbola

❒「 Thanks To 」
⤿ FatihArridho
⤿ ZeeoneOfc
⤿ DikaArdnt
⤿ Adhista
⤿ Nayla
⤿ Yoga
⤿ Riy
`
}

exports.rules = () => {
    return `
⟩ RULES AND FAQ

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix !, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *!allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Chika Fujiwara Bot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Chika Fujiwara Bot.
😖🙏
`
}

exports.donasi = (ownernomer) => {
    return `
⟩ DONASI

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

⟩ Contact Person Owner :

› wa.me/${ownernomer}
`
}

exports.sewajadibot = () => {
    return `
⟩ SEWA BOT

› Sewa bot 20k (1 minggu)

› Sewa bot 25k (1 bulan + premium)

› Sewa bot 30k (permanen + premium)

———————————————

⟩ JADI BOT

› Jadi bot + owner 30k (permanen)

———————————————————

› Minat? Langsung Chat Aja Wa Di Bawah Ini Cuy 🐦
`
}

exports.esce = () => {
    return `
⟩ SOURCE CODE

› https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw
`
}

exports.info = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *BOT INFO* 」 
⤿ ${prefix}owner
⤿ ${prefix}rules
⤿ ${prefix}script
⤿ ${prefix}ping
⤿ ${prefix}runtime
⤿ ${prefix}donate
⤿ ${prefix}sewabot
⤿ ${prefix}jam
⤿ ${prefix}jamdunia
⤿ ${prefix}dompet
⤿ ${prefix}buylimit
⤿ ${prefix}ceklimit
⤿ ${prefix}listprem
`}

exports.ownermenu = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *OWNER MENU* 」 
⤿ < / > / $ / =>
⤿ ${prefix}setmenu [query]
⤿ ${prefix}setallmenu [query]
⤿ ${prefix}setwm packname|author
⤿ ${prefix}sendsesi
⤿ ${prefix}listpc
⤿ ${prefix}listgc
⤿ ${prefix}broadcast
⤿ ${prefix}bc
⤿ ${prefix}bcgc
⤿ ${prefix}bctext
⤿ ${prefix}nsfw
⤿ ${prefix}autoreact
⤿ ${prefix}autorespond
⤿ ${prefix}antiviewonce
⤿ ${prefix}anticall
⤿ ${prefix}join
⤿ ${prefix}self
⤿ ${prefix}public
⤿ ${prefix}del
⤿ ${prefix}setppbot
⤿ ${prefix}yolag
⤿ ${prefix}lagriy
⤿ ${prefix}buggc
⤿ ${prefix}bugpc
`}

exports.database = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *DATABASE MENU* 」 
⤿ ${prefix}setcmd [reply stiker]
⤿ ${prefix}delcmd [reply stiker]
⤿ ${prefix}listcmd
⤿ ${prefix}addmsg [nama file]
⤿ ${prefix}getmsg [nama file]
⤿ ${prefix}listmsg
⤿ ${prefix}delmsg [nama file]
`}

exports.group = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *GROUP MENU* 」 
⤿ ${prefix}listonline
⤿ ${prefix}sider
⤿ ${prefix}infochat
⤿ ${prefix}setdesk [text]
⤿ ${prefix}setppgrup [reply image]
⤿ ${prefix}antilink [on/off]
⤿ ${prefix}antivirtex [on/off]
⤿ ${prefix}antiwame [on/off]
⤿ ${prefix}antiasing [on/off]
⤿ ${prefix}event [on/off]
⤿ ${prefix}revoke
⤿ ${prefix}leave
⤿ ${prefix}add [62***]
⤿ ${prefix}kick @tag
⤿ ${prefix}leave
⤿ ${prefix}linkgc
⤿ ${prefix}group [open/close]
⤿ ${prefix}tagall [text]
⤿ ${prefix}hidetag [text]
⤿ ${prefix}stickertag
⤿ ${prefix}videotag [query]
⤿ ${prefix}vntag [query]
⤿ ${prefix}imagetag [query]
⤿ ${prefix}absenstart
⤿ ${prefix}absen
⤿ ${prefix}cekabsen
⤿ ${prefix}deleteabsen
⤿ ${prefix}afk [reason]
`}

exports.rpg = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}

❒「 *RPG MENU* 」 
—————————————
*masih ada sedikit bug, lagi proses di fix*
*tapi masih aman kok kalau di gunain.*
—————————————
⤿ ${prefix}profile
⤿ ${prefix}leaderboard
⤿ ${prefix}daily
⤿ ${prefix}monthly
⤿ ${prefix}gajian
⤿ ${prefix}judi
⤿ ${prefix}berburu
⤿ ${prefix}nebang
⤿ ${prefix}mancing
⤿ ${prefix}mining
⤿ ${prefix}adventure
⤿ ${prefix}berpetualang
⤿ ${prefix}kill
⤿ ${prefix}slot
⤿ ${prefix}buy
⤿ ${prefix}sell
⤿ ${prefix}heal
⤿ ${prefix}bansos
`
}

exports.stalk = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *STALKING MENU* 」 
⤿ ${prefix}igstalk [username]
⤿ ${prefix}ghstalk [username]
⤿ ${prefix}ytstalk [channel]
`}

exports.search = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *SEARCH MENU* 」 
⤿ ${prefix}ytsearch [query]
⤿ ${prefix}wallpaper [query]
⤿ ${prefix}wikimedia [query]
⤿ ${prefix}wattpad [query]
⤿ ${prefix}webtoons [query]
⤿ ${prefix}drakor [query]
⤿ ${prefix}pinterest [query]
⤿ ${prefix}quotesanime
⤿ ${prefix}anime [query]
⤿ ${prefix}manga [query]
⤿ ${prefix}character [query]
⤿ ${prefix}sfile [query]
⤿ ${prefix}rexdl [query]
⤿ ${prefix}thelazy [query]
⤿ ${prefix}shopee [query]
⤿ ${prefix}amazon [query]
⤿ ${prefix}arena [query]
⤿ ${prefix}groupwa [query]
`}

exports.converter = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *CONVERTER MENU* 」
⤿ ${prefix}sticker [reply image]
⤿ ${prefix}toimg [reply sticker]
⤿ ${prefix}wm [packname|author]
⤿ ${prefix}takewm [packname|author]
⤿ ${prefix}tourl [image/video/stiker]
⤿ ${prefix}tomp4 [sticker]
⤿ ${prefix}tomp3 [video]
⤿ ${prefix}toaudio [video]
⤿ ${prefix}tovn [video]
⤿ ${prefix}togif [sticker]
⤿ ${prefix}smeme [text]
⤿ ${prefix}smeme2 [text¹|text²]
⤿ ${prefix}memegen [text¹|text²]
⤿ ${prefix}nulisbiasa [text]
⤿ ${prefix}nuliskanan[text]
⤿ ${prefix}nuliskiri [text]
⤿ ${prefix}foliokanan [text]
⤿ ${prefix}foliokiri [text]
⤿ ${prefix}attp [text]
⤿ ${prefix}ttp [text]
⤿ ${prefix}emojimix [😔+😅]
⤿ ${prefix}emojilg [emote]
⤿ ${prefix}emojipedia [emote]
⤿ ${prefix}emojimoji [emote]
⤿ ${prefix}emojijoy [emote]
⤿ ${prefix}emojiskype [emote]
⤿ ${prefix}emojifacebook [emote]
⤿ ${prefix}emojitwitter [emote]
⤿ ${prefix}emojiwhatsapp [emote]
⤿ ${prefix}emojimicrosoft [emote]
⤿ ${prefix}emojisamsung [emote]
⤿ ${prefix}emojigoogle [emote]
⤿ ${prefix}emojiapple [emote]
`}

exports.effect = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *IMAGE EFFECT* 」 
⤿ ${prefix}wanted
⤿ ${prefix}utatoo
⤿ ${prefix}unsharpen
⤿ ${prefix}thanos
⤿ ${prefix}sniper
⤿ ${prefix}sharpen
⤿ ${prefix}sepia
⤿ ${prefix}scary
⤿ ${prefix}rip
⤿ ${prefix}redple
⤿ ${prefix}rejected
⤿ ${prefix}posterize
⤿ ${prefix}ps4
⤿ ${prefix}pixelize
⤿ ${prefix}missionpassed
⤿ ${prefix}moustache
⤿ ${prefix}lookwhatkarenhave
⤿ ${prefix}jail
⤿ ${prefix}invert
⤿ ${prefix}instagram
⤿ ${prefix}greyscale
⤿ ${prefix}glitch
⤿ ${prefix}gay
⤿ ${prefix}frame
⤿ ${prefix}fire
⤿ ${prefix}distort
⤿ ${prefix}dictator
⤿ ${prefix}deepfry
⤿ ${prefix}ddungeon
⤿ ${prefix}circle
⤿ ${prefix}challenger
⤿ ${prefix}burn
⤿ ${prefix}brazzers
⤿ ${prefix}beautiful
`}

exports.effect2 = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *STICKER EFFECT* 」 
⤿ ${prefix}jail
⤿ ${prefix}red
⤿ ${prefix}gay
⤿ ${prefix}bloo
⤿ ${prefix}blue
⤿ ${prefix}sepia
⤿ ${prefix}green
⤿ ${prefix}glass
⤿ ${prefix}invert
⤿ ${prefix}blurple
⤿ ${prefix}blurple2
⤿ ${prefix}wasted
⤿ ${prefix}passed
⤿ ${prefix}triggered
⤿ ${prefix}comrade
⤿ ${prefix}greyscale
⤿ ${prefix}threshold
⤿ ${prefix}brightness
⤿ ${prefix}invertgreyscale
`
}

exports.download = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *DOWNLOADER MENU* 」 
⤿ ${prefix}tiktok [link]
⤿ ${prefix}tiktoknowm [link]
⤿ ${prefix}tiktokwm [link]
⤿ ${prefix}tiktokaudio [link]
⤿ ${prefix}ytdl [link]
⤿ ${prefix}play [query]
⤿ ${prefix}ytmp3 [link]
⤿ ${prefix}ytshortmp3 [link]
⤿ ${prefix}ytmp4 [link]
⤿ ${prefix}ytshorts [link]
⤿ ${prefix}facebook [link]
⤿ ${prefix}facebooksd [link]
⤿ ${prefix}facebookhd [link]
⤿ ${prefix}fbaudio [link]
⤿ ${prefix}igstory [username]
⤿ ${prefix}igdl [link]
⤿ ${prefix}igphoto [link]
⤿ ${prefix}igvideo [link]
⤿ ${prefix}igreels [link]
⤿ ${prefix}igtv [link]
⤿ ${prefix}soundcloud [link]
⤿ ${prefix}gitclone [link repo]
⤿ ${prefix}gitrepo [username repo branch]
⤿ ${prefix}mediafire [link]
⤿ ${prefix}twitter link
`
}

exports.ranime = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *RANDOM ANIME* 」
⤿ ${prefix}loli
⤿ ${prefix}waifu
⤿ ${prefix}neko
⤿ ${prefix}shinobu
⤿ ${prefix}megumin
⤿ ${prefix}bully
⤿ ${prefix}cuddle
⤿ ${prefix}cry
⤿ ${prefix}hug
⤿ ${prefix}awoo
⤿ ${prefix}kiss
⤿ ${prefix}lick
⤿ ${prefix}pat
⤿ ${prefix}smug
⤿ ${prefix}bonk
⤿ ${prefix}yeet
⤿ ${prefix}blush
⤿ ${prefix}smile
⤿ ${prefix}wave
⤿ ${prefix}highfive
⤿ ${prefix}handhold
⤿ ${prefix}nom
⤿ ${prefix}bite
⤿ ${prefix}glomp
⤿ ${prefix}slap
⤿ ${prefix}happy
⤿ ${prefix}wink
⤿ ${prefix}poke
⤿ ${prefix}dance
⤿ ${prefix}cringe
⤿ ${prefix}anime-kill
⤿ ${prefix}anime-waifu
⤿ ${prefix}anime-loli
⤿ ${prefix}anime-zoro
⤿ ${prefix}anime-luffy
⤿ ${prefix}anime-sanji
⤿ ${prefix}anime-ussop
⤿ ${prefix}anime-nami
⤿ ${prefix}anime-copper
⤿ ${prefix}anime-naruto 
⤿ ${prefix}anime-minato
⤿ ${prefix}anime-sasuke
⤿ ${prefix}anime-sakura
⤿ ${prefix}anime-boruto
⤿ ${prefix}anime-sarada
⤿ ${prefix}anime-mitsuki
⤿ ${prefix}anime-orochimaru
⤿ ${prefix}anime-tsunade
⤿ ${prefix}anime-kakashi
⤿ ${prefix}anime-killua
⤿ ${prefix}anime-gon
⤿ ${prefix}anime-rimuru 
⤿ ${prefix}anime-sagiri
⤿ ${prefix}anime-natsu
⤿ ${prefix}anime-tanjirou
⤿ ${prefix}anime-nezuko
⤿ ${prefix}anime-senku
`
}

exports.nsfw = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *NSFW MENU* 」
⤿ ${prefix}hentai
⤿ ${prefix}ahegao
⤿ ${prefix}ass
⤿ ${prefix}bdsm
⤿ ${prefix}blowjob
⤿ ${prefix}cuckold
⤿ ${prefix}cum
⤿ ${prefix}ero
⤿ ${prefix}femdom
⤿ ${prefix}foot
⤿ ${prefix}gangbang
⤿ ${prefix}glasses
⤿ ${prefix}jahy
⤿ ${prefix}manga
⤿ ${prefix}masturbation
⤿ ${prefix}neko
⤿ ${prefix}orgy
⤿ ${prefix}panties
⤿ ${prefix}pussy
⤿ ${prefix}tentacles
⤿ ${prefix}thighs
⤿ ${prefix}yuri
⤿ ${prefix}feet
⤿ ${prefix}lewdkemo
⤿ ${prefix}woof
⤿ ${prefix}gasm
⤿ ${prefix}solo
⤿ ${prefix}8ball
⤿ ${prefix}goose
⤿ ${prefix}avatar
⤿ ${prefix}hololewd
⤿ ${prefix}gecg
⤿ ${prefix}holo
⤿ ${prefix}fox_girl
⤿ ${prefix}tits
⤿ ${prefix}eroyuri
⤿ ${prefix}holoyero
⤿ ${prefix}lizard
⤿ ${prefix}keta
⤿ ${prefix}eron
⤿ ${prefix}erok
⤿ ${prefix}kemonomimi
⤿ ${prefix}cum_jpg
⤿ ${prefix}nsfw_avatar
⤿ ${prefix}erofeet
⤿ ${prefix}meow
⤿ ${prefix}wallpaper
⤿ ${prefix}waifu
⤿ ${prefix}trap
⤿ ${prefix}lewd
⤿ ${prefix}pussy_jpg
⤿ ${prefix}futanari
⤿ ${prefix}lewdk
⤿ ${prefix}solog
⤿ ${prefix}smug
⤿ ${prefix}cum
⤿ ${prefix}slap
⤿ ${prefix}les
⤿ ${prefix}erokemo
⤿ ${prefix}bj
⤿ ${prefix}pwankg
⤿ ${prefix}pat
⤿ ${prefix}poke
⤿ ${prefix}feed
⤿ ${prefix}nsfw_neko_gif
⤿ ${prefix}pussy
⤿ ${prefix}feetg
⤿ ${prefix}baka
⤿ ${prefix}hug
⤿ ${prefix}kiss
⤿ ${prefix}tickle
⤿ ${prefix}spank
⤿ ${prefix}kuni
⤿ ${prefix}classic
⤿ ${prefix}boobs
⤿ ${prefix}anal
⤿ ${prefix}ngif
⤿ ${prefix}cuddle
⤿ ${prefix}zettai
`
}

exports.textpro = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *TEXTPRO MENU* 」
⤿ ${prefix}halloween2
⤿ ${prefix}horror
⤿ ${prefix}game8bit
⤿ ${prefix}layered
⤿ ${prefix}glitch2
⤿ ${prefix}coolg
⤿ ${prefix}coolwg
⤿ ${prefix}realistic
⤿ ${prefix}space3d
⤿ ${prefix}gtiktok
⤿ ${prefix}stone
⤿ ${prefix}marvel
⤿ ${prefix}marvel2
⤿ ${prefix}pornhub
⤿ ${prefix}avengers
⤿ ${prefix}metalr
⤿ ${prefix}metalg
⤿ ${prefix}metalg2
⤿ ${prefix}halloween2
⤿ ${prefix}lion
⤿ ${prefix}wolf_bw
⤿ ${prefix}wolf_g
⤿ ${prefix}ninja
⤿ ${prefix}3dsteel
⤿ ${prefix}horror2
⤿ ${prefix}lava
⤿ ${prefix}bagel
⤿ ${prefix}blackpink
⤿ ${prefix}rainbow2
⤿ ${prefix}water_pipe
⤿ ${prefix}halloween
⤿ ${prefix}sketch
⤿ ${prefix}sircuit
⤿ ${prefix}discovery
⤿ ${prefix}metallic2
⤿ ${prefix}fiction
⤿ ${prefix}demon
⤿ ${prefix}transformer
⤿ ${prefix}berry
⤿ ${prefix}thunder
⤿ ${prefix}magma
⤿ ${prefix}3dstone
⤿ ${prefix}neon
⤿ ${prefix}glitch
⤿ ${prefix}harry_potter
⤿ ${prefix}embossed
⤿ ${prefix}broken
⤿ ${prefix}papercut
⤿ ${prefix}gradient
⤿ ${prefix}glossy
⤿ ${prefix}watercolor
⤿ ${prefix}multicolor
⤿ ${prefix}neon_devil
⤿ ${prefix}underwater
⤿ ${prefix}bear
⤿ ${prefix}wonderfulg
⤿ ${prefix}christmas
⤿ ${prefix}neon_light
⤿ ${prefix}snow
⤿ ${prefix}cloudsky
⤿ ${prefix}luxury2
⤿ ${prefix}gradient2
⤿ ${prefix}summer
⤿ ${prefix}writing
⤿ ${prefix}engraved
⤿ ${prefix}summery
⤿ ${prefix}3dglue
⤿ ${prefix}metaldark
⤿ ${prefix}neonlight
⤿ ${prefix}oscar
⤿ ${prefix}minion
⤿ ${prefix}holographic
⤿ ${prefix}purple
⤿ ${prefix}glossyb
⤿ ${prefix}deluxe2
⤿ ${prefix}glossyc
⤿ ${prefix}fabric
⤿ ${prefix}neonc
⤿ ${prefix}newyear
⤿ ${prefix}newyear2
⤿ ${prefix}metals
⤿ ${prefix}xmas
⤿ ${prefix}blood
⤿ ${prefix}darkg
⤿ ${prefix}joker
⤿ ${prefix}wicker
⤿ ${prefix}natural
⤿ ${prefix}firework
⤿ ${prefix}skeleton
⤿ ${prefix}balloon
⤿ ${prefix}balloon2
⤿ ${prefix}balloon3
⤿ ${prefix}balloon4
⤿ ${prefix}balloon5
⤿ ${prefix}balloon6
⤿ ${prefix}balloon7
⤿ ${prefix}steel
⤿ ${prefix}gloss
⤿ ${prefix}denim
⤿ ${prefix}decorate
⤿ ${prefix}decorate2
⤿ ${prefix}peridot
⤿ ${prefix}rock
⤿ ${prefix}glass
⤿ ${prefix}glass2
⤿ ${prefix}glass3
⤿ ${prefix}glass4
⤿ ${prefix}glass5
⤿ ${prefix}glass6
⤿ ${prefix}glass7
⤿ ${prefix}glass8
⤿ ${prefix}captain_as2
⤿ ${prefix}robot
⤿ ${prefix}equalizer
⤿ ${prefix}toxic
⤿ ${prefix}sparkling
⤿ ${prefix}sparkling2
⤿ ${prefix}sparkling3
⤿ ${prefix}sparkling4
⤿ ${prefix}sparkling5
⤿ ${prefix}sparkling6
⤿ ${prefix}sparkling7
⤿ ${prefix}decorative
⤿ ${prefix}chocolate
⤿ ${prefix}strawberry
⤿ ${prefix}koifish
⤿ ${prefix}bread
⤿ ${prefix}matrix
⤿ ${prefix}blood2
⤿ ${prefix}neonligth2
⤿ ${prefix}thunder2
⤿ ${prefix}3dbox
⤿ ${prefix}neon2
⤿ ${prefix}roadw
⤿ ${prefix}bokeh
⤿ ${prefix}gneon
⤿ ${prefix}advanced
⤿ ${prefix}dropwater
⤿ ${prefix}wall
⤿ ${prefix}chrismast
⤿ ${prefix}honey
⤿ ${prefix}drug
⤿ ${prefix}marble
⤿ ${prefix}marble2
⤿ ${prefix}ice
⤿ ${prefix}juice
⤿ ${prefix}rusty
⤿ ${prefix}abstra
⤿ ${prefix}biscuit
⤿ ${prefix}wood
⤿ ${prefix}scifi
⤿ ${prefix}metalr
⤿ ${prefix}purpleg
⤿ ${prefix}shiny 
⤿ ${prefix}jewelry
⤿ ${prefix}jewelry2
⤿ ${prefix}jewelry3
⤿ ${prefix}jewelry4
⤿ ${prefix}jewelry5
⤿ ${prefix}jewelry6
⤿ ${prefix}jewelry7
⤿ ${prefix}jewelry8
⤿ ${prefix}metalh
⤿ ${prefix}golden
⤿ ${prefix}glitter
⤿ ${prefix}glitter2
⤿ ${prefix}glitter3
⤿ ${prefix}glitter4
⤿ ${prefix}glitter5
⤿ ${prefix}glitter6
⤿ ${prefix}glitter7
⤿ ${prefix}metale
⤿ ${prefix}carbon
⤿ ${prefix}candy
⤿ ${prefix}metalb
⤿ ${prefix}gemb
⤿ ${prefix}3dchrome
⤿ ${prefix}metalb2
⤿ ${prefix}metalg
⤿ ${prefix}metalg
`
}


exports.other = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *OTHERS MENU* 」
⤿ ${prefix}jalantikus-meme
⤿ ${prefix}quotes
⤿ ${prefix}quotesanime
⤿ ${prefix}darkjokes
⤿ ${prefix}wikipedia
⤿ ${prefix}resepmasakan
⤿ ${prefix}katajago
⤿ ${prefix}jadwalbola
`
}
exports.game = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *GAME MENU* 」
⤿ ${prefix}tebakgambar 
⤿ ${prefix}tebakbendera 
⤿ ${prefix}tebakkabupaten 
⤿ ${prefix}tebakkimia 
⤿ ${prefix}tebaklirik 
⤿ ${prefix}tebakkalimat 
⤿ ${prefix}tebaktebakan 
⤿ ${prefix}tebaksiapa 
⤿ ${prefix}tebakkata 
⤿ ${prefix}kuismath 
⤿ ${prefix}tekateki 
⤿ ${prefix}susunkata 
⤿ ${prefix}caklontong 
⤿ ${prefix}tictactoe
⤿ ${prefix}aduayam
⤿ ${prefix}suit @tag 
⤿ ${prefix}suit2
`
}
exports.fun = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *FUN MENU* 」
⤿ ${prefix}apakah
⤿ ${prefix}kapankah
⤿ ${prefix}gimanakah
⤿ ${prefix}gimana
⤿ ${prefix}bisakah
⤿ ${prefix}wangy
⤿ ${prefix}rate
⤿ ${prefix}wibucek
⤿ ${prefix}nolepcek
⤿ ${prefix}jagocek
⤿ ${prefix}bebancek
⤿ ${prefix}halalcek
⤿ ${prefix}haramcek
⤿ ${prefix}pintarcek
⤿ ${prefix}begocek
⤿ ${prefix}sadboycek
⤿ ${prefix}sadgirlcek
⤿ ${prefix}baikcek
⤿ ${prefix}jahatcek
⤿ ${prefix}hebatcek
⤿ ${prefix}pakboycek
⤿ ${prefix}pakgirlcek
⤿ ${prefix}gantengcek
⤿ ${prefix}cantikcek
⤿ ${prefix}jelekcek
⤿ ${prefix}sangecek
⤿ ${prefix}gaycek
⤿ ${prefix}lesbicek
⤿ ${prefix}cekmati
`
}
exports.voicecharger = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *VOICE CHARGER* 」
⤿ ${prefix}bass
⤿ ${prefix}blown
⤿ ${prefix}deep
⤿ ${prefix}earrape
⤿ ${prefix}fast
⤿ ${prefix}fat
⤿ ${prefix}nightcore
⤿ ${prefix}reverse
⤿ ${prefix}robot
⤿ ${prefix}slow
⤿ ${prefix}tupai
`
}
exports.anonymous = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *ANONYMOUS CHAT* 」
⤿ ${prefix}anonymous
⤿ ${prefix}start
⤿ ${prefix}skip
⤿ ${prefix}leave
`
}
exports.asupan = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *ASUPAN MENU* 」
⤿ ${prefix}chika
⤿ ${prefix}delvira
⤿ ${prefix}ayu
⤿ ${prefix}bunga
⤿ ${prefix}aura
⤿ ${prefix}nisa
⤿ ${prefix}ziva
⤿ ${prefix}yana
⤿ ${prefix}viona
⤿ ${prefix}syania
⤿ ${prefix}riri
⤿ ${prefix}syifa
⤿ ${prefix}mama_gina
⤿ ${prefix}alcakenya
⤿ ${prefix}mangayutri
⤿ ${prefix}rikagusriani
⤿ ${prefix}asupan
⤿ ${prefix}bocil
⤿ ${prefix}geayubi
⤿ ${prefix}santuy
⤿ ${prefix}ukhty
⤿ ${prefix}syifa
`
}
exports.cecan = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *CECAN MENU* 」
⤿ ${prefix}china 
⤿ ${prefix}indonesia 
⤿ ${prefix}malaysia 
⤿ ${prefix}thailand 
⤿ ${prefix}korea 
⤿ ${prefix}japan 
⤿ ${prefix}vietnam 
⤿ ${prefix}jenni 
⤿ ${prefix}jiso 
⤿ ${prefix}lisa  
⤿ ${prefix}rose
`
}

exports.tqto = () =>{
	return`❒「 Thanks To 」
⤿ FatihArridho
⤿ ZeeoneOfc
⤿ DikaArdnt
⤿ Adhista
⤿ Nayla
⤿ Yoga
⤿ Riy
`
}

exports.primbonmenu = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *PRIMBON MENU* 」
⤿ ${prefix}nomorhoki 6281575886399
⤿ ${prefix}artimimpi [query]
⤿ ${prefix}artinama [query]
⤿ ${prefix}ramaljodoh
⤿ ${prefix}ramaljodohbali
⤿ ${prefix}suamiistri
⤿ ${prefix}ramalcinta
⤿ ${prefix}cocoknama
⤿ ${prefix}pasangan
⤿ ${prefix}jadiannikah
⤿ ${prefix}sifatusaha
⤿ ${prefix}rezeki
⤿ ${prefix}pekerjaan
⤿ ${prefix}nasib
⤿ ${prefix}penyakit
⤿ ${prefix}tarot
⤿ ${prefix}fengshui
⤿ ${prefix}haribaik
⤿ ${prefix}harisangar
⤿ ${prefix}harisial
⤿ ${prefix}nagahari
⤿ ${prefix}arahrezeki
⤿ ${prefix}peruntungan
⤿ ${prefix}weton
⤿ ${prefix}karakter
⤿ ${prefix}keberuntungan
⤿ ${prefix}memancing
⤿ ${prefix}masasubur
⤿ ${prefix}zodiak 
⤿ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *TELEGRAM STICKER* 」
⤿ ${prefix}awoawo
⤿ ${prefix}benedict
⤿ ${prefix}chat
⤿ ${prefix}dbfly
⤿ ${prefix}dino_kuning
⤿ ${prefix}doge
⤿ ${prefix}gojosatoru
⤿ ${prefix}hope_boy
⤿ ${prefix}jisoo
⤿ ${prefix}kr_robot
⤿ ${prefix}kucing
⤿ ${prefix}lonte
⤿ ${prefix}manusia_lidi
⤿ ${prefix}menjamet
⤿ ${prefix}meow
⤿ ${prefix}nicholas
⤿ ${prefix}patrick
⤿ ${prefix}popoci
⤿ ${prefix}sponsbob
⤿ ${prefix}kawan_sponsbob
⤿ ${prefix}tyni
`}

exports.ephotomenu = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *EPHOTO360 MENU* 」
⤿ ${prefix}youtubegold
⤿ ${prefix}youtubesilver
⤿ ${prefix}facebookgold
⤿ ${prefix}facebooksilver
⤿ ${prefix}instagramgold
⤿ ${prefix}instagramsilver
⤿ ${prefix}twittergold
⤿ ${prefix}twittersilver
⤿ ${prefix}retrotext
⤿ ${prefix}halloweenbats
⤿ ${prefix}texthalloween
⤿ ${prefix}cardhalloween
⤿ ${prefix}birthdaycake
⤿ ${prefix}thundertext
⤿ ${prefix}icetext
⤿ ${prefix}milkcake
⤿ ${prefix}snowontext
⤿ ${prefix}metalstar
⤿ ${prefix}dragonfire
⤿ ${prefix}zombie3d
⤿ ${prefix}merrycard
⤿ ${prefix}generalexam 
⤿ ${prefix}viettel
⤿ ${prefix}embroider
⤿ ${prefix}graffititext
⤿ ${prefix}graffititext2
⤿ ${prefix}graffititext3
⤿ ${prefix}covergraffiti
⤿ ${prefix}moderngold
⤿ ${prefix}capercut
⤿ ${prefix}lovecard
⤿ ${prefix}heartflashlight
⤿ ${prefix}heartcup
⤿ ${prefix}sunglightshadow
⤿ ${prefix}graffiti3d
⤿ ${prefix}moderngoldsilver
⤿ ${prefix}moderngold2
⤿ ${prefix}moderngold3
⤿ ${prefix}fabrictext
⤿ ${prefix}masteryavatar
⤿ ${prefix}messagecoffee
⤿ ${prefix}announofwin
⤿ ${prefix}writeblood
⤿ ${prefix}horrorletter
⤿ ${prefix}writehorror
⤿ ${prefix}shirtclub
⤿ ${prefix}angelwing
⤿ ${prefix}christmasseason
⤿ ${prefix}projectyasuo
⤿ ${prefix}lovelycute
⤿ ${prefix}womansday
⤿ ${prefix}covergamepubg
⤿ ${prefix}nameonheart
⤿ ${prefix}funnyhalloween
⤿ ${prefix}lightningpubg
⤿ ${prefix}greetingcardvideo 
⤿ ${prefix}christmascard 
⤿ ${prefix}galaxybat
⤿ ${prefix}writegalaxy
⤿ ${prefix}starsnight
⤿ ${prefix}noeltext
⤿ ${prefix}textcakes
⤿ ${prefix}pubgbirthday
⤿ ${prefix}galaxywallpaper
⤿ ${prefix}pubgglicthvideo 
⤿ ${prefix}pubgmascotlogo
⤿ ${prefix}realembroidery
⤿ ${prefix}vintagetelevision
⤿ ${prefix}funnyanimations
⤿ ${prefix}glowingtext
⤿ ${prefix}textonglass
⤿ ${prefix}cartoonstyle
⤿ ${prefix}multicolor
⤿ ${prefix}watercolor2
⤿ ${prefix}textsky
⤿ ${prefix}summerbeach
⤿ ${prefix}1917text
⤿ ${prefix}puppycute
⤿ ${prefix}rosebirthday
`
}

exports.logomenu = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *LOGO MENU* 」
⤿ ${prefix}coverbannerlol 
⤿ ${prefix}pubglogomaker 
⤿ ${prefix}colorfulpubg 
⤿ ${prefix}astronotspace 
⤿ ${prefix}wallpaperaov 
⤿ ${prefix}maketeamlogo 
⤿ ${prefix}circlemarcotteam 
⤿ ${prefix}wallpaperml 
⤿ ${prefix}dragonballfb 
⤿ ${prefix}bannerofaov 
⤿ ${prefix}effect3donbeach 
⤿ ${prefix}cutegirlgamer 
⤿ ${prefix}footballteam 
⤿ ${prefix}beautifulshimmering 
⤿ ${prefix}pubgcutelogo 
⤿ ${prefix}elegantrotation 
⤿ ${prefix}logogamingassasin 
⤿ ${prefix}introvideomaker 
⤿ ${prefix}gaminglogo4fvs
⤿ ${prefix}blueneon 
⤿ ${prefix}metalmascot 
⤿ ${prefix}anonymous
⤿ ${prefix}lolpentakill 
⤿ ${prefix}avatarleagueofking 
⤿ ${prefix}avatarff 
⤿ ${prefix}overwatchwallpaper 
⤿ ${prefix}rovwallpaperhd 
⤿ ${prefix}rovwallpaper 
⤿ ${prefix}beautifulgalaxylol 
⤿ ${prefix}crossfirecover 
⤿ ${prefix}lolwallpaper 
⤿ ${prefix}coverdota2 
⤿ ${prefix}coverleagueofking 
⤿ ${prefix}avatar3q360 
⤿ ${prefix}coverofwarface 
⤿ ${prefix}newlolavatar 
⤿ ${prefix}csgocover 
⤿ ${prefix}coverloknew
⤿ ${prefix}coverfblol 
⤿ ${prefix}overwatchcover 
⤿ ${prefix}crossfirestyle 
⤿ ${prefix}avatarlolbyname 
⤿ ${prefix}lolcoverbyname 
⤿ ${prefix}cyberhunterfb 
⤿ ${prefix}coverfreefirefb 
⤿ ${prefix}gamingmascot 
⤿ ${prefix}coveronepiecefb 
⤿ ${prefix}bannerytcsgo 
⤿ ${prefix}fbgamepubgcover 
⤿ ${prefix}banneroflol 
⤿ ${prefix}bannerofaov2 
⤿ ${prefix}teamlogo 
⤿ ${prefix}companylogo2 
⤿ ${prefix}companylogo 
⤿ ${prefix}gradientlogo 
⤿ ${prefix}pencilsketch 
⤿ ${prefix}gunlogogaming 
⤿ ${prefix}banneroffreefire 
⤿ ${prefix}letterlogos 
⤿ ${prefix}bannerofoverwatch 
⤿ ${prefix}bannerofapex 
⤿ ${prefix}bannerofpubg 
⤿ ${prefix}mascotstyle
⤿ ${prefix}logoaccording 
⤿ ${prefix}avataroverwatch
`
}

exports.islammenu = (prefix, quotes) =>{
	return` 🌱 Quotes : ${quotes}
	
❒「 *ISLAMIC MENU* 」
⤿ ${prefix}asmaulhusna
⤿ ${prefix}kisahnabi [nabi]
⤿ ${prefix}jadwalshalat [daerah]
⤿ ${prefix}randomquran
⤿ ${prefix}randomquran2
⤿ ${prefix}listsurah
⤿ ${prefix}tafsirsurah [surah]
⤿ ${prefix}alquranaudio [surah|ayat]
`
}

exports.cerpen = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *CERPEN MENU* 」
⤿ ${prefix}cerpen anak
⤿ ${prefix}cerpen bahasa daerah
⤿ ${prefix}cerpen bahasa inggris
⤿ ${prefix}cerpen bahasa jawa
⤿ ${prefix}cerpen bahasa sunda
⤿ ${prefix}cerpen budaya
⤿ ${prefix}cerpen cinta
⤿ ${prefix}cerpen cinta islami
⤿ ${prefix}cerpen cinta pertama
⤿ ${prefix}cerpen cinta romantis
⤿ ${prefix}cerpen cinta sedih
⤿ ${prefix}cerpen cinta segitiga
⤿ ${prefix}cerpen cinta sejati
⤿ ${prefix}cerpen galau
⤿ ${prefix}cerpen gokil
⤿ ${prefix}cerpen inspiratif
⤿ ${prefix}cerpen jepang
⤿ ${prefix}cerpen kehidupan
⤿ ${prefix}cerpen keluarga
⤿ ${prefix}cerpen kisah nyata
⤿ ${prefix}cerpen korea
⤿ ${prefix}cerpen kristen
⤿ ${prefix}cerpen liburan
⤿ ${prefix}cerpen lingkungan
⤿ ${prefix}cerpen lucu
⤿ ${prefix}cerpen malaysia
⤿ ${prefix}cerpen mengharukan
⤿ ${prefix}cerpen misteri
⤿ ${prefix}cerpen motivasi
⤿ ${prefix}cerpen nasihat
⤿ ${prefix}cerpen nasionalisme
⤿ ${prefix}cerpen olahraga
⤿ ${prefix}cerpen patah hati
⤿ ${prefix}cerpen penantian
⤿ ${prefix}cerpen pendidikan
⤿ ${prefix}cerpen pengalaman pribadi
⤿ ${prefix}cerpen pengorbanan
⤿ ${prefix}cerpen penyesalan
⤿ ${prefix}cerpen perjuangan
⤿ ${prefix}cerpen perpisahan
⤿ ${prefix}cerpen persahabatan
⤿ ${prefix}cerpen petualangan
⤿ ${prefix}cerpen ramadhan
⤿ ${prefix}cerpen remaja
⤿ ${prefix}cerpen renungan
⤿ ${prefix}cerpen rindu
⤿ ${prefix}cerpen rohani
⤿ ${prefix}cerpen romantis
⤿ ${prefix}cerpen sastra
⤿ ${prefix}cerpen sedih
⤿ ${prefix}cerpen sejarah
⤿ ${prefix}cerpen slice of life
⤿ ${prefix}cerpen terjemahan
⤿ ${prefix}cerpen thriller
`
}
exports.berita = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *BERITA MENU* 」
⤿ ${prefix}merdeka-news 
⤿ ${prefix}kontan-news 
⤿ ${prefix}cnbc-news 
⤿ ${prefix}tribun-news 
⤿ ${prefix}indozone-news 
⤿ ${prefix}kompas-news 
⤿ ${prefix}detik-news 
⤿ ${prefix}daily-news 
⤿ ${prefix}inews-news 
⤿ ${prefix}okezone-news 
⤿ ${prefix}sindo-news 
⤿ ${prefix}tempo-news 
⤿ ${prefix}antara-news 
⤿ ${prefix}cnn-news 
⤿ ${prefix}fajar-news
⤿ ${prefix}berita
⤿ ${prefix}kompas
⤿ ${prefix}okezone
⤿ ${prefix}antara
⤿ ${prefix}infohoax
⤿ ${prefix}coronameninggal
`
}
exports.tools = (prefix, quotes) =>{
return`🌱 Quotes : ${quotes}

❒「 *TOOLS MENU* 」
⤿ ${prefix}translate [kode_bahasa] [text]
⤿ ${prefix}kalkulator
⤿ ${prefix}bilangangka
⤿ ${prefix}jumlahangka
⤿ ${prefix}balikangka
⤿ ${prefix}balikhuruf
⤿ ${prefix}besarkecil
⤿ ${prefix}kapital
⤿ ${prefix}halah
⤿ ${prefix}hilih
⤿ ${prefix}huluh
⤿ ${prefix}heleh
⤿ ${prefix}holoh
`
}