<template>
	<view class="content">
		<view class="top-bar">
			<navigator url="../signin/signin" hover-class="none" class="top-bar-left">
				<image src="../../static/images/img/four.png" class="my-img"></image>
			</navigator>
			<view class="top-bar-center">
				<image src="../../static/images/index/logo.png" class="logo"></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @tap="toSearch"><image src="../../static/images/index/search.png"></image></view>
				<view class="add"><image src="../../static/images/index/add.png"></image></view>
			</view>
		</view>
		<view class="main">
			<view class="friends">
				<view class="friend-list" >
					<view class="friend-list-l">
						<text class="tip">1</text>
						<image src="../../static/images/index/apply.png"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">13:43</view>
						</view>
						<view class="news">茫茫人海，相聚便是缘分</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friend-list" v-for="(item,index) in friends" :key="index">
					<view class="friend-list-l">
						<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
						<image :src="item.imgurl"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.time)}}</view>
						</view>
						<view class="news">{{item.news}}</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js';
	import myfun from '../../commons/js/myfun.js';
	export default {
		data() {
			return {
				friends:[],
			}
		},
		onLoad() {
			this.getFrinds();
		},
		methods: {
			changeTime: function(date){
				return myfun.dateTime(date);
			},
			getFrinds: function(){
				this.friends = datas.frineds();
				for(let i=0;i<this.friends.length;i++){
					this.friends[i].imgurl='../../static/images/img/'+this.friends[i].imgurl;
				}
				//console.log(this.friends);
			},
			//跳转到搜索页面
			toSearch: function(){
				uni.navigateTo({
				    url: '../search/search',
				});
			},
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
		background:rgba(255,255,255,0.96);
		border-bottom:1px solid $uni-border-color;
	}
	.main{
		padding-top: 104rpx;
		padding-bottom: $uni-spacing-col-base;
		//border: 1px solid red;
	}
	.friend-list{
		height: 96rpx;
		padding: 16rpx $uni-spacing-col-base;
		&:active{
			background-color: $uni-bg-color-grey;
		}
		.friend-list-l{
			position: relative;
			float: left;
			image{
				width:96rpx;
				height:96rpx;
				border-radius:$uni-border-radius-base;
				background-color: $uni-color-primary;
			}
			.tip{
				position: absolute;
				z-index: 10;
				top: -8rpx;
				left: 68rpx;
				min-width:20rpx ;
				padding: 0 8rpx;
				height:36rpx;
				background:$uni-color-warning;
				border-radius:18rpx;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.friend-list-r{
			padding-left: 128rpx;
			.top{
				height: 50rpx;
				.name{
					float: left;
					font-size:36rpx;
					font-weight:400;
					color:$uni-text-color;
					line-height:50rpx;
				}
				.time{
					//display:none;
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height:50rpx;
				}
			}
		}
		.news{
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			line-height: 40rpx;
			//width: 100%;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
		}
	}
</style>
