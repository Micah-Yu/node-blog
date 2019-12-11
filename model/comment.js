const mongoose = require('mongoose')

// 设定集合规则
const commentSchema = new mongoose.Schema({
	aid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	},
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	time: {
		type: Date
	},
	content: {
		type: String
	}
});
// 创建集合并应用规则
const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
	Comment
}
