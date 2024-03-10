"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tv from "../../../public/tv.png";
import { FaHome } from "react-icons/fa";
import Logo from "../../../public/logo.svg";
import Menu from "../../../public/menu.svg";

export default function Home() {
  const [isToggle, setToggle] = useState<boolean>(false);
  const switchToggle = () => setToggle(!isToggle);

  return (
    <>
      <main className="w-full">
        <div><h1>Coming Soon</h1></div>
      </main>
    </>
  );
}
