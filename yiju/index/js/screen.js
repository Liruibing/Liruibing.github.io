$(function(){
	querySession();
	queryHousesBySql(0);
});

//定义全局变量
var url=window.location.href;
url = url.substring(0, url.lastIndexOf('/'));
url=url.substring(0, url.lastIndexOf('/'));


/*...........................................*/
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
//按照条件去查询房源
var rowCount=0;
function queryHousesBySql(pageNo){
	
	var data=dataChange(pageNo);
	$.ajax({
		type: 'post',
		url: url+'/queryHousesBySql.action',
		async: true,
		cache: true,
		data:data,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			$('#allHouse').empty();
			rowCount=data.rowCount;
			if(data.success){
			 $.each(data.data,function(i,houses) {
				 
				 var photo=editPhoto(houses['photo']);
				 var features=editFeatures(houses['features']);
				 var item='<li class="clearfix"><div class="collect-pic"><a href="'+url+'/index/article.html?id='+houses['id']+'"><img src="'+url+'/upload/'+photo+'" height="160" width="218" alt=""></a>'+
					'</div><div class="collect-text-l"><h3>'+houses['tittle']+' '+houses['room']+'<i class="orange2">&#xe67b;</i>'+
					'<i class="green2">&#xe65b;</i></h3><p>'+houses['room']+'|'+houses['rentway']+'|'+houses['hlevel']+'|'+houses['floor']+'/'+houses['countfloor']+'层</p>'+
					'<p><i>&#xe616;</i>'+houses['address']+'</p>'+features+
					'</div><div class="collect-text-r">'+
					'<p class="orange"><b>'+houses['price']+'</b><span>/月</span></p><p>'+houses['addtime']+'</p></div></li>';
					$('#allHouse').append(item);
				 });
			}else{
				alert("未找到您要搜索的房源！");
			}
			initPagination(rowCount,pageNo);
		}
	});
}
var editPhoto=function(photoStr){
	 var arr=photoStr.split(",");
	 		return arr[0];
	 	};

//处理特色
	var editFeatures=function(features){
		var arr=features.split(" ");
	 		var fea="";
	 		var fea1="";
	 		var fea2="";
	 		var fea3="";
	 		for(var i=0;i<arr.length;i++){
	 			if(i==0){
	 				fea1='<span class="orange">'+arr[i]+'</span>';
	 			}
	 			if(i==1){
	 				fea2='<span class="green">'+arr[i]+'</span>';
	 			}
	 			if(i==3){
	 				fea3='<span class="red">'+arr[i]+'</span>';
	 			}
	 			fea=fea1+fea2+fea3;
	 		}
	 			return fea;
	 	};	
	 	
//获取条件数据
var dataChange=function(pageNo){
	
	var region=$("input[name=configure1]:checked").val();
	var price=$("input[name=configure2]:checked").val();
	var shi=$("input[name=configure3]:checked").val();
	var room=$("#room").val();
	var hlevel=$("#level").val();
	var hcondition="";
	var url=window.location.href;
	var temp=url.split("?")[1]; 
	if(temp !="" && temp!=undefined  ){
		hcondition=temp.split("=")[1];
		hcondition=decodeURI(hcondition);
	}
	var data={
			region:region,
			price:price,
			shi:shi,
			room:room,
			hlevel:hlevel,
			hcondition:hcondition,
			pageNo:pageNo+1
	};
	return data;
};
//搜索房源的跳转
function skipUrl(){
	var hcondition=$("#skipUrl").val();
	if(hcondition !='请输入小区名称/区域/厅室 ' && hcondition!=""){
		location.href=url+'/index/screen.html?hcondition='+hcondition;
	}else{
		location.href=url+'/index/screen.html';
	}
}	 	 	
/*.................................分页..........................................*/

function initPagination(rowCount,pageNo){

    $("#Pagination").pagination(rowCount, {
    	 	callback: pageselectCallback,
            prev_text: "上一页",
            next_text: "下一页",
            num_edge_entries: 2,
            num_display_entries: 4,
            current_page:pageNo,
            items_per_page: 5
    });

}
function pageselectCallback(pageNo, jq){
	queryHousesBySql(pageNo);
	
}	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	