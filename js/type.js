// type.js


$(document).ready(function(e){
	$(".food>li").mouseover(function(){
		$(".food>li").css("opacity","0.5");
		
		$(this).css({"background-size":"120%","transition":"all 0.4s","opacity":"1"});
		})
	$(".food>li").mouseout(function(){
		$(this).css({"background-size":"100%","transition":"all 0.4s","opacity":"0.5"});
		})

});//JQB

$(document).ready(function(e) {
	$("#st_search").focusin(function(){
		$(this).attr("placeholder","");
	}).focusout(function(){
		$(this).attr("placeholder","매장명 또는 주소를 입력하세요.");
	});
	
}); //jQB
