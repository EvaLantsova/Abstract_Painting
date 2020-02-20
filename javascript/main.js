let circleAnimation = anime({
  targets: '.circle1',
  translateX: 400,
  duration: 1000,
  autoplay: false,
  easing: 'easeInOutQuad',
  direction: 'alternative',
  loop: true,
})
let circle1 =
document.querySelector('.circle1')
circle1.onclick = circleAnimation.play
