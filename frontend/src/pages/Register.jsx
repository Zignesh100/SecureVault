import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { useDispatch } from "react-redux";

// import { registerUser } from "../redux/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // await dispatch(registerUser(formData)).unwrap();

      console.log("Registration data:", formData);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#161e2d]">

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="mx-auto grid min-h-screen max-w-[1400px] lg:grid-cols-[1fr_500px]">

        {/* =================================================
            LEFT INFORMATION PANEL
        ================================================= */}

        <section className="hidden bg-white lg:flex lg:flex-col">

          <div className="flex-1 px-12 py-16 xl:px-20">

            {/* Logo */}

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

            {/* Main Content */}

            <div className="max-w-2xl">


              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#687078]">
                Create your secure account
              </p>

              <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[#161e2d] xl:text-5xl">

                One account.
                <br />

                <span className="text-[#007eb9]">
                  All your documents.
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5f6b7a]">
                Create your SecureVault account and keep your important
                personal documents organized, private and accessible.
              </p>

              {/* Feature List */}

              <div className="mt-12">

                <RegisterFeature
                  number="01"
                  title="Private document storage"
                  description="Keep your important documents inside your personal digital vault."
                />

                <RegisterFeature
                  number="02"
                  title="Secure account access"
                  description="Your vault is available through your authenticated account."
                />

                <RegisterFeature
                  number="03"
                  title="Everything in one place"
                  description="Organize identity, education, travel and other important documents."
                />

              </div>

            </div>

          </div>

         

        </section>

        {/* =================================================
            RIGHT REGISTER AREA
        ================================================= */}

        <section className="flex min-h-screen items-center justify-center  px-5 py-10 sm:px-8">

          <div className="w-full max-w-[420px]">

            {/* Mobile Logo */}

            <div className="mb-8 lg:hidden">

              <div className="leading-none">

                <span className="text-[15px] font-medium tracking-tight">

                  <span className="text-[#4285F4]">S</span>
                  <span className="text-[#EA4335]">e</span>
                  <span className="text-[#FBBC05]">c</span>
                  <span className="text-[#4285F4]">u</span>
                  <span className="text-[#34A853]">r</span>
                  <span className="text-[#EA4335]">e</span>

                  <span className="text-[#5F6368]">
                    Vault
                  </span>

                </span>

                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">
                  Document Security
                </div>

              </div>

            </div>

            {/* Register Card */}

            <div className="border border-[#d5dbdb] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)]">

              {/* Header */}

              <div className="border-b border-[#eaeded] px-7 py-6">

             
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#161e2d]">
                  Create your account
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#687078]">
                  Enter your details to create your secure document vault.
                </p>

              </div>

              {/* Form */}

              <div className="px-7 py-7">

                {/* Error */}

                {error && (
                  <div className="mb-5 border border-[#d13212] bg-[#fff4f2] px-4 py-3">

                    <p className="text-sm text-[#a11]">
                      {error}
                    </p>

                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Full Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#161e2d]"
                    >
                      Full name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
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

                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-semibold text-[#161e2d]"
                    >
                      Password
                    </label>

                    <div className="relative">

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        autoComplete="new-password"
                        required
                        minLength={8}
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
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
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
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>

                    </div>

                    <p className="mt-2 text-[11px] leading-5 text-[#687078]">
                      Use at least 8 characters for your password.
                    </p>

                  </div>

                  {/* Confirm Password */}

                  <div>

                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-semibold text-[#161e2d]"
                    >
                      Confirm password
                    </label>

                    <div className="relative">

                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        autoComplete="new-password"
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
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
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
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>

                    </div>

                  </div>

                  {/* Terms */}

                  <label className="flex items-start gap-2">

                    <input
                      type="checkbox"
                      required
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        rounded-sm
                        border-[#879596]
                        accent-[#ff9900]
                      "
                    />

                    <span className="text-xs leading-5 text-[#687078]">

                      I agree to the SecureVault

                      <a
                        href="/terms"
                        className="mx-1 text-[#007eb9] hover:underline"
                      >
                        Terms
                      </a>

                      and

                      <a
                        href="/privacy"
                        className="mx-1 text-[#007eb9] hover:underline"
                      >
                        Privacy Policy
                      </a>

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
                      hover:border-[#d98200]
                      hover:bg-[#ec8b00]
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >

                    {loading ? (
                      "Creating account..."
                    ) : (
                      <>
                        Create account

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

                {/* Login */}

                <div className="mt-7 border-t border-[#eaeded] pt-6">

                  <p className="text-center text-xs text-[#687078]">
                    Already have a SecureVault account?
                  </p>

                  <a
                    href="/login"
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
                    Sign in
                  </a>

                </div>

              </div>

              {/* Security Footer */}

              <div className="border-t border-[#eaeded] bg-[#f7f8f8] px-7 py-4">

                <div className="flex items-center gap-2">

                  <ShieldCheck className="h-4 w-4 text-[#007eb9]" />

                  <span className="text-xs text-[#687078]">
                    Your account information is protected.
                  </span>

                </div>

              </div>

            </div>

            {/* Bottom */}

            <p className="mt-5 text-center text-[11px] leading-5 text-[#687078]">
              Your documents remain private and accessible through your
              authenticated account.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
};

/* =====================================================
   REGISTER FEATURE
===================================================== */

const RegisterFeature = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="group flex gap-5 border-b border-[#d5dbdb] py-6 last:border-b-0">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d5dbdb] bg-white text-[10px] font-bold text-[#687078]">
        {number}
      </div>

      <div>

        <h3 className="text-sm font-semibold text-[#161e2d]">
          {title}
        </h3>

        <p className="mt-1 max-w-md text-sm leading-6 text-[#687078]">
          {description}
        </p>

      </div>

    </div>
  );
};

export default Register;
