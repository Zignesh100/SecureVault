import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Activity,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  Folder,
  LayoutDashboard,
  LockKeyhole,
  Settings,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const goTo = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed bottom-0 left-0 top-16 z-50
          w-[270px] max-w-[calc(100vw-20px)]
          overflow-y-auto
          border-r border-[#dadce0]
          bg-white
          transition-transform duration-200
          lg:w-[250px]
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Mobile header */}
        <div className="flex items-center justify-between border-b border-[#dadce0] px-4 py-3 lg:hidden">
          <span className="text-sm font-medium">
            Navigation
          </span>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-full p-2 text-[#5f6368] hover:bg-[#f1f3f4]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Vault */}
        <div className="border-b border-[#dadce0] p-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            Vault
          </p>

          <button className="flex w-full items-center justify-between rounded border border-[#dadce0] p-2.5 text-left hover:bg-[#f8f9fa]">
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
                <LockKeyhole className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium">
                  Personal Vault
                </p>

                <p className="mt-0.5 truncate text-[9px] text-[#5f6368]">
                  securevault-prod
                </p>
              </div>

            </div>

            <ChevronDown className="h-4 w-4 text-[#5f6368]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3">

          <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            Main menu
          </p>

          <SidebarItem
            icon={<LayoutDashboard />}
            label="Dashboard"
            active={isActive("/dashboard")}
            onClick={() => goTo("/dashboard")}
          />

          <SidebarItem
            icon={<FileText />}
            label="Documents"
            active={isActive("/dashboard/documents")}
            onClick={() => goTo("/dashboard/documents")}
          />

          <SidebarItem
            icon={<Folder />}
            label="Folders"
            active={isActive("/dashboard/folders")}
            onClick={() => goTo("/dashboard/folders")}
          />

          <SidebarItem
            icon={<Clock3 />}
            label="Recent"
            active={isActive("/dashboard/recent")}
            onClick={() => goTo("/dashboard/recent")}
          />

          <SidebarItem
            icon={<Star />}
            label="Starred"
            active={isActive("/dashboard/starred")}
            onClick={() => goTo("/dashboard/starred")}
          />

          <div className="my-4 border-t border-[#dadce0]" />

          <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            Administration
          </p>

          <SidebarItem
            icon={<Users />}
            label="Users"
            active={false}
            onClick={() => {}}
          />

          <SidebarItem
            icon={<Activity />}
            label="Activity"
            active={false}
            onClick={() => {}}
          />

          <SidebarItem
            icon={<Settings />}
            label="Settings"
            active={false}
            onClick={() => {}}
          />

        </nav>

        {/* Security */}
        <div className="m-3 rounded border border-[#dadce0] bg-[#f8f9fa] p-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#188038]" />

            <span className="text-xs font-medium">
              Vault protected
            </span>
          </div>

          <p className="mt-1 text-[9px] text-[#5f6368]">
            Your documents are secure.
          </p>
        </div>

      </aside>
    </>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        mb-0.5 flex w-full items-center gap-3
        rounded px-3 py-2.5
        text-left text-xs
        transition-colors
        ${
          active
            ? "bg-[#e8f0fe] font-medium text-[#1967d2]"
            : "text-[#3c4043] hover:bg-[#f1f3f4]"
        }
      `}
    >
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>

      <span className="flex-1">
        {label}
      </span>

      {active && (
        <span className="h-1.5 w-1.5 rounded-full bg-[#1a73e8]" />
      )}
    </button>
  );
}
