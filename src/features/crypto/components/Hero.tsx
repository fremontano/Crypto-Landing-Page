import { ArrowRight, BarChart3 } from 'lucide-react'
import React from 'react'

export const Hero = () => {
  return (
    
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_40%),linear-gradient(135deg,_#071521_0%,_#081b2a_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <header className="mb-10 flex items-center justify-between rounded-full border border-cyan-400/15 bg-[#0b1c2a]/70 px-4 py-3 backdrop-blur-sm sm:px-6">
            <span className="text-lg font-semibold tracking-tight text-cyan-300">CriptoFlux</span>
            <a
              href="#cotizador"
              className="hidden rounded-full border border-cyan-400/20 px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 sm:inline-flex"
            >
              Explorar plataforma
            </a>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Live Market Intelligence
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Domina el Mercado del <span className="text-cyan-400">Cripto.</span>
              </h1>

              <p className="mt-4 text-base text-slate-400 sm:text-lg">
                Con nuestra plataforma de análisis en tiempo real, visualiza, calcula y gestiona tus activos con mayor claridad.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <a
                  href="#cotizador"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Cotizar ahora
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#analisis"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-[#0b1c2a]/70 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Ver análisis
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400 lg:justify-start">
                <span className="rounded-full border border-slate-800 bg-[#0b1c2a]/70 px-3 py-2">+2,000 pares</span>
                <span className="rounded-full border border-slate-800 bg-[#0b1c2a]/70 px-3 py-2">Alertas inteligentes</span>
                <span className="rounded-full border border-slate-800 bg-[#0b1c2a]/70 px-3 py-2">Portafolio en vivo</span>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center">
              <div className="animate-float relative aspect-square w-full max-w-[430px] rounded-[2rem] border border-cyan-500/10 bg-[#0b1c2a]/90 p-5 shadow-2xl shadow-cyan-950/40 sm:p-8">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),_transparent_60%)]" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="rounded-full border border-white/10 p-8 sm:p-12">
                    <div className="rounded-full border border-cyan-400/20 p-10 sm:p-16">
                      <BarChart3 size={72} className="text-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="animate-floatSlow absolute bottom-4 right-4 flex max-w-[240px] items-center gap-3 rounded-2xl border border-cyan-500/20 bg-[#0B1C2A]/95 px-4 py-3 shadow-2xl sm:bottom-6 sm:right-6 sm:px-5 sm:py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l4-4 3 3 7-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Bitcoin (BTC)</p>
                    <p className="text-lg font-semibold text-slate-200 sm:text-2xl">+$2,450.21</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
