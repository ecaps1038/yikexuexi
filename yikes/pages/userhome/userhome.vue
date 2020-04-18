<template>
	<view >
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-center"></view>
			<view class="top-bar-right">
				<view class="more-img" >
					<image src="../../static/images/userhome/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai" :animation="animationData4"></view>
			<image src="../../static/images/img/three.png" class="bg-img" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<view class="sex" :style="{background:sexBg}" :animation="animationData3">
					<image src="../../static/images/userhome/female.png"></image>
				</view>
				<image src="../../static/images/img/three.png" mode="aspectFill" class="user-img" :animation="animationData2"></image>
			</view>
			<view class="user-imf">
				<view class="name">{{user.name}}</view>
				<view class="nick">昵称：{{user.nick}}</view>
				<view class="intr">{{user.intr}}</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn btn1" @tap="addFriendAnimat">加为好友</view>
		</view>
		<view class="add-misg" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation="animationData">
			<view class="name">{{user.name}}</view>
			<textarea :value="myname+'请求加为好友～'" maxlength="120" class="add-main"></textarea>
		</view>
		<view class="add-bt bottom-bar" :animation="animationData1">
			<view class="close btn1" @tap="addFriendAnimat">取消</view>
			<view class="send btn1">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexBg:'rgba(255,93,91,1)',		//性别颜色
				addHeight:'',			 		//add版块高度
				animationData:{},				//动画
				animationData1:{},				//动画
				animationData2:{},				//动画
				animationData3:{},				//动画
				animationData4:{},				//动画
				isAdd:false,
				myname:'春雨',
				user:{
					name:'秋风',
					nick:'丘之国',
					intr:'逸刻时光，做美好的自己。逸刻时光，做美好的自己。逸刻时光，做美好的自己。逸刻时光，做美好的自己。逸刻时光，做美好的自己。'
				}
			};
		},
		onReady:function(){
			this.getElementStyle();
		},
		methods:{
			//返回登录页面
			backOne: function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			//获取页面高度
			getElementStyle: function(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.bg').boundingClientRect(data => {
				 // console.log("得到布局位置信息" + JSON.stringify(data));
				  //console.log("节点离页面顶部的距离为" + data.top);
				  this.addHeight = data.height-186;
				}).exec();
			},
			//添加好友动画
			addFriendAnimat: function(){
				this.isAdd = !this.isAdd;
				var animation = uni.createAnimation({
				    duration: 300,
				    timingFunction: 'ease',
				})
				var animation1 = uni.createAnimation({
				    duration: 300,
				    timingFunction: 'ease',
				})
				var animation2 = uni.createAnimation({
				    duration: 300,
				    timingFunction: 'ease',
				})
				var animation3 = uni.createAnimation({
				    duration: 300,
				    timingFunction: 'ease',
				})
				var animation4 = uni.createAnimation({
				    duration: 300,
				    timingFunction: 'ease',
				})
				if(this.isAdd){
					animation.bottom(0).step()
					animation1.bottom(0).step()
					animation2.width(120).height(120).step()
					animation3.opacity(0).step()
					animation4.backgroundColor('rgba(255,228,49,0.6)').step()
				}else{
					animation.bottom(-this.addHeight).step()
					animation1.bottom(-100).step()
					animation2.width(200).height(200).step()
					animation3.opacity(1).step()
					animation4.backgroundColor('rgba(255,255,255,0)').step()
				}
				    this.animationData = animation.export()
					this.animationData1 = animation1.export()
					this.animationData2 = animation2.export()
					this.animationData3 = animation3.export()
					this.animationData4 = animation4.export()
			}
			
		}
		
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.bg{
		position: fixed;
		z-index: -2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.bg-bai{
			width: 100%;
			height: 100%;
			//background-color: rgba(255,255,255,0.6);
		}
		.bg-img{
			opacity: 0.4;
			position:absolute;
			z-index: -1;
			left: -10rpx;
			top: -10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
	}
	.main{
		text-align: center;
		padding-top: 240rpx;
		
		.user-header{
			margin: 0 auto;
			width:412rpx;
			height:412rpx;
			position: relative;
			.sex{
				position: absolute;
				z-index: 11;
				bottom: 22rpx;
				right: 22rpx;
				width:64rpx;
				height:64rpx;
				border-radius:$uni-border-radius-circle;
				image{
					padding: 16rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}
			.user-img{
				z-index: 10;
				top: 0;
				width:400rpx;
				height:400rpx;
				border-radius:48rpx;
				border:6rpx solid rgba(255,255,255,1);
				box-shadow:0px 36rpx 40rpx 0px rgba(39,40,50,0.1);
			}
		}
		.user-imf{
			padding-top: 42rpx;
			.name{
				font-size:52rpx;
				color:$uni-text-color;
				line-height:74rpx;
			}
			.nick{
				font-size: $uni-font-size-base;
				line-height: 40rpx;
				color: $uni-text-color;
			}
			.intr{
				padding: 20rpx 100rpx;
				font-size: $uni-font-size-base;
				font-weight:300;
				color: $uni-text-color;;
				line-height:48rpx;
			}
		}
	}
	.bottom-bar{
		.bottom-btn{
			background: $uni-color-primary;
			margin: 0 $uni-spacing-col-base;
		}
	}
	.add-misg{
		position: fixed;
		//bottom: 0;
		width:100%;
		box-sizing: border-box;
		padding: 0 56rpx;
		//height:1252rpx;
		background:rgba(255,255,255,1);
		border-radius:40rpx 40rpx 0px 0px;
		.name{
			padding: 168rpx 0 40rpx;
			font-size:52rpx;
			color: $uni-text-color;
			line-height:74rpx;
		}
		.add-main{
			padding: 18rpx 22rpx;
			box-sizing: border-box;
			width:100%;
			height:420rpx;
			background:$uni-bg-color-grey;
			border-radius:$uni-border-radius-base;
			font-size:$uni-font-size-lg;
			color: $uni-text-color;
			line-height:44rpx;
		}
	}
	.add-bt{
		bottom: -200rpx;	
		z-index: 100;
		display: flex;
		.close{
			//flex: 1;
			width: 172rpx;
			background:$uni-bg-color-hover;
			margin-left: $uni-spacing-col-base;
		}
		.send{
			margin:0 $uni-spacing-col-base;
			flex: auto;
			background:$uni-color-primary;
		}
	}
</style>
