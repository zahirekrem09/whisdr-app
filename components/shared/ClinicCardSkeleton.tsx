import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'

const ClinicCardSkeleton = () => {
  return (
    <div
      className={cn(
        'group relative col-span-1 hidden  w-full  cursor-pointer gap-2 overflow-hidden rounded-sm border-2  p-2 shadow-sm md:flex',
      )}
    >
      <Skeleton
        className="
            relative 
            aspect-square 
            h-48
            w-48
            overflow-hidden 
            rounded-xl
          "
      ></Skeleton>
      <div
        className="
            absolute
            right-1
            top-1
          "
      >
        <Skeleton className="text-bold h-6 w-6 rounded-full bg-[#009fb7] p-1  text-sm  text-zinc-100 hover:bg-[#009fb7]/90 "></Skeleton>
      </div>
      <div className="flex   flex-1 flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <Skeleton className="text-md h-2 w-full cursor-pointer truncate font-semibold  hover:text-[#009fb7]/90 "></Skeleton>
        </div>
      </div>
    </div>
  )
}
export default ClinicCardSkeleton
