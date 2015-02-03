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

  $(".moves").click(function() {
    $("img").toggle();
  });
});