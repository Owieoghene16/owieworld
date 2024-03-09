import Image from "next/image";
import Link from "next/link";
import Projectone from '../../../public/projectone.png';
import style from '../../app/style.module.css';
import { Fade } from "react-awesome-reveal";


export default function ProjectSection() {
  return (
    <>
		  <section id="#project" className="my-10 font-mono">
				<div className="px-5">
          <Fade>
				  <div className="w-full flex justify-center">
					  <h1 className="text-black text-4xl font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-3 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
						  Project
					  </h1>
				  </div>
          </Fade>
          <div className="my-10 grid grid-cols-1 lg:grid-cols-2">
					  <Fade direction="left" duration={1500} delay={300}>
            <div className="flex justify-center">
              <div className="w-full lg:w-5/6">
                <Image src={Projectone} alt='first-project' />
              </div>
            </div>
            </Fade>
					  <Fade direction="right" duration={1500} delay={300}>
            <div className="">
              <h2 className="text-4xl text-center lg:text-start font-medium">Suru</h2>
							<div className="my-3 w-full lg:w-3/4 border border-slate-200 py-8 px-6 shadow-inner">
								<span className="text-slate-500">Establish in 2010, and precisely registered under the laws of the Federal
									 Republic of Nigeria in November 2010. Ronald and Partners Consult has sustained
									  a good reputation in dispensing quality and professional immigration consulting
										 and overseas education placement services to clients and prospective students 
										 in Nigeria and across the world.
								</span>
							</div>
							<div className="mt-8 text-center lg:text-start">
								<Link href='about'>
								  <span className="text-white text-sm tracking-wide bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-center  me-2 px-8 py-4">
										Learn More
									</span>
								</Link>
              </div>
            </div>
            </Fade>
          </div>
          <div className={style.project__border}></div>
          <div className="my-10 grid grid-cols-1 lg:grid-cols-2">
					  <Fade direction="left" duration={1500} delay={300}>
            <div className="">
              <h2 className="text-4xl text-center lg:text-right font-medium w-full lg:w-3/4">Suru</h2>
							<div className="my-3 w-full lg:w-3/4 border border-slate-200 py-8 px-6 shadow-inner">
								<span className="text-slate-500">Establish in 2010, and precisely registered under the laws of the Federal
									 Republic of Nigeria in November 2010. Ronald and Partners Consult has sustained
									  a good reputation in dispensing quality and professional immigration consulting
										 and overseas education placement services to clients and prospective students 
										 in Nigeria and across the world.
								</span>
							</div>
							<div className="mt-8 w-full lg:w-3/4 text-center lg:text-end">
								<Link href='about'>
								  <span className="text-white text-sm tracking-wide bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-center  me-2 px-8 py-4">
										Learn More
									</span>
								</Link>
              </div>
            </div>
            </Fade>
					  <Fade direction="right" duration={1500} delay={300}>
            <div className="flex justify-center">
              <div className="w-full lg:w-5/6">
                <Image src={Projectone} alt='first-project' />
              </div>
            </div>
            </Fade>
          </div>
        </div>
			</section>
    </>
  );
};
