'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import qs from 'query-string'
import { getImagePath } from '@/lib/utils'
import Image from 'next/image'

interface ICategoryBoxProps {
  icon: string
  label: string
  selected?: boolean
  id: number | string
}

const CategoryBox: React.FC<ICategoryBoxProps> = ({ icon, label, selected, id }) => {
  const [imgSrc, setImgSrc] = useState(getImagePath(icon))
  const noImgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    //TODO: filter optıonlarına gore type belırlenecek
    const updatedQuery: any = {
      ...currentQuery,
      category: id,
    }

    if (params?.get('category') === String(id)) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true },
    )

    router.push(url)
  }, [router, id, params])

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        cursor-pointer 
        flex-col 
        items-center
        justify-center
        gap-2
        border-b-2
        p-3
        transition hover:text-[#009fb7]
        ${selected ? 'border-b-4  border-b-[#009fb7] ' : 'border-transparent'}
        ${selected ? 'text-[#009fb7]' : 'text-neutral-500'}
      `}
    >
      <div
        className="
            relative 
            aspect-square 
            w-8
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
              hover:scale-110
            "
          priority={false}
          alt="hair"
          src={imgSrc ?? noImgSrc}
          onError={async () => {
            setImgSrc(noImgSrc)
          }}
        />
      </div>

      <div className="text-sm font-medium">{label}</div>
    </div>
  )
}

export default CategoryBox
