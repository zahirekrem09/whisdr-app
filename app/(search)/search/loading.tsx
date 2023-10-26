import ClinicCardSkeleton from '@/components/shared/ClinicCardSkeleton'

const Loading = () => {
  return (
    <div className=" relative grid w-full flex-1 grid-cols-1   gap-4 lg:grid-cols-12 ">
      <div className=" sticky top-[80px] hidden h-fit md:block lg:col-span-3 "></div>
      <div className=" h-full w-full flex-1 snap-x   snap-mandatory overflow-y-auto whitespace-nowrap lg:col-span-9">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <ClinicCardSkeleton key={String(i)} />
        ))}
      </div>
    </div>
  )
}

export default Loading
