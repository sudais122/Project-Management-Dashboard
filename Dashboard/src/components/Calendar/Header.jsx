import React from "react";
import NewEvent from "./NewEvent";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 ">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Calendar
        </h1>
      </div>

      <NewEvent />
    </div>
  );
};

export default Header;