"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white">
                <span className="text-[#c084fc] glow-text">Net</span>
                <span className="text-white">car</span>
              </span>
              <span className="text-sm text-gray-300">Telecom</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Conectando você ao futuro com a melhor tecnologia em internet de fibra óptica e serviços digitais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 neon-highlight">Produtos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#planos" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Internet Fibra
                </Link>
              </li>
              <li>
                <Link href="#telefonia" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Telefonia Móvel
                </Link>
              </li>
              <li>
                <Link href="#tv" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  TV por Assinatura
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Combos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Para Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 neon-highlight">Suporte</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Status da Rede
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                  Teste de Velocidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 neon-highlight">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#c084fc] flex-shrink-0 mt-1" />
                <span className="text-gray-400">(38) 3526-1957</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#c084fc] flex-shrink-0 mt-1" />
                <span className="text-gray-400">financeiro@netcartelecom.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#c084fc] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Avenida Januário Ribeiro, 1091, Centro, Carbonita-MG</span>
              </li>
              <li className="mt-6">
                <Button className="netcar-button bg-[#c084fc] hover:bg-[#a855f7] w-full flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(192,132,252,0.5)]">
                  <MessageSquare size={18} />
                  <span>Falar no WhatsApp</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Netcar Telecom - Todos os direitos reservados.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-[#c084fc] text-sm">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#c084fc] text-sm">
                Termos de Uso
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#c084fc] text-sm">
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
