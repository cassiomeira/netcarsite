"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Substitua estes placeholders pelas URLs reais das imagens do PDF
  const slides = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/planoschip-rMdoK7UeyQy6dvas7xt20mdEtPPNMV.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beneficios-2t2vixFkDwZvsx27oQFD5IDJWewSdv.jpeg",
  ]

  // Efeito para alternar slides automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="pt-20 netcar-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-4 inline-block bg-[#c084fc] text-white px-3 py-1 rounded-full text-sm font-bold">
              #assine seu plano
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 netcar-neon-text">100% FIBRA</h1>
            <p className="text-xl mb-4">Só fica no off QUEM NÃO TEM nosso plano</p>
            <p className="text-xl mb-8">Sua conexão com o futuro começa aqui.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full h-full bg-gradient-to-r from-[#c084fc]/20 to-[#8b5cf6]/20 rounded-xl blur-xl"></div>
              <div className="relative z-10 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-[#c084fc]/30 shadow-[0_0_20px_rgba(192,132,252,0.5)]">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white glow-text">Netcar Telecom</h3>
                  <p className="text-white/80">Promoções e novidades</p>
                </div>

                {/* Carrossel de Propagandas */}
                <div className="relative overflow-hidden rounded-lg w-full bg-black/30" style={{ minHeight: "300px" }}>
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={slide || "/placeholder.svg"}
                        alt={`Promoção Netcar ${index + 1}`}
                        className="max-w-full max-h-[500px] object-contain"
                      />
                    </div>
                  ))}

                  {/* Indicadores de slide */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsTransitioning(true)
                          setTimeout(() => {
                            setCurrentSlide(index)
                            setIsTransitioning(false)
                          }, 500)
                        }}
                        className={`w-3 h-3 rounded-full ${
                          currentSlide === index
                            ? "bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.7)]"
                            : "bg-white/50"
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <span className="px-3 py-1 bg-[#c084fc] text-white text-xs rounded-full shadow-[0_0_10px_rgba(192,132,252,0.7)]">
                    {currentSlide === 0 ? "Planos a partir de R$ 39,99/mês" : "Benefícios exclusivos Netcar"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="wave-animation">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}
