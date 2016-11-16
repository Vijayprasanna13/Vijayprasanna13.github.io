$(window).resize(function(){
    if($(window).width() <= 0.87*screen.width){
	var images = $("#gal1").find("img");
	$("#gal1").find(images[4]).css("display","none");
	$("#gal1").find(images[5]).css("display","none");
	$("#gal1").find(images[6]).css("display","none");
	$("#gal1").find(images[7]).css("display","none");
    }
    else{
	var images = $("#gal1").find("img");
	$("#gal1").find(images[4]).css("display","");
	$("#gal1").find(images[5]).css("display","");
	$("#gal1").find(images[6]).css("display","");
	$("#gal1").find(images[7]).css("display","");
    }
    
    
    //console.log(" W : "+$(window).width());
});
