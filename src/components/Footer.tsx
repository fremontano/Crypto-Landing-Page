import {
    Globe,
    Link as LinkedinIcon,

} from "lucide-react";
export const Footer = () => {
    return (
        <>
            <footer className="border-t border-slate-800 bg-[#071521] py-12 sm:py-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tight text-cyan-400 sm:text-4xl">
                            CryptoFlux
                        </h2>
                        <p className="mt-6 max-w-xs leading-7 text-slate-400">
                            Empoderando a la próxima generación de inversionistas digitales con datos en tiempo real y herramientas profesionales para el análisis del mercado.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-5 lg:items-center">
                        <h3 className="text-lg font-semibold text-white">Enlaces</h3>
                        <nav className="flex flex-col gap-3 text-slate-400">
                            <a href="#" className="transition hover:text-cyan-400">
                                Política de Privacidad
                            </a>
                            <a href="#" className="transition hover:text-cyan-400">
                                Términos de Servicio
                            </a>
                            <a href="#" className="transition hover:text-cyan-400">
                                API Docs
                            </a>
                            <a href="#" className="transition hover:text-cyan-400">
                                Soporte
                            </a>
                        </nav>
                    </div>

                    <div className="flex flex-col items-start lg:items-end">
                        <h3 className="text-lg font-semibold text-white">Comunidad</h3>
                        <div className="mt-5 flex gap-4">
                            <a
                                href="#"
                                aria-label="Sitio Web"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-[#0b1c2a] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                            >
                                <Globe size={20} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-[#0b1c2a] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                            >
                                <LinkedinIcon size={20} />
                            </a>
                        </div>

                        <p className="mt-8 max-w-xs text-sm leading-6 text-slate-500 lg:text-right">
                            © 2026 CryptoFlux. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
