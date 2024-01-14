const canvasElement = document.createElement('canvas')
canvasElement.width = document.body.clientWidth
canvasElement.height = document.body.clientHeight

document.body.style.margin = '0px'
document.body.appendChild(canvasElement)



const ctx = canvasElement.getContext("2d")

const fps = 1000
const dt = 1 / fps

let positionX = 0
// 50 pixels per second
const velocityX = 50

const update = () => {
  positionX = positionX + velocityX * dt

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvasElement.width, canvasElement.height)

  ctx.beginPath()
  ctx.arc(positionX, 100, 50, 0, 2 * Math.PI)
  ctx.fillStyle = 'black'
  ctx.fill()
}
setInterval(update, 1000 * dt)