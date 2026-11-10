"use client"

import type { ReactNode } from "react"
import { MessageCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Lojas da Netcar e o WhatsApp de cada uma (os mesmos números do material impresso).
export const LOJAS = [
  { cidade: "Carbonita", fone: "(38) 99834-0593", numero: "5538998340593" },
  { cidade: "Itamarandiba", fone: "(38) 99939-3846", numero: "5538999393846" },
]

export function whatsappUrl(numero: string, mensagem?: string) {
  const base = `https://api.whatsapp.com/send?phone=${numero}`
  return mensagem ? `${base}&text=${encodeURIComponent(mensagem)}` : base
}

/**
 * Envolve um botão: ao clicar, o cliente escolhe a loja (Carbonita ou Itamarandiba)
 * e só então abre o WhatsApp dela, já com a mensagem preenchida.
 */
export function WhatsAppDialog({
  children,
  mensagem,
  titulo = "Fale com a Netcar no WhatsApp",
}: {
  children: ReactNode
  mensagem?: string
  titulo?: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-[#c084fc]/30 bg-[#1f0e33] text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">{titulo}</DialogTitle>
          <DialogDescription className="text-gray-300">Escolha a loja mais perto de você.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          {LOJAS.map((loja) => (
            <a
              key={loja.cidade}
              href={whatsappUrl(loja.numero, mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-[#c084fc]/30 bg-[#2b1450] px-4 py-3 transition-colors hover:border-[#c084fc] hover:bg-[#371a63]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25d366]/15 text-[#25d366]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-white">{loja.cidade}</span>
                  <span className="block text-sm text-gray-300">{loja.fone}</span>
                </span>
              </span>
              <span className="text-sm font-semibold text-[#c084fc]">Abrir</span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
