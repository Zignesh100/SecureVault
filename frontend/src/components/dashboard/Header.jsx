import {
  Bell,
  HelpCircle,
  LockKeyhole,
  Menu,
  Search,
} from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[#dadce0] bg-white">
      <div className="flex h-16 items-center">

        {/* Desktop logo */}
        <div className="hidden h-full w-[250px] shrink-0 items-center gap-3 border-r border-[#dadce0] px-5 lg:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <LockKeyhole className="h-4 w-4 text-[#4285F4]" />
          </div>

          <span className="text-[15px] font-medium">
            <span className="text-[#4285F4]">S</span>
            <span className="text-[#EA4335]">e</span>
            <span className="text-[#FBBC05]">c</span>
            <span className="text-[#4285F4]">u</span>
            <span className="text-[#34A853]">r</span>
            <span className="text-[#EA4335]">e</span>
            <span className="text-[#5F6368]">Vault</span>
          </span>
        </div>

        {/* Mobile menu */}
        <button
          onClick={onMenuClick}
          className="ml-1 rounded-full p-2 text-[#5f6368] hover:bg-[#f1f3f4] lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Mobile logo */}
        <div className="flex items-center gap-2 px-1 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1a73e8] text-white">
            <LockKeyhole className="h-4 w-4" />
          </div>

          <span className="hidden text-sm font-medium sm:block">
            SecureVault
          </span>
        </div>

        {/* Search */}
        <div className="mx-2 min-w-0 flex-1 lg:mx-5 lg:max-w-[680px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f6368]" />

            <input
              type="text"
              placeholder="Search documents..."
              className="
                h-9 w-full rounded border border-[#dadce0]
                bg-[#f8f9fa] pl-10 pr-3 text-xs
                outline-none placeholder:text-[#5f6368]
                focus:border-[#1a73e8]
                focus:bg-white
                focus:ring-1
                focus:ring-[#1a73e8]
                sm:h-10 sm:text-sm
              "
            />
          </div>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-1 px-2 sm:px-3">

          <button
            aria-label="Help"
            className="hidden rounded-full p-2 text-[#5f6368] hover:bg-[#f1f3f4] sm:block"
          >
            <HelpCircle className="h-5 w-5" />
          </button>

          <button
            aria-label="Notifications"
            className="relative rounded-full p-2 text-[#5f6368] hover:bg-[#f1f3f4]"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#fbbc04]" />
          </button>

          <button
            aria-label="Account"
            className="flex items-center rounded-full p-1 hover:bg-[#f1f3f4]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a73e8] text-[10px] font-bold text-white">
              JD
            </div>
          </button>

        </div>
      </div>
    </header>
  );
}
