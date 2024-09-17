"use client";

import NavbarItem from "../atoms/NavbarItem";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navbarItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#usage", label: "Usage" },
  { href: "#try-it-now", label: "Try It Now" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`container fixed inset-x-0 top-0 z-50 bg-[#fefefe] border-b border-black bg-primary py-4 px-4 md:px-20 lg:px-32 ${
        isOpen && "bg-primary/80"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between gap-x-8 w-full">
          <Link href="#" className="text-xl font-black cursor-pointer">Unfollow Finder</Link>

          <ul className="hidden md:flex gap-x-8 text-sm">
            {navbarItems.map(({ href, label }) => (
              <li key={label}>
                <NavbarItem href={href} label={label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center md:hidden">
          <Hamburger size={16} toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <div className="py-16 bg-[#fefefe] backdrop-blur-3xl">
      <ul className="flex flex-col items-center gap-y-6 font-semibold text-base h-screen">
        {navbarItems.map(({ href, label }) => (
          <li
            key={label}
            className="border-b-2 border-slate-700 text-center py-2 w-3/4"
          >
            <NavbarItem href={href} label={label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
