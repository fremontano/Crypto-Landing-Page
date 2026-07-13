import { z } from 'zod';


export const cryptoSchema = z.object({
    id: z.string(),
    symbol: z.string(),
    name: z.string(),
    price: z.number(),
    change24h: z.number(),
    marketCap: z.number(),
    volume24h: z.number(),
    supply: z.number(),
});

export const cryptosSchema = z.array(cryptoSchema);
