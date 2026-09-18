
import { LuLayoutDashboard } from "react-icons/lu";
import { VscProject } from "react-icons/vsc";
import { PiCheckSquareBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";

const navigation = [
  { name: "Dashboard", icon: LuLayoutDashboard },
  { name: "Projects", icon: VscProject },
  { name: "Tasks", icon: PiCheckSquareBold },
  { name: "Team", icon: IoPeopleSharp },
  { name: "Calendar", icon: SlCalender },
  { name: "Settings", icon: IoMdSettings },
];

const Aside = () => {
  return (
    <aside className="h-screen w-64 flex flex-col p-5 border-r border-gray-200 bg-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2 pb-10">
        <div className="rounded bg-blue-600  w-auto h-auto p-2 font-bold text-white">PH</div>
        <h1 className=" font-bold text-2xl text-gray-900">
          Projecthub
      </h1>
      </div>

      {/* Navigation */}
      <nav className="font-sans font-medium">
        <ul className="flex flex-col gap-3">

          {/* Dashboard */}
          <li className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer bg-blue-50 text-blue-600">
            <div className="self-stretch bg-blue-600 w-1 rounded-full"></div>
            <LuLayoutDashboard className="text-xl" />
            <span>Dashboard</span>
          </li>

          {/* Projects */}
          <li className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition duration-200">
            <VscProject className="text-xl group-hover:text-blue-600" />
            <span>Projects</span>
          </li>

          {/* Tasks */}
          <li className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition duration-200">
            <PiCheckSquareBold className="text-xl group-hover:text-blue-600" />
            <span>Tasks</span>
          </li>

          {/* Team */}
          <li className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition duration-200">
            <IoPeopleSharp className="text-xl group-hover:text-blue-600" />
            <span>Team</span>
          </li>

          {/* Calendar */}
          <li className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition duration-200">
            <SlCalender className="text-xl group-hover:text-blue-600" />
            <span>Calendar</span>
          </li>

          {/* Settings */}
          <li className="group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition duration-200">
            <IoMdSettings className="text-xl group-hover:text-blue-600" />
            <span>Settings</span>
          </li>

        </ul>
      </nav>

    </aside>
  );
};

export default Aside;