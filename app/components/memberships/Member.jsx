import React from "react";
import { FlaskConical, Check } from "lucide-react";

function Member() {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-100">
          <FlaskConical className="h-5 w-5 text-blue-600" />
        </div>

        <h3 className="text-base font-semibold text-gray-900">member</h3>
      </div>

      <div className="mt-5 rounded-lg border border-gray-200 p-4">
        <p className="text-xs font-medium uppercase text-gray-500">
          Membership Type
        </p>
        <p className="mt-1 text-sm font-medium text-gray-700">member</p>
      </div>

      <div className="mt-5 border-t border-b border-gray-100 py-4">
        <p className="text-xs font-medium uppercase text-gray-500">Joined</p>
        <p className="mt-1 pl-2 text-sm text-gray-700">January 3, 2026</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-gray-500">ID: 2</p>

        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
          <Check className="h-4 w-4" />
          active
        </span>
      </div>
    </div>
  );
}

export default Member;
