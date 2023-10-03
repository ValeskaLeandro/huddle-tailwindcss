import { poppins } from '@/app/fonts'
import { IText } from '@/utils/interfaces'

export default function Title({ text }: IText) {
  return (
    <h1
      className={`${poppins.className} mb-8 text-center text-2xl text-darkCyan md:text-[40px]`}
    >
      {text}
    </h1>
  )
}
