"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wifi } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15 - 7.5,
        y: (e.clientY / window.innerHeight) * 15 - 7.5,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section 
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-[#09060a] overflow-hidden min-h-[90vh] flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/bg-stadium.png')",
      }}
    >
      {/* Radial overlay to darken and blend stadium background */}
      <div 
        className="absolute inset-0 pointer-events-none z-1 transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(1000px 500px at 70% 50%, rgba(122, 75, 255, 0.22), rgba(5, 2, 10, 0.92))",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white relative"
          >
            {/* Subtle floating badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c084fc]"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">A melhor conexão da região</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight font-sans">
              <span className="block text-white mb-2">Rumo ao Hexa</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#d8b4fe] to-[#9333ea] glow-text relative">
                Netcar Telecom
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-medium leading-relaxed">
              Conecte-se ao jogo com fibra 100% e estabilidade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="h-14 px-8 text-lg font-bold rounded-xl bg-gradient-to-r from-[#c084fc] to-[#9333ea] hover:from-[#a855f7] hover:to-[#7e22ce] text-white shadow-[0_8px_30px_rgba(122,75,255,0.25)] hover:shadow-[0_8px_40px_rgba(122,75,255,0.4)] transition-all duration-300"
                asChild
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5538998340593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assine Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                className="h-14 px-8 text-lg font-semibold rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md transition-all duration-300"
                asChild
              >
                <a href="#planos">
                  Ver Planos
                </a>
              </Button>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="bg-white/5 border border-[#c084fc]/20 text-gray-200 px-4 py-2 rounded-xl text-sm font-semibold shadow-inner">
                Wi-Fi 6
              </span>
            </div>
          </motion.div>

          {/* Right: Interactive WiFi Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-10"
          >
            <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
              {/* Outer glowing rings with cursor movements */}
              <div 
                className="absolute inset-0 rounded-full border border-[#c084fc]/20 animate-[spin_12s_linear_infinite] shadow-[0_0_50px_rgba(192,132,252,0.1)] transition-transform duration-1000 ease-out"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
              ></div>
              <div 
                className="absolute inset-6 rounded-full border border-[#9333ea]/30 animate-[spin_18s_linear_infinite_reverse] transition-transform duration-1000 ease-out"
                style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
              ></div>
              <div className="absolute inset-16 rounded-full border border-dashed border-[#d8b4fe]/40 animate-[spin_24s_linear_infinite]"></div>
              
              {/* Center WiFi Element */}
              <div 
                className="relative z-10 bg-gradient-to-br from-[#1a0b2e] to-[#0a0614] border border-[#c084fc]/40 w-52 h-52 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(192,132,252,0.4)] backdrop-blur-md transition-transform duration-1000 ease-out"
                style={{ transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)` }}
              >
                <Wifi className="w-24 h-24 text-[#cdb3ff] animate-pulse filter drop-shadow-[0_10px_30px_rgba(120,60,255,0.2)]" />
                <div className="absolute inset-0 rounded-full bg-[#c084fc]/10 animate-ping"></div>
              </div>
              
              {/* Floating stats */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[18%] right-[2%] bg-[#0f0a1a]/80 backdrop-blur-md border border-[#c084fc]/30 px-4 py-2 rounded-xl shadow-xl z-20"
              >
                <p className="text-white font-bold text-sm">Hexa Fibra</p>
                <p className="text-[#c084fc] text-xs">Estabilidade Total</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
