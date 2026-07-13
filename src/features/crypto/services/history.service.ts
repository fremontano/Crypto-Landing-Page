import { api } from "../../../api/coincap"
import type { HistoryResponse } from "../interfaces/history.response"
import { mapHistory } from '../mappers/cryptoHistoy.mapper';



export const getHistory  = async (id:string) => {

    const {data} = await api.get<HistoryResponse>( `/assets/${id}/history`,{

        params:{
            interval:'h1'
        }

    })

    return mapHistory(data.data);
  
}
