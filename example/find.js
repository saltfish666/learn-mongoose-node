const User = require('./model/User.js')

let where = {
	name: 'saltfish666'
}

User.find( where, (err, res) => {
	if(err) return console.log(err)

	console.log(res)
})