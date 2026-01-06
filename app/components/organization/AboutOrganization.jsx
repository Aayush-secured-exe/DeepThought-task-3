import React from 'react'
import { OrgName, Privilage } from '../DATA/data'

function AboutOrganization() {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
        About
      </p>

      <p className="text-sm text-gray-700">
        {OrgName.name} - {Privilage.sector}
      </p>
    </div>
  )
}

export default AboutOrganization
