
$(function(){
	initData();
});
/*...................定义全局变量......................*/
//定义全局变量
var url=window.location.href;
//获取命名空间
url = url.substring(0, url.lastIndexOf('/'));
url=url.substring(0, url.lastIndexOf('/'));
//图片预览
$("#uploadPhoto").uploadPreview({ Img: "showPhoto", Width: 180, Height: 180 });
/*.......................................................*/

//查询个人信息
function initData(){
		$.ajax({
			type: 'post',
			url: url+'/loginSession.action',
			async: true,
			cache: false,
			dataType: 'json',
			contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
			success: function(data){
				if(data.success){
					if(data.data!=""){
				 $.each(data.data,function(i,landlord) {
					 var name=landlord['lname'];
					 var item='欢迎<a href="edit.html">'+name+'</a> <span>|</span><a href="entry.html">退出</a>';
					$("#loginSession").append(item);
					
					var item2='<img src="'+url+'/upload/'+landlord['lphoto']+'" height="80" width="80" alt="">'+
							'<p>'+landlord['lname']+'</p>';
					$("#news").append(item2);
					
					 });
				}else{
					var item='<a href="entry.html">登录</a><span>|</span><a href="enroll.html">注册</a>';
					$("#loginSession").append(item);
				}
			}
			}
		});
	}
//修改照片
function updatePhoto(){
	$.ajaxFileUpload({//文件上传插件
		type: 'post',
		url: url+'/uqdateLandlord.action', 
        secureuri: false,//通常设置为false
        fileElementId:'uploadPhoto',
        async: true,
		cache: true,
		dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
		success: function(data){
			if(data.resultCode == '0000'){
				document.location.reload();
			}
		}
	});
}
	

//修改昵称
function updateName(){
	$.ajax({
		type: 'post',
		url: url+'//uqdateLandlord.action',
		data: data,
		async: true,
		cache: false,
		dataType: 'json',
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			if(data.resultCode == '0000'){
				initData();
			}
		}
	});
}


//修改密码

function updatePassword(){
	$.ajax({
		type: 'post',
		url: url+'/uqdateLandlord.action',
		async: true,
		cache: false,
		data: data,
		dataType: 'json',
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			if(data.resultCode == '0000'){
				initData();
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