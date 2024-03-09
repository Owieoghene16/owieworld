import Image from "next/image";
import Link from "next/link";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import Projectone from '../../../public/projectone.png';
import { Fade } from "react-awesome-reveal";
import style from '../../app/style.module.css'


export default function FooterContainer() {
  return (
    <>
		  <footer id="#footer" className="mt-10 font-mono bg-black text-white px-2 flex flex-col justify-center items-center">
      <section className='flex flex-col justify-center items-center text-center mb-5 p-5 text-white'>
        <p className='mb-5 text-2xl'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='mb-4 text-xl'>
          You can unsubscribe at any time.
        </p>
        <div className="relative w-full md:w-2/3 h-16 z-0">
          <input type="text" placeholder="Signup For Our Newsletter" className="text-md text-black h-full w-full rounded-full pl-5 pr-32 outline-none border border-slate-500 "></input>
          <button type="button" className="absolute top-2 right-3 bg-slate-600 border border-slate-500 rounded-full py-3 px-5 shadow-sm" >Suscribe</button>
        </div>
      </section>
      <div className='w-full flex justify-center flex-col lg:flex-row'>
        <div className='w-full justify-evenly flex'>
          <div className='flex flex-col items-start text-left m-4 w-2/4 lg:w-1/4'>
            <h2 className="font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-0.5 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
              About Us
            </h2>
            <Link href='/sign-up'>How it works</Link>
            <Link href='/'>Testimonials</Link>
            <Link href='/'>Careers</Link>
            <Link href='/'>Investors</Link>
            <Link href='/'>Terms of Service</Link>
          </div>
          <div className='flex flex-col items-start text-left m-4 w-2/4 lg:w-1/4'>
            <h2 className="font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-0.5 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
              Contact Us
            </h2>
            <Link href='/'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Destinations</Link>
            <Link href='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='w-full justify-evenly flex'>
          <div className='flex flex-col items-start text-left m-4 w-2/4 lg:w-1/4'>
            <h2 className="font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-0.5 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
              Videos
            </h2>
            <Link href='/'>Submit Video</Link>
            <Link href='/'>Ambassadors</Link>
            <Link href='/'>Agency</Link>
            <Link href='/'>Influencer</Link>
          </div>
          <div className='flex flex-col items-start text-left m-4 w-2/4 lg:w-1/4'>
            <h2 className="font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-0.5 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
              Social Media
            </h2>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='w-full'>
        <Fade>
        <div className='flex justify-between flex-col md:flex-row items-center w-full lg:w-5/6 m-auto my-6 px-2 lg:px-0'>
          <div className='footer-logo'>
            <Link href='/' className='flex justify-between items-center w-1/6'>
              <span className="text-4xl cursor-pointer">TRVL</span>
              <i className="text-white text-4xl cursor-pointer"><IoShieldCheckmarkSharp /></i>
            </Link>
          </div>
          <div className='flex justify-between items-center w-4/6 mt-4 md:mt-0'>
            <Link href='/youtube' className=''>
              <i className="hover:text-red-600 duration-200 text-5xl"><FaYoutube /></i>
            </Link>
            <Link href='/instagram' className=''>
              <i className="hover:text-blue-600 duration-200 text-5xl"><FaFacebook /></i>
            </Link>
            <Link href='/twitter' className=''>
              <i className="hover:text-blue-600 duration-200 text-5xl"><FaTwitter /></i>
            </Link>
            <Link href='/instagram' className=''>
              <i className="hover:text-red-600 duration-200 text-5xl"><FaInstagramSquare /></i>
            </Link>
          </div>
        </div>
        </Fade>
       </section>
        <small className='mb-5'>TRVL © 2024</small>
			</footer>
    </>
  );
};
