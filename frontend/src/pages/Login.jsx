import { useState } from "react";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { useDispatch } from "react-redux";

// import { loginUser } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const loading = false;
  const error = null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await dispatch(loginUser(formData)).unwrap();

      console.log("Login data:", formData);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#161e2d]">
      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-[1400px] lg:grid-cols-[1fr_460px]">
        {/* =================================================
            LEFT INFORMATION PANEL
        ================================================= */}

        <section className="hidden  bg-white lg:flex lg:flex-col">
          <div className="flex-1 px-12 py-16 xl:px-20">
            {/* Breadcrumb */}

            <a href="/" className="mb-14 flex items-center gap-2 text-xs text-[#5f6b7a]">
            
              <div className="leading-none">
                <span className="truncate text-[35px] font-medium tracking-tight">
                  <span className="text-[#4285F4]">S</span>
                  <span className="text-[#EA4335]">e</span>
                  <span className="text-[#FBBC05]">c</span>
                  <span className="text-[#4285F4]">u</span>
                  <span className="text-[#34A853]">r</span>
                  <span className="text-[#EA4335]">e</span>

                  <span className="text-[#5F6368] ">Vault</span>
                </span>

                <div className="mt-1  font-semibold text-[25px] uppercase text-black/40">
                  Document Security
                </div>
              </div>
            </a>

            {/* Main */}

            <div className="max-w-2xl">
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[#161e2d] xl:text-5xl">
                Everything important,
                <br />
                <span className="text-[#007eb9]">securely stored.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5f6b7a]">
                SecureVault gives you one place to store, manage and access your
                important personal documents with controlled account access.
              </p>

              {/* Feature list */}

              <div className="mt-12 ">
                <Feature
                  number="01"
                  title="Protected storage"
                  description="Keep your important documents inside your private digital vault."
                />

                <Feature
                  number="02"
                  title="Controlled access"
                  description="Your documents remain available through your authenticated account."
                />

                <Feature
                  number="03"
                  title="Simple document management"
                  description="Organize important files without unnecessary complexity."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            RIGHT LOGIN AREA
        ================================================= */}

        <section className="flex items-center justify-center bg- px-5 py-12 sm:px-8">
          <div className="w-full max-w-[390px]">
            {/* Login Card */}

            <div className="border border-[#d5dbdb] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
              {/* Card Header */}

              <div className="border-b border-[#eaeded] px-7 py-7">
                {/* <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#687078]">
                  SecureVault
                </p> */}

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#161e2d]">
                  Sign in
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#687078]">
                  Sign in to access your secure documents.
                </p>
              </div>

              {/* Form */}

              <div className="px-7 py-7">
                {/* Error */}

                {error && (
                  <div className="mb-5 border border-[#d13212] bg-[#fff4f2] px-4 py-3">
                    <p className="text-sm text-[#a11]">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#161e2d]"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      autoComplete="email"
                      required
                      className="
                        h-11
                        w-full
                        rounded-sm
                        border
                        border-[#879596]
                        bg-white
                        px-3
                        text-sm
                        text-[#161e2d]
                        outline-none
                        placeholder:text-[#879596]
                        transition
                        focus:border-[#007eb9]
                        focus:ring-2
                        focus:ring-[#007eb9]/20
                      "
                    />
                  </div>

                  {/* Password */}

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-semibold text-[#161e2d]"
                      >
                        Password
                      </label>

                      <a
                        href="/forgot-password"
                        className="text-xs font-medium text-[#007eb9] hover:text-[#005f8a] hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                        className="
                          h-11
                          w-full
                          rounded-sm
                          border
                          border-[#879596]
                          bg-white
                          px-3
                          pr-11
                          text-sm
                          text-[#161e2d]
                          outline-none
                          placeholder:text-[#879596]
                          transition
                          focus:border-[#007eb9]
                          focus:ring-2
                          focus:ring-[#007eb9]/20
                        "
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                          absolute
                          right-2
                          top-1/2
                          flex
                          h-8
                          w-8
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-sm
                          text-[#687078]
                          hover:bg-[#eaeded]
                          hover:text-[#161e2d]
                        "
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember */}

                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="
                        h-4
                        w-4
                        rounded-sm
                        border-[#879596]
                        accent-[#ff9900]
                      "
                    />

                    <span className="text-sm text-[#5f6b7a]">
                      Keep me signed in
                    </span>
                  </label>

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      group
                      flex
                      h-11
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-sm
                      border
                      border-[#e88b00]
                      bg-[#ff9900]
                      text-sm
                      font-semibold
                      text-[#161e2d]
                      shadow-sm
                      transition
                      hover:bg-[#ec8b00]
                      hover:border-[#d98200]
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    {loading ? (
                      "Signing in..."
                    ) : (
                      <>
                        Sign in
                        <ArrowRight
                          className="
                            h-4
                            w-4
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />
                      </>
                    )}
                  </button>
                </form>

                {/* Register */}

                <div className="mt-7 border-t border-[#eaeded] pt-6">
                  <p className="text-center text-xs text-[#687078]">
                    New to SecureVault?
                  </p>

                  <a
                    href="/register"
                    className="
                      mt-3
                      flex
                      h-10
                      w-full
                      items-center
                      justify-center
                      rounded-sm
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
                    Create a new account
                  </a>
                </div>
              </div>

              {/* Security Footer */}

              <div className="border-t border-[#eaeded] bg-[#f7f8f8] px-7 py-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#007eb9]" />

                  <span className="text-xs text-[#687078]">
                    Your account connection is protected.
                  </span>
                </div>
              </div>
            </div>

            {/* Legal */}

            <p className="mt-5 text-center text-[11px] leading-5 text-[#687078]">
              By continuing, you agree to the SecureVault
              <a href="/terms" className="mx-1 text-[#007eb9] hover:underline">
                Terms
              </a>
              and
              <a
                href="/privacy"
                className="mx-1 text-[#007eb9] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

/* =====================================================
   FEATURE
===================================================== */

const Feature = ({ number, title, description }) => {
  return (
    <div className="group flex gap-5 border-b border-[#d5dbdb] py-6 last:border-b-0">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d5dbdb] bg-white text-[10px] font-bold text-[#687078]">
        {number}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#161e2d]">{title}</h3>

        <p className="mt-1 max-w-md text-sm leading-6 text-[#687078]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Login;
