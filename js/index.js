//index.js

$(document).ready(function(e) {
	$("#st_search").focusin(function(){
		$(this).attr("placeholder","");
	}).focusout(function(){
		$(this).attr("placeholder","매장명 또는 주소를 입력하세요.");
	});
	
}); //jQB
