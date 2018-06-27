const User = require('./model/User.js')

let where = {
	name: 'saltfish666'
}

let user = {
	token: 'tooooooken',
	access_token: 'eeeee'
}

User.update(where, user, (err, res) => {  //res { n: 1, nModified: 1, ok: 1 }
    if(err) return console.log(err)

    console.log(res)
})