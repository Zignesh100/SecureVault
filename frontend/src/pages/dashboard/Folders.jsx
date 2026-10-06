import {
  ChevronRight,
  Folder,
  Plus,
} from "lucide-react";

import ConsolePanel from "../../components/dashboard/ConsolePanel";

const folders = [
  {
    name: "Personal",
    count: 12,
    description: "Personal identification documents",
  },
  {
    name: "Finance",
    count: 8,
    description: "Banking and financial documents",
  },
  {
    name: "Insurance",
    count: 5,
    description: "Insurance policies and records",
  },
  {
    name: "Property",
    count: 4,
    description: "Property and ownership documents",
  },
];

export default function Folders() {
  return (
    <div>

      <Breadcrumb />

      <div className="mx-auto max-w-[1600px] p-4 sm:p-6">

        <div className="flex flex-col gap-4 border-b border-[#dadce0] pb-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-xl font-normal sm:text-2xl">
              Folders
            </h1>

            <p className="mt-1 text-xs text-[#5f6368]">
              Organize your secure documents into folders.
            </p>
          </div>

          <button className="flex h-9 items-center justify-center gap-2 rounded bg-[#1a73e8] px-4 text-xs font-medium text-white">
            <Plus className="h-4 w-4" />
            New folder
          </button>

        </div>

        <ConsolePanel className="mt-5">

          <div className="border-b border-[#dadce0] px-5 py-4">
            <h2 className="text-sm font-medium">
              Your folders
            </h2>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {folders.map((folder) => (
              <button
                key={folder.name}
                className="group rounded border border-[#dadce0] p-5 text-left transition hover:border-[#1a73e8] hover:bg-[#f8f9fa]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
                    <Folder className="h-5 w-5" />
                  </div>

                  <ChevronRight className="h-4 w-4 text-[#9aa0a6]" />

                </div>

                <h3 className="mt-5 text-sm font-medium">
                  {folder.name}
                </h3>

                <p className="mt-1 text-xs text-[#5f6368]">
                  {folder.description}
                </p>

                <p className="mt-4 text-[10px] font-medium text-[#1a73e8]">
                  {folder.count} documents
                </p>

              </button>
            ))}

          </div>

        </ConsolePanel>

      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="flex h-12 items-center border-b border-[#dadce0] bg-white px-4 sm:px-6">
      <span className="text-xs text-[#5f6368]">
        SecureVault
      </span>

      <ChevronRight className="mx-2 h-3.5 w-3.5 text-[#9aa0a6]" />

      <span className="text-xs font-medium">
        Folders
      </span>
    </div>
  );
}
