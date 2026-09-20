import React from "react";

export const Card = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your profile and account settings.
        </p>
      </div>

      {/* Settings Card */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Profile Header */}
        <div className="border-b border-gray-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm text-gray-500">
            Update your personal information and profile picture.
          </p>
        </div>

        <div className="p-6">
          {/* Profile Picture */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-700">
              AK
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-lg cursor-pointer bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Upload
                </button>

                <button
                  type="button"
                  className="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  Remove
                </button>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                JPG, PNG or GIF. Maximum file size 2MB.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Job Title
              </label>

              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Time Zone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Time Zone
              </label>

              <select
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select time zone
                </option>
                <option value="utc">UTC</option>
                <option value="utc+5">UTC+05:00</option>
                <option value="utc+1">UTC+01:00</option>
                <option value="utc-5">UTC-05:00</option>
                <option value="utc-8">UTC-08:00</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap justify-end gap-3 border-t border-gray-100 pt-6">
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Cancel
            </button>

            <button
              type="button"
              className="rounded-lg cursor-pointer bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
