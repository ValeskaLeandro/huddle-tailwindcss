import { IText } from '@/utils/interfaces'

export default function Description({ text }: IText) {
  return (
    <p
      className={`mb-12 text-center text-sm text-darkCyan md:max-w-[60%] lg:max-w-[40%] lg:text-base`}
    >
      {text}
    </p>
  )
}
