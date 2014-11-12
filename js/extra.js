$(document).ready (function(){
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});
	('#home a').click(function() {
     $('html,body').animate({scrollTop: $(this).offset().top}, 500);
}); 
});