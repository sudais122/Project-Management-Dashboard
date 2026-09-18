import React from "react";
import { WelcomeMessage } from "../components/welcomeMessage";
import { Datafilter } from "../components/Datafilter";
import CreateProject from "../components/CreateProject";
import Statecard from "../components/Statecard";
import { CiFolderOn } from "react-icons/ci"
import { IoMdTime } from "react-icons/io";
import { IoMdCheckboxOutline } from "react-icons/io";

export const Dashboard = () => {
  return (
    <>
      <div className="pl-7 pt-5 flex items-center">
        <div>
          <WelcomeMessage />
        </div>
        <div className="flex items-center pl-40 gap-5 pt-10 justify-center">
          <Datafilter className="p-2"/>
          <CreateProject />
        </div>
      </div>
      <div className="w-full h-50 px-5 py-3.5">
        <Statecard tittle={"Total Project"}/>
      </div>
    </>
  );
};
