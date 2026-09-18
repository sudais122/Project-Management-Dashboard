import { SlCalender } from "react-icons/sl";

export const ProjectStateCard = ({title, status, description, dueDate}) => {
  return (
    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gray-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
          {status}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">{description}</p>

      <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
        <div className="h-2 w-2/3 rounded-full bg-blue-600"></div>
      </div>

      <p className="mt-4 text-xs text-gray-400 flex gap-1.5 items-center"><SlCalender />Due {dueDate}</p>
    </div>
  );
};
