$(document).ready(function(){

	$( "#best-artists-left .onebestartist" ).hover(function() {
    $(this).find('.bartists-container').stop().animate({
			left: "-350px"
		},500);
  }, function() {
    $(this).find('.bartists-container').stop().animate({
			left: "0"
		},500);
	}
  );
  
  $( "#best-artists-right .onebestartist" ).hover(function() {
    $(this).find('.bartists-container').stop().animate({
			right: "-350px"
		},500);
  }, function() {
    $(this).find('.bartists-container').stop().animate({
			right: "0"
		},500);
	}
  );
	
});


