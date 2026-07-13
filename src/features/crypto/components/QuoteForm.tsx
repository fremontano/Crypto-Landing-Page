import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { currencies } from "../../../data";
import { useCryptoStore } from "../store/crypto.store";

type FormData = {
    currency: string;
    cryptoId: string;
};

export const QuoteForm = () => {
    const [formData, setFormData] = useState<FormData>({
        currency: "",
        cryptoId: "",
    });

    const { cryptos, setSelectedCrypto } = useCryptoStore();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.currency || !formData.cryptoId) {
            alert("Debes seleccionar una moneda y una criptomoneda.");
            return;
        }

        setSelectedCrypto(formData.cryptoId);
    };

    return (
        <div className="rounded-3xl border border-slate-700/60 bg-[#0a1a2a] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">
                Cotizador Inteligente
            </h2>

            <p className="mt-2 text-sm text-slate-400">
                Conversión instantánea entre +2,000 pares de divisas.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
            >
                {/* Moneda */}
                <label className="block text-sm font-medium text-slate-300">
                    Moneda base

                    <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#0b1c2a] p-3 text-white"
                    >
                        <option value="">Seleccione</option>

                        {currencies.map((currency) => (
                            <option
                                key={currency.code}
                                value={currency.code}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>

                <div className="flex justify-center">
                    <button
                        type="button"
                        className="rounded-full border border-slate-700 bg-[#08131f] p-2.5"
                    >
                        <ArrowRight
                            size={18}
                            className="rotate-90"
                        />
                    </button>
                </div>

                {/* Criptomoneda */}
                <label className="block text-sm font-medium text-slate-300">
                    Criptomoneda

                    <select
                        name="cryptoId"
                        value={formData.cryptoId}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-[#0b1c2a] p-3 text-white"
                    >
                        <option value="">Seleccione</option>

                        {cryptos.map((crypto) => (
                            <option
                                key={crypto.id}
                                value={crypto.id}
                            >
                                {crypto.name}
                            </option>
                        ))}
                    </select>
                </label>

                <button
                    type="submit"
                    className="w-full rounded-2xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
                >
                    Cotizar ahora
                </button>
            </form>

            <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 p-4">
                <div className="flex items-center gap-2 text-cyan-300">
                    <Sparkles size={16} />
                    Análisis en tiempo real y sincronización fluida.
                </div>
            </div>
        </div>
    );
};