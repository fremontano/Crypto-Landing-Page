import { api } from "../../../api/coincap";
import type { CryptoResponse } from "../interfaces/crypto.response";
import { mapCryptoData } from "../mappers/crypto.mapper";

export const getCryptos = async () => {
  const { data } = await api.get<CryptoResponse>("/assets", {
    params: {
      limit: 100,
    },
  });

  return mapCryptoData(data.data);
};


export const getCryptoreHistory = async (id: string, interval: string) => {
  const { data } = await api.get(`/assets/${id}/history`, {
    params: {
      interval: interval,
    },
  });
  return data.data;
};