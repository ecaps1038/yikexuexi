//引入解析req.body插件
var bodyParser = require('body-parser');

const express = require('express')
const app = express()
const port = 3000



//设置允许跨域访问该服务.
app.all('*', function(req, res, next) {
  //允许访问ip *为所有
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
        //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200); 
    } else { 
        next(); 
    }
});

//解析前端数据
app.use(bodyParser.json());

require('./router/index')(app);

//404页面
app.use(function(req,res,next){
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//出现错误处理
app.use(function(err,req,res,next){
	res.status(err.status || 500)
	res.send(err.message);
})

app.listen(port, () => console.log(`您已启动端口： ${port}!`))