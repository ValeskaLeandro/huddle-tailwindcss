import { IText } from '@/utils/interfaces'

export default function Description({ text, classname }: IText) {
  return (
    <p className={`${classname} mb-12 text-sm text-darkCyan lg:text-base`}>
      {text}
    </p>
  )
}
