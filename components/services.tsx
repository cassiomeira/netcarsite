"use client"

import { Tv, Music, BookOpen, Video } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-[#c084fc]" />,
      title: "AYA E-BOOKS",
      description: "Um eBook pode mudar sua vida! Aproveite a novidade Netcar e transforme o seu dia-a-dia com leitura online.",
      delay: 0,
      gradient: "from-[#1a0b2e] to-[#2d1b4e]"
    },
    {
      icon: <Tv className="h-10 w-10 text-[#c084fc]" />,
      title: "TV Netcar Telecom",
      description: "São mais de 80 canais! Assista seus programas favoritos com qualidade digital.",
      delay: 0.1,
      gradient: "from-[#0f0a1a] to-[#1a0b2e]"
    },
    {
      icon: <Music className="h-10 w-10 text-[#c084fc]" />,
      title: "Deezer",
      description: "+90 milhões de temas disponíveis. Podcasts, playlists, modo offline e sem publicidade.",
      delay: 0.2,
      gradient: "from-[#1a0b2e] to-[#2d1b4e]"
    },
    {
      icon: <Video className="h-10 w-10 text-[#c084fc]" />,
      title: "Watch",
      description: "Streaming exclusivo Netcar com conteúdo variado para toda a família.",
      delay: 0.3,
      gradient: "from-[#0f0a1a] to-[#1a0b2e]"
    },
  ]

  return (
    <section className="py-24 bg-[#0a0614] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c084fc]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-[#c084fc]/10 border border-[#c084fc]/30 text-[#e9d5ff] px-5 py-2 rounded-full text-sm font-semibold tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse"></span>
              BENEFÍCIOS EXCLUSIVOS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Mais que Internet, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#d8b4fe] glow-text">Entretenimento</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Descubra um mundo de conteúdos digitais inclusos no seu plano. Leitura, música, filmes e TV ao vivo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c084fc]/0 to-[#c084fc]/0 group-hover:from-[#c084fc]/20 group-hover:to-[#9333ea]/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className={`relative h-full bg-gradient-to-br ${service.gradient} border border-[#c084fc]/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#c084fc]/50 group-hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)]`}>
                <div className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-[#0f0a1a] shadow-[inset_0_0_15px_rgba(192,132,252,0.1)] border border-[#c084fc]/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] group-hover:border-[#c084fc]/80 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#c084fc] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c084fc]/5 rounded-full blur-2xl group-hover:bg-[#c084fc]/20 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
