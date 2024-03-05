import Image from "next/image";
import Link from "next/link";
import Projectone from '../../../public/projectone.png';


export default function ProjectSection() {
  return (
    <>
		  <section id="#project" className="my-10 font-mono">
				<div className="px-5">
				  <div className="w-full flex justify-center">
					  <h1 className="text-black text-4xl font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-3 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
						  Project
					  </h1>
				  </div>
          <div className="my-10 grid grid-cols-2">
            <div>
              <Image src={Projectone} alt='first-project' />
            </div>
            <div className="">
              <h2 className="text-4xl font-medium">Suru</h2>
							<div className="my-3 w-full md:w-3/4 border border-slate-200 py-8 px-6 shadow-inner">
								<span className="text-slate-500">Establish in 2010, and precisely registered under the laws of the Federal
									 Republic of Nigeria in November 2010. Ronald and Partners Consult has sustained
									  a good reputation in dispensing quality and professional immigration consulting
										 and overseas education placement services to clients and prospective students 
										 in Nigeria and across the world.
								</span>
							</div>
            </div>
          </div>
        </div>
			</section>
    </>
  );
};
