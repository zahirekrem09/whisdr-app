import { getCompanies } from '../_actions/getCompanies'
import ClinicsSection from '@/components/shared/ClinicsSection'
import CategoriesTypesSection from '@/components/shared/CategoriesTypesSection'
import { getCategories } from '../_actions/getCategories'

import EmptyState from '@/components/shared/EmptyState'
import CountrySection from '@/components/shared/CountrySection'
import HallmarksListSection from '@/components/shared/HallmarksListSection'
import { getHallmarks } from '../_actions/hallmarks'

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
        {/* <CountrySection />
        <HallmarksListSection hallmarks={hallmarks} /> */}
        {companies.length === 0 ? <EmptyState showReset /> : <ClinicsSection clinics={companies} />}
      </div>
    </>
  )
}

export default Home
