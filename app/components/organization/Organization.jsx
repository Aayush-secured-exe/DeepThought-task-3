import React from "react";
import OrganizationName from "./OrganizationName";
import YourPrivilege from "./YourPrivilege";
import AboutOrganization from "./AboutOrganization";
import { Building } from "lucide-react";
import Teams from "./Teams";
import LocationContacts from "./LocationContacts";

function Organization() {
  return (
    <section className="w-full bg-white border border-gray-200 rounded-xl p-6 space-y-6 mt-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50">
          <Building className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Current Organization
          </h2>
          <p className="text-sm text-gray-500">
            Your active workspace in DeepThought
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-500 uppercase mb-3">
          Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OrganizationName />
          <YourPrivilege />
        </div>
      </div>
      <AboutOrganization />
      <div>
        <h3 className="text-base font-semibold text-gray-500 uppercase mb-3">
          Leadership team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Teams />
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-500 uppercase mb-3">
          Location & contact
        </h3>
          <LocationContacts />
      </div>
    </section>
  );
}

export default Organization;
