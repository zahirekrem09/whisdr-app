import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MapPin } from 'lucide-react'

type IMapModalProps = {
  title: string
  iframe: string | React.ReactNode
}

const MapModal = ({ title, iframe }: IMapModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="text-muted-foreground flex cursor-pointer items-center gap-1 text-sm  font-semibold">
          <MapPin className="text-sm" />
          {title}
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Google Maps</DialogTitle>
          <DialogDescription>Google Maps Location </DialogDescription>

          <div className="mapBox sm:max-w-[400px] ">{iframe}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default MapModal
