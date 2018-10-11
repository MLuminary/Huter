let mongoose = require('mongoose')
let Schema = mongoose.Schema // 定义表类型

let messageSchema = new Schema({
  '优秀社区': Array,
  '学习网站': Array
})

module.exports = mongoose.model('Message', messageSchema)
