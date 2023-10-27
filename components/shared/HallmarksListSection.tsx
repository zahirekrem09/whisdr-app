import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import Container from '../ui/container'

interface IHallmarkSectionProps {
  hallmarks: ISelect[]
}
const HallmarksListSection: React.FC<IHallmarkSectionProps> = ({ hallmarks }) => {
  return (
    <Container>
      <h4 className=" mb-4 font-bold ">Explore by Hallmarks</h4>
      <div className=" flex flex-wrap gap-1">
        {hallmarks.length > 0
          ? hallmarks.map(hallmark => (
              <Button key={hallmark.id} variant="primary">
                {hallmark.name}
              </Button>
            ))
          : null}
      </div>
    </Container>
  )
}

export default HallmarksListSection
