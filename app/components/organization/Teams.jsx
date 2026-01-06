import React from "react";
import { Mail, Phone } from "lucide-react";
import { Team } from "../DATA/data";

function Teams() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <h3 className="text-base font-semibold text-gray-900">{Team.name}</h3>
        <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-600">
          {Team.post}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gray-500" />
          <span>{Team.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-gray-500" />
          <span>{Team.phone}</span>
        </div>
      </div>
    </div>
  );
}

export default Teams;
