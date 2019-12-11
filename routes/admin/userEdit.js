const { User, createUser, validate} = require('../../model/user')
// const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
	try {
		await validate(req.body)
	} catch (err) {
		let msg = JSON.stringify({path: '/admin/user-edit', message: err.message})
		return next(msg)
	}

	let user = await User.findOne({email: req.body.email})

	if (user) {
		let msg = JSON.stringify({path:'/admin/user-edit', message: '邮箱已经注册'})
		return next(msg)
	} else {
		await createUser(req.body)
		res.redirect('/admin/user')
	}
}
