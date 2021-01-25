gsap.registerPlugin('ScrollTrigger')



function init(){
  const timeLine = gsap.timeline();
  gsap.set('#quienes_somos', {
    scrollTrigger:{
      trigger: ('#quienes_somos'),
      start: 'top bottom-=150',
      end: 'bottom center-=250',
      toggleClass:'activeAnim',
     // markers: true
    }

   })
  
   gsap.set('#tecnicas', {
    scrollTrigger:{
      trigger: ('#tecnicas'),
      start: 'top bottom-=150',
      end: 'bottom center-=250',
      toggleClass:'activeAnim',
     // markers: true
    }

   })

   gsap.set('#trabajos', {
    scrollTrigger:{
      trigger: ('#trabajos'),
      start: 'top bottom-=150',
      end: 'bottom center-=250',
      toggleClass:'activeAnim',
      //markers: true
    }

   })

 

   gsap.set('.tipsAnim', {
    
    scrollTrigger:{
      trigger: ('.tipsAnim'),
      start: 'top bottom-=150',
      end: 'bottom+=600 center-=250',
      toggleClass:'activeAnim',
      //markers: true
    }

   })

   gsap.set('.tipsAnim', {
    
    scrollTrigger:{
      trigger: ('.tipsAnim'),
      start: 'top bottom-=150',
      end: 'bottom+=600 center-=250',
      toggleClass:'activeAnim',
      //markers: true
    }

   })

 





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
  

}

window.addEventListener('load',function(){
  init()
})






