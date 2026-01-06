import React from "react";
import { Building2, Check, User, Globe, Building } from "lucide-react";
import { OrgName, Privilage } from "../DATA/data";

function AllOrganizations() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white mt-4">
      <div className="flex items-center gap-4 border-b border-gray-100 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100">
          <Building2 className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            All Organizations
          </h2>
          <p className="text-sm text-gray-500">
            You are a member of 1 organization
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-900">{OrgName.name}</h3>

            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              <Check className="h-4 w-4" />
              Current
            </span>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <p className="text-sm text-gray-600">{Privilage.sector}</p>

            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
              <User className="h-4 w-4" />
              {Privilage.member}
            </span>
          </div>

          <div className="mt-4 rounded-lg border border-gray-200 p-4 text-sm text-gray-700">
            {OrgName.name} - {Privilage.sector}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <a
              href={OrgName.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Globe className="h-4 w-4" />
              {OrgName.website}
            </a>

            <div className="inline-flex items-center gap-2">
              <Building className="h-4 w-4 text-gray-500" />
              <span>1 Active Membership</span>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Your Memberships
            </p>

            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              {Privilage.member}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllOrganizations;
