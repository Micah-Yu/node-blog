const { User } = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
	let { id } = req.query
	let { username, email, role, state, password } = req.body
	let user = await User.findOne({_id: id})
	const isMatch = await bcrypt.compare(password, user.password)

	if (isMatch) {
		await User.updateOne({_id: id}, {
			username,
			email,
			role,
			state
		})

		res.redirect('/admin/user')
	} else {
		let obj = {path: '/admin/user-edit', message: '密码错误，无法更改用户信息', id: id}
		next(JSON.stringify(obj))
	}

}
