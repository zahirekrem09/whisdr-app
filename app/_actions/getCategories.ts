import httpClient from '@/lib/httpClient'
import { AxiosResponse } from 'axios'

const url = 'category'
export const getCategories = async () => {
  const res: AxiosResponse<ICategory[]> = await httpClient.get(url)
  return res.data
}
