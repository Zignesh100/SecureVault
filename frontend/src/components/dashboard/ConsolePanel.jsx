export default function ConsolePanel({
  children,
  className = "",
}) {
  return (
    <section
      className={`
        min-w-0 overflow-hidden rounded
        border border-[#dadce0] bg-white
        ${className}
      `}
    >
      {children}
    </section>
  );
}
