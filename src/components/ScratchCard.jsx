import { useRef, useEffect, useState } from 'react'

function ScratchCard({ width = 260, height = 70, number = '+91 86398 59868' }) {
  const canvasRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const isDrawing = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = '#ff2a2a'
    ctx.font = 'bold 14px monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Scratch to reveal', width / 2, height / 2)
  }, [width, height])

  const scratch = (x, y) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 22, 0, Math.PI * 2)
    ctx.fill()

    const imageData = ctx.getImageData(0, 0, width, height)
    const pixels = imageData.data
    let transparent = 0
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++
    }
    if (transparent / (pixels.length / 4) > 0.5) {
      setIsRevealed(true)
    }
  }

  const getPos = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  const onStart = (e) => {
    if (isRevealed) return
    isDrawing.current = true
    const { x, y } = getPos(e)
    scratch(x, y)
  }

  const onMove = (e) => {
    if (!isDrawing.current || isRevealed) return
    e.preventDefault()
    const { x, y } = getPos(e)
    scratch(x, y)
  }

  const onEnd = () => { isDrawing.current = false }

  return (
    <div className="relative inline-block select-none" style={{ width, height }}>
      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
        <span className="text-white font-bold text-lg tracking-wider">{number}</span>
      </div>
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="absolute inset-0 rounded-xl cursor-pointer touch-none"
          onMouseDown={onStart}
          onMouseMove={onMove}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
          onTouchStart={onStart}
          onTouchMove={onMove}
          onTouchEnd={onEnd}
        />
      )}
    </div>
  )
}

export default ScratchCard
