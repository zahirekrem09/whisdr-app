import Image from 'next/image'
import Link from 'next/link'
import HallmarkSection from './HallmarkSection'
import MapModal from './MapModal'

import { convertStringToHTML, convertToSlug, getImagePath } from '@/lib/utils'
interface IClinicCardProps {
  clinic: ICompanyProps
}
const ClinicCardVertical: React.FC<IClinicCardProps> = ({ clinic }) => {
  const iframe = convertStringToHTML(clinic.location ? clinic.location : 'No location data')

  const slug = convertToSlug(clinic.name)

  return (
    <div className="group col-span-1 cursor-pointer rounded-sm border p-2 shadow-sm">
      <div className="flex w-full flex-col gap-2">
        <Link
          href={`/clinics/${clinic.id}`}
          className="
            relative 
            aspect-square 
            w-full 
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
          <div
            className="
            absolute
            right-1
            top-1
          "
          >
            <span className="text-bold h-6 w-6 rounded-full  bg-[#009fb7] p-1 text-sm text-slate-200 ">
              9.9
            </span>
          </div>
        </Link>
        <Link
          href={`/clinics/${slug}-${clinic.id}`}
          className="text-md  cursor-pointer  truncate  font-semibold  hover:text-[#009fb7]/90 "
        >
          {clinic.name}
        </Link>
        <MapModal title={`${clinic.countryName}, ${clinic?.cityName}`} iframe={iframe} />
        <HallmarkSection hallmarks={clinic.hallmarks ?? ''} />
      </div>
    </div>
  )
}
export default ClinicCardVertical
