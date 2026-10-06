import { Clock3, ChevronRight } from "lucide-react";

import ConsolePanel from "../../components/dashboard/ConsolePanel";
import DocumentList, {
  documents,
} from "../../components/dashboard/DocumentList";

export default function Recent() {
  const recentDocuments = [...documents].sort(
    (a, b) => b.id - a.id
  );

  return (
    <div>

      <Breadcrumb />

      <div className="mx-auto max-w-[1600px] p-4 sm:p-6">

        <div className="border-b border-[#dadce0] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#e8f0fe] text-[#1a73e8]">
              <Clock3 className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-xl font-normal sm:text-2xl">
                Recent
              </h1>

              <p className="mt-1 text-xs text-[#5f6368]">
                Documents you've recently accessed or modified.
              </p>
            </div>

          </div>

        </div>

        <ConsolePanel className="mt-5">

          <div className="border-b border-[#dadce0] px-5 py-4">

            <h2 className="text-sm font-medium">
              Recent documents
            </h2>

            <p className="mt-1 text-[10px] text-[#5f6368]">
              Recently accessed documents
            </p>

          </div>

          <DocumentList items={recentDocuments} />

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
        Recent
      </span>
    </div>
  );
}
