"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"

export default function HeroSection() {
  const titles = ["Full Stack Web Developer", "Passionate Learner", "Tech Enthusiast"]
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(
    titles.findIndex(t => t === "Full Stack Web Developer") !== -1
      ? titles.findIndex(t => t === "Full Stack Web Developer")
      : 0
  )
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentTitle = titles[currentIndex]

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, currentIndex, isTyping, titles])

  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/1UTfCUehsleS3UGjEuJv-YKvYxjeohLYq/view?usp=drive_link", "_blank")
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <h1 className="text-2xl md:text-4xl text-gray-600 font-light mb-2">👋 Hello, I'm</h1>
          </div>

          {/* Name with Gradient */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">BhagyaLaxmi</span>
              <span> </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Kummaripally</span>
            </h4>
          </div>

          {/* Typing Effect */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 inline-block">
              <div className="text-2xl md:text-4xl text-gray-800 font-semibold h-16 flex items-center justify-center min-w-[300px]">
                <span className="text-blue-600">{displayText}</span>
                <span className="animate-pulse ml-2 text-blue-600">|</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            style={{ animationDelay: "0.6s" }}
          >
            {/* <button
              onClick={handleResumeDownload}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-3">
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button> */}

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="animate-fade-in-up pt-12" style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce mt-2"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  )
}



