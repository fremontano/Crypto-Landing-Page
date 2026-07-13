import type { History } from "../interfaces/history.response";
import { historiesSchema } from "../schemas/history.schema";

export const mapHistory = (history: History[]) => {
    const mapped = history.map((item) => ({
        time: new Date(item.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),

        price: Number(item.priceUsd),
    }));

    return historiesSchema.parse(mapped);
};