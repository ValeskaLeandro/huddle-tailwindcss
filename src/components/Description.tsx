import { IText } from '@/utils/interfaces'

export default function Description({ text, classname }: IText) {
  return (
    <p
      className={`${classname} mb-12 text-sm text-darkCyan md:max-w-[60%] lg:text-base`}
    >
      {text}
    </p>
  )
}
