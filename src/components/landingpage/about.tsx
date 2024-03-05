import Image from "next/image";
import Link from "next/link";
import About from '../../../public/about.jpg';


export default function AboutSection() {
  return (
    <>
		  <section id="#about" className="mt-10 font-mono">
				<div className="px-5">
				  <div className="w-full flex justify-center">
					  <h1 className="text-black text-4xl font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
						  About
					  </h1>
				  </div>
				  <div className="my-5">
					  <h3 className="text-3xl font-semibold text-slate-800">13+ Years of Excellence And Astronomic Growth</h3>
				  </div>
				  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 justify-center ">
						<div className='grid grid-cols-1 gap-6 place-items-center'>
							<div className=" w-full md:w-3/4 border border-slate-200 py-8 px-6 shadow-inner">
								<span className="text-slate-500">Establish in 2010, and precisely registered under the laws of the Federal
									 Republic of Nigeria in November 2010. Ronald and Partners Consult has sustained
									  a good reputation in dispensing quality and professional immigration consulting
										 and overseas education placement services to clients and prospective students 
										 in Nigeria and across the world.
								</span>
							</div>
							<div className="mb-3 w-full md:w-3/4 border border-slate-200 py-8 px-6 shadow-inner">
								<span className="text-slate-500">Establish in 2010, and precisely registered under the laws of the Federal
									 Republic of Nigeria in November 2010. Ronald and Partners Consult has sustained
									  a good reputation in dispensing quality and professional immigration consulting
										 and overseas education placement services to clients and prospective students 
										 in Nigeria and across the world.
								</span>
							</div>
						</div>
						<div className="py-10 px-10">
							<div className="w-full h-5/6">
								<Image src={About} alt='about-us' className="w-full h-full object-contain lg:object-cover" />
							</div>
							<div className="mt-8 text-center">
								<Link href='about'>
								  <span className="text-white text-sm tracking-wide bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-center  me-2 px-8 py-4">
										Learn More
									</span>
								</Link>
							</div>
						</div>
				  </div>
				</div>
			</section>
    </>
  );
}
