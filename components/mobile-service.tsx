"use client"

import { motion } from "framer-motion"
import { Check, MessageCircle, Sparkles } from "lucide-react"
import { LOJAS, whatsappUrl } from "@/components/whatsapp"

const MENSAGEM = "Olá! Quero saber mais sobre o Chip Netcar."

const BENEFICIOS = [
  "Ligações ilimitadas para fixo e celular de todo o Brasil",
  "WhatsApp ilimitado: texto, áudio, vídeo e fotos",
  "Conexão dentro e fora de casa",
]

// Seção do Chip Netcar (telefonia móvel). Conteúdo conforme o folder da promoção de lançamento.
export function MobileService() {
  return (
    <section id="telefonia" className="chip-netcar relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#c084fc]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[480px] w-[480px] rounded-full bg-[#f0a3c4]/15 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#ffd54a]" />
              Novidade: Chip Netcar 5G
            </span>

            <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Aproveite cada momento com o <span className="text-[#ffd54a]">Chip Netcar</span>
            </h2>
            <p className="mb-8 max-w-xl text-lg text-white/90">
              Agora você pode desfrutar de conexão dentro e fora de casa.
            </p>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-wider text-[#ffd54a]">
                Promoção para os 100 primeiros assinantes
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-3">
                <div>
                  <p className="text-sm text-white/70">De</p>
                  <p className="text-2xl font-bold text-white/70 line-through decoration-2">
                    R$ 79,90<span className="text-sm font-medium">/mês</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Por</p>
                  <p className="text-5xl font-extrabold leading-none md:text-6xl">
                    R$ 39,90<span className="text-lg font-semibold">/mês</span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-white/90">
                <strong className="text-white">Mude agora e ganhe:</strong> internet + celular ilimitado com preço
                especial de lançamento!
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {BENEFICIOS.map((texto) => (
                <li key={texto} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffd54a] text-[#3d2278]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-lg text-white/95">{texto}</span>
                </li>
              ))}
            </ul>

            <p className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-white/80">Fale conosco</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LOJAS.map((loja) => (
                <a
                  key={loja.numero}
                  href={whatsappUrl(loja.numero, MENSAGEM)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded-xl bg-white px-5 py-2.5 font-bold text-[#4a2a86] shadow-lg transition-colors hover:bg-[#f3e8ff]"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#1fa855]" />
                  <span className="text-left leading-tight">
                    <span className="mb-0.5 block text-[11px] font-semibold uppercase leading-snug tracking-wide text-[#6b4fa0]">
                      {loja.cidade}
                    </span>
                    {loja.fone}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src="/chip-netcar.jpg"
              alt="Chip Netcar 5G: promoção para os 100 primeiros assinantes, de R$ 79,90 por R$ 39,90 por mês, com ligações e WhatsApp ilimitados"
              loading="lazy"
              className="mx-auto w-full max-w-md rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(23,10,38,0.55)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
