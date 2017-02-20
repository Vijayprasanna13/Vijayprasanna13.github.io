$('#scroll-door').mouseover(function(){
  $('#scroll-door').attr({"src":"images/door_open.png"});
});
$('#scroll-door').mouseout(function(){
  $('#scroll-door').attr({"src":"images/door_close.png"});
});

setInterval(function(){
  var px1 = Math.floor(Math.random()*6);
  var px2 = (px1%2)?-px1:px1;
  $('#scroll-door').css('box-shadow',''+px2+'px -'+px1+'px 60px #FAFAD2');
},100);

var setlang = 0;
$('#scroll-door').click(function(event) {
  console.log(this);
  var link = this;
  $.smoothScroll({
  scrollTarget: link.getAttribute("tolink"),
  speed: 1500,
  easing: "swing"
  });
  $("#intro").fadeIn(3000);
  if(!setlang){
      lang_wrapper();
      setlang = 1;
  }
});

function lang_wrapper(){
  var images = ["html","css","php","bootstrap","jquery","qt","laravel","javascript","python","react","lumen","octave","milligram","matlab","babel","omnet","git"];
  $.map(images,function(data,i){
      $("#gallery").append("<div class='lang-elem'><a><img id='lang"+i+"' src='images/langs/"+data+".png'></a></div>");
  });
  $("#gallery").justifiedGallery();
}

$('#down').click(function(event) {
  event.preventDefault();
  console.log(this);
  var link = this;
  $.smoothScroll({
  scrollTarget: link.getAttribute("tolink"),
  speed: 1500,
  easing: "swing"
  });
});
