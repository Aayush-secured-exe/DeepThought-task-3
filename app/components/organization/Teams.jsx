import React from "react";
import { Mail, Phone } from "lucide-react";

function Teams() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5">
      {/* Name + Role */}
      <div className="flex items-center gap-3">
        <h3 className="text-base font-semibold text-gray-900">Elon Musk</h3>
        <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-600">
          CEO
        </span>
      </div>

      {/* Contact Info */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gray-500" />
          <span>elonmusk96969@grok.com</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-gray-500" />
          <span>XXXX XXXXX</span>
        </div>
      </div>
    </div>
  );
}

export default Teams;
