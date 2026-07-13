import type { Crypto } from "../interfaces/crypto.response";
import { cryptosSchema } from "../schemas/crypto-schema";

export const mapCryptoData = (cryptos: Crypto[]) => {
  const mapped = cryptos.map((crypto) => ({
    id: crypto.id,
    symbol: crypto.symbol,
    name: crypto.name,
    price: Number(crypto.priceUsd),
    change24h: Number(crypto.changePercent24Hr),
    marketCap: Number(crypto.marketCapUsd),
    volume24h: Number(crypto.volumeUsd24Hr),
    supply: Number(crypto.supply),   
  }));

  return cryptosSchema.parse(mapped);
}


