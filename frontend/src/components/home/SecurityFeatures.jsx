import {
  Check,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import secureImage from "../../assets/secure.jpg";

const SecuritySection = () => {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full" />

        {/* <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#1f2937 1px, transparent 1px),
              linear-gradient(90deg, #1f2937 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        /> */}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            {/* AWS-style eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-1 w-4 bg-[#ff9900]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f6b7a]">
                Security & Privacy
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#161e2d] sm:text-5xl lg:text-6xl">
              <span className="text-[#4285F4]">S</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#FBBC05]">c</span>
              <span className="text-[#4285F4]">u</span>
              <span className="text-[#34A853]">r</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#FBBC05]">i</span>
              <span className="text-[#4285F4]">t</span>
              <span className="text-[#34A853]">y</span> <span></span>
              built into
              <br />
              <span className="text-[#5f6b7a]">every layer.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#5f6b7a] lg:ml-auto lg:text-lg">
            SecureVault uses multiple layers of protection to help keep your
            sensitive documents private, encrypted and accessible only through
            your authenticated account.
          </p>
        </div>

        {/* ================= MAIN SECURITY GRID ================= */}

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-[#d5dbdb] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= IMAGE PANEL ================= */}

          <div className="relative min-h-[540px] overflow-hidden bg-[#111827]">
            <img
              src={secureImage}
              alt="Secure document storage"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/95 via-[#17243a]/80 to-[#111827]/70" />

            {/* Orange glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff9900]/20 blur-[90px]" />

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#146eb4]/20 blur-[90px]" />

            {/* Content */}

            <div className="relative flex h-full flex-col p-7 sm:p-10 lg:p-12">
              {/* Security badge */}

              <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                  Protection active
                </span>
              </div>

              {/* Main icon */}

              <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">
                <ShieldCheck
                  className="h-8 w-8 text-[#ff9900]"
                  strokeWidth={1.6}
                />
              </div>

              <div className="mt-auto">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff9900]">
                  Private by design
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Multiple layers.
                  <br />
                  One secure vault.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                  Your documents are protected through authentication,
                  encryption and controlled account access.
                </p>

                {/* Status */}

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Check className="h-4 w-4 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Vault security enabled
                    </p>

                    <p className="mt-0.5 text-xs text-white/40">
                      All protection layers operational
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECURITY FEATURES ================= */}

          <div className="bg-[#f7f8f8]">
            <div className="border-b border-[#d5dbdb] px-7 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5f6b7a]">
                    Protection layers
                  </p>

                  <p className="mt-1 text-sm text-[#87919d]">
                    Security controls used by your vault
                  </p>
                </div>

                <ShieldCheck className="h-5 w-5 text-[#ff9900]" />
              </div>
            </div>

            <SecurityRow
              number="01"
              icon={LockKeyhole}
              title="AES-256 Encryption"
              description="Sensitive document files are encrypted before secure storage to help protect your information from unauthorized access."
            />

            <SecurityRow
              number="02"
              icon={Fingerprint}
              title="Two-Factor Authentication"
              description="An additional authentication layer helps verify that access to your vault belongs to you."
            />

            <SecurityRow
              number="03"
              icon={KeyRound}
              title="Private Account Access"
              description="Your documents are available through your authenticated account and are not intended for public access."
            />

            <SecurityRow
              number="04"
              icon={ShieldCheck}
              title="Protected Storage"
              description="Encrypted files and document metadata are handled separately as part of the SecureVault architecture."
              last
            />
          </div>
        </div>

        {/* ================= BOTTOM STATUS BAR ================= */}

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatusCard label="Encryption" value="Enabled" />

          <StatusCard label="Authentication" value="Protected" />

          <StatusCard label="Vault status" value="Operational" />
        </div>

        {/* ================= FOOTER NOTE ================= */}

        <div className="mt-12 flex flex-col gap-5 border-t border-[#d5dbdb] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff3e0]">
              <ShieldCheck className="h-4 w-4 text-[#ff9900]" />
            </div>

            <p className="text-sm text-[#5f6b7a]">
              Security stays in the background. You stay in control.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5f6b7a]">
            <span>View security architecture</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#ff9900]" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= SECURITY ROW ================= */

const SecurityRow = ({ number, icon: Icon, title, description, last }) => {
  return (
    <div
      className={`group relative px-7 py-7 transition-colors duration-200 hover:bg-white sm:px-8 ${
        !last ? "border-b border-[#d5dbdb]" : ""
      }`}
    >
      <div className="flex gap-5">
        {/* Number */}

        <div className="hidden w-7 shrink-0 pt-1 text-[10px] font-bold tracking-widest text-[#87919d] sm:block">
          {number}
        </div>

        {/* Icon */}

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#d5dbdb] bg-white shadow-sm transition-all duration-200 group-hover:border-[#ff9900]/40 group-hover:bg-[#fff3e0]">
          <Icon
            className="h-5 w-5 text-[#5f6b7a] transition-colors duration-200 group-hover:text-[#ff9900]"
            strokeWidth={1.7}
          />
        </div>

        {/* Content */}

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-[#161e2d]">{title}</h3>

            <span className="mt-1 hidden h-1.5 w-1.5 rounded-full bg-emerald-500 sm:block" />
          </div>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#68778d]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= STATUS CARD ================= */

const StatusCard = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#d5dbdb] bg-white px-5 py-4 shadow-sm transition hover:border-[#ff9900]/40 hover:shadow-md">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#87919d]">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-[#161e2d]">{value}</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,.4)]" />

        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
          Active
        </span>
      </div>
    </div>
  );
};

export default SecuritySection;
