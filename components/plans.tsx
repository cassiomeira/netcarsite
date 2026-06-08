"use client"

import { Wifi, Music, Tv, Play, Check, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export function Plans() {
  const plans = [
    {
      name: "300 MB",
      price: "R$ 89,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 300 MB" },
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
      ],
      popular: false,
      delay: 0,
    },
    {
      name: "450 MB",
      price: "R$ 109,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 450 MB" },
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "PARAMOUNT+" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "WATCH" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "WIFI PREMIUM" },
      ],
      popular: true,
      delay: 0.2,
    },
    {
      name: "600 MB",
      price: "R$ 119,90",
      features: [
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "Download: 600 MB" },
        { icon: <Wifi className="h-5 w-5 text-[#c084fc]" />, text: "WI-FI GRÁTIS" },
        { icon: <CheckCircle className="h-5 w-5 text-[#c084fc]" />, text: "Sem limites" },
        { icon: <Tv className="h-5 w-5 text-[#c084fc]" />, text: "NETCAR TV" },
        { icon: <Music className="h-5 w-5 text-[#c084fc]" />, text: "DEEZER" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "WATCH" },
        { icon: <Play className="h-5 w-5 text-[#c084fc]" />, text: "PARAMOUNT+" },
        { icon: <Phone className="h-5 w-5 text-[#c084fc]" />, text: "Telefonia móvel com 11GB + ligações ilimitadas" },
      ],
      popular: false,
      delay: 0.4,
    },
  ]

  return (
    <section id="planos" className="py-20 netcar-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-[#c084fc] text-white px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(192,132,252,0.7)]">
            #assine seu plano
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="text-[#c084fc] glow-text">Fibra Óptica</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Escolha o plano ideal para você e sua família. Todos com fibra óptica de alta velocidade e benefícios
            exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.delay }}
              viewport={{ once: true }}
            >
              <Card className="plan-card relative h-full flex flex-col text-white neon-border">
                {plan.popular && (
                  <div className="badge">
                    <Check className="h-5 w-5" />
                  </div>
                )}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c084fc] to-[#8b5cf6]"></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white glow-text">100% FIBRA ÓPTICA</CardTitle>
                      <CardDescription className="text-gray-300">Internet de alta velocidade</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#c084fc] mb-1 glow-text">{plan.name}</h3>
                    <p className="text-3xl font-bold text-white">
                      {plan.price}
                      <span className="text-sm text-gray-400">/mês</span>
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {feature.icon}
                        <span className="text-gray-200">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full netcar-button bg-[#c084fc] hover:bg-[#a855f7]" asChild>
                    <a
                      href="https://api.whatsapp.com/send?phone=5538998340593"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium"
                    >
                      Assinar
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
