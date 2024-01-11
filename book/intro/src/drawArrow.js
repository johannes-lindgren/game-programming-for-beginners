export const drawArrow = (ctx, baseX, baseY, length) => {
  const tipX = baseX + length
  const tipY = baseY

  const arrowHeadSize = 3 / 10
  const arrowheadOffset = arrowHeadSize * length

  // Add a path to ctx
  ctx.beginPath()

  // Arrow shaft
  ctx.moveTo(baseX, baseY)
  ctx.lineTo(tipX, tipY)

  // Arrowhead
  ctx.moveTo(tipX, tipY)
  ctx.lineTo(tipX - arrowheadOffset, tipY - arrowheadOffset)
  ctx.moveTo(tipX, tipY)
  ctx.lineTo(tipX - arrowheadOffset, tipY + arrowheadOffset)

  // Stroke along the path
  ctx.stroke()
}