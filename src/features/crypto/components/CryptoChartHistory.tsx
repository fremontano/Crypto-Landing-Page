import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import { useCryptoStore } from "../store/crypto.store";

export const CryptoChartHistory = () => {
    const history = useCryptoStore((state) => state.history);

    return (
        <div className="mt-8 flex-1">

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={history}>
                        <XAxis dataKey="time" />

                        <YAxis
                            dataKey="price"
                            domain={["auto", "auto"]}
                        />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#22d3ee"
                            fill="#22d3ee33"
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <svg
                    className="h-4 w-4 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>

                Datos actualizados en tiempo real desde CoinCap.
            </p>
        </div>
    );
};