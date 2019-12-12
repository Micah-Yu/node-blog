const mongoose = require('mongoose')

// 设定集合规则
const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		maxlength: 20,
		minlength: 4,
		required: [true, '请填写文章标题']
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, '请选择作者']
	},
	publishDate: {
		type: Date,
		required: [true,'请选择时间'],
		default: Date.now
	},
	cover: {
		type: String,
		default: null
	},
	content: {
		type: String
	}
});
// 创建集合并应用规则
const Article = mongoose.model('Article', articleSchema);

module.exports = {
	Article
}
