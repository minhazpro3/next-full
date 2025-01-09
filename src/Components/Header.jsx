"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname()
  const links = [
    {
      title: "About",
      path:"/about"
    },
    {
      title: "Services",
      path:"/services"
    },
    {
      title: "Blogs",
      path:"/blogs"
    },
    {
      title: "Dashboard",
      path:"/dashboard"
    },
  ]
  if (pathName.includes ("dashboard")) {
    return (
      <div>
        <div className="bg-indigo-800 py-4 text-white flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold ">Logo.Js</h1>
          <ul className="text-white flex justify-between items-center space-x-4">
            {links?.map((link) => (
              <li key={link.path}>
                <Link   href={`${link.path}`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
    return (
      <div>
        <div className="bg-gray-800 py-4 text-white flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold ">Logo.Js</h1>
          <ul className="text-white flex justify-between items-center space-x-4">
            {links?.map((link) => (
              <li key={link.path}>
                <Link href={`${link.path}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Header;
