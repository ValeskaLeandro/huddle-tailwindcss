import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex w-[90%] max-w-[1440px] justify-between bg-white py-14">
        <Image src="./logo.svg" alt="Logo Huddle" width={240} height={39} />
        <button className="rounded-3xl border border-solid border-pink px-8 py-2 text-pink">
          Try it free
        </button>
      </header>
    </>
  )
}
