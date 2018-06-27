const User = require('./model/User.js')

let user = new User({
	oauth: 'github',
	name: 'saltfish666',
	id: 'githubsaltfish666',
	email: '',
	token: '3333',
	access_token: 'eeeee'
})

user.save( (err, res) => {
	if(err) return console.log(err)

	console.log(res)   //哪怕结果只有一个，也是数组形式
})