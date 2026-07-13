import { z } from "zod";

export const historySchema = z.object({
    time: z.string(),
    price: z.number(),
});

export const historiesSchema = z.array(historySchema);