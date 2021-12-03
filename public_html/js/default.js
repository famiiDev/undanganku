$(document).ready(function () {
  setHomeheight();
  musicState = false;
  myMusic = document.getElementById("myMusic");
  //   myMusic.play();
  //   playMusic();
  setTimeout(function () {
    playMusic();
  }, 3000);
});

function playMusic() {
  if (musicState == false) {
    musicState = true;
    myMusic.play();
    // console.log("play");
    $(".float-button > span").addClass("slow-spin");
  } else {
    musicState = false;
    myMusic.pause();
    // console.log("pause");
    $(".float-button > span").removeClass("slow-spin");
  }
}

function setHomeheight() {
  var scrHeight = $(window).height();
  // alert("ok");
  $("main > .home").height(scrHeight);
}

function countdown() {
  var now = new Date();
  var resepsi = new Date(2020, 10, 7, 8);
  var x = setInterval(function () {
    var jarak = resepsi - now;
    var hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jarak % (1000 * 60)) / 1000);
    $("#countdown-hari").html(hari);
    $("#countdown-jam").html(jam);
    $("#countdown-menit").html(menit);
    $("#countdown-detik").html(detik);
  }, 1000);
}
