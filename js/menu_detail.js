// menudetail.js


$(document).ready(function(e){
	
	hotImgTop1 =  parseInt($(".hotImg").eq(0).offset().top);
	hotImgTop2 =  parseInt($(".hotImg").eq(1).offset().top);
	hotImgTop3 =  parseInt($(".hotImg").eq(2).offset().top);
	hotImgTop4 =  parseInt($(".hotImg").eq(3).offset().top);
	
	
	$("html,body").scroll(function(){
		var winScrollTop = parseInt($("body").scrollTop());
		/*var winScrollTop = $("body").scrollTop();*/
		var plus = winScrollTop + 300;
		
		if(plus >= hotImgTop1){
			 $(".hotImg").eq(0).addClass("scrollAni");
		}
		else {
			 $(".hotImg").eq(0).removeClass("scrollAni");
		}
		if(plus >= hotImgTop2){
			 $(".hotImg").eq(1).addClass("scrollAni");
		}
		else {
			 $(".hotImg").eq(1).removeClass("scrollAni");
		}
		if(plus >= hotImgTop3){
			 $(".hotImg").eq(2).addClass("scrollAni");
		}
		else {
			 $(".hotImg").eq(2).removeClass("scrollAni");
		}
		if(plus >= hotImgTop4){
			 $(".hotImg").eq(3).addClass("scrollAni");
		}
		else {
			 $(".hotImg").eq(3).removeClass("scrollAni");
		}
	
	});

});