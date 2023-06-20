"use client";

import Navlinks from "@/data/navlinks";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-6 flex justify-between items-center ">
      <Link href={"/"} className=" text-3xl font-bold">
        thegdp
      </Link>
      <div className="flex justify-between gap-4 items-center">
        {Navlinks.map((navLink) => {
          return (
            <Link href={navLink.url} key={navLink.id}>
              {navLink.title}
            </Link>
          );
        })}
        <button className="btn-primary" onClick={() => logoutFunction()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
