import React from 'react'
import { Building } from "lucide-react";

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
              Hyderabad, TG
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Street No. 2, Hyderabad, TG 500007, India
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          Email Addresses
        </p>

        <p className="mt-4 text-sm text-gray-500">
          No email addresses available
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          Phone Numbers
        </p>

        <p className="mt-4 text-sm text-gray-500">
          No phone numbers available
        </p>
      </div>

    </div>
  )
}

export default LocationContacts
