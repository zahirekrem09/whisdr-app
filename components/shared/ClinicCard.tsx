import Image from 'next/image'
import Link from 'next/link'
import HallmarkSection from './HallmarkSection'
import MapModal from './MapModal'
import { cn, convertStringToHTML, convertToSlug, getImagePath } from '@/lib/utils'

interface IClinicCardProps {
  clinic: ICompanyProps
  className?: string
}
const ClinicCard: React.FC<IClinicCardProps> = ({ clinic, className }) => {
  const iframe = convertStringToHTML(clinic.location ? clinic.location : 'No location data')

  const slug = convertToSlug(clinic.name)

  return (
    <div
      className={cn(
        'group relative col-span-1 hidden  w-full  cursor-pointer gap-2 overflow-hidden rounded-sm border p-2 shadow-sm md:flex',
        className,
      )}
    >
      <Link
        href={`/clinics/${clinic.id}`}
        className="
            relative 
            aspect-square 
            w-48
            overflow-hidden 
            rounded-xl
          "
      >
        <Image
          fill
          className="
              h-full 
              w-full 
              object-cover 
              transition 
              group-hover:scale-110
            "
          src={getImagePath(clinic.imagePath)}
          alt={clinic.name}
        />
      </Link>
      <div
        className="
            absolute
            right-1
            top-1
          "
      >
        <span className="text-bold h-6 w-6 rounded-full bg-[#009fb7] p-1  text-sm  text-zinc-100 hover:bg-[#009fb7]/90 ">
          9.9
        </span>
      </div>
      <div className="flex   flex-1 flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <Link
            href={`/clinics/${slug}-${clinic.id}`}
            className="text-md cursor-pointer truncate font-semibold  hover:text-[#009fb7]/90 "
          >
            {clinic.name}
          </Link>
          <MapModal title={`${clinic.countryName}, ${clinic?.cityName}`} iframe={iframe} />
        </div>

        <HallmarkSection hallmarks={clinic.hallmarks ?? ''} />
      </div>
    </div>
  )
}
export default ClinicCard
