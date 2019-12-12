const { Article } = require('../../model/article')
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
	let page = req.query.page
	req.app.locals.currentLink = 'article'
	let articles = await pagination(Article).find().populate('author').page(page).size(6).display(3).exec()

	res.render('admin/article', {
		articles
	})
}
