import React from "react";
import { Medal, Trophy } from "lucide-react";

function Achievements() {
  return (
    <section className="rounded-xl bg-white py-6">
      
      {/* Header */}
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Achievements
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        
        {/* Achievement 1 */}
        <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Medal className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Top Contributor 2025
            </p>
            <p className="text-xs text-gray-500">
              Jan 17, 2025
            </p>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
            <Trophy className="h-5 w-5 text-yellow-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              AI Innovation Award
            </p>
            <p className="text-xs text-gray-500">
              Aug 17, 2023
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
