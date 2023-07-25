import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import PageNavigation from "./PageNavigation";
const NavigationBottom = () => {
  return (
    <div className="flex justify-between items-center px-52  my-8">
      <div className="flex justify-between items-center gap-28 py-4 px-8 rounded-full bg-primary text-white">
        <div className="flex items-center  gap-2">
          <BiCategoryAlt className={"w-6 h-6"} />
          <h3>Categories</h3>
        </div>
        <BsChevronDown />
      </div>
      <div>
        <PageNavigation />
      </div>
      <div className="flex items-center justify-center gap-3 text-primary">
        <div className="flex items-center justify-center rounded-full bg-primaryLight p-3">
          <FiPhoneCall className={"w-5 h-5"} />
        </div>
        <div>
          <h3 className="font-bold">+0 540 - 555 55 55</h3>
          <h5 className="text-sm text-black">24/7 Support Center</h5>
        </div>
      </div>
    </div>
  );
};

export default NavigationBottom;
