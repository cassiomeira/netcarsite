"use client"

import { Clock, CreditCard, Wifi } from "lucide-react"
import { motion } from "framer-motion"

export function BusinessHours() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-[#c084fc] text-white px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(192,132,252,0.7)]">
            #assine seu plano
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Informações Importantes</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Saiba mais sobre nosso funcionamento e pagamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="service-card p-6 neon-border"
          >
            <div className="flex items-center mb-4">
              <div className="feature-icon">
                <Clock className="h-5 w-5 text-[#c084fc]" />
              </div>
              <h3 className="text-xl font-bold text-[#c084fc] glow-text">Funcionamento</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#c084fc]">•</span>
                <span>
                  Atendemos de segunda à sexta das 8h às 18h fisicamente e realizamos atendimento técnico até as 21h.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c084fc]">•</span>
                <span>
                  Aos sábados atendemos das 8h às 13h fisicamente e realizamos atendimento técnico até as 17h.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c084fc]">•</span>
                <span>Nos domingos realizamos atendimento técnico das 8h até as 17h.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="service-card p-6 neon-border"
          >
            <div className="flex items-center mb-4">
              <div className="feature-icon">
                <CreditCard className="h-5 w-5 text-[#c084fc]" />
              </div>
              <h3 className="text-xl font-bold text-[#c084fc] glow-text">Pagamentos</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#c084fc]">•</span>
                <span>
                  Nossos planos são pré pagos e a primeira parcela tem o prazo de até 5 dias para ser quitada.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c084fc]">•</span>
                <span>Os pagamentos devem ser feitos via boleto ou pix.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c084fc]">•</span>
                <span>
                  Ao assinar um plano é feito um contrato fidelidade de 1 ano. Se o cliente realizar cancelamento antes
                  de vencer o prazo do contrato haverá multa rescisória.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
