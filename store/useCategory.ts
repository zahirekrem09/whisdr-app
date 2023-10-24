import httpClient from '@/lib/httpClient'
import { AxiosResponse } from 'axios'
import { create } from 'zustand'

import { persist, createJSONStorage } from 'zustand/middleware'

interface ICategoryStore {
  categories: ISelect[]
  getCategoriesSelect: () => void
}

const url = 'category'

const useCategory = create(
  persist<ICategoryStore>(
    (set, get) => ({
      categories: [],
      getCategoriesSelect: async () => {
        const res: AxiosResponse<ISelect[]> = await httpClient.get(`${url}/select`)
        set({ categories: res.data })
      },
    }),
    {
      name: 'category-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCategory
