"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Maximize2, Minimize2, List } from "lucide-react"

export function TvNetcar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="pt-20 pb-4 bg-black relative">
      <div className="container mx-auto px-1 md:px-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#0f0a1a] to-black p-2 rounded-lg border border-[#c084fc]/30 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
            <div className="flex justify-between items-center mb-2 px-1">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#c084fc] mr-2 pulse"></div>
                <h2 className="text-lg font-bold text-white glow-text">
                  TV NETCAR <span className="text-[#c084fc]">AO VIVO</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#tv"
                  className="text-white hover:text-[#c084fc] transition-colors flex items-center gap-1"
                  aria-label="Ver grade de canais"
                >
                  <List size={16} />
                  <span className="text-xs">Canais</span>
                </a>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-white hover:text-[#c084fc] transition-colors"
                  aria-label={isExpanded ? "Minimizar" : "Maximizar"}
                >
                  {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden bg-black border border-[#c084fc]/20">
              <div className={`${isExpanded ? "h-[70vh]" : "h-[200px] md:h-[280px]"} transition-all duration-300`}>
                <iframe
                  allowFullScreen
                  src="https://acesso.ecast.site/broadcaster/netcar/live/player"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  title="TV Netcar - Canal exclusivo para clientes"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-12 flex items-end pointer-events-none">
                <div className="container mx-auto px-2 pb-1">
                  <p className="text-white/80 text-xs">
                    <span className="text-[#c084fc] font-bold">EXCLUSIVO</span> para clientes Netcar Telecom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
