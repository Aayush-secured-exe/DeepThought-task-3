import React from 'react'
import { Building } from "lucide-react";
import { LC } from '../DATA/data';

function LocationContacts() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          Office Locations
        </p>

        <div className="mt-4 flex items-start gap-3">
          <Building className="mt-0.5 h-5 w-5 text-gray-600" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {LC.city}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {LC.street}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          Email Addresses
        </p>

        <p className="mt-4 text-sm text-gray-500">
          {(!LC.email) ? "No email addresses available" : LC.email}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          Phone Numbers
        </p>

        <p className="mt-4 text-sm text-gray-500">
          {(!LC.phone) ? "No phone numbers available" : LC.phone}
        </p>
      </div>

    </div>
  )
}

export default LocationContacts
