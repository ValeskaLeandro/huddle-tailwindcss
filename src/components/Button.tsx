import { IText } from '@/utils/interfaces'

export default function Button({ text }: IText) {
  return (
    <button
      className="rounded-3xl bg-pink px-10 py-3 text-center text-sm font-semibold 
    text-paleBlue transition duration-500 hover:bg-lightPink md:px-14 md:text-base"
    >
      {text}
    </button>
  )
}
