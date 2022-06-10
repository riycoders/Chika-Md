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
  global.owner = ['6281575886399','6281575886399','6281575886399'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
  global.premium = ['6281575886399'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
  global.ownernomer = '6281575886399' //ubah jadi nomor mu, note tanda ' gausah di hapus!

  // Set Nama Own & Bot
  global.ownername = 'Riy' //ubah jadi nama mu, note tanda ' gausah di hapus!
  global.botname = 'Chika-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.footer = 'Riy' //ubah jadi nama mu, note tanda ' gausah di hapus!

  // Set Kebutuhan Button & Kontak
  //ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
  global.youtube = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
  global.mygc = 'https://chat.whatsapp.com/CRY23lVKmXB7sCMhHmcwVw'
  global.myweb = 'https://api-riychdwayne.herokuapp.com'
  global.region = 'indonesia'

  // Set Wm
  global.packname = '© Chika-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
  global.author = 'Riy' //ubah jadi nama mu, note tanda ' gausah di hapus!

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
  success: '_Done._',
  admin: '_Fitur Khusus Admin Group!_',
  botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
  owner: '_Fitur Khusus Owner Bot_',
  group: '_Fitur Digunakan Hanya Untuk Group!_',
  private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
  bot: '_Fitur Khusus Pengguna Nomor Bot_',
  wait: '_Sedang Di Proses..._',
  error: '_Fitur Sedang Error!_',
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
