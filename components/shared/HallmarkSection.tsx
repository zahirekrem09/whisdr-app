import React from 'react'

import { Badge } from '@/components/ui/badge'

interface IHallmarkSectionProps {
  hallmarks: string
}
const HallmarkSection: React.FC<IHallmarkSectionProps> = ({ hallmarks }) => {
  return (
    <div className="ml-auto flex flex-wrap gap-1">
      {hallmarks
        ? hallmarks.split(',').map(hallmark => (
            <Badge key={hallmark} variant="primary">
              {hallmark}
            </Badge>
          ))
        : null}
    </div>
  )
}

export default HallmarkSection
