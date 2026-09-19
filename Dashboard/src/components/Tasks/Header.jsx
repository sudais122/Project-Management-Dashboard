import React from "react";
import Create from "./Create";

const Header = () => {

  return (
    <div className="flex items-center justify-between ">
      {/* Left side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
      </div>
      {/* Right side */}
      <div>
        <Create />
      </div>
    </div>
  );
};

export default Header;
