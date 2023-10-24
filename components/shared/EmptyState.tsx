'use client'

import Heading from './Heading'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

interface IEmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
  isSearchPage?: boolean
}

const EmptyState: React.FC<IEmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
  showReset,
  isSearchPage = false,
}) => {
  return (
    <div
      className="
        flex
        h-[60vh] 
        flex-col 
        items-center 
        justify-center 
        gap-2 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="mt-4 w-48">
        {showReset && (
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={isSearchPage ? '/search' : '/'}
          >
            Remove all filters
          </Link>
        )}
      </div>
    </div>
  )
}

export default EmptyState
