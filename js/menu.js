// menu.js

/////////////메뉴버튼 마우스오버시 포크나이프 등장////////////
$(document).ready(function(e){
	$(".menubtn>a").mouseenter(function(){
		$(this).parents("li").children(".m_fork")
			.css({"left":"1%","top":"60%","opacity":"1","transition":"all ease-out 0.3s"});
		$(this).parents("li").children(".m_knife")
			.css({"right":"-10%","top":"61%","opacity":"1","transition":"all ease-out 0.3s"});
		});
	$(".menubtn>a").mouseleave(function(){
		$(this).parents("li").children(".m_fork")
			.css({"left":"-10%","top":"70%","opacity":"0","transition":"all ease-in 0.3s"});
		$(this).parents("li").children(".m_knife")
			.css({"right":"-19%","top":"70%","opacity":"0","transition":"all ease-in 0.3s"});
		});

});//JQB

///////////// 가로 1460px 이하 ////////////
$(document).ready(function(e) {
	if($(window).width() < 1490){
		$(".menubtn>a").mouseenter(function(){
			$(this).parents("li").children(".m_fork").css({"left":"1%","top":"58%","opacity":"1","transition":"all ease-out 0.3s"});
			$(this).parents("li").children(".m_knife").css({"right":"-10%","top":"59%","opacity":"1","transition":"all ease-out 0.3s"});
			})
		$(".menubtn>a").mouseleave(function(){
			$(this).parents("li").children(".m_fork").css({"left":"-10%","top":"70%","opacity":"0","transition":"all ease-in 0.3s"});
			$(this).parents("li").children(".m_knife").css({"right":"-19%","top":"70%","opacity":"0","transition":"all ease-in 0.3s"});
			})
	}
	$(window).resize(function(){
		//var wrapHeight = $(".column-wrap").height();
		if($(window).width() < 1460){
			$(".menubtn>a").mouseenter(function(){
				$(this).parents("li").children(".m_fork").css({"left":"1%","top":"58%","opacity":"1","transition":"all ease-out 0.3s"});
				$(this).parents("li").children(".m_knife").css({"right":"-10%","top":"59%","opacity":"1","transition":"all ease-out 0.3s"});
				})
			$(".menubtn>a").mouseleave(function(){
				$(this).parents("li").children(".m_fork").css({"left":"-10%","top":"70%","opacity":"0","transition":"all ease-in 0.3s"});
				$(this).parents("li").children(".m_knife").css({"right":"-19%","top":"70%","opacity":"0","transition":"all ease-in 0.3s"});
				})
		}
	});
});
	
///////////// 가로 1660px 이하 ////////////
$(document).ready(function(e) {
	if($(window).width() < 1690){
		$(".menubtn>a").mouseenter(function(){
			$(this).parents("li").children(".m_fork").css({"left":"1%","top":"50%","opacity":"1","transition":"all ease-out 0.3s"});
			$(this).parents("li").children(".m_knife").css({"right":"-10%","top":"51%","opacity":"1","transition":"all ease-out 0.3s"});
			})
		$(".menubtn>a").mouseleave(function(){
			$(this).parents("li").children(".m_fork").css({"left":"-10%","top":"60%","opacity":"0","transition":"all ease-in 0.3s"});
			$(this).parents("li").children(".m_knife").css({"right":"-19%","top":"60%","opacity":"0","transition":"all ease-in 0.3s"});
			})
	}
	$(window).resize(function(){
		//var wrapHeight = $(".column-wrap").height();
		if($(window).width() < 1660){
			$(".menubtn>a").mouseenter(function(){
				$(this).parents("li").children(".m_fork").css({"left":"1%","top":"50%","opacity":"1","transition":"all ease-out 0.3s"});
				$(this).parents("li").children(".m_knife").css({"right":"-10%","top":"51%","opacity":"1","transition":"all ease-out 0.3s"});
				})
			$(".menubtn>a").mouseleave(function(){
				$(this).parents("li").children(".m_fork").css({"left":"-10%","top":"60%","opacity":"0","transition":"all ease-in 0.3s"});
				$(this).parents("li").children(".m_knife").css({"right":"-19%","top":"60%","opacity":"0","transition":"all ease-in 0.3s"});
				})
		}
	});
});
