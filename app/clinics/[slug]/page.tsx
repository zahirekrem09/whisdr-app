import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SearchSection } from '@/components/shared/SearchSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ClinicSlider from '@/components/shared/ClinicSlider'
import FilterModal from '@/components/shared/FilterModal'
import HallmarkSection from '@/components/shared/HallmarkSection'
import MapModal from '@/components/shared/MapModal'
import { convertStringToHTML, getImagePath } from '@/lib/utils'
import { getCompanyById, getGallery } from '../../_actions/getCompanies'
import { getHallmarks } from '@/app/_actions/hallmarks'

interface IClinicPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: IClinicPageProps): Promise<Metadata> {
  // read route params
  const slug = `Whisdr | ${params.slug}`
  return {
    title: slug,
  }
}

const ClinicPage = async ({ params }: IClinicPageProps) => {
  const companyId = params.slug.split('-').slice(-1)[0]
  let clinic
  try {
    clinic = await getCompanyById(companyId)
  } catch (error) {
    notFound()
  }

  const [images, hallmarks] = await Promise.all([getGallery(companyId), getHallmarks()])

  const iframe = convertStringToHTML(clinic.location ? clinic.location : 'No location data')

  return (
    <div className="flex flex-col gap-4">
      {/* Mobil screen */}
      <FilterModal hallmarks={hallmarks} />
      <div className=" grid w-full grid-cols-1   gap-4 lg:grid-cols-12 ">
        <div className=" flex  flex-col gap-3 lg:col-span-3 ">
          {/* Normal screen */}
          <div className=" hidden h-fit md:block ">
            <SearchSection hallmarks={hallmarks} />
          </div>
          <div className="mapBox hidden h-40 overflow-y-auto rounded-sm border shadow-sm md:block  ">
            {iframe}
          </div>
        </div>
        <div className=" w-full   rounded-sm    p-4  lg:col-span-9">
          <div className="flex flex-col gap-2 ">
            <div className="text-md cursor-pointer font-semibold  hover:text-[#009fb7]/90 ">
              {clinic.name}
            </div>
            <MapModal title={`${clinic.town}, ${clinic?.address}`} iframe={iframe} />

            <div className="  w-full ">
              {images.length === 0 ? (
                <div className=" relative aspect-square max-h-[800px] w-full overflow-hidden rounded-xl border ">
                  <Image
                    fill
                    className="h-full w-full  object-cover transition group-hover:scale-110"
                    src={getImagePath(clinic.imagePath)}
                    alt={clinic.name}
                  />
                </div>
              ) : (
                <ClinicSlider images={images} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" grid w-full grid-cols-1   gap-4 lg:grid-cols-12 ">
        <Card className=" col-span-12 w-full   rounded-sm   border p-4 shadow-sm lg:col-span-9">
          <CardHeader>
            <CardTitle>Clinic Detail</CardTitle>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod reprehenderit illo nam
              accusantium aliquid, rerum et praesentium,
            </CardDescription>
          </CardHeader>
          <CardContent>
            <article
              className=" overflow-x-scroll"
              dangerouslySetInnerHTML={{
                __html: clinic.description,
              }}
            />
          </CardContent>
        </Card>

        <Card className=" col-span-12 h-fit rounded-sm   border p-4 shadow-sm lg:col-span-3">
          <CardHeader>
            <CardTitle>Hallmarks</CardTitle>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod reprehenderit illo nam
              accusantium aliquid, rerum et praesentium,
            </CardDescription>
          </CardHeader>
          <CardContent>
            <HallmarkSection hallmarks={clinic.hallmarks ?? ''} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ClinicPage
