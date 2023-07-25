import React from "react";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";

const Users = () => {
  return (
    <div className="flex gap-10">
      <Link href={"/"} className="flex gap-2 items-center">
        <GrLocation className={"w-5 h-5"} />
        <h3 className="underline">Find a book store</h3>
      </Link>
      <div className="flex gap-8 items-center">
        <Link href={"/"}>
          <BiUser className={"w-5 h-5"} />
        </Link>
        <Link href={"/"}>
          <AiOutlineHeart className={"w-5 h-5"} />
        </Link>
        <Link href={"/"}>
          <BsBag className={"w-5 h-5"} />
        </Link>
      </div>
    </div>
  );
};

export default Users;
