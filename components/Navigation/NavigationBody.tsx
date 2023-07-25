import React from "react";
import Search from "./Search";
import Users from "./Users";
const NavigationBody = () => {
  return (
    <div className="flex items-center justify-between px-52 my-8">
      <h1>BOOK STORE</h1>
      <div className="flex items-center justify-between gap-8">
        <Search />
        <Users />
      </div>
    </div>
  );
};

export default NavigationBody;
