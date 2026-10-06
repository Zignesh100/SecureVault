import {
  LockKeyhole,
  ShieldCheck,
  FolderLock,
  Smartphone,
  ArrowUpRight,
  Check,
} from "lucide-react";

import dataProtectionImage from "../../assets/data-protection.jpg";

const features = [
  {
    number: "01",
    icon: LockKeyhole,
    title: "Strong protection",
    description:
      "Modern encryption and layered security help keep your sensitive documents protected.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Privacy first",
    description:
      "Your personal documents stay private and remain accessible only through your secure account.",
  },
  {
    number: "03",
    icon: FolderLock,
    title: "Everything organized",
    description:
      "Keep identity, education, travel, vehicle and other essential documents in one place.",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Access when needed",
    description:
      "Your secure document vault is available whenever you need your important files.",
  },
];

const WhySecureVault = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft orange cloud glow */}

        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#ff9900]/[0.035] blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#146eb4]/[0.035] blur-[130px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#1f2937 1px, transparent 1px),
              linear-gradient(90deg, #1f2937 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>

            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-1 w-4 bg-[#ff9900]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f6b7a]">
                Why SecureVault
              </span>

            </div>

            {/* Heading */}

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#161e2d] sm:text-5xl lg:text-6xl">

        <span className="text-[#4285F4]">S</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#FBBC05]">c</span>
              <span className="text-[#4285F4]">u</span>
              <span className="text-[#34A853]">r</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#FBBC05]">i</span>
              <span className="text-[#4285F4]">t</span>
              <span className="text-[#34A853]">y</span> without

              <br />

              <span className="text-[#5f6b7a]">
                unnecessary complexity.
              </span>

            </h2>

          </div>

          <p className="max-w-xl text-base leading-7 text-[#5f6b7a] lg:ml-auto lg:text-lg">
            SecureVault brings your important documents together with
            security-focused controls designed to keep your information
            protected and easy to manage.
          </p>

        </div>

        {/* =====================================================
            MAIN FEATURE AREA
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              IMAGE / INTRO PANEL
          ================================================= */}

          <div className="relative min-h-[500px] overflow-hidden rounded-2xl border border-[#d5dbdb] bg-[#111827] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

            {/* Image */}

            <img
              src={dataProtectionImage}
              alt="Secure document protection"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />

            {/* Dark overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/95 via-[#16243a]/90 to-[#111827]/75" />

            {/* Orange glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff9900]/20 blur-[100px]" />

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#146eb4]/20 blur-[100px]" />

            {/* Content */}

            <div className="relative flex h-full flex-col p-7 sm:p-9 lg:p-10">

              {/* Status */}

              <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-md">

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                  Vault operational
                </span>

              </div>

              {/* Icon */}

              <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">

                <ShieldCheck
                  className="h-7 w-7 text-[#ff9900]"
                  strokeWidth={1.6}
                />

              </div>

              {/* Bottom content */}

              <div className="mt-auto">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff9900]">
                  Secure by design
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  One vault.
                  <br />
                  Multiple protections.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                  Store your important documents in one organized location
                  while keeping security controls working quietly in the
                  background.
                </p>

                {/* Bottom status */}

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Check className="h-4 w-4 text-emerald-400" />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Protection active
                    </p>

                    <p className="mt-0.5 text-xs text-white/35">
                      Security controls enabled
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* =================================================
              FEATURE CARDS
          ================================================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-[#d5dbdb]
                    bg-[#f7f8f8]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#ff9900]/40
                    hover:bg-white
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                    sm:p-7
                  "
                >

                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#ff9900]/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Top */}

                  <div className="relative flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d5dbdb] bg-white shadow-sm transition-all duration-300 group-hover:border-[#ff9900]/40 group-hover:bg-[#fff3e0]">

                      <Icon
                        className="h-5 w-5 text-[#5f6b7a] transition-colors duration-300 group-hover:text-[#ff9900]"
                        strokeWidth={1.7}
                      />

                    </div>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#a0a8b3]">
                      {feature.number}
                    </span>

                  </div>

                  {/* Content */}

                  <div className="relative mt-8">

                    <div className="mb-3 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff9900]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#87919d]">
                        Security layer
                      </span>

                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-[#161e2d]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#68778d]">
                      {feature.description}
                    </p>

                  </div>

                  {/* Footer */}

                  <div className="relative mt-7 flex items-center justify-between border-t border-[#d5dbdb] pt-4">

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#87919d]">
                      SecureVault
                    </span>

                    <ArrowUpRight className="h-3.5 w-3.5 text-[#87919d] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff9900]" />

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            BOTTOM SECURITY BAR
        ===================================================== */}

        <div className="mt-5 overflow-hidden rounded-2xl border border-[#d5dbdb] bg-white shadow-sm">

          <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fff3e0]">

                <Check
                  className="h-5 w-5 text-[#ff9900]"
                  strokeWidth={2}
                />

              </div>

              <div>

                <p className="text-sm font-semibold text-[#161e2d]">
                  Security built into every part of your vault.
                </p>

                <p className="mt-1 text-xs text-[#87919d]">
                  Simple · Private · Protected
                </p>

              </div>

            </div>

            {/* Statuses */}

            <div className="flex flex-wrap items-center gap-3">

              <Status label="Encryption" />

              <Status label="Privacy" />

              <Status label="Access control" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

/* =====================================================
   STATUS
===================================================== */

const Status = ({ label }) => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#d5dbdb] bg-[#f7f8f8] px-3.5 py-2">

      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,.5)]" />

      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5f6b7a]">
        {label}
      </span>

    </div>
  );
};

export default WhySecureVault;
