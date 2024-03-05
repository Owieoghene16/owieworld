import Image from "next/image";
import Link from "next/link";
import About from '../../../public/about.jpg';


export default function ProjectSection() {
  return (
    <>
		  <section id="#project" className="my-10 font-mono">
				<div className="px-5">
				  <div className="w-full flex justify-center">
					  <h1 className="text-black text-4xl font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:rounded-xl after:duration-300 after:w-full hover:after:w-0">
						  Project
					  </h1>
				  </div>
        </div>
			</section>
    </>
  );
};
