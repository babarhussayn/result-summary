import Link from "next/link";
import React from "react";

interface NavItem {
  name: string;
  link: string;
}

const nav: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Service",
    link: "/services",
  },
];

const Header = () => {
  return (
    <div className="bg-blue-400 p-5 flex justify-center items-center gap-8">
      {nav.map((items, index) => (
        <div key={index}>
          <div className=" ">
            <Link
              href={items.link}
              className="hover:underline hover:text-[#63e2e2]"
            >
              {items.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
