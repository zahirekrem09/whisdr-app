import { Skeleton } from '@/components/ui/skeleton'
//TODO skeşeton hazırlanacak
export default function ClinicDetailLoading() {
  return (
    <div className="flex items-center justify-center">
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
    </div>
  )
}
