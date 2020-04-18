var dbmodel = require('../model/dbmodel');
var User = dbmodel.model('User');

exports.findUser = function(res){
	User.find(function(err,val){
		if(err){
			console.log('用户数据查找失败！'+ err);
		}else{
			res.send(val);
		}
	})
}