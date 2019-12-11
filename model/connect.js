const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('connect success'))
    .catch(reason => console.log('connect fail',reason))
