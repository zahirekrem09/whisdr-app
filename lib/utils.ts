import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import parse from 'html-react-parser'
import sanitizeHtml from 'sanitize-html'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImagePath = (path: string) => {
  return process.env.NEXT_PUBLIC_IMAGE_URL + path
}

export const convertStringToHTML = (string: string): string | JSX.Element | JSX.Element[] => {
  const clean = sanitizeHtml(string, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['iframe']),
    allowedAttributes: {
      iframe: [
        'href',
        'allowFullScreen',
        'alt',
        'height',
        'width',
        'src',
        'loading',
        'referrerPolicy',
      ],
    },
  })
  return parse(clean)
}
