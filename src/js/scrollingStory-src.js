// Scrolling for wreckingball

gsap.registerPlugin(ScrollTrigger);

gsap.to(".wrecker", {
    scrollTrigger: {
      trigger: ".wrecker",
      scrub: 4,
      start : '-500px top',
      end: 'bottom center',
    }, 
    ease: "linear",
    margin: '100px 0 0 100%',
    transform: 'rotate(-30deg)'
  });