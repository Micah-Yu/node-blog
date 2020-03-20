module.exports = (req, res) => {
	console.log(req.session)
    req.session.destroy(() => {
    	console.log(888)
      res.clearCookie('connect.sid')
	    req.app.locals.userInfo = null
      res.redirect('/admin/login')
    })
}
