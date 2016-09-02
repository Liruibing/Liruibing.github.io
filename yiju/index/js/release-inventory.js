$(function(){
	querySession();
});
/*定义全局变量*/
var url=window.location.href;
url = url.substring(0, url.lastIndexOf('/'));
url=url.substring(0, url.lastIndexOf('/'));
/*--------------------------------------------*/
function addHouses(){
	var furniture=checkboxStr();//家具设备
	/*var m=$("input[type='radio']:checked").val();*/
	var type=$("input[name=status]:checked").val();//房东类型
	var rentway=$("input[name=style]:checked").val();//出租方式
	var villageName=$("#villageName").val();
	var ting=$("#ting").val();
	var shi=$("#shi").val();
	var wei=$("#wei").val();
	var area=$("#area").val();
	var room=shi+'室'+ting+'厅'+wei+'卫';
	var floor=$("#floor").val();
	var countfloor=$("#countfloor").val();
	var direction=$("#direction").val();
	var hlevel=$("#level").val();
	var price=$("#price").val();
	var tittle=$("#tittle").val();
	var features=$("#features").val();
	var address=$("#address").val();
	var linkman=$("#linkman").val();
	var linkphone=$("#linkphone").val();
	var paymethod=$("#paymethod").val();
	var hcondition=villageName+room;
	var data={furniture:furniture,
    	type:type,
    	rentway:rentway,
    	villageName:villageName,
    	area:area,
		room:room,
		shi:shi,
		floor:floor,
		countfloor:countfloor,
		direction:direction,
		hlevel:hlevel,
		price:price,
		tittle:tittle,
		features:features,
		address:address,
		linkman:linkman,
		linkphone:linkphone,
		paymethod:paymethod,
		hcondition:hcondition
    };
	console.log(fileIds);
	$.ajaxFileUpload({
        url: url+'/addHouses.action', 
        type: 'post',
        secureuri: false,
        fileElementId:fileIds,
        data:data,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        success: function(data){  
            if(data.resultCode == '0000'){
					location.href=url+"/index/landlord.html";
            	}
        	}
    }); 
	
}
//多选框数据的接收处理
var checkboxStr=function(){
	var str="";
	var cm=document.getElementsByName("configure"); 
	 for(var i=0;i<cm.length;i++){
	     if(cm[i].checked==true){
	    	 str +=cm[i].value + ",";
	     };
	 }
	 if(str.length > 0) {
        str = str.substr(0, str.length - 1);
     }
	 return str;
    };
    
   /* ------------------------------------------------------------*/
/*全局变量*/
var num=2;
var fileIds=[]; 
function addFile(obj){
	var file = obj.files[0];
	var imgUrl = window.URL.createObjectURL(file);
	$(".pictures").append('<img src="'+imgUrl+'" style="width:200px;height:200px;float:left;" </img>');
	$("input[type=file]").hide();
	var item='<input type="file"  name="file" id="file'+num+'" onchange="addFile(this);"/>';
	$("#addbq").append(item);  
	fileIds.push('file'+num);
	num=num+1;
}   
  //获取file地址 
/*var getImgURL=function (node) {    
	 var imgURL = "";      
	         
	        var file = null;  
	        if( node.files && node.files.item(0)){ 
	            file = node.files.item(0);
	        }else if(node.files && node.files[0]) {                                  
	        	 file = node.files[0];       
	        }     
	        //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径  
	        try{  
	            //Firefox7.0   
	            imgURL =  file.getAsDataURL();    
	            //alert("//Firefox7.0"+imgRUL);                           
	        }catch(e){  
	            //Firefox8.0以上                                
	            imgRUL = window.URL.createObjectURL(file);  
	            //alert("//Firefox8.0以上"+imgRUL);  
	        }  
	     catch(e){      //这里不知道怎么处理了，如果是遨游的话会报这个异常                   
	        //支持html5的浏览器,比如高版本的firefox、chrome、ie10  
	        if (node.files && node.files[0]) {                            
	            var reader = new FileReader();   
	            reader.onload = function (e) {                                        
	                imgURL = e.target.result;    
	            };  
	            reader.readAsDataURL(node.files[0]);   
	        }    
	     } 
	     return imgURL; 
}  */
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
    
    
    
    
    
    
    
    
    
    
    