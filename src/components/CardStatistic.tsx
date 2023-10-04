import { ICardStatistic } from '@/utils/interfaces'
import Image from 'next/image'

export default function CardStatistic({
  iconSrc,
  number,
  description,
}: ICardStatistic) {
  return (
    <div className="max-w-[300px] py-12 md:py-0">
      <Image
        src={iconSrc}
        alt={description}
        width={32}
        height={28}
        className="mb-2"
      />
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-6xl font-black text-darkCyan lg:text-8xl">
          {number}
        </h2>
        <p className="text-center text-gray-500">{description}</p>
      </div>
    </div>
  )
}
