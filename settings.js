/*
  Created By Riy
  Base Ori : DikaArdnt
  Kalau Mau Nambahin Fitur Di › index.js
  Edit Tampilan Menu Dll. Di › Language › help.js
  */

  //gausah di apa² in!
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riychdwayne.herokuapp.com',
  }
  
  global.APIKeys = {
  'https://api-riychdwayne.herokuapp.com': 'RiyGanz',
  }

  // Setting Owner
  global.owner = ['62895332008770','62895332008770','62895332008770'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
  global.premium = ['62895332008770'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
  global.ownernomer = '62895332008770' //ubah jadi nomor mu, note tanda ' gausah di hapus!

  // Set Nama Own & Bot
  global.ownername = 'Mars' //ubah jadi nama mu, note tanda ' gausah di hapus!
  global.botname = 'Bunny' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.footer = 'Mars' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Kebutuhan Button & Kontak
  //ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
  global.youtube = 'https://youtube.com/akumars'
  global.mygc = 'https://chat.whatsapp.com/CRY23lVKmXB7sCMhHmcwVw'
  global.myweb = 'https://www.instagram.com/m_arifin_syam/'
  global.region = 'indonesia'

  // Set Wm
  global.packname = '© Bunny' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.author = 'Mars' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Nama Session
  //gausah di apa² in!
  global.sessionName = 'session'

  // Set Image
  //terserah mau ubah apa nggak, menurut gua jangan di ubah!
  global.thumb = fs.readFileSync('./image/chika.jpg')
  global.velochika = fs.readFileSync('./image/chika.mp4')

  // Set Image Welcome
  //terserah mau ubah apa nggak, menurut gua jangan di ubah!
  global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

  // Random Image Menu
  //gausah di apa² in!
  global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Set Prefix
  //gausah di apa² in!
  global.prefa = ['','!','.','🐦','🐤','🗿']
  
  // Message
  //terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
  global.mess = {
  success: 'Done.',
  admin: 'Fitur Khusus Admin Group!',
  botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
  owner: 'Fitur Khusus Owner Bot',
  group: 'Fitur Digunakan Hanya Untuk Group!',
  private: 'Fitur Digunakan Hanya Untuk Private Chat!',
  bot: 'Fitur Khusus Pengguna Nomor Bot',
  wait: 'Sedang Di Proses...',
  error: 'Fitur Sedang Error!',
  }

  // Batas Akhir
  //gausah si apa² in!
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
