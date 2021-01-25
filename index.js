

// $(function() {
//     $.Velocity.RegisterEffect('attention.pulse', {
//       defaultDuration: 900,
//       calls: [
//         [{scale: 1}, 0.4],
//         [{scale: 1.2}, 0.2],
//         [{scale: 1}, 0.4],
  
//       ]
//     });
  
    


// $(document).ready(
//   animaLogoPrincipal()
// )

// function animaLogoPrincipal(){
//   $("#animLogo").velocity("transition.whirlIn");
//   $("h1").velocity("transition.bounceIn");
// }




//     window.setInterval(function() {
//       $('#animContact').velocity('attention.pulse');
     
      
//     }, 5000);
//   });
const timeLine = gsap.timeline();


timeLine
.from('#animBG',{
  duration:4,
  autoAlpha: 0,
  delay: 1
})
.from('#animNav', {
  duration: .8,
  autoAlpha: 0,
  ease: "power2.out",

},'-=3')
.from('#animList a',{
  duration: .2,
  autoAlpha: 0,
  y: -20,
  ease: "none",
  stagger: 1
},'-=2')
.from('#animLogo',{
  duration: 3,
  autoAlpha: 0,
  x: -100,
  ease: "elastic.out(1, 0.3)"
},'-=1')
.from('#animContact',{
  duration: 2,
  autoAlpha: 0,

},'-=1')
.to('#animContact',{
  duration: 1,
  scale: 1.2,
  repeat: -1,
  ease: 'none',
  yoyo: true
},'-=1')

