$(window).load(function(){
	$('#loader').fadeOut(4000).promise().done(function(){
	$("#content-index").css("-webkit-filter","blur(0px)");	
	});
});
