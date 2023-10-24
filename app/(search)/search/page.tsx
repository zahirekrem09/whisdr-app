import ClinicsSection from '@/components/shared/ClinicsSection'
import EmptyState from '@/components/shared/EmptyState'
import { SearchSection } from '@/components/shared/SearchSection'
import FilterModal from '@/components/shared/FilterModal'

import { getCompanies } from '../../_actions/getCompanies'
import { getHallmarks } from '@/app/_actions/hallmarks'

interface ISearchProps {
  searchParams: ICompanyParams
}

const Search = async ({ searchParams }: ISearchProps) => {
  const companies = await getCompanies(searchParams)
  const hallmarks = await getHallmarks()

  return (
    <div className=" relative grid w-full flex-1 grid-cols-1   gap-4 lg:grid-cols-12 ">
      <FilterModal hallmarks={hallmarks} />
      <div className=" sticky top-[80px] hidden h-fit md:block lg:col-span-3 ">
        <SearchSection hallmarks={hallmarks} />
      </div>
      <div className="h-full w-full flex-1 snap-x   snap-mandatory overflow-y-auto whitespace-nowrap lg:col-span-9">
        {companies.length === 0 ? (
          <EmptyState showReset isSearchPage />
        ) : (
          <>
            <ClinicsSection clinics={companies} isSeachPage />
          </>
        )}
      </div>
    </div>
  )
}

export default Search
