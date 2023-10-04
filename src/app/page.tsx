import Button from '@/components/Button'
import CardStatistic from '@/components/CardStatistic'
import Description from '@/components/Description'
import Title from '@/components/Title'
import Image from 'next/image'
import { FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'

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
      <main className="flex w-full flex-col items-center">
        <section className="flex min-h-[60vh] w-[80%] max-w-[1440px] flex-col items-center justify-center">
          <Title
            text="Build The Community Your Fans Will Love"
            classname="text-center"
          />
          <Description
            text="Huddle re-imagines the way we build communities. You have a voice, but so does 
  your audience. Create connections with your users as you engage in genuine discussion. "
            classname="text-center lg:max-w-[40%] md:max-w-[60%]"
          />
          <Button text="Get Started For Free" />
        </section>
        <section className="mb-4 flex w-[80%] max-w-[1440px] flex-col items-center justify-center gap-16 ">
          <div>
            <Image
              src="./screen-mockups.svg"
              alt="Screen Mockups"
              width={1035}
              height={739}
            />
          </div>
          <div className="flex w-full max-w-[1035px] flex-col items-center p-5 md:flex-row md:justify-between">
            <CardStatistic
              iconSrc="./icons/icon-communities.svg"
              number="1.4k+"
              description="Communities Formed"
            />
            <CardStatistic
              iconSrc="./icons/icon-messages.svg"
              number="2.7m+"
              description="Messages Sent"
            />
          </div>
        </section>
        <div className="section section1-top w-full"></div>
        <section className="flex w-full justify-center bg-paleBlue py-14">
          <div className="flex w-[80%] max-w-[1440px] flex-col-reverse items-center md:flex-row">
            <div>
              <Title
                text="Grow Together"
                classname="text-center md:text-left"
              />
              <Description
                text="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form."
                classname="text-center md:text-left md:max-w-[60%]"
              />
            </div>
            <div className="mb-16 w-full md:max-w-[40%]">
              <Image
                src="./illustration/illustration-grow-together.svg"
                alt="Homem e mulher de negócios"
                width={1023}
                height={837}
              />
            </div>
          </div>
        </section>
        <div className="section section1-bottom w-full"></div>
        <section className="flex w-full justify-center py-2">
          <div className="flex w-[80%] max-w-[1440px] flex-col items-center justify-between md:flex-row">
            <div className="mb-16 w-full md:max-w-[40%]">
              <Image
                src="./illustration/illustration-flowing-conversation.svg"
                alt="Homem e mulher de negócios"
                width={1023}
                height={837}
              />
            </div>
            <div className="flex w-full flex-col md:max-w-[40%] ">
              <Title
                text="Flowing Conversations"
                classname="text-center md:text-left"
              />
              <Description
                text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                just-in-time loading for a more natural flow."
                classname="text-center md:text-left "
              />
            </div>
          </div>
        </section>
        <div className="section section2-top w-full"></div>
        <section className="flex w-full justify-center bg-paleBlue py-8">
          <div className="flex w-[80%] max-w-[1440px] flex-col-reverse items-center md:flex-row">
            <div>
              <Title text="Your Users" classname="text-center md:text-left" />
              <Description
                text="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                once signed in to your app, your users can start chatting immediately."
                classname="text-center md:text-left md:max-w-[70%]"
              />
            </div>
            <div className="mb-16 w-full md:max-w-[40%]">
              <Image
                src="./illustration/illustration-your-users.svg"
                alt="Homem e mulher de negócios"
                width={1023}
                height={837}
              />
            </div>
          </div>
        </section>
        <div className="section section2-bottom w-full"></div>
        <section className="flex w-full items-center justify-center py-2 md:min-h-[40vh]">
          <div className="flex w-[80%] max-w-[1440px] flex-col items-center pb-16 md:pt-16">
            <Title
              text=" Ready To Build Your Community?"
              classname="text-center md:text-left"
            />
            <Button text="Get Started For Free" />
          </div>
        </section>
      </main>
      <div className="section footer-top w-full"></div>
      <footer className=" flex w-full justify-center bg-darkCyan py-10 text-paleBlue ">
        <div className="flex w-[80%] flex-col justify-between md:flex-row-reverse">
          <div className="mb-16 md:mb-0 md:max-w-[40%]">
            <h3 className="mb-5 font-bold uppercase">Newsletter</h3>
            <p className="mb-5 max-w-[330px] text-sm md:mb-10">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address
            </p>
            <div className="flex flex-col items-end md:gap-7 lg:flex-row lg:items-center ">
              <input
                type="email"
                className="mb-4 flex w-full rounded-md p-3 text-darkCyan md:m-0 md:min-w-[250px]"
              />
              <button className="w-[160px] rounded-md bg-pink px-8 py-3 font-bold transition duration-500 hover:bg-lightPink">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mb-8 md:mb-0 md:max-w-[50%]">
            <div className="mb-5 w-[100%] max-w-[60%]">
              <Image
                src="./logo-white.svg"
                alt="Logo Huddle"
                width={240}
                height={39}
              />
            </div>
            <p className="mb-10 text-sm md:max-w-[330px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mauris
              nulla quam, hendrerit çlacinia vestbulum a, eltrices quis sem.
            </p>

            <div>
              <p className="mb-5 flex items-center gap-5 text-sm">
                <span>
                  <Image
                    src="./icons/icon-phone.svg"
                    alt="Icon Phone"
                    width={18}
                    height={18}
                  />
                </span>
                Phone: +1-543-123-4567
              </p>
              <p className="mb-10 flex items-center gap-5 text-sm">
                <span>
                  <Image
                    src="./icons/icon-email.svg"
                    alt="Icon Email"
                    width={18}
                    height={18}
                  />
                </span>
                example@huddle.com
              </p>

              <div className="flex gap-4">
                <a href="#">
                  <FaSquareFacebook size={24} />
                </a>
                <a href="#">
                  <FaInstagram size={24} />
                </a>
                <a href="#">
                  <FaTwitterSquare size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
