import { users } from '../../../data'
import { ShieldCheck } from 'lucide-react'

export const ProfileUsers = () => {
    return (
        <>
            <section className="border-b border-slate-800/70 bg-[#071521] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl border border-slate-800/80 bg-[#0a1a2a]/70 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                        <div className="flex -space-x-3 sm:-space-x-4">
                            {users.map((user) => (
                                <img
                                    key={user.id}
                                    src={user.image}
                                    alt=""
                                    className="h-12 w-12 rounded-full border-[3px] border-[#233e55] object-cover sm:h-14 sm:w-14"
                                />
                            ))}
                        </div>
                        <p className="text-center text-sm text-slate-400 sm:text-left">
                            Join over <span className="font-semibold text-cyan-400">1,000,000+</span> users worldwide who trust CriptoFlux for their crypto analysis and portfolio management.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300">
                        <ShieldCheck size={16} />
                        Trusted by traders
                    </div>
                </div>
            </section>
        </>
    )
}
