import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

const NavigationTop = () => {
  return (
    <div className="flex justify-between items-center py-2 bg-black text-white px-52 ">
      <div className="flex items-center gap-10 text-white">
        <div className="flex gap-3 items-center">
          <BiPhoneCall className={"h-5 w-5"} />
          <h6>+(90)-555-555-5555</h6>
        </div>
        <div className="flex gap-3 items-center">
          <AiOutlineMail className={"h-5 w-5"} />
          <h6>info@BookStore.com</h6>
        </div>
      </div>
      <div className="flex gap-8">
        <SlSocialFacebook className={"h-6 w-6"} />
        <SlSocialTwitter className={"h-6 w-6"} />
        <SlSocialYoutube className={"h-6 w-6"} />
      </div>
    </div>
  );
};

export default NavigationTop;
