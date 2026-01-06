import React from "react";
import { Mail } from "lucide-react";

function ProfileHeader() {
  return (
    <section className="w-full rounded-xl overflow-hidden bg-white border border-gray-200">
      {/* Cover Image */}
      <div className="relative h-40 w-full">
        <img
          src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="relative pb-6 pt-6 px-6">
        {/* Avatar */}
        <div className="absolute -top-12 left-6">
          <div className="h-30 w-30 border-3 border-white rounded-full overflow-hidden bg-gray-100">
            <img
              src="https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg"
              alt="Avatar"
              className="h-full w-full border-3 border-blue-600 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Header Row */}
        <div className="flex items-center justify-between pl-34">
          {/* User Info */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-gray-900">
                shubhamdubey23042004
              </h1>
              <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                #3
              </span>
            </div>
            
            <p className="text-sm text-gray-500 mt-1 flex gap-1 items-center">
              <Mail className="h-4" />shubhamdubey23042004@gmail.com
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
              View Plans
            </button>
            <button className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
