import { create } from 'zustand';
import { getCryptos } from '../services/crypto.service.ts';
import type { Crypto, HistoryChart } from '../types';

import { devtools } from 'zustand/middleware';
import { getHistory } from '../services/history.service.ts';



type CryptoStore = {
    // Estado 
    cryptos: Crypto[]; // Array of cryptocurrencies 
    history: HistoryChart[];
    selectedCrypto: Crypto | null; // Currently selected cryptocurrency
    loading: boolean;
    error: string | null;

    // Acciones 
    fetchCryptoData: () => Promise<void>;
    setSelectedCrypto: (id: string) => void;
}



export const useCryptoStore = create<CryptoStore>()(devtools((set, get) => ({

    cryptos: [],
    history: [],
    loading: false,
    error: null,
    selectedCrypto: null,


    fetchCryptoData: async () => {
        try {
            set({ loading: true, error: null });
            const cryptos = await getCryptos();
            // Primera criptomoneda (Bitcoin)
            const firstCrypto = cryptos[0];

            // Obtener su historial
            const history = firstCrypto
                ? await getHistory(firstCrypto.id)
                : [];

            set({
                cryptos,
                selectedCrypto: firstCrypto ?? null,
                history,
                loading: false,
                error: null,
            });

        } catch (error) {
            set({
                error: (error as Error).message,
                loading: false,
            });
        }
    },

    setSelectedCrypto: async (id) => {
        const crypto = get().cryptos.find((c) => c.id === id);

        if (!crypto) return;
        const history = await getHistory(id);

        set({
            selectedCrypto: crypto,
            history,
        });
    },
    fetchHistory: async (id: string) => {
        const history = await getHistory(id)
        set({ history })
    }


})));
