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
		$(this).fadeOut(500,function(){
			$("#signup_container").slideDown(500);
		});
	});
	$(".inputtext").focus(function(){
		$(this).css("color","#555");
		if($(this).val()==""){
		}
		else{
			$(this).css("color","#555");
		}
	});
	$(".inputtext").blur(function(){
		if($(this).val()==""){
			$(this).css("color","#BBB");
		}
		else{
			$(this).css("color","#555");
		}
	});
	if($(".inputtext").val()==""){
	}
	else{
		$(".inputtext").css("color","#555");
	}
	$(".email-login").keypress(function(){
		setTimeout(function(){
			var email = $(".email-login").val();
			$(".email-signup").val(email);
			$(".email-signup").css("color","#555");
		}, 10);
	});
	$(".email-login").change(function(){
		setTimeout(function(){
			var email = $(".email-login").val();
			$(".email-signup").val(email);
			$(".email-signup").css("color","#555");
		}, 10);
	});
});