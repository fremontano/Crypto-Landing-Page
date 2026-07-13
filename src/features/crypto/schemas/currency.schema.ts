
import { z } from 'zod';

export const currencySchema = z.object({
    code: z.string().min(1, { message: "El código de la moneda es obligatorio" }),
    name: z.string().min(1, { message: "El nombre de la moneda es obligatorio" }),
});
