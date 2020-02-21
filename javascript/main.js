let circle1Animation = anime({
  targets: '.circle1',
  translateX: 400,
  duration: 1000,
  autoplay: false,
  easing: 'easeInOutQuad',
  direction: 'alternative',
  loop: true,
})

let circle =
document.querySelector('.circle1')
circle.onclick = circle1Animation.play

circle.onclick = circle1Animation.play
/*
// let circle1Btn = document.querySelector ('.circle1')
// circle1Btn.onckick = () => {
//   circle1AAnimation.play()
//   circle1Animation.finished. then() => {
//     circle1Animation.reverse
//   }
// }

let circle2Animation = anime({
  targets: '.circle2',
  translateX: 400,
  duration: 1000,
  autoplay: false,
  easing: 'easeInOutQuad',
  direction: 'alternative',
  loop: true,
})
let circle2 =
document.querySelector('.circle2')
circle.onclick = circle2Animation.play

let circle3Animation = anime({
  targets: '.circle3',
  translateX: 400,
  duration: 1000,
  autoplay: false,
  easing: 'easeInOutQuad',
  direction: 'alternative',
  loop: true,
})

let circle3 =
document.querySelector('.circle3')
circle.onclick = circle3Animation.play


let circle4Animation = anime({
  targets: '.circle4',
  translateX: 400,
  duration: 1000,
  autoplay: false,
  easing: 'easeInOutQuad',
  direction: 'alternative',
  loop: true,
})

let circle4 =
document.querySelector('.circle4')
circle.onclick = circle4Animation.play
*/
