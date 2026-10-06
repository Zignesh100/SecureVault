import {
  ShieldCheck,
  Mail,
  LockKeyhole,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#d5dbdb] bg-white text-[#161e2d]">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-12 py-14 lg:grid-cols-[1.7fr_0.8fr_0.8fr_1fr]">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-md">

            {/* Logo */}

            <a
              href="/"
              className="inline-flex items-center"
            >

             

                 <div className="leading-none">
            <span className="truncate text-[15px] font-medium tracking-tight">
              <span className="text-[#4285F4]">S</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#FBBC05]">c</span>
              <span className="text-[#4285F4]">u</span>
              <span className="text-[#34A853]">r</span>
              <span className="text-[#EA4335]">e</span>

              <span className="text-[#5F6368]">Vault</span>
            </span>

            <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#687078]">
              Document Security
            </div>
          </div>

            </a>

            {/* Description */}

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#5f6b7a]">
              A secure digital space for storing, organizing and accessing
              the documents that matter most.
            </p>

            {/* Security status */}

            <div className="mt-7 flex items-center gap-3 border-l-2 border-[#ff9900] bg-[#f7f8f8] px-4 py-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-white">

                <LockKeyhole
                  className="h-4 w-4 text-[#007eb9]"
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <p className="text-xs font-semibold text-[#161e2d]">
                  Privacy-first storage
                </p>

                <p className="mt-0.5 text-[11px] text-[#687078]">
                  Your vault is protected by design.
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              PRODUCT
          ================================================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#161e2d]">
              Product
            </h3>

            <ul className="mt-5 space-y-3">

              {[
                ["Documents", "#documents"],
                ["Security", "#security"],
                ["How it works", "#how-it-works"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <li key={label}>

                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-1.5
                      text-sm
                      text-[#5f6b7a]
                      transition
                      hover:text-[#161e2d]
                    "
                  >
                    {label}

                    <ArrowUpRight
                      className="
                        h-3.5
                        w-3.5
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              RESOURCES
          ================================================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#161e2d]">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="/login"
                  className="text-sm text-[#5f6b7a] transition hover:text-[#161e2d]"
                >
                  Sign in
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="text-sm text-[#5f6b7a] transition hover:text-[#161e2d]"
                >
                  Create account
                </a>
              </li>

              <li>
                <a
                  href="#security"
                  className="text-sm text-[#5f6b7a] transition hover:text-[#161e2d]"
                >
                  Security
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@securevault.com"
                  className="text-sm text-[#5f6b7a] transition hover:text-[#161e2d]"
                >
                  Contact support
                </a>
              </li>

            </ul>

          </div>

          {/* =================================================
              SECURITY
          ================================================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#161e2d]">
              Security
            </h3>

            <div className="mt-5 border border-[#d5dbdb] bg-[#f7f8f8]">

              {/* Status */}

              <div className="flex items-center gap-3 border-b border-[#d5dbdb] px-4 py-4">

                <div className="flex h-8 w-8 items-center justify-center bg-white">

                  <ShieldCheck
                    className="h-4 w-4 text-[#007eb9]"
                    strokeWidth={1.7}
                  />

                </div>

                <div>

                  <p className="text-xs font-semibold text-[#161e2d]">
                    Vault protected
                  </p>

                  <div className="mt-1 flex items-center gap-1.5">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#1d8102]" />

                    <span className="text-[10px] text-[#687078]">
                      Security active
                    </span>

                  </div>

                </div>

              </div>

              {/* Features */}

              <div className="space-y-2.5 px-4 py-4">

                <div className="flex items-center gap-2">

                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1d8102]" />

                  <span className="text-[11px] text-[#5f6b7a]">
                    Protected account access
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1d8102]" />

                  <span className="text-[11px] text-[#5f6b7a]">
                    Private document storage
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="h-px bg-[#eaeded]" />

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}

          <p className="text-xs text-[#687078]">
            © {new Date().getFullYear()} SecureVault. All rights reserved.
          </p>

          {/* Links */}

          <div className="flex items-center gap-6">

            <a
              href="/privacy"
              className="
                text-xs
                text-[#687078]
                transition
                hover:text-[#161e2d]
              "
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="
                text-xs
                text-[#687078]
                transition
                hover:text-[#161e2d]
              "
            >
              Terms
            </a>

            <a
              href="mailto:support@securevault.com"
              className="
                flex
                items-center
                gap-1.5
                text-xs
                text-[#687078]
                transition
                hover:text-[#161e2d]
              "
            >
              <Mail className="h-3.5 w-3.5" />
              Support
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

