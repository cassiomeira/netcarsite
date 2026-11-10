"use client"

import type { ReactNode } from "react"
import { Wifi, Phone, MessageSquare, Tv, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LOJAS, WhatsAppDialog, whatsappUrl } from "@/components/whatsapp"

type Acao = {
  icon: ReactNode
  title: string
  description: string
  buttonText: string
  href?: string
  // quando não há href, o botão abre a escolha da loja no WhatsApp com esta mensagem
  mensagem?: string
}

export function CTASection() {
  const icone = "h-6 w-6 text-[#c084fc]"

  const acoes: Acao[] = [
    {
      icon: <Wifi className={icone} />,
      title: "Assinar Plano",
      description: "Escolha o plano ideal para você",
      buttonText: "Ver Planos",
      href: "#planos",
    },
    ...LOJAS.map((loja) => ({
      icon: <MessageSquare className={icone} />,
      title: `WhatsApp ${loja.cidade}`,
      description: loja.fone,
      buttonText: "Iniciar Conversa",
      href: whatsappUrl(loja.numero),
    })),
    {
      icon: <Phone className={icone} />,
      title: "Telefone Fixo",
      description: "(38) 3526-1957",
      buttonText: "Ligar Agora",
      href: "tel:+553835261957",
    },
    {
      icon: <Tv className={icone} />,
      title: "Ver Canais",
      description: "Conheça nossa grade de programação",
      buttonText: "Lista de Canais",
      href: "#tv",
    },
    {
      icon: <MapPin className={icone} />,
      title: "Verificar Cobertura",
      description: "Veja se sua região é atendida",
      buttonText: "Consultar",
      mensagem: "Olá! Quero saber se a Netcar atende o meu endereço.",
    },
  ]

  const valores = ["Compromisso", "Responsabilidade", "Rapidez"]
  const botao = "netcar-button w-full bg-[#a855f7] font-medium text-white hover:bg-[#9333ea]"

  return (
    <section id="contato" className="netcar-dark-bg py-20">
      {/* âncora antiga, mantida para links já divulgados */}
      <span id="cobertura" />
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-[#c084fc]/50 bg-[#c084fc]/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#e9d5ff]">
            #assineseuplano
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Somos a parceria <span className="text-[#c084fc] glow-text">ideal</span> para você
          </h2>

          <div className="mb-12 mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
            {valores.map((texto) => (
              <div key={texto} className="flex items-center gap-2">
                <CheckCircle className={icone} />
                <span className="text-lg text-white">{texto}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {acoes.map((acao, index) => (
            <motion.div
              key={acao.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="service-card neon-border flex h-full flex-col p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c084fc]/20 p-4">
                  {acao.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#c084fc]">{acao.title}</h3>
                <p className="mb-6 flex-grow text-gray-300">{acao.description}</p>
                {acao.href ? (
                  <Button className={botao} asChild>
                    <a
                      href={acao.href}
                      target={acao.href.startsWith("http") ? "_blank" : undefined}
                      rel={acao.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {acao.buttonText}
                    </a>
                  </Button>
                ) : (
                  <WhatsAppDialog mensagem={acao.mensagem}>
                    <Button className={botao}>{acao.buttonText}</Button>
                  </WhatsAppDialog>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
