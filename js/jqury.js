/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-20 11:11:42
 * @version $Id$
 */


	
$(function(){
	$('#down').click(function(){
		$('#frame2').css('display','block').siblings('div').css('display','none')
	})
	$('#down1').click(function(){
		$('#frame3').css('display','block').siblings('div').css('display','none')
	})
	$('#down2').click(function(){
		$('#frame4').css('display','block').siblings('div').css('display','none')
	})
	$('#down3').click(function(){
		$('#frame5').css('display','block').siblings('div').css('display','none')
	})
	$('#down4').click(function(){
		$('#frame6').css('display','block').siblings('div').css('display','none')
	})
})