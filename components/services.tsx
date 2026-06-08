"use client"

import { Tv, Music, Film, Video } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      icon: <Tv className="h-8 w-8 text-[#c084fc]" />,
      title: "TV Netcar Telecom",
      description: "São mais de 80 canais! Assista seus programas favoritos com qualidade digital.",
      image: "/placeholder.svg?height=200&width=350",
      delay: 0,
    },
    {
      icon: <Music className="h-8 w-8 text-[#c084fc]" />,
      title: "Deezer",
      description: "+90 milhões de temas disponíveis. Podcasts, playlists, modo offline e sem publicidade.",
      image: "/placeholder.svg?height=200&width=350",
      delay: 0.1,
    },
    {
      icon: <Film className="h-8 w-8 text-[#c084fc]" />,
      title: "Paramount+",
      description: "Acesse filmes, séries e conteúdo original da Paramount diretamente no seu dispositivo.",
      image: "/placeholder.svg?height=200&width=350",
      delay: 0.2,
    },
    {
      icon: <Video className="h-8 w-8 text-[#c084fc]" />,
      title: "Watch",
      description: "Streaming exclusivo Netcar com conteúdo variado para toda a família.",
      image: "/placeholder.svg?height=200&width=350",
      delay: 0.3,
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-[#c084fc] text-white px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(192,132,252,0.7)]">
            Confira as novidades
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Nossos Serviços</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Além de internet de alta velocidade, oferecemos uma variedade de serviços para seu entretenimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="service-card neon-border"
            >
              <div className="h-40 bg-gradient-to-br from-[#0f0a1a] to-black flex items-center justify-center">
                <div className="p-4 bg-[#c084fc]/20 rounded-full shadow-[0_0_15px_rgba(192,132,252,0.5)]">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#c084fc] glow-text">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
