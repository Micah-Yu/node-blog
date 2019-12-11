module.exports = (req, res) => {
    req.session.destroy(() => {
      res.clearCookie('connect.sid')
	    req.app.locals.userInfo = null
      res.redirect('/admin/login')
    })
}
