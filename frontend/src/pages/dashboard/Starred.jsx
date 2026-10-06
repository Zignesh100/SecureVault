import {
  ChevronRight,
  Star,
} from "lucide-react";

import ConsolePanel from "../../components/dashboard/ConsolePanel";
import DocumentList, {
  documents,
} from "../../components/dashboard/DocumentList";

export default function Starred() {
  const starredDocuments = documents.filter(
    (document) => document.starred
  );

  return (
    <div>

      <Breadcrumb />

      <div className="mx-auto max-w-[1600px] p-4 sm:p-6">

        <div className="border-b border-[#dadce0] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fff8e1] text-[#f9ab00]">
              <Star className="h-5 w-5 fill-current" />
            </div>

            <div>

              <h1 className="text-xl font-normal sm:text-2xl">
                Starred
              </h1>

              <p className="mt-1 text-xs text-[#5f6368]">
                Your important documents and favorites.
              </p>

            </div>

          </div>

        </div>

        <ConsolePanel className="mt-5">

          <div className="border-b border-[#dadce0] px-5 py-4">

            <h2 className="text-sm font-medium">
              Starred documents
            </h2>

            <p className="mt-1 text-[10px] text-[#5f6368]">
              {starredDocuments.length} starred documents
            </p>

          </div>

          <DocumentList items={starredDocuments} />

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
        Starred
      </span>

    </div>
  );
}
