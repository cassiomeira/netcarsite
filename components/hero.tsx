"use client"

import { motion } from "framer-motion"
import { ArrowRight, Infinity as InfinityIcon, Wifi, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppDialog } from "@/components/whatsapp"

const DESTAQUES = [
  { icon: Zap, text: "100% fibra óptica" },
  { icon: Wifi, text: "Wi-Fi grátis" },
  { icon: InfinityIcon, text: "Sem limites" },
]

// Velocímetro desenhado em vetor (fica nítido em qualquer tela): arco de 240°.
const CX = 180
const CY = 172
const R = 128
const ponto = (graus: number, raio = R) => {
  const rad = (graus * Math.PI) / 180
  return [(CX + raio * Math.cos(rad)).toFixed(2), (CY + raio * Math.sin(rad)).toFixed(2)]
}
const [X1, Y1] = ponto(150)
const [X2, Y2] = ponto(390)
const ARCO = `M ${X1} ${Y1} A ${R} ${R} 0 1 1 ${X2} ${Y2}`
const MARCAS = Array.from({ length: 13 }, (_, i) => 150 + i * 20)

function Velocimetro() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px]">
      <svg viewBox="0 0 360 262" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="vel-cor" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#9f55a2" />
            <stop offset="55%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#f5d0fe" />
          </linearGradient>
          <filter id="vel-brilho" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        {MARCAS.map((graus, i) => {
          const forte = i % 3 === 0
          const [x1, y1] = ponto(graus, R + 22)
          const [x2, y2] = ponto(graus, R + (forte ? 33 : 28))
          return (
            <line
              key={graus}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ffffff"
              strokeOpacity={forte ? 0.6 : 0.28}
              strokeWidth={forte ? 2.5 : 1.5}
              strokeLinecap="round"
            />
          )
        })}
        <path d={ARCO} fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="20" strokeLinecap="round" />
        <motion.path
          d={ARCO}
          fill="none"
          stroke="url(#vel-cor)"
          strokeWidth="20"
          strokeLinecap="round"
          filter="url(#vel-brilho)"
          opacity={0.65}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d={ARCO}
          fill="none"
          stroke="url(#vel-cor)"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        />
      </svg>

      <div className="absolute inset-x-0 top-[27%] flex flex-col items-center text-center text-white">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">até</span>
        <span className="flex items-end gap-2 leading-none">
          <span className="text-6xl font-extrabold tracking-tight sm:text-8xl">1</span>
          <span className="mb-1 text-3xl font-extrabold tracking-tight text-[#e9d5ff] sm:mb-2 sm:text-5xl">GIGA</span>
        </span>
        <span className="mt-1 text-xs font-medium text-white/80 sm:mt-2 sm:text-sm">de internet 100% fibra óptica</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero-netcar relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#170a26]/70 via-[#170a26]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#170a26] to-transparent" />

      <div className="container relative z-10 mx-auto px-4 pb-14 md:pb-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e9d5ff] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e9d5ff]" />
              </span>
              #assineseuplano
            </span>

            <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Você com a
              <span className="mt-2 block">
                <span className="hero-marca">melhor conexão</span>
              </span>
            </h1>

            <p className="mb-7 max-w-xl text-lg font-medium leading-relaxed text-white/90">
              Internet 100% fibra óptica de até 1 Giga, com Wi-Fi grátis e benefícios digitais em todos os planos. Só
              fica no off quem não tem nosso plano.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <WhatsAppDialog mensagem="Olá! Quero assinar a internet da Netcar.">
                <Button className="h-14 rounded-xl bg-white px-8 text-lg font-bold text-[#4a2a86] shadow-[0_10px_30px_rgba(23,10,38,0.45)] transition-all duration-300 hover:bg-[#f3e8ff]">
                  Assine agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </WhatsAppDialog>
              <Button
                className="h-14 rounded-xl border border-white/25 bg-white/10 px-8 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                asChild
              >
                <a href="#planos">Ver planos</a>
              </Button>
            </div>

            <ul className="mt-7 hidden flex-wrap gap-3 sm:flex">
              {DESTAQUES.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 backdrop-blur-md"
                >
                  <Icon className="h-4 w-4 text-[#e9d5ff]" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="rounded-3xl border border-white/15 bg-[#170a26]/55 px-4 pb-4 pt-5 shadow-[0_30px_70px_rgba(10,4,20,0.55)] backdrop-blur-md sm:px-6 sm:pb-6 sm:pt-8"
          >
            <Velocimetro />
            <a
              href="#planos"
              className="mx-auto mt-2 flex w-full max-w-sm items-center justify-between gap-4 rounded-2xl bg-[linear-gradient(90deg,#9f55a2_0%,#a855f7_100%)] px-5 py-4 text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold leading-tight">
                Planos a partir de
                <span className="block text-2xl font-extrabold leading-tight">
                  R$ 80,00<span className="text-sm font-semibold">/mês</span>
                </span>
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
