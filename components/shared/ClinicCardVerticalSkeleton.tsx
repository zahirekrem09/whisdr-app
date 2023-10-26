import { Skeleton } from '../ui/skeleton'

const ClinicCardVerticalSkeleton = () => {
  return (
    <div className="flex   cursor-pointer flex-col justify-between gap-2 rounded-sm border p-2 shadow-sm">
      <div>
        <Skeleton
          className="
            aspect-square 
            h-32
            w-full
            overflow-hidden 
            rounded-xl
          "
        ></Skeleton>
        <Skeleton className="h-2 w-full rounded-xl "></Skeleton>
      </div>

      <div className="ml-auto flex flex-wrap gap-1">
        {[1, 2, 3].map(i => (
          <Skeleton
            className="focus:ring-ring inline-flex h-1 w-2 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            key={String(i)}
          />
        ))}
      </div>
    </div>
  )
}
export default ClinicCardVerticalSkeleton
