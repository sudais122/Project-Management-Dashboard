import React from "react";
import Invitebutton from "./Invitebutton";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 ">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Team Members
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          16 members across 5 active projects.
        </p>
      </div>

      {/* Invite Button */}
      <Invitebutton />
    </div>
  );
};

export default Header;