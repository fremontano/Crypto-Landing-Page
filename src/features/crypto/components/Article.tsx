import { formatCompactNumber } from '../../../utils/format-number'
import { useCryptoStore } from '../store/crypto.store'


export const Article = () => {
    const selectedCrypto = useCryptoStore(
        (state) => state.selectedCrypto
    ); 
    
    return (
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800/80 bg-[#0b1c2a] p-3">
                <p className="text-xs text-slate-500">
                    Volumen 24h
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                    ${selectedCrypto && formatCompactNumber(selectedCrypto.volume24h)}
                </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#0b1c2a] p-3">
                <p className="text-xs text-slate-500">
                    Market Cap
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                    ${selectedCrypto && formatCompactNumber(selectedCrypto.marketCap)}

                </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-[#0b1c2a] p-3">
                <p className="text-xs text-slate-500">
                    Supply
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                    {selectedCrypto && formatCompactNumber(selectedCrypto.supply)}
                </p>
            </div>
        </div>
    )
}
