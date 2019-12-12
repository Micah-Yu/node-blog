const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb+srv://Micah:4151090@blog-ge0fc.mongodb.net/blog?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
	.then(() => console.log('connect success'))
	.catch(reason => console.log('connect fail',reason))

// 设定集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 20
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	state: {
		type: Number,
		default: 0
	}
});
// 创建集合并应用规则
const User = mongoose.model('User', userSchema);

//密码加密，插入数据功能
const createUser = async (obj) => {
	let salt = await bcrypt.genSalt(10)
	let pass = await bcrypt.hash(obj.password, salt)
	obj.password = pass
	return User.create(obj)
}

//用户信息
obj = {
	"state" : 1,
	"username" : "Micah",
	"email" : "1058786744@qq.com",
	"password" : "89757",
	"role" : "admin"
}

createUser(obj)
