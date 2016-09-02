
/*------------单选按钮------------*/
$(function() {
	$('.release-inventory-con p label').click(function(){

		if ($(this).hasClass('checked')) {
			$(this).removeClass('checked')
		} else{
			$(this).addClass('checked');
			$(this).siblings().removeClass('checked')
		};
		
	});
});

$(function() {
  $('label').click(function(){
    var radioId = $(this).attr('name');
    $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    $('#' + radioId).attr('checked', 'checked');
  });
});

/*------------多选按钮------------*/
$(function() {
	$('.release-inventory-con p .checkbox').click(function(){

		if ($(this).hasClass('checked2')) {
			$(this).removeClass('checked2')
		} else{
			$(this).addClass('checked2 checkbox');
		};
		
	});

});

/*---------------筛选页面多选---------*/
$(function() {

	$('.screen-main-top p .checkbox').click(function(){

		if ($(this).hasClass('green')) {
			$(this).siblings('.checkbox').removeClass('green')
		} else{
			$(this).addClass('checkbox green');
			$(this).siblings('.checkbox').removeClass('green')
		};
		
	});
});

/*$(function() {
  $('.screen-main-top p .checkbox').click(function(){
    var radioId = $(this).attr('name');
    $('.screen-main-top input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    $('#' + radioId).attr('checked', 'checked');
  });
});*/


/*-------------轮播-----------------*/
$(function() {
	
	var rightBtn=$('.house-l');
	var leftBtn=$('.house-r');
	//定义两个变量，分别用来模拟角标序号和图片序号
	//因为图片和角标数量不一致了，不再是11对应的关系 
	var imgKey=0;
	var imgList=$('.imgList');
	var banner=$('.bannerIn');
	var timer;

	//下一张切换的功能封装
	function nextFn(event) {
		
		//-------------------控制图片开始---------------------

		imgKey++;
		if(imgKey>4){
			
			imgKey=0;
	
			imgList.css('left', 0);
		}
		
		var moves=imgKey*-289;
		//让整个UL移动
		imgList.stop().animate({'left':moves}, 1000);

		//-------------------控制图片结束---------------------	

	}

	//下一张切换
	rightBtn.click(nextFn);

	
	//自动走
	timer=setInterval(function(){

		imgKey++;
		if(imgKey>4){
			
			imgKey=0;
	
			imgList.css('left', 0);
		}
		
		var moves=imgKey*-289;
		//让整个UL移动
		imgList.stop().animate({'left':moves}, 2000);

	}, 3000);


	//停止和重启定时器
	banner.hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(nextFn, 3000);
	});

	leftBtn.hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(nextFn, 3000);
	});

	rightBtn.hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(nextFn, 3000);
	});

	//上一张切换
	leftBtn.click(function(event) {

		//-------------------控制图片开始---------------------
		
		imgKey--;
		if(imgKey<0){
			
			imgKey=4;
	
			imgList.css('left', -1156);

		}
		
		var moves=imgKey*-289;
		//让整个UL移动
		imgList.stop().animate({'left':moves}, 1000);

		//-------------------控制图片结束---------------------	

	});

	/*-----------收藏-----------*/
	$('.collect a').click(function(event) {
		$('.collect a').get(0).style.color='red';
		$('.collect i').get(0).style.color='red';
	});

	/*------------------------详情页点击换图----------------*/
	
	$('.small-pic li img').click(function(event) {
		
		$('.big-pic img').get(0).src=$(this).get(0).src;
	});

});

	var ul2=$('.ul2');
	var ali2=$('.ul2 li');
	var pre=$('.pre');
	var next=$('.next');
	num=0;
	var timer3;
	function nextFn(){
		num++;
		if (num>4) {num=1;
			ul2.css('margin-left',0);
		}
		var moves=num*-290;
		ul2.stop().animate({'margin-left':moves},500)
	}
	timer3=setInterval(nextFn,1500)
	next.click(function(){
		clearInterval(timer3)
	});
	next.mouseleave(function(event) {
		timer3=setInterval(nextFn,1500)
	});
	next.click(nextFn)

	ul2.hover(function() {
		clearInterval(timer3)
	}, function() {
		clearInterval(timer3)
		timer3=setInterval(nextFn,1500)
	});

	function preFn(){
			num--;
			if (num<0) {
				num=3;
				ul2.css('margin-left',-1160);
			}
			var moves=num*-290;
			ul2.stop().animate({
				'margin-left':moves
			},500);
		}
		pre.click(function(event) {
			clearInterval(timer3)
		});
		pre.mouseleave(function(event) {
			timer3=setInterval(nextFn,1500)
		});
		pre.click(preFn)
	

