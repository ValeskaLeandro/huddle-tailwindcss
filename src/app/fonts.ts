/* eslint-disable camelcase */
import { Poppins, Open_Sans } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
