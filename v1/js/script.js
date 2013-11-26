$(document).ready(function() {
	$(".artist").hover(function(){
		$(this).find('.highlight').stop().fadeIn(500),
		$(this).find('h1').stop().fadeOut(500)
	}, function(){
		$(this).find('.highlight').stop().fadeOut(500);
		$(this).find('h1').stop().fadeIn(500)
	});
	// PAGE LOGIN
	$("#signup_container").hide();
	$("#boutton_sign_up_click").click(function(){
		var options = {};
		$(this).fadeOut(500,function(){
			$("#signup_container").slideDown(500);
		});
	});
});