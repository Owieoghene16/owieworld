"use client"

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'
import MobileNav from '../components/landingpage/mobilenav';
import DesktopNav from '../components/landingpage/desktopNav';
import AboutSection from '../components/landingpage/about';
import YoungMan from '../../public/young-man.png';
import Headphone from '../../public/headphone.jpg';
import Trophy from '../../public/trophy.png';
import Man from '../../public/man.png';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import styles from './style.module.css';

export default function Home() {

  /*  const handleType = (count: number) => {
    // access word count number
    console.log(count)}
  }
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  } */
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <>
    <div className="hidden sm:block h-20 w-full">
      <DesktopNav />
    </div>
    <div className="block sm:hidden h-20 w-full">
      <MobileNav />
    </div>
      <main className="bg-slate-200 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className='border-2 py-16 lg:col-span-3'>
          <div className="">
            <h2 className="text-5xl text-center font-bold">Find the perfect Path To<br></br>Success For Your{" "}<br></br>
              <span className="text-yellow-500">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Accomplishment', 'Sleep', 'Code', 'Repeat!', 'Accomplishment']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={150}
                  delaySpeed={1100}
                />
              </span>
            </h2>
          </div>
          <div className="mt-5 pl-5">
            <p>Discover The Path To <span className="text-yellow-600 text-xl">Success</span></p>
            <p>
              Discover the Ideal Platform Designed to Assist You in Finding Creative Services
              Tailored to Your Path to Success.   Unleash Your Content, Skills, Knowledge, Passion, 
              Followership, and Writing Abilities.
            </p>
          </div>
          <div className="flex mt-5 px-5 lg:pl-5 lg:px-0">
            <div className="relative w-full md:w-2/3 h-16 z-0">
              <input type="text" placeholder="Signup For Our Newsletter" className="text-md h-full w-full rounded-full pl-5 pr-32 outline-none border border-slate-500 "></input>
              <button type="button" className="absolute top-2 right-3 bg-slate-600 border border-slate-500 rounded-full py-3 px-5 shadow-sm" >Suscribe</button>
            </div>
          </div>
          <div className="flex w-2/3 justify-between mt-5 ml-5">
            <div className="">
              <i className="text-purple-800 text-6xl"><IoShieldCheckmarkSharp /></i>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center text-purple-800">1M+</p>
              <p className="text-slate-500">services</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center text-purple-800">15000+</p>
              <p className="text-slate-500">active users</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 h-ful">
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              <div className={styles.embla__slide}>
                <Image src={Man} alt='display' className=' mix-blend-multiply border-2' />
              </div>
              <div className={styles.embla__slide}>
                <Image src={Man} alt='display' className=' mix-blend-multiply' />
              </div>
              <div className={styles.embla__slide}>
                <Image src={Man} alt='display' className='mix-blend-multiply' />
              </div>
            </div>
          </div>
        </div>
      </main>
      <AboutSection />
    </>
  );
}
