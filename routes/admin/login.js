const {User} = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if (email.trim().length === 0 || password.trim().length === 0) {
    return res.status(400).render('admin/error',{msg: '邮箱或密码错误'})
  } else {
    if (user) {
			let isMatch = await bcrypt.compare(password, user.password)
      if (isMatch) {
        req.session.username = user.username
	      req.session.role = user.role
        req.app.locals.userInfo = user

	      if (user.role == 'admin') {
		      res.redirect('/admin/user')
	      } else {
	        res.redirect('/')
	      }

      } else {
        res.status(400).render('admin/error',{msg: '邮箱或密码错误'})
      }
    } else {
      res.status(400).render('admin/error',{msg: '邮箱或密码错误'})
    }
  }

}

