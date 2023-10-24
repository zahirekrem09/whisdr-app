import httpClient from '@/lib/httpClient'
import { AxiosResponse } from 'axios'

const url = 'hallmark'

export const getHallmarks = async (): Promise<ISelect[]> => {
  const res: AxiosResponse<ISelect[]> = await httpClient.get(url)
  return res.data
}

export const getHallmark = async (id: string): Promise<ISelect> => {
  const res: AxiosResponse<ISelect> = await httpClient.get(`${url}/${id}`)
  return res.data
}
