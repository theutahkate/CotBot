console.log("something");

$(document).ready(function() {
  console.log("ready");

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

    // Define audio variable for use in Hammer Time animation
    var audio = document.createElement('audio');
      audio.setAttribute('src', 'assets/MCHammer.mp3');
  
  // When hammer time button clicked, robot dances like MC Hammer, plays or pauses 'U Can't touch this'   
  $(".hammer").click(function() {
    $(".left-leg").toggleClass('hammer');
    $(".right-leg").toggleClass('hammer-r');
    $(".robot").toggleClass('robot-hammer');
    if (audio.paused == false) {
      audio.pause();
    } else {
      audio.play();
    }
  });


  // this seems to toggle presence/absence
  // $(".hammer").click(function() {
  //   $(".left-leg").toggle();
  // });

});