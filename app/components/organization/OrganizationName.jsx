import React from "react";
import { Globe } from 'lucide-react';

function OrganizationName() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        Organization Name
      </p>
      <h4 className="mt-2 text-base font-semibold text-gray-900">
        DeepThought
      </h4>
      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-gray-500">
        Website
      </p>
      <a
        href="https://deepthought.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
      >
        <Globe className="h-4 w-4" />
        https://deepthought.com
      </a>
    </div>
  );
}

export default OrganizationName;
