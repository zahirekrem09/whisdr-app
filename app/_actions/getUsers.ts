import httpClient from '@/lib/httpClient'
import { AxiosError, AxiosResponse } from 'axios'

const url = 'user'

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const res: AxiosResponse<IUser[]> = await httpClient.get(url)
    return res.data
  } catch (error) {
    // if (error instanceof AxiosError) {
    // }

    return []
  }
}
