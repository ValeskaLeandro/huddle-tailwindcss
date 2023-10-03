import Button from '@/components/Button'
import Description from '@/components/Description'
import Title from '@/components/Title'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex w-[90%] max-w-[1440px] items-center justify-between bg-white py-6 lg:py-12">
        <div className="w-[100%] max-w-[30%]">
          <Image src="./logo.svg" alt="Logo Huddle" width={240} height={39} />
        </div>
        <button className="max-w-[40%] rounded-3xl border border-solid border-pink px-4 py-1 text-sm text-pink transition duration-500 hover:border-lightPink hover:text-lightPink lg:max-w-[100%] lg:text-base">
          Try it free
        </button>
      </header>
      <main className="flex w-[80%] flex-col items-center">
        <section className="flex min-h-[60vh] w-full flex-col items-center justify-center">
          <Title text="Build The Community Your Fans Will Love" />
          <Description
            text="Huddle re-imagines the way we build communities. You have a voice, but so does 
  your audience. Create connections with your users as you engage in genuine discussion. "
          />
          <Button text="Get Started For Free" />
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-16">
          <div>
            <Image
              src="./screen-mockups.svg"
              alt="Screen Mockups"
              width={1035}
              height={739}
            />
          </div>
          <div className="flex w-full max-w-[1035px] flex-col items-center p-5 md:flex-row md:justify-between">
            <div className="mb-5 max-w-[300px] py-12 md:py-0">
              <Image
                src="./icons/icon-communities.svg"
                alt="Screen Mockups"
                width={32}
                height={28}
                className="mb-2"
              />
              <div className="flex flex-col items-center">
                <h2 className="mb-4 text-6xl font-black text-darkCyan lg:text-8xl">
                  1.4k+
                </h2>
                <p className="text-center text-gray-500">Communities Formed</p>
              </div>
            </div>
            <div className="max-w-[300px]">
              <Image
                src="./icons/icon-messages.svg"
                alt="Screen Mockups"
                width={32}
                height={28}
                className="mb-2 "
              />
              <div className="flex flex-col items-center">
                <h2 className="mb-4 text-6xl font-black text-darkCyan lg:text-8xl">
                  2.7m+
                </h2>
                <p className="text-center text-gray-500">Messages Sent</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
