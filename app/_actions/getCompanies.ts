import httpClient from '@/lib/httpClient'
import { AxiosResponse } from 'axios'
// import qs from 'query-string'
//TODO : !! qs generate edilicek
const url = 'company'
export const getCompanies = async (params: ICompanyParams) => {
  const { startDate, endDate, country, category } = params

  const res: AxiosResponse<ICompanyProps[]> = await httpClient.get(url, {
    params: { c: category },
  })
  return res.data
}

export const getCompanyById = async (id: string) => {
  const res: AxiosResponse<ICompany> = await httpClient.get(`${url}/${id}`)
  return res.data
}

const fileUrl = 'commonfile'

export const getGallery = async (companyId: string): Promise<ICommonFile[]> => {
  const res: AxiosResponse<ICommonFile[]> = await httpClient.get(fileUrl, {
    params: { companyId },
  })
  return res.data
}
