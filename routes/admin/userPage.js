const { User } = require('../../model/user')

module.exports =async (req, res, next) => {
	req.app.locals.currentLink = 'user'

	let pagesize = 3
	let page = req.query.page || 1
	let total = await User.countDocuments({})
	let pages = Math.ceil(total / pagesize)
	let start = (page - 1) * pagesize
	let users = await User.find({}).limit(pagesize).skip(start)

  res.render('admin/user', {
  	users,
	  page,
	  pages
  });
}
