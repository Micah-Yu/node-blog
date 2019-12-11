const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Joi = require('@hapi/joi')

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


const createUser = async (obj) => {
  let salt = await bcrypt.genSalt(10)
  let pass = await bcrypt.hash(obj.password, salt)
	obj.password = pass
  return User.create(obj)
}

// createUser()

const validate = (obj) => {
	const schema = Joi.object({
		username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合要求')),
		email: Joi.string().email().required().error(new Error('邮箱格式错误')),
		password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式错误')),
		role: Joi.string().valid('normal', 'admin').required(),
		state: Joi.number().valid(0, 1).required()
	})

	return schema.validateAsync(obj);
}

module.exports = {
  User,
	createUser,
	validate
}
