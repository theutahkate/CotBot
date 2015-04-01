$(document).ready(function() {

  // When eyes button is clicked, toggle laser class on brain
  $(".flash").click(function() {
    $(".brain").toggleClass('laser');
  });

  // When color button is clicked...
  $(".color").click(function() {
    // Assign each named color a random number 0-255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    
    // Generate RGBA value for css
    var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
    
    // Change background to random RGBA color
    $("body").css("background", randomRGBA);
  });

    // Define audio variable for use in Hammer Time animation, declare interval and tiomeout variables for timing in Hammer Time animation
    var audio = document.createElement('audio');
      audio.setAttribute('src', 'assets/MCHammer.mp3');
    var intervalID;
    var roboWait;

  // When hammer time button clicked, robot dances like MC Hammer, plays or pauses 'U Can't touch this'   
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