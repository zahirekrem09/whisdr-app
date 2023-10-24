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

export const convertToSlug = (str: string): string => {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from =
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;'
  const to =
    'AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '_') // collapse whitespace and replace by -
    .replace(/-+/g, '_') // collapse dashes

  return str
}
