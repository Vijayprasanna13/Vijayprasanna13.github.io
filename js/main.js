$('#scroll-door').mouseover(function(){
  $('#scroll-door').attr({"src":"images/door_open.png"});
});
$('#scroll-door').mouseout(function(){
  $('#scroll-door').attr({"src":"images/door_close.png"});
});
$('#scroll-door').click(function(event) {
  event.preventDefault();
  console.log(this);
  var link = this;
  $.smoothScroll({
  scrollTarget: link.getAttribute("tolink"),
  speed: 1500,
  easing: "swing"
  });

});
var images = ["html","css","php","bootstrap","jquery","qt","laravel","js","python","react","lumen","octave","milligram","matlab","babel","omnet","git"];
$(document).ready(function(){
  $.map(images,function(data,i){
      $("#gallery").append("<div class='lang-elem'><a><img src='images/langs/"+data+".png'></a></div>");
  });
  $("#gallery").justifiedGallery();
});
