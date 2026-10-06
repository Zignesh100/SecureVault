import { useMemo, useState } from "react";
import { Activity, Bell,ChevronDown,ChevronRight,Clock3,FileText,Folder,Grid2X2,HardDrive,
  HelpCircle,
  LayoutDashboard,
  List,
  LockKeyhole,
  Menu,
  MoreVertical,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Upload,
  Users,
  X,
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Passport",
    extension: "PDF",
    size: "2.4 MB",
    modified: "Today, 10:42 AM",
    category: "Personal",
    status: "Protected",
    starred: true,
  },
  {
    id: 2,
    name: "Insurance Policy",
    extension: "PDF",
    size: "4.8 MB",
    modified: "Yesterday, 4:18 PM",
    category: "Insurance",
    status: "Protected",
    starred: false,
  },
  {
    id: 3,
    name: "Bank Statement",
    extension: "PDF",
    size: "1.8 MB",
    modified: "Sep 28, 2026",
    category: "Finance",
    status: "Protected",
    starred: true,
  },
  {
    id: 4,
    name: "Property Documents",
    extension: "PDF",
    size: "8.2 MB",
    modified: "Sep 25, 2026",
    category: "Property",
    status: "Protected",
    starred: false,
  },
  {
    id: 5,
    name: "Aadhaar Card",
    extension: "PDF",
    size: "1.2 MB",
    modified: "Sep 22, 2026",
    category: "Personal",
    status: "Protected",
    starred: false,
  },
  {
    id: 6,
    name: "Tax Documents",
    extension: "PDF",
    size: "3.6 MB",
    modified: "Sep 20, 2026",
    category: "Finance",
    status: "Protected",
    starred: false,
  },
];

const folders = [
  { name: "Personal", count: 12 },
  { name: "Finance", count: 8 },
  { name: "Insurance", count: 5 },
  { name: "Property", count: 4 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list");
  const [activeSection, setActiveSection] = useState("Dashboard");

  const filteredDocuments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return documents.filter((document) => {
      const matchesSearch =
        !query ||
        document.name.toLowerCase().includes(query) ||
        document.category.toLowerCase().includes(query) ||
        document.extension.toLowerCase().includes(query);

      if (activeSection === "Starred") {
        return matchesSearch && document.starred;
      }

      if (activeSection === "Documents") {
        return matchesSearch;
      }

      if (activeSection === "Recent") {
        return matchesSearch;
      }

      return matchesSearch;
    });
  }, [search, activeSection]);

  const navigate = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f9fa] text-[#202124]">
      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {sidebarOpen && (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[#dadce0] bg-white">
        <div className="flex h-16 min-w-0 items-center">
          {/* Desktop logo */}

          <div className="hidden h-full w-[250px] shrink-0 items-center gap-3 border-r border-[#dadce0] px-5 lg:flex">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
              <LockKeyhole className="h-4 w-4 text-[#4285F4]" />
            </div>

            <span className="truncate text-[15px] font-medium tracking-tight">
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
            onClick={() => setSidebarOpen(true)}
            className="ml-1 shrink-0 rounded-full p-2 text-[#5f6368] hover:bg-[#f1f3f4] lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Mobile logo */}

          <div className="flex shrink-0 items-center gap-2 px-1 lg:hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#1a73e8] text-white">
              <LockKeyhole className="h-4 w-4" />
            </div>

            <span className="hidden text-sm font-medium sm:block">
              SecureVault
            </span>
          </div>

          {/* Search */}

          <div className="mx-2 min-w-0 flex-1 lg:mx-5 lg:max-w-[680px]">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f6368]" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents..."
                className="
                  h-9
                  w-full
                  rounded
                  border border-[#dadce0]
                  bg-[#f8f9fa]
                  pl-10
                  pr-3
                  text-xs
                  text-[#202124]
                  outline-none
                  placeholder:text-[#5f6368]
                  transition
                  focus:border-[#1a73e8]
                  focus:bg-white
                  focus:ring-1
                  focus:ring-[#1a73e8]
                  sm:h-10
                  sm:text-sm
                "
              />
            </div>
          </div>

          {/* Header actions */}

          <div className="ml-auto flex shrink-0 items-center gap-0.5 px-1 sm:gap-1 sm:px-3">
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
              className="ml-0.5 flex items-center rounded-full p-1 hover:bg-[#f1f3f4]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a73e8] text-[10px] font-bold text-white">
                JD
              </div>

              <ChevronDown className="mx-1 hidden h-4 w-4 text-[#5f6368] sm:block" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

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
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile sidebar header */}

        <div className="flex items-center justify-between border-b border-[#dadce0] px-4 py-3 lg:hidden">
          <span className="text-sm font-medium">Navigation</span>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-full p-2 text-[#5f6368] hover:bg-[#f1f3f4]"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Vault selector */}

        <div className="border-b border-[#dadce0] p-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            Vault
          </p>

          <button className="flex w-full min-w-0 items-center justify-between rounded border border-[#dadce0] p-2.5 text-left hover:bg-[#f8f9fa]">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
                <LockKeyhole className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium">Personal Vault</p>

                <p className="mt-0.5 truncate text-[9px] text-[#5f6368]">
                  securevault-prod
                </p>
              </div>
            </div>

            <ChevronDown className="ml-2 h-4 w-4 shrink-0 text-[#5f6368]" />
          </button>
        </div>

        {/* Navigation */}

        <nav className="p-3">
          <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            Main menu
          </p>

          <ConsoleNav
            icon={<LayoutDashboard />}
            label="Dashboard"
            active={activeSection === "Dashboard"}
            onClick={() => navigate("Dashboard")}
          />

          <ConsoleNav
            icon={<FileText />}
            label="Documents"
            active={activeSection === "Documents"}
            onClick={() => navigate("Documents")}
          />

          <ConsoleNav
            icon={<Folder />}
            label="Folders"
            active={activeSection === "Folders"}
            onClick={() => navigate("Folders")}
          />

          <ConsoleNav
            icon={<Clock3 />}
            label="Recent"
            active={activeSection === "Recent"}
            onClick={() => navigate("Recent")}
          />

          <ConsoleNav
            icon={<Star />}
            label="Starred"
            active={activeSection === "Starred"}
            onClick={() => navigate("Starred")}
          />

          <div className="my-4 border-t border-[#dadce0]" />

          <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            Administration
          </p>

          <ConsoleNav
            icon={<Users />}
            label="Users"
            active={activeSection === "Users"}
            onClick={() => navigate("Users")}
          />

          <ConsoleNav
            icon={<Activity />}
            label="Activity"
            active={activeSection === "Activity"}
            onClick={() => navigate("Activity")}
          />

          <ConsoleNav
            icon={<Settings />}
            label="Settings"
            active={activeSection === "Settings"}
            onClick={() => navigate("Settings")}
          />
        </nav>

        {/* Storage */}
      </aside>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="min-w-0 pt-16 lg:pl-[250px]">
        {/* Breadcrumb */}

        <div className="flex h-12 min-w-0 items-center overflow-hidden border-b border-[#dadce0] bg-white px-4 sm:px-6">
          <span className="shrink-0 text-xs text-[#5f6368]">SecureVault</span>

          <ChevronRight className="mx-2 h-3.5 w-3.5 shrink-0 text-[#9aa0a6]" />

          <span className="truncate text-xs font-medium">{activeSection}</span>
        </div>

        {/* Content */}

        <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-5 lg:p-6">
          {/* Page heading */}

          <div className="flex flex-col gap-4 border-b border-[#dadce0] pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h1 className="truncate text-xl font-normal sm:text-2xl">
                {activeSection}
              </h1>

              <p className="mt-1 text-xs text-[#5f6368]">
                Manage and monitor your secure digital documents.
              </p>
            </div>

            <div className="flex w-full gap-2 sm:w-auto">
              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded border border-[#dadce0] bg-white px-3 text-xs font-medium hover:bg-[#f8f9fa] sm:flex-none sm:px-4">
                <Plus className="h-4 w-4" />

                <span>New folder</span>
              </button>

              <button className="flex h-9 flex-1 items-center justify-center gap-2 rounded bg-[#1a73e8] px-3 text-xs font-medium text-white hover:bg-[#1769d1] sm:flex-none sm:px-4">
                <Upload className="h-4 w-4" />

                <span>Upload</span>
              </button>
            </div>
          </div>

          {/* Metrics */}

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
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
          </div>

          {/* Content grid */}

          <div className="mt-5 grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            {/* LEFT */}

            <div className="min-w-0">
              {/* Folders */}

              <ConsolePanel>
                <PanelHeader
                  title="Folders"
                  subtitle="Your document collections"
                  action="View all"
                />

                <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4">
                  {folders.map((folder) => (
                    <FolderItem key={folder.name} folder={folder} />
                  ))}
                </div>
              </ConsolePanel>

              {/* Documents */}

              <ConsolePanel className="mt-5">
                <div className="flex flex-col gap-3 border-b border-[#dadce0] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <div className="min-w-0">
                    <h2 className="text-sm font-medium">Documents</h2>

                    <p className="mt-1 text-[10px] text-[#5f6368]">
                      {filteredDocuments.length} documents in your vault
                    </p>
                  </div>

                  <div className="flex shrink-0 self-end rounded border border-[#dadce0] p-0.5 sm:self-auto">
                    <button
                      onClick={() => setView("list")}
                      aria-label="List view"
                      className={`rounded p-1.5 ${
                        view === "list"
                          ? "bg-[#e8f0fe] text-[#1a73e8]"
                          : "text-[#5f6368] hover:bg-[#f1f3f4]"
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => setView("grid")}
                      aria-label="Grid view"
                      className={`rounded p-1.5 ${
                        view === "grid"
                          ? "bg-[#e8f0fe] text-[#1a73e8]"
                          : "text-[#5f6368] hover:bg-[#f1f3f4]"
                      }`}
                    >
                      <Grid2X2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {view === "list" ? (
                  <ResponsiveDocumentList documents={filteredDocuments} />
                ) : (
                  <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredDocuments.map((document) => (
                      <DocumentGridCard key={document.id} document={document} />
                    ))}
                  </div>
                )}
              </ConsolePanel>
            </div>

            {/* RIGHT */}

            <aside className="min-w-0 space-y-5">
              {/* Security */}

              <ConsolePanel>
                <div className="border-b border-[#dadce0] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#e6f4ea] text-[#188038]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium">Security</h3>

                      <p className="text-[10px] text-[#188038]">
                        All systems protected
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <StatusRow label="Account security" status="Active" />

                  <StatusRow label="Secure connection" status="Active" />

                  <StatusRow label="Document protection" status="Active" />

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded border border-[#dadce0] py-2.5 text-xs font-medium hover:bg-[#f8f9fa]">
                    Security center
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </ConsolePanel>

              {/* Activity */}

              <ConsolePanel>
                <div className="border-b border-[#dadce0] px-5 py-4">
                  <h3 className="text-sm font-medium">Recent activity</h3>
                </div>

                <div className="divide-y divide-[#dadce0]">
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
                </div>
              </ConsolePanel>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile upload button */}

      <button
        aria-label="Upload document"
        className="
          fixed bottom-5 right-5 z-30
          flex h-12 w-12 items-center justify-center
          rounded-full
          bg-[#1a73e8]
          text-white
          shadow-lg
          transition
          hover:bg-[#1769d1]
          sm:h-14 sm:w-14
        "
      >
        <Upload className="h-5 w-5" />
      </button>
    </div>
  );
}

/* =========================================================
   NAVIGATION
========================================================= */

function ConsoleNav({ icon, label, active, onClick }) {
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
      <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>

      <span className="flex-1">{label}</span>

      {active && <span className="h-1.5 w-1.5 rounded-full bg-[#1a73e8]" />}
    </button>
  );
}

/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({ label, value, detail, icon, green = false }) {
  return (
    <div className="min-w-0 rounded border border-[#dadce0] bg-white">
      <div className="flex min-w-0 items-start justify-between gap-2 p-3 sm:p-5">
        <div className="min-w-0">
          <p className="truncate text-[9px] font-medium uppercase tracking-wide text-[#5f6368] sm:text-[10px]">
            {label}
          </p>

          <p className="mt-2 truncate text-lg font-normal sm:mt-3 sm:text-2xl">
            {value}
          </p>

          <p
            className={`mt-1 truncate text-[9px] sm:text-[10px] ${
              green ? "text-[#188038]" : "text-[#5f6368]"
            }`}
          >
            {detail}
          </p>
        </div>

        <div
          className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded sm:flex ${
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
}

/* =========================================================
   PANEL
========================================================= */

function ConsolePanel({ children, className = "" }) {
  return (
    <section
      className={`
        min-w-0
        overflow-hidden
        rounded
        border
        border-[#dadce0]
        bg-white
        ${className}
      `}
    >
      {children}
    </section>
  );
}

/* =========================================================
   PANEL HEADER
========================================================= */

function PanelHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#dadce0] px-4 py-4 sm:px-5">
      <div className="min-w-0">
        <h2 className="text-sm font-medium">{title}</h2>

        <p className="mt-1 truncate text-[10px] text-[#5f6368]">{subtitle}</p>
      </div>

      <button className="shrink-0 text-xs font-medium text-[#1a73e8] hover:text-[#1557b0]">
        {action}
      </button>
    </div>
  );
}

/* =========================================================
   FOLDER
========================================================= */

function FolderItem({ folder }) {
  return (
    <button className="flex min-w-0 items-center gap-3 rounded border border-[#dadce0] p-3 text-left transition hover:bg-[#f8f9fa]">
      <Folder className="h-5 w-5 shrink-0 text-[#5f6368]" />

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium">{folder.name}</p>

        <p className="mt-1 truncate text-[10px] text-[#5f6368]">
          {folder.count} documents
        </p>
      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-[#9aa0a6]" />
    </button>
  );
}

/* =========================================================
   DOCUMENT LIST
========================================================= */

function ResponsiveDocumentList({ documents }) {
  if (!documents.length) {
    return (
      <div className="px-5 py-12 text-center">
        <FileText className="mx-auto h-8 w-8 text-[#9aa0a6]" />

        <p className="mt-3 text-sm font-medium">No documents found</p>

        <p className="mt-1 text-xs text-[#5f6368]">
          Try another search or select a different section.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}

      <div className="hidden overflow-x-auto md:block">
        <div className="min-w-[720px]">
          <div className="grid grid-cols-[minmax(230px,1fr)_90px_170px_110px_45px] border-b border-[#dadce0] bg-[#f8f9fa] px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            <span>Name</span>
            <span>Type</span>
            <span>Modified</span>
            <span>Status</span>
            <span />
          </div>

          {documents.map((document) => (
            <DesktopDocumentRow key={document.id} document={document} />
          ))}
        </div>
      </div>

      {/* Mobile cards */}

      <div className="divide-y divide-[#dadce0] md:hidden">
        {documents.map((document) => (
          <MobileDocumentCard key={document.id} document={document} />
        ))}
      </div>
    </>
  );
}

/* =========================================================
   DESKTOP DOCUMENT ROW
========================================================= */

function DesktopDocumentRow({ document }) {
  return (
    <div className="group grid grid-cols-[minmax(230px,1fr)_90px_170px_110px_45px] items-center px-5 py-3 hover:bg-[#f8f9fa]">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
          <FileText className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-medium">{document.name}</p>

          <p className="mt-0.5 truncate text-[9px] text-[#5f6368]">
            {document.category} · {document.size}
          </p>
        </div>

        {document.starred && (
          <Star className="h-3.5 w-3.5 shrink-0 fill-[#fbbc04] text-[#fbbc04]" />
        )}
      </div>

      <span className="text-xs text-[#5f6368]">{document.extension}</span>

      <span className="truncate text-xs text-[#5f6368]">
        {document.modified}
      </span>

      <span className="flex items-center gap-2 text-[10px] font-medium text-[#188038]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
        Protected
      </span>

      <button
        aria-label={`More options for ${document.name}`}
        className="rounded p-2 opacity-0 hover:bg-[#e8eaed] group-hover:opacity-100"
      >
        <MoreVertical className="h-4 w-4 text-[#5f6368]" />
      </button>
    </div>
  );
}

/* =========================================================
   MOBILE DOCUMENT
========================================================= */

function MobileDocumentCard({ document }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
        <FileText className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <p className="truncate text-xs font-medium">{document.name}</p>

          {document.starred && (
            <Star className="h-3 w-3 shrink-0 fill-[#fbbc04] text-[#fbbc04]" />
          )}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] text-[#5f6368]">
          <span>{document.category}</span>

          <span>·</span>

          <span>{document.size}</span>

          <span>·</span>

          <span>{document.modified}</span>
        </div>

        <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-medium text-[#188038]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
          Protected
        </div>
      </div>

      <button
        aria-label={`More options for ${document.name}`}
        className="shrink-0 rounded p-2 hover:bg-[#f1f3f4]"
      >
        <MoreVertical className="h-4 w-4 text-[#5f6368]" />
      </button>
    </div>
  );
}

/* =========================================================
   GRID DOCUMENT
========================================================= */

function DocumentGridCard({ document }) {
  return (
    <div className="min-w-0 overflow-hidden rounded border border-[#dadce0] bg-white hover:shadow-sm">
      <div className="flex h-28 items-center justify-center bg-[#f8f9fa] sm:h-32">
        <div className="flex h-[80px] w-[62px] flex-col rounded border border-[#dadce0] bg-white p-2.5 shadow-sm sm:h-[90px] sm:w-[70px]">
          <div className="h-2 w-9 rounded bg-[#1a73e8]" />

          <div className="mt-4 h-1.5 w-full rounded bg-[#dadce0]" />

          <div className="mt-2 h-1.5 w-4/5 rounded bg-[#e8eaed]" />

          <div className="mt-2 h-1.5 w-3/5 rounded bg-[#e8eaed]" />
        </div>
      </div>

      <div className="flex min-w-0 items-center gap-3 border-t border-[#dadce0] p-3">
        <FileText className="h-4 w-4 shrink-0 text-[#1a73e8]" />

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium">{document.name}</p>

          <p className="mt-1 truncate text-[9px] text-[#5f6368]">
            {document.size} · {document.modified}
          </p>
        </div>

        <button
          aria-label={`More options for ${document.name}`}
          className="shrink-0 rounded p-1 hover:bg-[#f1f3f4]"
        >
          <MoreVertical className="h-4 w-4 text-[#5f6368]" />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   STATUS
========================================================= */

function StatusRow({ label, status }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="truncate text-xs text-[#5f6368]">{label}</span>

      <span className="flex shrink-0 items-center gap-2 text-[10px] font-medium text-[#188038]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />

        {status}
      </span>
    </div>
  );
}

/* =========================================================
   ACTIVITY
========================================================= */

function ActivityRow({ title, time, color }) {
  return (
    <div className="flex items-start gap-3 px-5 py-3">
      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${color}`} />

      <div className="min-w-0">
        <p className="truncate text-xs font-medium">{title}</p>

        <p className="mt-1 text-[10px] text-[#5f6368]">{time}</p>
      </div>
    </div>
  );
}
