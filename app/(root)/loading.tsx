import ClinicCardVerticalSkeleton from '@/components/shared/ClinicCardVerticalSkeleton'

const Loading = () => {
  return (
    <div
      className="
            mt-24
            grid 
            grid-cols-1 
            gap-8 
            pt-4 
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
          "
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
        <ClinicCardVerticalSkeleton key={String(i)} />
      ))}
    </div>
  )
}

export default Loading
