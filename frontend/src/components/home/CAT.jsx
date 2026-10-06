import {
  ArrowRight,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[30px] bg-[#0066CC] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* Subtle background shapes */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Content */}
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white">
                <LockKeyhole size={13} />
                Your private document vault
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                Your documents.
                <br />
                One secure place.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                Keep your important documents organized, protected and ready
                whenever you need them.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <button className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#0066CC] transition hover:bg-[#F5F9FF]">
                  Get Started

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 px-6 text-sm font-medium text-white transition hover:bg-white/10">
                  Learn More
                </button>

              </div>
            </div>

            {/* Security Status */}
            <div className="w-full max-w-xs rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <ShieldCheck
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Vault protection
                  </p>

                  <p className="mt-0.5 text-xs text-blue-100">
                    Multiple security layers
                  </p>
                </div>

              </div>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-blue-100">
                  Security status
                </span>

                <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Protected
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;