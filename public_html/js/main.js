$(document).ready(function () {
  setPageHeight();
});

function setPageHeight() {
  var height = $(window).height();
  var width = $(window).width();
  $("main.fullscreen").height(height);
  $("main.fullscreen").width(width);
}
