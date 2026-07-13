import { TrendingDown, TrendingUp } from "lucide-react";
import { useCryptoStore } from "../store/crypto.store";
import { Article } from "./Article";
import { CryptoChartHistory } from "./CryptoChartHistory";

export const QuoteResult = () => {
    const selectedCrypto = useCryptoStore(
        (state) => state.selectedCrypto
    );

    if (!selectedCrypto) {
        return (
            <div className="flex items-center justify-center rounded-3xl border border-slate-700/60 bg-[#0a1a2a] p-8">
                <p className="text-slate-400 text-2xl font-medium text-center capitalize">
                    Selecciona una moneda y una criptomoneda <br /> para comenzar.
                </p>
            </div>
        );
    }

    const isPositive = selectedCrypto.change24h >= 0;

    return (
        <div className="rounded-3xl border border-slate-700/60 bg-[#0a1a2a] p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${selectedCrypto.symbol.toLowerCase()}.png`}
                        alt={selectedCrypto.name}
                        className="h-10 w-10"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png";
                        }}
                    />

                    <div>
                        <p className="text-sm text-cyan-400">
                            Análisis avanzado
                        </p>

                        <h3 className="text-xl font-semibold text-white">
                            {selectedCrypto.symbol} / USD
                        </h3>
                    </div>
                </div>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-400">
                    Live
                </span>
            </div>

            {/* Precio */}
            <div className="mt-8">
                <h2 className="text-5xl font-bold text-white sm:text-6xl">
                    $
                    {selectedCrypto.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </h2>

                <div
                    className={`mt-3 flex items-center gap-2 ${isPositive ? "text-green-400" : "text-red-400"
                        }`}
                >
                    {isPositive ? (
                        <TrendingUp size={20} />
                    ) : (
                        <TrendingDown size={20} />
                    )}

                    <span className="font-semibold">
                        {selectedCrypto.change24h.toFixed(2)}%
                    </span>
                </div>
            </div>

            {/* Tarjetas */}
            <Article />

            {/* Historial */}
            <CryptoChartHistory />
        </div>
    );
};