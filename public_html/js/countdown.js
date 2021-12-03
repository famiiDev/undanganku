setInterval(function () {
    var resepsi = new Date(2020,10,7,8);    
        var now = new Date();
        var jarak = resepsi - now;
        var hari = Math.floor(jarak/(1000*60*60*24));
        var jam = Math.floor((jarak%(1000*60*60*24))/(1000*60*60));
        var menit = Math.floor((jarak%(1000*60*60))/(1000*60));
        var detik = Math.floor((jarak%(1000*60))/(1000));
        $("#countdown-hari").html(hari);
        $("#countdown-jam").html(jam);
        $("#countdown-menit").html(menit);
        // $("#countdown-detik").html(detik);
        document.getElementById("countdown-detik").innerHTML = detik;

    },1000);