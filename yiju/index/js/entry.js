$(function(){
	createCode();
});


/*定义全局变量*/
var url=window.location.href;
url = url.substring(0, url.lastIndexOf('/'));
url = url.substring(0, url.lastIndexOf('/'));
function login(){
    var check = $('.checkbox1')[0]
    if (check.checked == 'undefined' || check.checked != true) {
        alert('请同意网站服务协议')
    }else{
        if(validateCode()){
        var data = $('#landLoginForm').serialize();//序列化表单值（AJAX中的方法）
        if("" != data){//data不为空
            // 为在action中能正常接收，在每个属性前加上action中定义的对象名
            data = 'landlord.' + data;
            data = data.replace(/&/g, '&landlord.');//传递参数最好用这个方式
        }
    /*var username = $('#username').val().trim();
    var password = $('#password').val().trim();注意：为了使程序健壮，加入trim()
    意思是忽略val值得空格*/
        $.ajax({
                type: 'post',
                url: url+'/landlordLogin.action',
                data: data,//data:{lname:username,lpassword:password}
                async: true,
                cache: false,//不使用缓存
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
                success: function(data){
                    if(data.resultCode == '0000'){
                       
                        location.href=url+'/index/landlord.html';
                    }else{
                        alert('您输入的用户名或密码有误，请确认后再输')
                    }   
                }
            });
        }
    }
	
}
//创建验证码

var code;
function createCode() {
    code = "";
    var codeLength = 6; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 62);
        code += codeChars[charNum];
    }
    if (checkCode)
    {
        // checkCode.className = "yzm";
        checkCode.innerHTML = code;
    }
}

//验证验证码
var validateCode=function()
{
    var inputCode = document.getElementById("inputCode").value;
    if (inputCode.length <= 0)
    {
        alert("请输入验证码！");
        return false;
    }
    else if (inputCode.toUpperCase() != code.toUpperCase())
    {
        alert("验证码输入有误！");
        createCode();
        return false;
    }
    else
    {
    	  return true;
    }       
} 

