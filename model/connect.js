const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

//云数据库
mongoose.connect('mongodb+srv://Micah:4151090@blog-ge0fc.mongodb.net/blog?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('connect success'))
    .catch(reason => console.log('connect fail',reason))

//本地数据库
// mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true , useUnifiedTopology: true })
// 		.then(() => console.log('connect success'))
// 		.catch(reason => console.log('connect fail',reason))
