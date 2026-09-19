import { LuLayoutDashboard } from "react-icons/lu";
import { VscProject } from "react-icons/vsc";
import { PiCheckSquareBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", to: "/", icon: LuLayoutDashboard },
  { name: "Projects", to: "/Projects", icon: VscProject },
  { name: "Tasks", to: "/Tasks", icon: PiCheckSquareBold },
  { name: "Team", to: "/Team", icon: IoPeopleSharp },
  { name: "Calendar", to: "/Calendar", icon: SlCalender },
  { name: "Settings", to: "/Settings", icon: IoMdSettings },
];

const Aside = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white p-2">
      {/* Logo */}
      <div className="flex shrink-0 items-center justify-center gap-2 border-b border-gray-100 p-4">
        <div className="h-auto w-auto rounded bg-blue-600 p-2 font-bold text-white">
          PH
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Projecthub</h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto pt-10">
        <nav className="font-sans font-medium">
          <ul className="flex flex-col gap-3">
            {navigation.map(({ name, to, icon: Icon }) => (
              <NavLink to={to} key={name} end={to === "/"}>
                {({ isActive }) => (
                  <li
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 cursor-pointer ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <div
                      className={`self-stretch w-1 rounded-full ${
                        isActive ? "bg-blue-600" : "bg-transparent"
                      }`}
                    ></div>

                    <Icon className="text-xl group-hover:text-blue-600" />
                    <span>{name}</span>
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;