import {
  FileText,
  MoreVertical,
  Star,
} from "lucide-react";

export const documents = [
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

export default function DocumentList({
  items = documents,
}) {
  if (!items.length) {
    return (
      <div className="px-5 py-12 text-center">
        <FileText className="mx-auto h-8 w-8 text-[#9aa0a6]" />

        <p className="mt-3 text-sm font-medium">
          No documents found
        </p>

        <p className="mt-1 text-xs text-[#5f6368]">
          There are no documents to display.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[720px]">

        <div className="grid grid-cols-[minmax(230px,1fr)_90px_170px_110px_45px] border-b border-[#dadce0] bg-[#f8f9fa] px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-[#5f6368]">
          <span>Name</span>
          <span>Type</span>
          <span>Modified</span>
          <span>Status</span>
          <span />
        </div>

        {items.map((document) => (
          <div
            key={document.id}
            className="group grid grid-cols-[minmax(230px,1fr)_90px_170px_110px_45px] items-center px-5 py-3 hover:bg-[#f8f9fa]"
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
                  {document.category} · {document.size}
                </p>
              </div>

              {document.starred && (
                <Star className="h-3.5 w-3.5 shrink-0 fill-[#fbbc04] text-[#fbbc04]" />
              )}

            </div>

            <span className="text-xs text-[#5f6368]">
              {document.extension}
            </span>

            <span className="truncate text-xs text-[#5f6368]">
              {document.modified}
            </span>

            <span className="flex items-center gap-2 text-[10px] font-medium text-[#188038]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#188038]" />
              Protected
            </span>

            <button className="rounded p-2 opacity-0 hover:bg-[#e8eaed] group-hover:opacity-100">
              <MoreVertical className="h-4 w-4 text-[#5f6368]" />
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
