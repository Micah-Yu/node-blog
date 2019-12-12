const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb+srv://Micah:4151090@blog-ge0fc.mongodb.net/blog?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('connect success'))
    .catch(reason => console.log('connect fail',reason))
