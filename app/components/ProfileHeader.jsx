import React from "react";
import { Mail } from "lucide-react";

function ProfileHeader() {
  return (
    <section className="w-full rounded-xl overflow-hidden bg-white border border-gray-200">
      {/* Cover Image */}
      <div className="relative h-20 md:h-40 w-full">
        <img
          src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative py-6 md:px-6 px-4">
        <div className="absolute md:-top-12 md:left-6 -top-8 left-3">
          <div className="h-15 w-15 md:h-30 md:w-30 border-3 border-white rounded-full overflow-hidden bg-gray-100">
            <img
              src="https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg"
              alt="Avatar"
              className="h-full w-full border-3 border-blue-600 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between md:pl-34">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="md:text-lg text-base font-semibold text-gray-900">
                aayushshaw23042004
              </h1>
              <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                #3
              </span>
            </div>
            <p className="md:text-sm text-xs text-gray-500 mt-1 flex md:gap-1 items-center">
              <Mail className="md:h-4 h-3" />aayushshaw646456@gmail.com
            </p>
          </div>
          <div className="flex gap-3 md:ml-4 mt-3">
            <button className="inline-block md:px-4 px-2 py-2 rounded-md bg-blue-600 text-white text-xs md:text-sm font-medium hover:bg-blue-700 transition">
              View Plans
            </button>
            <button className="inline-block md:px-4 px-2 py-2 rounded-md border border-blue-600 text-blue-600 text-xs md:text-sm font-medium hover:bg-blue-50 transition">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
