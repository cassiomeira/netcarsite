"use client"

import { Wifi, Music, Tv, Play, Check, CheckCircle, BookOpen, Smartphone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function Plans() {
  const plans = [
    {
      name: "220 MB",
      price: "R$ 80,00",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 220 MB" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <BookOpen className="h-5 w-5 text-[#c084fc]" />, text: "AYA E-BOOKS" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
      ],
      popular: false,
      delay: 0,
    },
    {
      name: "300 MB",
      price: "R$ 89,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 300 MB" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <BookOpen className="h-5 w-5 text-[#c084fc]" />, text: "AYA E-BOOKS" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
      ],
      popular: false,
      delay: 0.1,
    },
    {
      name: "350 MB",
      price: "R$ 99,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 350 MB" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <BookOpen className="h-5 w-5 text-[#c084fc]" />, text: "AYA E-BOOKS" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "WATCH" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
      ],
      popular: false,
      delay: 0.2,
    },
    {
      name: "450 MB",
      price: "R$ 109,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 450 MB" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <BookOpen className="h-5 w-5 text-[#c084fc]" />, text: "AYA E-BOOKS" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "WATCH" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
        { icon: <ShieldCheck className="h-5 w-5 text-[#c084fc]" />, text: "WIFI PREMIUM" },
      ],
      popular: true,
      delay: 0.3,
    },
    {
      name: "600 MB",
      price: "R$ 119,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 600 MB" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <BookOpen className="h-5 w-5 text-[#c084fc]" />, text: "AYA E-BOOKS" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "WATCH" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
      ],
      popular: false,
      delay: 0.4,
    },
  ]

  return (
    <section id="planos" className="py-24 netcar-dark-bg relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#9333ea]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c084fc]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-block bg-[#c084fc]/20 border border-[#c084fc]/50 text-[#e9d5ff] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(192,132,252,0.3)]">
              #assineseuplano
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#a855f7] glow-text">Planos Fibra</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experimente a velocidade e estabilidade da verdadeira fibra óptica. Assine agora e aproveite os benefícios exclusivos da Netcar Telecom.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: plan.delay }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex h-full"
            >
              <Card 
                className={`plan-card relative flex flex-col w-full text-white overflow-hidden border ${
                  plan.popular ? 'border-[#c084fc] shadow-[0_0_25px_rgba(192,132,252,0.25)] scale-[1.02] lg:scale-105 z-10 bg-[#150e26]/90' : 'border-[#c084fc]/20 bg-[#0f0a1a]/80'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[#c084fc] to-[#9333ea] text-center py-1.5 text-xs font-bold uppercase tracking-wider shadow-md z-20">
                    Mais Assinado
                  </div>
                )}
                
                {/* Linha gradiente no topo */}
                {!plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c084fc]/50 to-[#8b5cf6]/50"></div>
                )}

                <CardHeader className={`pb-4 ${plan.popular ? 'pt-10' : 'pt-6'}`}>
                  <div className="text-center">
                    <CardDescription className="text-[#c084fc] font-semibold tracking-wider text-sm mb-2 uppercase">100% Fibra Óptica</CardDescription>
                    <CardTitle className="text-4xl font-extrabold text-white mb-2">{plan.name}</CardTitle>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 font-medium mb-1">/mês</span>
                    </div>
                  </div>
                </CardHeader>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c084fc]/30 to-transparent my-2"></div>

                <CardContent className="flex-grow pt-4">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 bg-[#c084fc]/10 p-1 rounded-full">
                          {feature.icon}
                        </div>
                        <span className="text-gray-300 text-sm leading-snug font-medium">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-6 pb-6">
                  <Button 
                    className={`w-full h-12 text-md font-bold rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-[#c084fc] hover:bg-[#a855f7] text-white shadow-[0_0_15px_rgba(192,132,252,0.4)] hover:shadow-[0_0_25px_rgba(192,132,252,0.6)]' 
                        : 'bg-[#1e1432] hover:bg-[#2d1b4e] text-white border border-[#c084fc]/30 hover:border-[#c084fc]'
                    }`} 
                    asChild
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=5538998340593"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Assinar Agora
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
