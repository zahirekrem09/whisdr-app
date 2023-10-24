import { getCompanies } from '../_actions/getCompanies'
import ClinicsSection from '@/components/shared/ClinicsSection'
import CategoriesTypesSection from '@/components/shared/CategoriesTypesSection'
import { getCategories } from '../_actions/getCategories'

import EmptyState from '@/components/shared/EmptyState'

interface IHomeProps {
  searchParams: ICompanyParams
}

const Home = async ({ searchParams }: IHomeProps) => {
  const companies = await getCompanies(searchParams)
  const categories = await getCategories()

  return (
    <>
      <CategoriesTypesSection categories={categories} />
      {companies.length === 0 ? <EmptyState showReset /> : <ClinicsSection clinics={companies} />}
    </>
  )
}

export default Home
