const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/xls-files', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


const dataFile = mongoose.model('dataFile', {
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

module.exports = dataFile