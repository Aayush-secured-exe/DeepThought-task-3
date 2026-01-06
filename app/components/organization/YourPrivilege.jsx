import React from "react";
import { User } from 'lucide-react';
import { GraduationCap } from 'lucide-react';

function YourPrivilege() {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <p className="text-xs font-semibold text-gray-500 uppercase">
        Your Privileges
      </p>
      <span className="inline-flex items-center mt-2 px-3 py-1 gap-2 rounded-full text-sm bg-green-100 text-green-700">
        <User/> Member
      </span>
      <p className="mt-4 text-xs font-semibold text-gray-500 uppercase">
        Sector
      </p>
      <span className="inline-flex items-center mt-2 px-3 py-1 gap-2 rounded-full text-sm bg-blue-100 text-blue-700">
        <GraduationCap /> Education Technology
      </span>
    </div>
  );
}

export default YourPrivilege;
