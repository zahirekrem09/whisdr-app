import React from 'react'
import Container from '../ui/container'
import ClinicCard from './ClinicCard'
import ClinicCardVertical from './ClinicCardVertical'

interface IClinicsSection {
  clinics: ICompanyProps[]
  isSeachPage?: boolean
}
const ClinicsSection: React.FC<IClinicsSection> = ({ clinics, isSeachPage = false }) => {
  return (
    <Container>
      {isSeachPage ? (
        <div
          className="
            grid
            w-full 
            grid-cols-1 
            gap-4
         
          "
        >
          {clinics.map(clinic => {
            return (
              <React.Fragment key={clinic.id}>
                <ClinicCard key={clinic.id} clinic={clinic} />
                <div className=" block md:hidden">
                  <ClinicCardVertical key={clinic.id} clinic={clinic} />
                </div>
              </React.Fragment>
            )
          })}
        </div>
      ) : (
        <>
          <h4 className=" mb-4 font-bold ">Highly Rating Clinics</h4>
          <div
            className="
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
            {clinics.map(clinic => {
              return <ClinicCardVertical key={clinic.id} clinic={clinic} />
            })}
          </div>
        </>
      )}
    </Container>
  )
}
export default ClinicsSection
