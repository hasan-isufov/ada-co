import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bar from "./bar";



const Nav = () => {
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Our Services",
      href: "/Our-Services",
    },
    {
      label: "Media",
      href: "/Media",
    },
    {
      label: "Our Team",
      href: "/Our-Team",
    },



  ];
  return (
    <>
      <nav className="fixed z-10 w-full bg-[#003087] overflow-hidden   p-4">
        <div className=" mx-auto flex w-full justify-between items-center">
          <Link href="/" className="flex items-center text-white">
            <Image
              src="/ada-accounts.webp"
              alt="Logo"
              width={100}
              height={60}
              className="filter brightness-0 invert  object-contain top-4"
            />
            <div className="flex mx-2 md:mx-0 items-center justify-center flex-col">
              <h1 className="text-2xl text-white  font-bold">Ada & Co</h1>
              <span className=" items-center justify-center text-white font-medium ">
                Accounts
              </span>
            </div>
          </Link>
          <ul className="hidden  md:flex md:space-x-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white hover:text-blue-700 text-lg font-semibold transition-colors duration-300 "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex size-10 items-center md:hidden">
            <Bar  />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
