import React, { useMemo, useState } from "react";
import {
  FileText,
  Grid2X2,
  List,
  MoreVertical,
  Search,
  Star,
  Upload,
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Passport",
    extension: "PDF",
    size: "2.4 MB",
    modified: "Today, 10:42 AM",
    category: "Personal",
    starred: true,
  },
  {
    id: 2,
    name: "Insurance Policy",
    extension: "PDF",
    size: "4.8 MB",
    modified: "Yesterday, 4:18 PM",
    category: "Insurance",
    starred: false,
  },
  {
    id: 3,
    name: "Bank Statement",
    extension: "PDF",
    size: "1.8 MB",
    modified: "Sep 28, 2026",
    category: "Finance",
    starred: true,
  },
  {
    id: 4,
    name: "Property Documents",
    extension: "PDF",
    size: "8.2 MB",
    modified: "Sep 25, 2026",
    category: "Property",
    starred: false,
  },
  {
    id: 5,
    name: "Aadhaar Card",
    extension: "PDF",
    size: "1.2 MB",
    modified: "Sep 22, 2026",
    category: "Personal",
    starred: false,
  },
  {
    id: 6,
    name: "Tax Documents",
    extension: "PDF",
    size: "3.6 MB",
    modified: "Sep 20, 2026",
    category: "Finance",
    starred: false,
  },
];

const Documents = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list");

  const filteredDocuments = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return documents;
    }

    return documents.filter((document) => {
      return (
        document.name.toLowerCase().includes(query) ||
        document.category.toLowerCase().includes(query) ||
        document.extension.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202124]">
      {/* Breadcrumb */}
      <div className="flex h-12 items-center border-b border-[#dadce0] bg-white px-4 sm:px-6">
        <span className="text-xs text-[#5f6368]">
          SecureVault
        </span>

        <span className="mx-2 text-[#9aa0a6]">
          /
        </span>

        <span className="text-xs font-medium">
          Documents
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-5 lg:p-6">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#dadce0] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-xl font-normal sm:text-2xl">
              Documents
            </h1>

            <p className="mt-1 text-xs text-[#5f6368]">
              Manage all your secure digital documents.
            </p>
          </div>

          <button className="flex h-9 items-center justify-center gap-2 rounded bg-[#1a73e8] px-4 text-xs font-medium text-white hover:bg-[#1769d1]">
            <Upload className="h-4 w-4" />
            Upload document
          </button>
        </div>

        {/* Toolbar */}
        <div className="mt-5 flex flex-col gap-3 rounded border border-[#dadce0] bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-[400px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f6368]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documents..."
              className="h-9 w-full rounded border border-[#dadce0] bg-[#f8f9fa] pl-10 pr-3 text-xs outline-none focus:border-[#1a73e8] focus:bg-white focus:ring-1 focus:ring-[#1a73e8]"
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-[#5f6368]">
              {filteredDocuments.length} documents
            </span>

            <div className="flex rounded border border-[#dadce0] p-0.5">
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
        </div>

        {/* Documents */}
        <div className="mt-5 overflow-hidden rounded border border-[#dadce0] bg-white">
          {filteredDocuments.length === 0 ? (
            <EmptyState />
          ) : view === "list" ? (
            <DocumentList documents={filteredDocuments} />
          ) : (
            <DocumentGrid documents={filteredDocuments} />
          )}
        </div>
      </div>
    </div>
  );
};

/* --------------------------------
   LIST VIEW
-------------------------------- */

const DocumentList = ({ documents }) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <div className="min-w-[750px]">
          <div className="grid grid-cols-[minmax(250px,1fr)_100px_160px_110px_50px] border-b border-[#dadce0] bg-[#f8f9fa] px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
            <span>Name</span>
            <span>Type</span>
            <span>Modified</span>
            <span>Status</span>
            <span />
          </div>

          {documents.map((document) => (
            <DocumentRow
              key={document.id}
              document={document}
            />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="divide-y divide-[#dadce0] md:hidden">
        {documents.map((document) => (
          <MobileDocument
            key={document.id}
            document={document}
          />
        ))}
      </div>
    </>
  );
};

/* --------------------------------
   DESKTOP ROW
-------------------------------- */

const DocumentRow = ({ document }) => {
  return (
    <div className="group grid grid-cols-[minmax(250px,1fr)_100px_160px_110px_50px] items-center px-5 py-3 hover:bg-[#f8f9fa]">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
          <FileText className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-xs font-medium">
              {document.name}
            </p>

            {document.starred && (
              <Star className="h-3.5 w-3.5 shrink-0 fill-[#fbbc04] text-[#fbbc04]" />
            )}
          </div>

          <p className="mt-0.5 text-[9px] text-[#5f6368]">
            {document.category} · {document.size}
          </p>
        </div>
      </div>

      <span className="text-xs text-[#5f6368]">
        {document.extension}
      </span>

      <span className="text-xs text-[#5f6368]">
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
};

/* --------------------------------
   MOBILE
-------------------------------- */

const MobileDocument = ({ document }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
        <FileText className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-xs font-medium">
            {document.name}
          </p>

          {document.starred && (
            <Star className="h-3 w-3 shrink-0 fill-[#fbbc04] text-[#fbbc04]" />
          )}
        </div>

        <p className="mt-1 text-[9px] text-[#5f6368]">
          {document.category} · {document.size}
        </p>

        <p className="mt-1 text-[9px] text-[#5f6368]">
          {document.modified}
        </p>

        <p className="mt-1.5 flex items-center gap-1.5 text-[9px] font-medium text-[#188038]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
          Protected
        </p>
      </div>

      <button
        aria-label={`More options for ${document.name}`}
        className="shrink-0 rounded p-2 hover:bg-[#f1f3f4]"
      >
        <MoreVertical className="h-4 w-4 text-[#5f6368]" />
      </button>
    </div>
  );
};

/* --------------------------------
   GRID VIEW
-------------------------------- */

const DocumentGrid = ({ documents }) => {
  return (
    <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {documents.map((document) => (
        <div
          key={document.id}
          className="overflow-hidden rounded border border-[#dadce0] hover:shadow-sm"
        >
          <div className="flex h-32 items-center justify-center bg-[#f8f9fa]">
            <div className="flex h-[90px] w-[70px] flex-col rounded border border-[#dadce0] bg-white p-2.5 shadow-sm">
              <div className="h-2 w-9 rounded bg-[#1a73e8]" />

              <div className="mt-4 h-1.5 w-full rounded bg-[#dadce0]" />

              <div className="mt-2 h-1.5 w-4/5 rounded bg-[#e8eaed]" />

              <div className="mt-2 h-1.5 w-3/5 rounded bg-[#e8eaed]" />
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#dadce0] p-3">
            <FileText className="h-4 w-4 shrink-0 text-[#1a73e8]" />

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-xs font-medium">
                  {document.name}
                </p>

                {document.starred && (
                  <Star className="h-3 w-3 shrink-0 fill-[#fbbc04] text-[#fbbc04]" />
                )}
              </div>

              <p className="mt-1 truncate text-[9px] text-[#5f6368]">
                {document.size} · {document.modified}
              </p>
            </div>

            <button
              aria-label={`More options for ${document.name}`}
              className="rounded p-1 hover:bg-[#f1f3f4]"
            >
              <MoreVertical className="h-4 w-4 text-[#5f6368]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

/* --------------------------------
   EMPTY STATE
-------------------------------- */

const EmptyState = () => {
  return (
    <div className="px-5 py-16 text-center">
      <FileText className="mx-auto h-9 w-9 text-[#9aa0a6]" />

      <h3 className="mt-3 text-sm font-medium">
        No documents found
      </h3>

      <p className="mt-1 text-xs text-[#5f6368]">
        Try a different search term.
      </p>
    </div>
  );
};

export default Documents;
