
import { z } from 'zod';
import type { cryptoSchema,  } from '../schemas/crypto-schema';
import type { currencySchema } from '../schemas/currency.schema';
import type { historySchema } from '../schemas/history.schema';


export type Currency =  z.infer<typeof currencySchema>;
export type Crypto = z.infer<typeof cryptoSchema>;
export type HistoryChart = z.infer<typeof historySchema>;