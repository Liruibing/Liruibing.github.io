$(function(){
	queryHousesByid();
	querySession();
});
//定义全局变量
var url=window.location.href;
//获取推荐房源的id;
var temp=url.split("?")[1];  
var id=temp.split("=")[1];
//获取命名空间
url = url.substring(0, url.lastIndexOf('/'));
url=url.substring(0, url.lastIndexOf('/'));
/*.......................推荐房源的详细信息.............................*/
function queryHousesByid(){
	$.ajax({
		type: 'post',
		url: url+'/queryHousesByid.action',
		async: true,
		cache: false,
		data:{id:id},
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			if(data.success){
			 $.each(data.data,function(i,houses) {
				 housesImg(houses['photo']);
				 likeHouses(houses['price']);
				/* housesFurniture(houses['furniture']);*/
				 var item='<h2>'+houses['tittle']+'</h2><p><span>租金：</span><b>'+houses['price']+'</b><span class="red">元/月</span></p>'+
					'<p><span class="two">面积：'+houses['area']+'</span><span class="two">户型：'+houses['room']+'</span></p>'+
					'<p><span class="two">朝向：'+houses['direction']+'</span><span class="two">装修：'+houses['hlevel']+'</span></p>'+
					'<p><span class="two">租金押付：'+houses['paymethod']+'</span><span class="two">租赁方式：'+houses['rentway']+'</span></p>'+
					'<p><span>'+houses['features']+'</span></p><p><span>地址：'+houses['address']+'</span></p>';
					$('#housesUp').append(item);
				var item2='<b>'+houses['linkphone']+'</b><span class="name">'+houses['linkman']+'</span>';
				$('#housesLink').append(item2);
				var item3='<a style="cursor:hand" onclick="addCollect('+houses['id']+');"><i>&#xe625;</i>收藏</a>';
				 $("#collect").append(item3);
			 });
			}else{
				alert("未找到房源信息！");
			};
		}
	
	});
};
//房屋图片信息
function housesImg(photo){
	var housesPhoto=photo.split(",");
	var item="";
	for(var i=0;i<housesPhoto.length;i++){
		item +='<li><img src="'+url+'/upload/'+housesPhoto[i]+'" height="78" width="106" alt=""></li>';
	}
	$("#housesPhoneUnder").append(item);
	
};
//房屋基本信息

//房屋家具
/*function housesFurniture(furniture){
	var fur=furniture.split(",");
	var item="";
	for(var i=0;i<fur.length;i++){
	}

}*/
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

//搜索房源的跳转
function skipUrl(){
	var hcondition=$("#skipUrl").val();
	if(hcondition !='请输入小区名称/区域/厅室 ' && hcondition!=""){
		location.href=url+'/index/screen.html?hcondition='+hcondition;
	}else{
		location.href=url+'/index/screen.html';
	}
}	 
//根据查看房源的价格来猜租客喜欢的房源 取出前四个房源
function likeHouses(price){
	$.ajax({
		type: 'post',
		url: url+'/queryHousesLike.action',
		async: true,
		data:{price:price},
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			if(data.success){
			 $.each(data.data,function(i,houses) {
				 if(i<=4){
				 var photoStr=editPhoto(houses['photo']);
				 var item='<li><div class="u-like-pic"><a href="'+url+'/index/article.html?id='+houses['id']+'"><img src="'+url+'/upload/'+photoStr+'" height="193" width="264" alt=""></a>'+
				 '</div><h4>'+houses['tittle']+'</h4>'+
				 '<p>'+houses['room']+'|'+houses['rentway']+'|'+houses['hlevel']+'|'+houses['floor']+'层/'+houses['countfloor']+'层</p>'+
				 '<p><i>&#xe616;</i>'+houses['address']+'</p></li>';
				$("#likeHouses").append(item);
				 } });
			}else{
				console.log("未查询到该区间的房源");
			}
		}
	
	});
}
//猜你喜欢的房源 处理图片
var editPhoto=function(photoStr){
	 var arr=photoStr.split(",");
	 		return arr[0];
	 	};
	
//添加收藏 参数为房子的id
function addCollect(hid){
	$.ajax({
		type: 'post',
		url: url+'/addCollect.action',
		async: true,
		data:{hid:hid},
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			if(data.resultCode =="0000"){
				alert("添加收藏成功！");
			}else{
				alert("添加收藏失败！");
			}
		}
	
	});
	
}


