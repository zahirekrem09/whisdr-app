import httpClient from '@/lib/httpClient'
import { AxiosResponse } from 'axios'
import { create } from 'zustand'

import { persist, createJSONStorage } from 'zustand/middleware'

interface ICountryStore {
  countries: ICountry[]
  getCountries: () => void
}

const url = 'country'

const useCountry = create(
  persist<ICountryStore>(
    (set, get) => ({
      countries: [],
      getCountries: async () => {
        const res: AxiosResponse<ICountry[]> = await httpClient.get(url)

        set({ countries: res.data })
      },
    }),
    {
      name: 'country-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCountry
