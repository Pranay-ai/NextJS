"use client"
import React from "react";
import logoImg from "../../public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export default function Header(): React.ReactNode {
  const pathname = usePathname();

  return (
    <header className="bg-slate-50 flex justify-between px-3 align-baseline">
      <Link href="/">
        <div className="flex flex-row justify-start gap-10 items-center">
          <img src={logoImg.src} alt="Logo" className="w-16 h-16" />
          <p className="text-3xl text-orange-400">NEXT LEVEL FOOD</p>
        </div>
      </Link>

      <nav className="flex justify-start items-center">
        <ul className="flex flex-row gap-10 text-lg pt-6 items-center">
          <li>
            <Link href="/meals">
              <p
                className={`text-3xl ${
                  pathname === "/meals" ? "text-orange-500" : "text-gray-500"
                }`}
              >
                Browse Meals
              </p>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <p
                className={`text-3xl ${
                  pathname === "/community"
                    ? "text-orange-500"
                    : "text-gray-500"
                }`}
              >
                Foodies Community
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
