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

        {/* WhatsApp de cada loja/região, com o número à vista */}
        <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#e9d5ff]">
          WhatsApp da sua região
        </h3>
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOJAS.map((loja, index) => (
            <motion.a
              key={loja.numero}
              href={whatsappUrl(loja.numero)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex h-full items-center gap-4 rounded-2xl border border-[#c084fc]/30 bg-[#261242]/85 p-5 transition-colors hover:border-[#c084fc] hover:bg-[#33185c]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25d366]/15 text-[#25d366]">
                <MessageSquare className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-snug text-gray-300">{loja.cidade}</span>
                <span className="mt-1 block whitespace-nowrap text-lg font-bold text-white">{loja.fone}</span>
              </span>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
