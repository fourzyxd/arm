let handler = async (m, { conn }) => {
	//tolong jngan diganti atau dihapus u cuma make
    let txt = `
Bot ini menggunakan script github Fourzy

Recode & Tambah Fitur By Fourzylol ini linknya silahkan comot https://github.com/fourzylol/
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


