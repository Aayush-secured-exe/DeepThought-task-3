import React from "react";
import { Grid, Folder, GitCommit, ChevronRight } from "lucide-react";
import Achievements from "./Achievements";

function ProjectsAchievements() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 mt-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-100">
          <Grid className="h-5 w-5 text-blue-600" />
        </div>

        <h2 className="text-lg font-semibold text-gray-900">
          Projects & Achievements
        </h2>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Recent Project:{" "}
          <span className="font-medium text-gray-900">
            AI Learning Platform
          </span>
        </p>

        <div className="mt-2 h-8 w-full rounded-full bg-gray-200">
          <div
            className="h-8 rounded-full bg-blue-600"
            style={{ width: "85%" }}
          />
        </div>

        <p className="mt-1 text-right text-xs font-medium text-blue-600">85%</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <Folder className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Projects</p>
              <p className="text-xs text-gray-500">2</p>
            </div>
          </div>

          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>

        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <GitCommit className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Contributions</p>
              <p className="text-xs text-gray-500">0</p>
            </div>
          </div>

          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div>
        <Achievements />
      </div>

      <button className="mt-6 w-full rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition">
        View All Achievements
      </button>
    </section>
  );
}

export default ProjectsAchievements;
