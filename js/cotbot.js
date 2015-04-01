$(document).ready(function() {


  // Define audio variable for use in Hammer Time animation, declare interval and timeout variables for timing in Hammer Time animation
  var audio = document.createElement('audio');
    audio.setAttribute('src', 'assets/MCHammer.mp3');
  var intervalID;
  var roboWait;

  // Triggers/pauses hammer dance, music, flashing eyes, and background color change    
  $(".hammer").click(function() {
    if (!roboWait) {
      roboWait = setTimeout( function() {
        $(".left-leg").toggleClass('hammer-l');
        $(".right-leg").toggleClass('hammer-r');
        $(".robot").toggleClass('robot-hammer');
         $(".brain").toggleClass('laser');
      }, 500);
    } else {
        $(".left-leg").toggleClass('hammer-l');
        $(".right-leg").toggleClass('hammer-r');
        $(".robot").toggleClass('robot-hammer');
         $(".brain").toggleClass('laser');
    }

    if (audio.paused == false) {
      audio.pause();
    } else {
      audio.play();
    }

    if (!intervalID) {
      intervalID = window.setInterval(function(){
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      
      // Generate RGBA value for css
      var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
      
      $("body").css("background", randomRGBA);
      }, 500);
    } else {
      window.clearInterval(intervalID);
      intervalID = null;
    } 
  });

});