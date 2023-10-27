'use client'

import useCountry from '@/store/useCountry'
import React from 'react'
import { Button } from '../ui/button'
import Container from '../ui/container'
import { MapPinned } from 'lucide-react'

type Props = {}

const CountrySection = (props: Props) => {
  const countries = useCountry(s => s.countries)
  return (
    <Container>
      <h4 className=" mb-4 font-bold ">Explore by Destination</h4>
      <div
        className="   grid
            grid-cols-2 
            gap-8 
            pt-4 
            sm:grid-cols-2 
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6"
      >
        {countries.map(c => (
          <Button variant="ghost" key={c.id}>
            {c.name}
          </Button>
        ))}
      </div>
    </Container>
  )
}

export default CountrySection
