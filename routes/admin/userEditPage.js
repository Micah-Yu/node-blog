const {User} = require('../../model/user')

module.exports = async (req, res) => {

	req.app.locals.currentLink = 'user'

	const {message, id} = req.query

	if (id) {
		let user = await User.findOne({_id: id})

		res.render('admin/user-edit', {
			errmsg: message,
			id: id,
			user: user,
			link: '/admin/user-modify?id=' + id,
			button: '修改'
		});
	} else {
		res.render('admin/user-edit', {
			errmsg: message,
			link: '/admin/user-add',
			button: '添加'
		});
	}


}
