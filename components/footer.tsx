"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetcarLogo } from "@/components/netcar-logo"
import { LOJAS, WhatsAppDialog, whatsappUrl } from "@/components/whatsapp"

export function Footer() {
  return (
    <footer className="bg-[#110619] border-t border-white/10 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" aria-label="Netcar - página inicial" className="inline-flex items-center mb-6 text-white">
              <NetcarLogo className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              Conectando você ao futuro com a melhor tecnologia em internet de fibra óptica e serviços digitais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/netcartelecom/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c084fc] transition-colors"
              >
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
                  Chip Netcar
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
                <a
                  href="https://sis.netcartelecom.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c084fc] transition-colors"
                >
                  Área do Cliente
                </a>
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
                <MessageSquare size={20} className="text-[#c084fc] flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <span className="block mb-2">WhatsApp da sua região</span>
                  <ul className="space-y-3">
                    {LOJAS.map((loja) => (
                      <li key={loja.numero}>
                        <a
                          href={whatsappUrl(loja.numero)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-[#c084fc] transition-colors"
                        >
                          <span className="block text-sm leading-snug">{loja.cidade}</span>
                          <span className="block font-semibold text-gray-200">{loja.fone}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <WhatsAppDialog>
                  <Button className="netcar-button bg-[#a855f7] hover:bg-[#9333ea] text-white w-full flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    <span>Falar no WhatsApp</span>
                  </Button>
                </WhatsAppDialog>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Netcar Telecom - Todos os direitos reservados. CNPJ 11.435.268/0001-72</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/contrato.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#c084fc] text-sm font-semibold transition-colors">
                Contrato de Prestação de Serviços
              </Link>
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
