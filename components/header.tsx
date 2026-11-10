"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Wifi, Smartphone, Tv, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetcarLogo } from "@/components/netcar-logo"

const LINKS = [
  { href: "#planos", label: "Planos", icon: Wifi },
  { href: "#telefonia", label: "Chip Netcar", icon: Smartphone },
  { href: "#tv", label: "TV", icon: Tv },
  { href: "#contato", label: "Contato", icon: MessageCircle },
]

const AREA_DO_CLIENTE = "https://sis.netcartelecom.com.br/"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#170a26]/85 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Netcar - página inicial" className="flex items-center text-white">
          <NetcarLogo className="h-9 w-auto md:h-11" />
        </Link>

        {/* Navegação (computador) */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-base font-bold tracking-wide text-gray-200 transition-colors hover:text-[#c084fc]"
            >
              <Icon size={18} className="text-[#c084fc]" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <Button className="netcar-button hidden bg-[#a855f7] font-semibold text-white hover:bg-[#9333ea] md:inline-flex" asChild>
          <a href={AREA_DO_CLIENTE} target="_blank" rel="noopener noreferrer">
            Área do Cliente
          </a>
        </Button>

        {/* Botão do menu (celular) */}
        <button
          className="p-1 text-white md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu (celular) */}
      {isMenuOpen && (
        <div className="border-t border-[#c084fc]/20 bg-[#170a26] md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {LINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 py-2 text-gray-200 transition-colors hover:text-[#c084fc]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={18} className="text-[#c084fc]" />
                  <span>{label}</span>
                </Link>
              ))}
              <Button className="netcar-button w-full bg-[#a855f7] font-semibold text-white hover:bg-[#9333ea]" asChild>
                <a href={AREA_DO_CLIENTE} target="_blank" rel="noopener noreferrer">
                  Área do Cliente
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
