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
