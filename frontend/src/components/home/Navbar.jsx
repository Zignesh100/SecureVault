import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eaeded] bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            LOGO
        ===================================================== */}

        <a href="/" className="flex shrink-0 items-center">
          {/* Logo mark */}
          {/* <div className="relative mr-3 flex h-9 w-9 items-center justify-center bg-[#161e2d]">
            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#ff9900]" />

            <span className="text-[11px] font-bold tracking-tight text-white">
              SV
            </span>
          </div> */}

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

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="ml-12 hidden h-full items-center lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative
                flex
                h-full
                items-center
                px-5
                text-[14px]
                font-medium
                text-[#5f6b7a]
                transition
                hover:text-[#161e2d]
              "
            >
              {item.label}

              {/* Hover underline */}
              <span
                className="
                  absolute
                  bottom-0
                  left-5
                  right-5
                  h-[3px]
                  origin-left
                  scale-x-0
                  bg-[#ff9900]
                  transition-transform
                  duration-200
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {/* Region */}
         

          {/* Login */}
          <a
            href="/login"
            className="
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#161e2d]
              transition
              hover:bg-[#f7f8f8]
            "
          >
            Sign in
          </a>

          {/* CTA */}
          <a
            href="/register"
            className="
              group
              ml-2
              flex
              items-center
              gap-2
              border
              border-[#e88b00]
              bg-[#ff9900]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#161e2d]
              transition-all
              duration-200
              hover:bg-[#ec8b00]
              hover:shadow-[0_4px_12px_rgba(255,153,0,0.22)]
            "
          >
            Get started
            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </a>
        </div>

        {/* =====================================================
            MOBILE BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            ml-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-[#d5dbdb]
            bg-white
            text-[#161e2d]
            transition
            hover:bg-[#f7f8f8]
            lg:hidden
          "
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {isMenuOpen && (
        <div className="border-t border-[#eaeded] bg-white lg:hidden">
          <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8">
            <div className="border border-[#d5dbdb]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#eaeded]
                    px-5
                    py-4
                    text-sm
                    font-medium
                    text-[#161e2d]
                    last:border-b-0
                    hover:bg-[#f7f8f8]
                  "
                >
                  {item.label}

                  <ArrowRight className="h-4 w-4 text-[#879596]" />
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="/login"
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  border
                  border-[#879596]
                  bg-white
                  text-sm
                  font-semibold
                  text-[#161e2d]
                  transition
                  hover:bg-[#f7f8f8]
                "
              >
                Sign in
              </a>

              <a
                href="/register"
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  border
                  border-[#e88b00]
                  bg-[#ff9900]
                  text-sm
                  font-semibold
                  text-[#161e2d]
                  transition
                  hover:bg-[#ec8b00]
                "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
