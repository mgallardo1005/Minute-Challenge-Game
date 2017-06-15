var sessionTime = 60

$("#start").click(function() { 
  $("#start").hide();
  var countdown = setInterval(timer, 1000);
  function timer() {
    sessionTime -= 1;
    $("#time").html(sessionTime);
    if (sessionTime === 0) {
       clearInterval(countdown);
    }
  }
});