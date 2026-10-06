import React from "react";
import {
  Activity,
  ChevronRight,
  FileText,
  Folder,
  Plus,
  ShieldCheck,
  Upload,
} from "lucide-react";

const folders = [
  {
    name: "Personal",
    count: 12,
  },
  {
    name: "Finance",
    count: 8,
  },
  {
    name: "Insurance",
    count: 5,
  },
  {
    name: "Property",
    count: 4,
  },
];

const recentDocuments = [
  {
    name: "Passport",
    category: "Personal",
    size: "2.4 MB",
    modified: "Today, 10:42 AM",
  },
  {
    name: "Insurance Policy",
    category: "Insurance",
    size: "4.8 MB",
    modified: "Yesterday, 4:18 PM",
  },
  {
    name: "Bank Statement",
    category: "Finance",
    size: "1.8 MB",
    modified: "Sep 28, 2026",
  },
  {
    name: "Property Documents",
    category: "Property",
    size: "8.2 MB",
    modified: "Sep 25, 2026",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202124]">

      {/* Breadcrumb */}
      <div className="flex h-12 items-center border-b border-[#dadce0] bg-white px-4 sm:px-6">
        <span className="text-xs text-[#5f6368]">
          SecureVault
        </span>

        <ChevronRight className="mx-2 h-3.5 w-3.5 text-[#9aa0a6]" />

        <span className="text-xs font-medium">
          Dashboard
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-5 lg:p-6">

        {/* Page Header */}
        <div className="flex flex-col gap-4 border-b border-[#dadce0] pb-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-xl font-normal sm:text-2xl">
              Dashboard
            </h1>

            <p className="mt-1 text-xs text-[#5f6368]">
              Manage and monitor your secure digital documents.
            </p>
          </div>

          <div className="flex gap-2">

            <button className="flex h-9 items-center gap-2 rounded border border-[#dadce0] bg-white px-3 text-xs font-medium hover:bg-[#f8f9fa]">
              <Plus className="h-4 w-4" />
              New folder
            </button>

            <button className="flex h-9 items-center gap-2 rounded bg-[#1a73e8] px-3 text-xs font-medium text-white hover:bg-[#1769d1]">
              <Upload className="h-4 w-4" />
              Upload
            </button>

          </div>
        </div>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">

          <MetricCard
            label="Documents"
            value="29"
            detail="+3 this month"
            icon={<FileText className="h-5 w-5" />}
          />

          <MetricCard
            label="Folders"
            value="4"
            detail="12 categories"
            icon={<Folder className="h-5 w-5" />}
          />

          <MetricCard
            label="Security"
            value="Protected"
            detail="No issues"
            icon={<ShieldCheck className="h-5 w-5" />}
            green
          />

          <MetricCard
            label="Storage"
            value="18%"
            detail="1.8 GB of 10 GB"
            icon={<Folder className="h-5 w-5" />}
          />

        </div>

        {/* Main Content */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">

          {/* Left */}
          <div className="min-w-0">

            {/* Folders */}
            <section className="overflow-hidden rounded border border-[#dadce0] bg-white">

              <div className="border-b border-[#dadce0] px-5 py-4">

                <h2 className="text-sm font-medium">
                  Folders
                </h2>

                <p className="mt-1 text-[10px] text-[#5f6368]">
                  Your document collections
                </p>

              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4">

                {folders.map((folder) => (
                  <button
                    key={folder.name}
                    className="flex min-w-0 items-center gap-3 rounded border border-[#dadce0] p-3 text-left hover:bg-[#f8f9fa]"
                  >

                    <Folder className="h-5 w-5 shrink-0 text-[#5f6368]" />

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-xs font-medium">
                        {folder.name}
                      </p>

                      <p className="mt-1 text-[10px] text-[#5f6368]">
                        {folder.count} documents
                      </p>

                    </div>

                    <ChevronRight className="h-4 w-4 shrink-0 text-[#9aa0a6]" />

                  </button>
                ))}

              </div>

            </section>

            {/* Recent Documents */}
            <section className="mt-5 overflow-hidden rounded border border-[#dadce0] bg-white">

              <div className="border-b border-[#dadce0] px-5 py-4">

                <h2 className="text-sm font-medium">
                  Recent Documents
                </h2>

                <p className="mt-1 text-[10px] text-[#5f6368]">
                  Your latest documents
                </p>

              </div>

              {/* Desktop */}
              <div className="hidden md:block">

                <div className="grid grid-cols-[minmax(220px,1fr)_120px_170px_100px] border-b border-[#dadce0] bg-[#f8f9fa] px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
                  <span>Name</span>
                  <span>Category</span>
                  <span>Modified</span>
                  <span>Status</span>
                </div>

                {recentDocuments.map((document) => (
                  <div
                    key={document.name}
                    className="grid grid-cols-[minmax(220px,1fr)_120px_170px_100px] items-center px-5 py-3 hover:bg-[#f8f9fa]"
                  >

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
                        <FileText className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-xs font-medium">
                          {document.name}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-[#5f6368]">
                          {document.size}
                        </p>

                      </div>

                    </div>

                    <span className="text-xs text-[#5f6368]">
                      {document.category}
                    </span>

                    <span className="text-xs text-[#5f6368]">
                      {document.modified}
                    </span>

                    <span className="flex items-center gap-2 text-[10px] font-medium text-[#188038]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
                      Protected
                    </span>

                  </div>
                ))}

              </div>

              {/* Mobile */}
              <div className="divide-y divide-[#dadce0] md:hidden">

                {recentDocuments.map((document) => (
                  <div
                    key={document.name}
                    className="flex items-center gap-3 px-4 py-3"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
                      <FileText className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-xs font-medium">
                        {document.name}
                      </p>

                      <p className="mt-1 text-[9px] text-[#5f6368]">
                        {document.category} · {document.size}
                      </p>

                      <p className="mt-1 text-[9px] text-[#5f6368]">
                        {document.modified}
                      </p>

                    </div>

                    <span className="text-[9px] font-medium text-[#188038]">
                      Protected
                    </span>

                  </div>
                ))}

              </div>

            </section>

          </div>

          {/* Right */}
          <aside className="space-y-5">

            {/* Security */}
            <section className="overflow-hidden rounded border border-[#dadce0] bg-white">

              <div className="border-b border-[#dadce0] px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded bg-[#e6f4ea] text-[#188038]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>

                    <h3 className="text-sm font-medium">
                      Security
                    </h3>

                    <p className="text-[10px] text-[#188038]">
                      All systems protected
                    </p>

                  </div>

                </div>

              </div>

              <div className="p-5">

                <SecurityRow label="Account security" />
                <SecurityRow label="Secure connection" />
                <SecurityRow label="Document protection" />

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded border border-[#dadce0] py-2.5 text-xs font-medium hover:bg-[#f8f9fa]">
                  Security center
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>

              </div>

            </section>

            {/* Activity */}
            <section className="overflow-hidden rounded border border-[#dadce0] bg-white">

              <div className="border-b border-[#dadce0] px-5 py-4">
                <h3 className="text-sm font-medium">
                  Recent Activity
                </h3>
              </div>

              <ActivityRow
                title="Passport uploaded"
                time="10 minutes ago"
                color="bg-[#1a73e8]"
              />

              <ActivityRow
                title="Bank Statement viewed"
                time="2 hours ago"
                color="bg-[#9334e6]"
              />

              <ActivityRow
                title="Insurance Policy updated"
                time="Yesterday"
                color="bg-[#f9ab00]"
              />

            </section>

          </aside>

        </div>

      </div>
    </div>
  );
};

const MetricCard = ({
  label,
  value,
  detail,
  icon,
  green = false,
}) => {
  return (
    <div className="rounded border border-[#dadce0] bg-white">
      <div className="flex items-start justify-between p-4 sm:p-5">

        <div className="min-w-0">

          <p className="text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            {label}
          </p>

          <p className="mt-2 text-lg sm:text-2xl">
            {value}
          </p>

          <p
            className={`mt-1 text-[10px] ${
              green
                ? "text-[#188038]"
                : "text-[#5f6368]"
            }`}
          >
            {detail}
          </p>

        </div>

        <div
          className={`hidden h-9 w-9 items-center justify-center rounded sm:flex ${
            green
              ? "bg-[#e6f4ea] text-[#188038]"
              : "bg-[#e8f0fe] text-[#1a73e8]"
          }`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
};

const SecurityRow = ({ label }) => {
  return (
    <div className="flex items-center justify-between py-2">

      <span className="text-xs text-[#5f6368]">
        {label}
      </span>

      <span className="flex items-center gap-2 text-[10px] font-medium text-[#188038]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
        Active
      </span>

    </div>
  );
};

const ActivityRow = ({
  title,
  time,
  color,
}) => {
  return (
    <div className="flex items-start gap-3 border-b border-[#dadce0] px-5 py-3 last:border-0">

      <span
        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${color}`}
      />

      <div className="min-w-0">

        <p className="truncate text-xs font-medium">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-[#5f6368]">
          {time}
        </p>

      </div>

    </div>
  );
};

export default Dashboard;
