"use client"

import { Phone, MessageSquare, Wifi, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function MobileService() {
  return (
    <section id="telefonia" className="py-20 netcar-dark-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block bg-[#c084fc] text-white px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(192,132,252,0.7)]">
              #assine seu plano
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Telefonia <span className="text-[#c084fc] glow-text">Móvel</span>
            </h2>
            <p className="text-white/90 mb-8">
              Aproveite nossa telefonia móvel com planos que cabem no seu bolso e oferecem tudo o que você precisa para
              se manter conectado.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#c084fc]/20 p-3 rounded-lg shadow-[0_0_10px_rgba(192,132,252,0.3)]">
                  <Wifi className="h-6 w-6 text-[#c084fc]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">11GB de Internet Móvel</h3>
                  <p className="text-white/80">Navegue à vontade com nosso pacote generoso de dados móveis.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c084fc]/20 p-3 rounded-lg shadow-[0_0_10px_rgba(192,132,252,0.3)]">
                  <Phone className="h-6 w-6 text-[#c084fc]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Ligações Ilimitadas</h3>
                  <p className="text-white/80">
                    Fale sem preocupações com ligações ilimitadas para qualquer operadora.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c084fc]/20 p-3 rounded-lg shadow-[0_0_10px_rgba(192,132,252,0.3)]">
                  <MessageSquare className="h-6 w-6 text-[#c084fc]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">SMS Ilimitados</h3>
                  <p className="text-white/80">Envie mensagens de texto à vontade para qualquer número.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c084fc]/20 p-3 rounded-lg shadow-[0_0_10px_rgba(192,132,252,0.3)]">
                  <CheckCircle className="h-6 w-6 text-[#c084fc]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Incluso no Plano Premium</h3>
                  <p className="text-white/80">Disponível no plano de 600 MB (R$ 119,90) sem custo adicional.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="netcar-button bg-[#c084fc] hover:bg-[#a855f7]" asChild>
                <a
                  href="https://api.whatsapp.com/send?phone=5538998340593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com um Consultor
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 floating">
              <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-[#c084fc]/30 shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white glow-text">Planos Chip Netcar</h3>
                  <p className="text-white/80 mt-2">Escolha o plano ideal para suas necessidades</p>
                </div>

                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/planoschip-rMdoK7UeyQy6dvas7xt20mdEtPPNMV.jpeg"
                    alt="Planos Chip Netcar"
                    className="w-full h-auto rounded-lg shadow-[0_0_15px_rgba(192,132,252,0.5)]"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-center font-bold">
                      A partir de <span className="text-[#c084fc] text-xl">R$ 39,99</span>/mês
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button className="netcar-button bg-[#c084fc] hover:bg-[#a855f7] w-full" href="#planos">
                    Ver Detalhes dos Planos
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
