import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Filter } from 'lucide-react'
import { SearchSection } from './SearchSection'

interface IFilterModalProps {
  hallmarks: ISelect[]
}

const FilterModal: React.FC<IFilterModalProps> = ({ hallmarks }) => {
  return (
    <Sheet>
      <SheetTrigger className="ml-auto block  md:hidden" asChild>
        <Button className=" rounded-full" size="icon" variant="outline">
          <Filter className=" text-muted-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="mt-4"></div>
        <SearchSection hallmarks={hallmarks} />
      </SheetContent>
    </Sheet>
  )
}

export default FilterModal
