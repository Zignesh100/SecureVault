import {
  Search,
  FileText,
  CreditCard,
  Plane,
  Car,
  GraduationCap,
  ShieldCheck,
  MoreHorizontal,
  ChevronRight,
  Upload,
  Filter,
  LockKeyhole,
} from "lucide-react";

const documents = [
  {
    name: "Aadhaar Card",
    type: "Identity",
    number: "XXXX XXXX 4821",
    updated: "12 Sep 2026",
    icon: CreditCard,
  },
  {
    name: "PAN Card",
    type: "Identity",
    number: "XXXXX4821X",
    updated: "08 Sep 2026",
    icon: FileText,
  },
  {
    name: "Passport",
    type: "Travel",
    number: "PXXXXXXX21",
    updated: "02 Sep 2026",
    icon: Plane,
  },
  {
    name: "Driving Licence",
    type: "Vehicle",
    number: "MHXX 2021 XXXXX",
    updated: "28 Aug 2026",
    icon: Car,
  },
  {
    name: "Education Certificate",
    type: "Education",
    number: "CERT-XXXX-2022",
    updated: "19 Aug 2026",
    icon: GraduationCap,
  },
];

const categories = [
  { name: "All documents", count: "05" },
  { name: "Identity", count: "02" },
  { name: "Travel", count: "01" },
  { name: "Education", count: "01" },
  { name: "Vehicle", count: "01" },
  { name: "Insurance", count: "00" },
];

const DocumentTypes = () => {
  return (
    <section
      id="documents"
      className="bg- py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#ff9900]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5f6b7a]">
                SecureVault
              </span>
            </div>

            <h2 className="text-3xl font-normal tracking-tight text-[#161e2d] sm:text-4xl lg:text-5xl">
              Your documents, organized
              <br className="hidden sm:block" />
              <span className="text-[#007eb9]">
                {" "}and ready when needed.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6b7a]">
              Manage your identity, travel, education and other important
              documents from one secure location.
            </p>

          </div>

          {/* Security Status */}

          <div className="flex shrink-0 items-center gap-3 border border-[#d5dbdb] bg-white px-4 py-3">

            <div className="flex h-8 w-8 items-center justify-center bg-[#e7f6f8]">
              <ShieldCheck className="h-4 w-4 text-[#007eb9]" />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#161e2d]">
                Vault protected
              </p>

              <p className="mt-0.5 text-[11px] text-[#687078]">
                Security controls active
              </p>
            </div>

            <span className="ml-2 h-2 w-2 bg-[#1d8102]" />

          </div>

        </div>

        {/* =====================================================
            CONSOLE
        ===================================================== */}

        <div className="mt-12 border border-[#d5dbdb] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">

          {/* ===================================================
              CONSOLE HEADER
          =================================================== */}

          <div className="flex flex-col gap-4 border-b border-[#eaeded] bg-[#fafafa] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="flex items-center gap-2">

                <LockKeyhole className="h-4 w-4 text-[#687078]" />

                <h3 className="text-sm font-semibold text-[#161e2d]">
                  Document vault
                </h3>

              </div>

              <p className="mt-1 text-xs text-[#687078]">
                Securely stored documents and records
              </p>
            </div>

            <button
              className="
                inline-flex h-9 items-center justify-center gap-2
                rounded-sm
                border border-[#e88b00]
                bg-[#ff9900]
                px-4
                text-xs
                font-semibold
                text-[#161e2d]
                shadow-sm
                transition
                hover:bg-[#ec8b00]
              "
            >
              <Upload className="h-3.5 w-3.5" />
              Upload document
            </button>

          </div>

          {/* ===================================================
              BODY
          =================================================== */}

          <div className="grid lg:grid-cols-[220px_1fr]">

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="border-b border-[#eaeded] bg-[#fafafa] p-4 lg:border-b-0 lg:border-r">

              <div className="mb-3 px-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#687078]">
                  Documents
                </p>

              </div>

              <nav className="space-y-0.5">

                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`
                      group
                      flex w-full
                      items-center
                      justify-between
                      border-l-2
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      transition
                      ${
                        index === 0
                          ? "border-[#007eb9] bg-[#e7f6f8] font-semibold text-[#161e2d]"
                          : "border-transparent text-[#5f6b7a] hover:bg-[#eaeded] hover:text-[#161e2d]"
                      }
                    `}
                  >
                    <span>{category.name}</span>

                    <span
                      className={`
                        text-[10px]
                        ${
                          index === 0
                            ? "font-semibold text-[#007eb9]"
                            : "text-[#879596]"
                        }
                      `}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}

              </nav>

              {/* Sidebar security */}

              <div className="mt-8 border-t border-[#eaeded] pt-5">

                <div className="flex items-center gap-2">

                  <ShieldCheck className="h-4 w-4 text-[#007eb9]" />

                  <span className="text-xs font-semibold text-[#161e2d]">
                    Vault security
                  </span>

                </div>

                <p className="mt-2 text-[11px] leading-5 text-[#687078]">
                  Your documents are available only through your
                  authenticated account.
                </p>

              </div>

            </aside>

            {/* =================================================
                DOCUMENT CONTENT
            ================================================= */}

            <div className="min-w-0">

              {/* Toolbar */}

              <div className="flex flex-col gap-4 border-b border-[#eaeded] px-5 py-5 sm:px-6">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h3 className="text-base font-semibold text-[#161e2d]">
                      All documents
                    </h3>

                    <p className="mt-1 text-xs text-[#687078]">
                      Showing 5 securely stored documents
                    </p>

                  </div>

                  <div className="flex items-center gap-2">

                    {/* Search */}

                    <div className="relative">

                      <Search
                        className="
                          absolute
                          left-3
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-[#879596]
                        "
                      />

                      <input
                        type="search"
                        placeholder="Search documents"
                        className="
                          h-9
                          w-full
                          rounded-sm
                          border
                          border-[#879596]
                          bg-white
                          pl-9
                          pr-3
                          text-xs
                          text-[#161e2d]
                          outline-none
                          placeholder:text-[#879596]
                          focus:border-[#007eb9]
                          focus:ring-2
                          focus:ring-[#007eb9]/20
                          sm:w-56
                        "
                      />

                    </div>

                    {/* Filter */}

                    <button
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-sm
                        border
                        border-[#879596]
                        bg-white
                        text-[#687078]
                        transition
                        hover:bg-[#eaeded]
                        hover:text-[#161e2d]
                      "
                      aria-label="Filter documents"
                    >
                      <Filter className="h-4 w-4" />
                    </button>

                    {/* More */}

                    <button
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-sm
                        border
                        border-[#879596]
                        bg-white
                        text-[#687078]
                        transition
                        hover:bg-[#eaeded]
                        hover:text-[#161e2d]
                      "
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>

                  </div>

                </div>

              </div>

              {/* =================================================
                  DESKTOP TABLE
              ================================================= */}

              <div className="hidden overflow-x-auto md:block">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="border-b border-[#eaeded] bg-[#fafafa]">

                      <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[0.1em] text-[#687078]">
                        Document
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[0.1em] text-[#687078]">
                        Type
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[0.1em] text-[#687078]">
                        Reference
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[0.1em] text-[#687078]">
                        Updated
                      </th>

                      <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-[0.1em] text-[#687078]">
                        Status
                      </th>

                      <th className="w-10" />

                    </tr>

                  </thead>

                  <tbody>

                    {documents.map((document) => {

                      const Icon = document.icon;

                      return (
                        <tr
                          key={document.name}
                          className="
                            group
                            border-b
                            border-[#eaeded]
                            last:border-b-0
                            hover:bg-[#f7f8f8]
                          "
                        >

                          {/* Document */}

                          <td className="px-5 py-4">

                            <div className="flex items-center gap-3">

                              <div
                                className="
                                  flex
                                  h-9
                                  w-9
                                  shrink-0
                                  items-center
                                  justify-center
                                  border
                                  border-[#d5dbdb]
                                  bg-white
                                  text-[#007eb9]
                                "
                              >
                                <Icon
                                  className="h-4 w-4"
                                  strokeWidth={1.8}
                                />
                              </div>

                              <div className="min-w-0">

                                <p className="truncate text-xs font-semibold text-[#161e2d]">
                                  {document.name}
                                </p>

                                <p className="mt-0.5 text-[10px] text-[#879596]">
                                  Secure document
                                </p>

                              </div>

                            </div>

                          </td>

                          {/* Type */}

                          <td className="px-5 py-4">

                            <span className="text-xs text-[#5f6b7a]">
                              {document.type}
                            </span>

                          </td>

                          {/* Number */}

                          <td className="px-5 py-4">

                            <span className="font-mono text-[11px] text-[#687078]">
                              {document.number}
                            </span>

                          </td>

                          {/* Updated */}

                          <td className="px-5 py-4">

                            <span className="text-xs text-[#687078]">
                              {document.updated}
                            </span>

                          </td>

                          {/* Status */}

                          <td className="px-5 py-4">

                            <div className="flex justify-end">

                              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#1d8102]">

                                <span className="h-1.5 w-1.5 bg-[#1d8102]" />

                                Protected

                              </span>

                            </div>

                          </td>

                          {/* Arrow */}

                          <td className="px-3 py-4">

                            <ChevronRight
                              className="
                                h-4
                                w-4
                                text-[#879596]
                                transition
                                group-hover:translate-x-0.5
                                group-hover:text-[#007eb9]
                              "
                            />

                          </td>

                        </tr>
                      );
                    })}

                  </tbody>

                </table>

              </div>

              {/* =================================================
                  MOBILE LIST
              ================================================= */}

              <div className="divide-y divide-[#eaeded] md:hidden">

                {documents.map((document) => {

                  const Icon = document.icon;

                  return (
                    <div
                      key={document.name}
                      className="flex items-center gap-3 px-5 py-4"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d5dbdb] text-[#007eb9]">

                        <Icon className="h-4 w-4" />

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-xs font-semibold text-[#161e2d]">
                          {document.name}
                        </p>

                        <p className="mt-1 text-[10px] text-[#687078]">
                          {document.type} · {document.number}
                        </p>

                      </div>

                      <span className="h-1.5 w-1.5 shrink-0 bg-[#1d8102]" />

                      <ChevronRight className="h-4 w-4 text-[#879596]" />

                    </div>
                  );
                })}

              </div>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div className="flex flex-col gap-3 border-t border-[#eaeded] bg-[#fafafa] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-[11px] text-[#687078]">
                  Document information is private to your account.
                </p>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#007eb9]">

                  <ShieldCheck className="h-3.5 w-3.5" />

                  Secure storage enabled

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM INFO
        ===================================================== */}

        <div className="mt-5 flex flex-col gap-3 text-xs text-[#687078] sm:flex-row sm:items-center sm:justify-between">

          <p>
            SecureVault document management
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#1d8102]" />
            All systems operational
          </div>

        </div>

      </div>
    </section>
  );
};

export default DocumentTypes;
