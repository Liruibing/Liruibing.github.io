$(function(){
	querySession();
	queryHousesTop();
});


/*定义全局变量*/
var url=window.location.href;
url = url.substring(0, url.lastIndexOf('/'));
url=url.substring(0, url.lastIndexOf('/'));


/*..............是否登录..................*/
//获取是否登录
function querySession(){
		$.ajax({
			type: 'post',
			url: url+'/loginSession.action',
			async: true,
			cache: false,
			contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
			success: function(data){
				if(data.success){
				 $.each(data.data,function(i,landlord) {
					 var name=landlord['lname'];
					 var item='欢迎<a href="edit.html">'+name+'</a> <span>|</span><a href="entry.html">退出</a>';
					$("#loginSession").append(item);
					 });
				}else{
					var item='<a href="entry.html">登录</a><span>|</span><a href="enroll.html">注册</a>';
					$("#loginSession").append(item);
				}
			}
		
		});
	}
/*.........................推荐房源.................................*/
function queryHousesTop(){
	$.ajax({
		type: 'post',
		url: url+'/queryHousesTop.action',
		async: true,
		cache: true,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			if(data.success){
				var item;
			 $.each(data.data,function(i,houses) {
				 var photo=editPhoto(houses['photo']);
				   item='<li><a href="'+url+'/index/article.html?id='+houses['id']+'"><img src="'+url+'/upload/'+photo+'" height="208" width="254" alt=""></a><h3>'+houses['villageName']+'</h3>'+
						'<span>'+houses['room']+'</span><b>'+houses['price']+'</b><span>元／月</span></li>';
					$('#housesTopList').append(item);
				 });
			}else{
				alert("没有推荐房源");
			}
		}
	
	});
}
//处理照片的路径
var editPhoto=function(photoStr){
var arr=photoStr.split(",");
		return arr[0];
	};



