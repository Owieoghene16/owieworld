import Image from "next/image";
import Link from "next/link";
import Tv from "../../public/tv.png";
import Logo from "../../public/logo.svg";
import Menu from "../../public/menu.svg";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center h-20 w-full bg-blue-800">
        <div className="flex text-white justify-center items-center w-2/5">
          <Image
            src={Tv}
            alt="Logo"
            width={60}
            height={60}
            className=""
          />
          <span className="ml-3 text-2xl">Logo</span>
        </div>
        <ul className="flex justify-between items-center h-10 w-1/2 pr-32">
          <li className="text-slate-200 relative cursor-pointer hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-0 after:rounder-xl after:duration-300 hover:after:w-full">Home</li>
          <li className="text-slate-200 relative cursor-pointer hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-0 after:rounder-xl after:duration-300 hover:after:w-full">About</li>
          <li className="text-slate-200 relative cursor-pointer hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-0 after:rounder-xl after:duration-300 hover:after:w-full">Contact</li>
          <Link href="/signup">
            <li className="text-white text-sm tracking-wide bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-center  me-2 px-8 py-4">
              Signup
            </li>
          </Link>
        </ul>
      </header>
      { 
      /*
      <header className="flex justify-around items-center h-20 w-full bg-red-800">
        <div className="flex text-white justify-center items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={60}
            height={60}
            className=""
          />
          <span className="ml-3 text-2xl">Logo</span>
        </div>
        <ul className="flex justify-between items-center">
          <button type="button" className="w-16 h-16"><Image src={Menu} alt="button svg" className="text-white w-8 h-8" /></button>
        </ul>
      </header>  */
      }
      <main className="">
      </main>
    </>
  );
}
