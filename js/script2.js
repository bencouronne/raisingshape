$(document).ready(function(){		
	//hover best artist colone de gauche
	$( "#best-artists-left .onebestartist" ).hover(function() {
    $(this).find('.bartists-container').stop().animate({
			left: "-350px"
		},500);
		$(this).find('.artist-description').stop().fadeIn('slow');
  }, function() {
    $(this).find('.bartists-container').stop().animate({
			left: "0"
		},500);
		$(this).find('.artist-description').stop().fadeOut('slow');
	}
  );
  //hover best artist colone de droite
  $( "#best-artists-right .onebestartist" ).hover(function() {
    $(this).find('.bartists-container').stop().animate({
			right: "-350px"
		},500);
		$(this).find('.artist-description').stop().fadeIn('slow');
  }, function() {
    $(this).find('.bartists-container').stop().animate({
			right: "0"
		},500);
		$(this).find('.artist-description').stop().fadeOut('slow');
	}
  );
  
	
});


