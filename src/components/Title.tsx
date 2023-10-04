import { poppins } from '@/app/fonts'
import { IText } from '@/utils/interfaces'

export default function Title({ text, classname }: IText) {
  return (
    <h1
      className={`${poppins.className} ${classname} mb-8 text-2xl text-darkCyan md:text-[40px]`}
    >
      {text}
    </h1>
  )
}
