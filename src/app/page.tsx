import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex w-[90%] max-w-[1440px] items-center justify-between bg-white py-6">
        <div className="w-[100%] max-w-[30%]">
          <Image src="./logo.svg" alt="Logo Huddle" width={240} height={39} />
        </div>
        <button className="max-w-[30%] rounded-3xl border border-solid border-pink px-4 py-1 text-sm text-pink lg:max-w-[100%] lg:text-base">
          Try it free
        </button>
      </header>
    </>
  )
}
