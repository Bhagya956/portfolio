"use client"

import { useEffect, useRef } from "react"

interface GlitterOverlayProps {
  density?: number
  speed?: number
  size?: number
  colors?: string[]
}

export default function GlitterOverlay({
  density = 50,
  speed = 1,
  size = 3,
  colors = ["#ffb6c1", "#e6e6fa", "#ffffff", "#ffc0cb", "#dda0dd"],
}: GlitterOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create glitter particles
    const particles: {
      x: number
      y: number
      size: number
      color: string
      vx: number
      vy: number
      alpha: number
      alphaSpeed: number
    }[] = []

    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * size + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        alpha: Math.random(),
        alphaSpeed: 0.01 + Math.random() * 0.03,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Update position
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Update alpha (twinkling effect)
        p.alpha += p.alphaSpeed
        if (p.alpha > 1 || p.alpha < 0) p.alphaSpeed = -p.alphaSpeed

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor(p.alpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [density, speed, size, colors])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" style={{ mixBlendMode: "screen" }} />
  )
}

// Utility to generate a random color
function randomColor() {
  const colors = [
    "#6366f1", // indigo-500
    "#a21caf", // purple-700
    "#f59e42", // orange-400
    "#10b981", // emerald-500
    "#f43f5e", // rose-500
    "#eab308", // yellow-500
    "#3b82f6", // blue-500
    "#f472b6", // pink-400
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

function randomShape() {
  // 70% circle, 30% sparkle
  return Math.random() < 0.7 ? "circle" : "sparkle"
}

function createBurst(x: number, y: number) {
  const numParticles = 16
  const burst = document.createElement("div")
  burst.style.position = "fixed"
  burst.style.left = "0"
  burst.style.top = "0"
  burst.style.pointerEvents = "none"
  burst.style.zIndex = "9999"

  for (let i = 0; i < numParticles; i++) {
    const shape = randomShape()
    const angle = (2 * Math.PI * i) / numParticles + Math.random() * 0.2
    const distance = 70 + Math.random() * 30
    const size = 8 + Math.random() * 10
    const color = randomColor()
    const rotate = Math.floor(Math.random() * 360)
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.left = `${x - size / 2}px`
    particle.style.top = `${y - size / 2}px`
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.opacity = "0.92"
    particle.style.transform = `scale(1) rotate(0deg)`
    particle.style.transition =
      "all 1s cubic-bezier(.61,-0.01,.45,1.35), filter 1s cubic-bezier(.61,-0.01,.45,1.35)"
    particle.style.boxShadow = `0 0 16px 4px ${color}55, 0 0 32px 8px ${color}22`
    particle.style.filter = "blur(0.5px)"

    if (shape === "circle") {
      particle.style.borderRadius = "50%"
      particle.style.background = `radial-gradient(circle at 60% 40%, #fff8, ${color} 80%)`
    } else {
      // Sparkle/star using clip-path
      particle.style.background = color
      particle.style.clipPath =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      particle.style.background = `linear-gradient(135deg, #fff8 0%, ${color} 80%)`
    }

    setTimeout(() => {
      particle.style.left = `${x + Math.cos(angle) * distance}px`
      particle.style.top = `${y + Math.sin(angle) * distance}px`
      particle.style.opacity = "0"
      particle.style.transform = `scale(0.7) rotate(${rotate}deg)`
      particle.style.filter = "blur(2.5px)"
    }, 10)

    burst.appendChild(particle)
  }

  document.body.appendChild(burst)
  setTimeout(() => {
    burst.remove()
  }, 1100)
}

export function ClickBurstEffect() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.button === 0) {
        createBurst(e.clientX, e.clientY)
      }
    }
    window.addEventListener("mousedown", handler)
    return () => window.removeEventListener("mousedown", handler)
  }, [])
  return null
}
