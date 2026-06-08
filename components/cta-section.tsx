"use client"

import { Wifi, MessageSquare, Tv, MapPin, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  const actions = [
    {
      icon: <Wifi className="h-6 w-6 text-[#c084fc]" />,
      title: "Assinar Plano",
      description: "Escolha o plano ideal para você",
      buttonText: "Ver Planos",
      href: "#planos",
      delay: 0,
    },
    {
      icon: <Phone className="h-6 w-6 text-[#c084fc]" />,
      title: "Telefone Fixo",
      description: "(38) 3526-1957",
      buttonText: "Ligar Agora",
      href: "tel:+553835261957",
      delay: 0.1,
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#c084fc]" />,
      title: "WhatsApp",
      description: "(38) 99834-0593",
      buttonText: "Iniciar Conversa",
      href: "https://api.whatsapp.com/send?phone=5538998340593",
      delay: 0.15,
    },
    {
      icon: <Tv className="h-6 w-6 text-[#c084fc]" />,
      title: "Ver Canais",
      description: "Conheça nossa grade de programação",
      buttonText: "Lista de Canais",
      href: "#canais",
      delay: 0.2,
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#c084fc]" />,
      title: "Verificar Cobertura",
      description: "Veja se sua região é atendida",
      buttonText: "Consultar",
      href: "#cobertura",
      delay: 0.25,
    },
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#c084fc]" />,
      text: "Compromisso",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#c084fc]" />,
      text: "Responsabilidade",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#c084fc]" />,
      text: "Rapidez",
    },
  ]

  return (
    <section className="py-20 netcar-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-[#c084fc] text-white px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(192,132,252,0.7)]">
            #assine seu plano
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Somos a parceria <span className="text-[#c084fc] glow-text">ideal</span> para você
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                {benefit.icon}
                <span className="text-white text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: action.delay }}
              viewport={{ once: true }}
            >
              <div className="service-card p-6 h-full flex flex-col neon-border">
                <div className="bg-[#c084fc]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c084fc] glow-text">{action.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{action.description}</p>
                <Button
                  className="netcar-button bg-[#c084fc] hover:bg-[#a855f7] w-full shadow-[0_0_15px_rgba(192,132,252,0.5)]"
                  asChild
                >
                  <a
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white font-medium"
                  >
                    {action.buttonText}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
