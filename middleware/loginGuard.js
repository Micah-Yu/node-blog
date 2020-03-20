const guard = (req, res, next) => {
  if (req.url !== '/login' && !req.session.username) {
    res.redirect('/admin/login')
  } else {
  	if (req.session.role == 'normal' && req.url !== '/logout') {
  	  return res.redirect('/')
  	}
    next()
  }
}

module.exports = guard
