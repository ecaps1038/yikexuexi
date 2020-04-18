var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/xuexi',{ useNewUrlParser: true , useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.info('数据库yike 打开成功！')
});

module.exports = db;