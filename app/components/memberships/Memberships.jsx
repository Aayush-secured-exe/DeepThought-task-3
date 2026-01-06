import React from "react";
import { LayoutGrid } from "lucide-react";
import Member from "./Member";
import { membership } from "../DATA/data";

function Memberships() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white mt-4">
      <div className="flex items-center gap-4 border-b border-gray-100 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100">
          <LayoutGrid className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Your Memberships
          </h2>
          <p className="text-sm text-gray-500">You have {membership.length} active membership</p>
        </div>
      </div>

      <div className="p-6">
        <Member />
      </div>
    </section>
  );
}

export default Memberships;
