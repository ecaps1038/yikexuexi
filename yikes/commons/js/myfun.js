export default{
	//首页时间转化
	dateTime(e){
		let old = new Date(e);
		let now = new Date();
		//获取old具体时间
		let d = old.getTime();
		let h = old.getHours();
		let m = old.getMinutes();
		let Y = old.getFullYear();
		let M = old.getMonth()+1;
		let D = old.getDate();
		//获取now具体时间
		let nd =now.getTime();
		let nh = now.getHours();
		let n = now.getMinutes();
		let nY = now.getFullYear();
		let nM = now.getMonth()+1;
		let nD = now.getDate();
		
		//当天的时间
		if(D === nD && M === nM && Y === nY){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return h+':'+m;
		}
		
		//昨天时间
		if(D+1 === nD && M === nM && Y === nY){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return '昨天 '+h+':'+m;
		}else{
			//大于两天
			return Y+'/'+M+'/'+D;
		}
		
	}
}