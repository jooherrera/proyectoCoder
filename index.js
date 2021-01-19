$(function() {
    $.Velocity.RegisterEffect('attention.pulse', {
      defaultDuration: 900,
      calls: [
        [{scale: 1}, 0.4],
        [{scale: 1.2}, 0.2],
        [{scale: 1}, 0.4],
  
      ]
    });
  
    


$(document).ready(
  animaLogoPrincipal()
)

function animaLogoPrincipal(){
  $("#animLogo").velocity("transition.whirlIn");
  $("h1").velocity("transition.bounceIn");
}




    window.setInterval(function() {
      $('#animContact').velocity('attention.pulse');
     
      
    }, 5000);
  });


