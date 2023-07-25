import NavigationBody from "@/components/Navigation/NavigationBody";
import NavigationBottom from "@/components/Navigation/NavigationBottom";
import NavigationTop from "@/components/Navigation/NavigationTop";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <NavigationTop />
      <NavigationBody />
      <hr />
      <NavigationBottom />
    </div>
  );
};

export default Navigation;
