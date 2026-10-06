import {
  ArrowRight,
  CheckCircle2,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-[#161e2d]">
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-36">

        {/* ================= TOP STATUS ================= */}

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 border border-[#c7cdd1] bg-white px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#1d8102]" />

            <span className="text-xs font-medium text-[#232f3e]">
              SecureVault service operational
            </span>
          </div>

          <div className="inline-flex items-center gap-2 border border-[#c7cdd1] bg-white px-3 py-1.5 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-[#146eb4]" />

            <span className="text-xs text-[#5d6670]">
              Enterprise-grade document protection
            </span>
          </div>
        </div>

        {/* ================= HERO CONTENT ================= */}

        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}

          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="h-5 w-1 bg-[#ff9900]" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#5d6670]">
              Secure Document Infrastructure
            </span>
          </div>

          {/* Heading */}

          <h1
  className="
    max-w-4xl
    text-4xl
    font-normal
    leading-[1.08]
    tracking-[-0.025em]
    text-[#161e2d]
    sm:text-5xl
    lg:text-7xl
  "
>
  <span className="hero-line hero-line-1">
    Your documents.
  </span>

  <br />

  <span className="hero-line hero-line-2 font-semibold">
    <span className="hero-letter hero-blue">S</span>
    <span className="hero-letter hero-red">e</span>
    <span className="hero-letter hero-yellow">c</span>
    <span className="hero-letter hero-blue">u</span>
    <span className="hero-letter hero-green">r</span>
    <span className="hero-letter hero-red">e</span>
    <span className="ml-2">by design.</span>
  </span>
</h1>


          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#5d6670] sm:text-lg">
            Store, organize, and access your important documents from a
            secure digital vault built for privacy, reliability, and
            controlled access.
          </p>

          {/* Buttons */}

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/register"
              className="group inline-flex h-11 items-center justify-center gap-3 bg-[#ff9900] px-7 text-sm font-bold text-[#161e2d] shadow-sm transition hover:bg-[#ec8b00] hover:shadow-md"
            >
              Create your vault

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-11 items-center justify-center gap-2 border border-[#879196] bg-white px-7 text-sm font-semibold text-[#232f3e] transition hover:border-[#232f3e] hover:bg-[#eaeded]"
            >
              Explore SecureVault
            </a>
          </div>

          {/* Trust points */}

          <div className="mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-3">
            <TrustPoint text="Encrypted storage" />

            <TrustPoint text="Private access" />

            <TrustPoint text="2FA protection" />
          </div>
        </div>

        {/* ================= SERVICE FEATURES ================= */}

        <div className="mt-20 border-y border-[#c7cdd1] bg-white/80 lg:mt-28">
          <div className="grid divide-y divide-[#eaeded] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            <Feature
              icon={<LockKeyhole />}
              title="Encrypted storage"
              description="Documents are protected during storage and access."
            />

            <Feature
              icon={<ShieldCheck />}
              title="Access control"
              description="Keep sensitive files available only to authorized users."
            />

            <Feature
              icon={<FileText />}
              title="Centralized documents"
              description="Organize important files in one reliable workspace."
            />

          </div>
        </div>

      </div>
    </section>
  );
};

/* ================= TRUST POINT ================= */

const TrustPoint = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1d8102]" />

      <span className="text-xs font-medium text-[#5d6670]">
        {text}
      </span>
    </div>
  );
};

/* ================= FEATURE ================= */

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 px-6 py-6 sm:px-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#eef3f8] text-[#146eb4]">
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#232f3e]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#5d6670]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
