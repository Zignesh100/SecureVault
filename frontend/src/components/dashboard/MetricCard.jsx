export default function MetricCard({
  label,
  value,
  detail,
  icon,
  green = false,
}) {
  return (
    <div className="min-w-0 rounded border border-[#dadce0] bg-white">
      <div className="flex items-start justify-between gap-2 p-3 sm:p-5">

        <div className="min-w-0">

          <p className="truncate text-[9px] font-medium uppercase tracking-wide text-[#5f6368] sm:text-[10px]">
            {label}
          </p>

          <p className="mt-2 truncate text-lg font-normal sm:mt-3 sm:text-2xl">
            {value}
          </p>

          <p
            className={`mt-1 truncate text-[9px] sm:text-[10px] ${
              green
                ? "text-[#188038]"
                : "text-[#5f6368]"
            }`}
          >
            {detail}
          </p>

        </div>

        <div
          className={`
            hidden h-9 w-9 shrink-0 items-center
            justify-center rounded sm:flex
            ${
              green
                ? "bg-[#e6f4ea] text-[#188038]"
                : "bg-[#e8f0fe] text-[#1a73e8]"
            }
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}
