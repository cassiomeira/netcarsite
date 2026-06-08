"use client"

import { motion } from "framer-motion"

export function ChannelLineup() {
  // Lista de canais com seus nomes
  const channels = [
    { name: "LINKTV" },
    { name: "CANAL PORTAL" },
    { name: "AgroCanal" },
    { name: "ALL SPORTS" },
    { name: "CANAL RURAL" },
    { name: "CANAL SAÚDE" },
    { name: "Canção Nova" },
    { name: "CLASSIQUE TV" },
    { name: "REDE CNT" },
    { name: "GLOBO" },
    { name: "JPNEWS" },
    { name: "BAND" },
    { name: "CANAL DO BOI" },
    { name: "Chespirito" },
    { name: "CENTRAL TV" },
    { name: "CINE BRASIL TV" },
    { name: "FISH TV" },
    { name: "GAZETA" },
    { name: "CULTURA" },
    { name: "Futura" },
    { name: "KIDS" },
    { name: "KAOS HOMENS" },
    { name: "LBV" },
    { name: "MN" },
    { name: "REDE MEIO NORTE" },
    { name: "A VOZ DA ESPERANÇA" },
    { name: "Novo Tempo" },
    { name: "Onda Oeste" },
    { name: "100,3 FM" },
    { name: "TV PAI ETERNO" },
    { name: "Rá Tim Bum" },
    { name: "RECORD TV" },
    { name: "Rede Gênesis" },
    { name: "METRÓPOLE" },
    { name: "REDE MINAS" },
    { name: "NGT" },
    { name: "REDE VIDA" },
    { name: "SBT" },
    { name: "RS21" },
    { name: "TV BRUSQUE" },
    { name: "TV CÂMARA" },
    { name: "TV EVANGELIZAR" },
    { name: "VRT" },
    { name: "WH CHANNEL" },
    { name: "SESC TV" },
    { name: "ORN" },
    { name: "RECORD NEWS" },
    { name: "REDE FAMÍLIA" },
    { name: "REDE TV" },
    { name: "REDE SUPER" },
    { name: "SÉRIES CLÁSSICAS" },
    { name: "TV Brasil" },
    { name: "TV SENADO" },
    { name: "TV JUSTIÇA" },
    { name: "TV TURFE" },
    { name: "VIVAX TV" },
    { name: "98,3 CANELINHA FM" },
    { name: "REDE UTV" },
  ]

  return (
    <section id="tv" className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-1 glow-text">
              GRADE DE <span className="text-[#c084fc]">CANAIS</span>
            </h2>
            <p className="text-gray-400 text-sm italic">*A GRADE DE CANAIS PODE MUDAR SEM AVISO PRÉVIO</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="bg-[#0f0a1a] border border-[#c084fc]/20 rounded-lg p-2 flex items-center justify-center h-16 hover:border-[#c084fc]/60 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-white font-bold text-xs">{channel.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-[#c084fc]/20 border border-[#c084fc]/30 rounded-lg p-6 shadow-[0_0_15px_rgba(192,132,252,0.3)]">
              <h3 className="text-xl font-bold mb-3 text-[#c084fc] glow-text">Assista onde e quando quiser!</h3>
              <p className="text-gray-300 mb-4">
                Todos os canais disponíveis nos planos Netcar Telecom, com qualidade digital e sem interferências.
              </p>
              <div className="flex justify-center">
                <a
                  href="#planos"
                  className="netcar-button bg-[#c084fc] hover:bg-[#a855f7] text-white font-medium px-6 py-2 rounded-md inline-block shadow-[0_0_15px_rgba(192,132,252,0.5)]"
                >
                  Ver Planos com TV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
