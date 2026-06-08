"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Wifi, Phone, Tv, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05020a]/85 backdrop-blur-md border-b border-[#c084fc]/10 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-[#c084fc] glow-text">Net</span>
              <span className="text-white">car</span>
            </span>
            <span className="text-sm text-gray-400 ml-2 self-end mb-1.5 font-semibold tracking-wider">TELECOM</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <Link
              href="#planos"
              className="text-gray-300 hover:text-[#c084fc] transition-colors flex items-center gap-2 text-base font-bold tracking-wide"
            >
              <Wifi size={18} className="text-[#c084fc]" />
              <span>Planos</span>
            </Link>
            <Link
              href="#telefonia"
              className="text-gray-300 hover:text-[#c084fc] transition-colors flex items-center gap-2 text-base font-bold tracking-wide"
            >
              <Phone size={18} className="text-[#c084fc]" />
              <span>Telefonia</span>
            </Link>
            <Link
              href="#tv"
              className="text-gray-300 hover:text-[#c084fc] transition-colors flex items-center gap-2 text-base font-bold tracking-wide"
            >
              <Tv size={18} className="text-[#c084fc]" />
              <span>TV</span>
            </Link>
            <Link
              href="#cobertura"
              className="text-gray-300 hover:text-[#c084fc] transition-colors flex items-center gap-2 text-base font-bold tracking-wide"
            >
              <CheckCircle size={18} className="text-[#c084fc]" />
              <span>Cobertura</span>
            </Link>
          </nav>

          {/* Button */}
          <Button
            className="netcar-button bg-[#c084fc] hover:bg-[#a855f7]"
            asChild
          >
            <a
              href="https://sis.netcartelecom.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Área do Cliente
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-[#c084fc] glow-text">Net</span>
              <span className="text-white">car</span>
            </span>
            <span className="text-xs text-gray-400 ml-1.5 self-end mb-0.5">TELECOM</span>
          </Link>
          <button className="text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f0a1a] border-t border-[#c084fc]/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#planos"
                className="text-gray-300 hover:text-[#c084fc] transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wifi size={18} className="text-[#c084fc]" />
                <span>Planos</span>
              </Link>
              <Link
                href="#telefonia"
                className="text-gray-300 hover:text-[#c084fc] transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} className="text-[#c084fc]" />
                <span>Telefonia</span>
              </Link>
              <Link
                href="#tv"
                className="text-gray-300 hover:text-[#c084fc] transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tv size={18} className="text-[#c084fc]" />
                <span>TV</span>
              </Link>
              <Link
                href="#cobertura"
                className="text-gray-300 hover:text-[#c084fc] transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <CheckCircle size={18} className="text-[#c084fc]" />
                <span>Cobertura</span>
              </Link>
              <Button
                className="netcar-button bg-[#c084fc] hover:bg-[#a855f7] w-full"
                asChild
              >
                <a
                  href="https://sis.netcartelecom.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
