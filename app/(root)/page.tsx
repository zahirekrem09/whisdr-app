import { getCompanies } from '../_actions/getCompanies'

import CategoriesTypesSection from '@/components/shared/CategoriesTypesSection'
import { getCategories } from '../_actions/getCategories'

import EmptyState from '@/components/shared/EmptyState'

import { getHallmarks } from '../_actions/hallmarks'

import dynamic from 'next/dynamic'

const HallmarksListSection = dynamic(() => import('@/components/shared/HallmarksListSection'), {
  ssr: false,
})
const CountrySection = dynamic(() => import('@/components/shared/CountrySection'), {
  ssr: false,
})
const ClinicsSection = dynamic(() => import('@/components/shared/ClinicsSection'), {
  ssr: false,
})

interface IHomeProps {
  searchParams: ICompanyParams
}

const Home = async ({ searchParams }: IHomeProps) => {
  const companies = await getCompanies(searchParams)
  const categories = await getCategories()
  const hallmarks = await getHallmarks()

  return (
    <>
      <CategoriesTypesSection categories={categories} />
      <div className="flex flex-col gap-10">
        <CountrySection />
        <HallmarksListSection hallmarks={hallmarks} />
        {companies.length === 0 ? <EmptyState showReset /> : <ClinicsSection clinics={companies} />}
      </div>
    </>
  )
}

export default Home
