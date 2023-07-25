"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const PageNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-20 font-bold">
      <Link href={"/"} className={`${pathname === "/" ? "text-primary" : ""}`}>
        Home
      </Link>
      <Link
        href={"/"}
        className={`${pathname === "/product" ? "text-primary" : ""}`}
      >
        Product
      </Link>
      <Link
        href={"/"}
        className={`${pathname === "/blog" ? "text-primary" : ""}`}
      >
        Blog
      </Link>
      <Link
        href={"/"}
        className={`${pathname === "/contact" ? "text-primary" : ""}`}
      >
        Contact
      </Link>
      <Link
        href={"/"}
        className={`${pathname === "/about" ? "text-primary" : ""}`}
      >
        Abaout Us
      </Link>
    </div>
  );
};

export default PageNavigation;
