
let num = 790
let r = 225
let startAngle = 0
let arc = Math.PI / num
let ctx

let canvas = document.getElementById('canvas')
let contactLink = document.getElementById('email-copy-button')

canvas.onmouseover = handleSpinIncrease
canvas.onmouseleave = handleSpinDecrease
canvas.onclick = handleSpinStop

canvas.addEventListener('touchstart', handleSpinIncrease)
canvas.addEventListener('touchmove', handleSpinDecrease)
canvas.addEventListener('touchend', handleSpinDecrease)
canvas.addEventListener('touchcancel', handleSpinStop)

contactLink.addEventListener('click', copyEmailAddress)

function drawSphere() {
    ctx = canvas.getContext('2d')
    for (let i = 0; i < num*2; i++) {
        let angle = startAngle + (i * arc)
        if (i%2 === 0) {
            ctx.fillStyle = 'black'
        } else ctx.fillStyle = '#f0eadc'
        ctx.beginPath()
        ctx.arc(r, r, r, angle, angle + arc, false)
        ctx.arc(r, r, 0, angle + arc, angle, true)
        ctx.fill()
        ctx.save()
        ctx.restore()
    }
    canvas.style.animation = 'wheelSpin 32s linear infinite'
}

drawSphere()

function handleSpinIncrease(){
    canvas.style.animation = 'wheelSpin .000032s linear infinite'
}

function handleSpinDecrease(){
    canvas.style.animation = 'wheelSpin 32s linear infinite'
}

function handleSpinStop(){
    canvas.style.animation = 'wheelSpin 0s linear'
}

function copyEmailAddress() {  
  let emailLink = document.querySelector('.emaillink') 
  let range = document.createRange()
  range.selectNode(emailLink)
  window.getSelection().addRange(range)

  let successful = document.execCommand('copy')
  if(successful){
    contactLink.innerHTML = '• copied •'
  } else {
    contactLink.innerHTML = 'paulapdixon@gmail.com'
  }
  window.getSelection().removeAllRanges()
}