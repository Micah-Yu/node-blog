const {Comment} = require('../../model/comment')

module.exports = async (req, res) => {
	const { uid, aid, content } = req.body

	await Comment.create({
		uid: uid,
		aid: aid,
		content: content,
		time: new Date()
	})

	res.redirect('/article?id=' + aid)
}
