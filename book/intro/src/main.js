const canvasElement = document.createElement('canvas')
document.body.appendChild(canvasElement)

const ctx = canvasElement.getContext("2d")

ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fill();