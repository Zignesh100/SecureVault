// import {
//   UserPlus,
//   UploadCloud,
//   ShieldCheck,
//   ArrowRight,
//   Check,
//   LockKeyhole,
//   Server,
//   Cloud,
// } from "lucide-react";

// import Accesssecurely from "../../assets/Access securely.png";
// import Uploaddocuments from "../../assets/Upload documents.png";
// import Createyouraccount from "../../assets/Create your account.png";

// const steps = [
//   {
//     number: "01",
//     icon: UserPlus,
//     image: Createyouraccount,
//     title: "Create your account",
//     description:
//       "Create your SecureVault account and configure strong authentication for protected access.",
//   },
//   {
//     number: "02",
//     icon: UploadCloud,
//     image: Uploaddocuments,
//     title: "Upload documents",
//     description:
//       "Upload Aadhaar, PAN, passport, certificates and other important documents securely.",
//   },
//   {
//     number: "03",
//     icon: ShieldCheck,
//     image: Accesssecurely,
//     title: "Access securely",
//     description:
//       "Your documents remain organized and protected, ready whenever you need them.",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section
//       id="how-it-works"
//       className="relative overflow-hidden bg-white py-20 text-[#161e2d] sm:py-28"
//     >
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0">
//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage: `
//               linear-gradient(#1f2937 1px, transparent 1px),
//               linear-gradient(90deg, #1f2937 1px, transparent 1px)
//             `,
//             backgroundSize: "48px 48px",
//           }}
//         />

//         {/* Soft blue decoration */}
//         <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#e8f3fb] blur-[100px]" />

//         <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#f1f6fa] blur-[100px]" />
//       </div>

//       {/* =====================================================
//           CONTENT
//       ===================================================== */}

//       <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <div className="max-w-4xl">
//           {/* Label */}
//           <div className="mb-5 flex items-center gap-3">
//             <div className="h-4 w-1 bg-[#ff9900]" />

//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f6b7a]">
//               How it works
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#161e2d] sm:text-4xl lg:text-5xl">
//             Simple document management,

//             <span className="block text-[#5f6b7a]">
//               designed for{" "}
//               <span className="text-[#4285F4]">S</span>
//               <span className="text-[#EA4335]">e</span>
//               <span className="text-[#FBBC05]">c</span>
//               <span className="text-[#4285F4]">u</span>
//               <span className="text-[#34A853]">r</span>
//               <span className="text-[#EA4335]">e</span>
//               <span className="text-[#FBBC05]">i</span>
//               <span className="text-[#4285F4]">t</span>
//               <span className="text-[#34A853]">y</span>.
//             </span>
//           </h2>

//           <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5f6b7a] sm:text-base">
//             Get started in minutes. Create your account, upload your important
//             documents and access them securely from one centralized vault.
//           </p>
//         </div>

//         {/* =================================================
//             ARCHITECTURE BAR
//         ================================================= */}

//         <div className="mt-10 flex flex-wrap items-center gap-3">
//           {/* Cloud */}
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               rounded
//               border
//               border-[#d5dbdb]
//               bg-[#f7f8f8]
//               px-3
//               py-2
//             "
//           >
//             <Cloud className="h-4 w-4 text-[#ff9900]" />

//             <span className="text-xs font-semibold text-[#344054]">
//               SecureVault Cloud
//             </span>
//           </div>

//           <ArrowRight className="hidden h-4 w-4 text-[#8793a3] sm:block" />

//           {/* Storage */}
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               rounded
//               border
//               border-[#d5dbdb]
//               bg-[#f7f8f8]
//               px-3
//               py-2
//             "
//           >
//             <Server className="h-4 w-4 text-[#146eb4]" />

//             <span className="text-xs font-semibold text-[#344054]">
//               Protected Storage
//             </span>
//           </div>

//           <ArrowRight className="hidden h-4 w-4 text-[#8793a3] sm:block" />

//           {/* Security */}
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               rounded
//               border
//               border-[#d5dbdb]
//               bg-[#f7f8f8]
//               px-3
//               py-2
//             "
//           >
//             <ShieldCheck className="h-4 w-4 text-[#067d68]" />

//             <span className="text-xs font-semibold text-[#344054]">
//               Secure Access
//             </span>
//           </div>
//         </div>

//         {/* =================================================
//             PROCESS
//         ================================================= */}

//         <div className="relative mt-14">
//           {/* Desktop connector */}
//           <div
//             className="
//               absolute
//               left-[16.66%]
//               right-[16.66%]
//               top-[39px]
//               hidden
//               h-px
//               bg-[#d5dbdb]
//               lg:block
//             "
//           />

//           <div className="grid gap-5 lg:grid-cols-3">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <div
//                   key={step.number}
//                   className="group relative"
//                 >
//                   {/* =================================================
//                       CARD
//                   ================================================= */}

//                   <div
//                     className="
//                       relative
//                       min-h-[430px]
//                       overflow-hidden
//                       rounded-sm
//                       border
//                       border-[#d5dbdb]
//                       bg-white
//                       shadow-[0_2px_8px_rgba(15,23,42,0.06)]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-1
//                       hover:border-[#ff9900]
//                       hover:shadow-[0_8px_25px_rgba(15,23,42,0.10)]
//                     "
//                   >
//                     {/* AWS orange top indicator */}
//                     <div
//                       className="
//                         absolute
//                         left-0
//                         right-0
//                         top-0
//                         z-10
//                         h-[3px]
//                         bg-[#ff9900]
//                         opacity-0
//                         transition
//                         duration-300
//                         group-hover:opacity-100
//                       "
//                     />

//                     <div className="p-6">
//                       {/* Header */}
//                       <div className="flex items-center justify-between">
//                         <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#68778d]">
//                           Step {step.number}
//                         </span>

//                         <span className="font-mono text-xs text-[#98a2b3]">
//                           0{index + 1}
//                         </span>
//                       </div>

//                       {/* =================================================
//                           IMAGE
//                       ================================================= */}

//                       <div
//                         className="
//                           relative
//                           mt-6
//                           overflow-hidden
//                           rounded-sm
//                           border
//                           border-[#d5dbdb]
//                           bg-[#f7f8f8]
//                         "
//                       >
//                         <img
//                           src={step.image}
//                           alt={step.title}
//                           className="
//                             h-40
//                             w-full
//                             object-cover
//                             transition
//                             duration-500
//                             group-hover:scale-[1.03]
//                           "
//                         />

//                         {/* Image overlay */}
//                         <div
//                           className="
//                             absolute
//                             inset-0
//                             bg-gradient-to-t
//                             from-black/10
//                             via-transparent
//                             to-transparent
//                             opacity-0
//                             transition
//                             duration-300
//                             group-hover:opacity-100
//                           "
//                         />

//                         {/* Icon badge */}
//                         <div
//                           className="
//                             absolute
//                             bottom-3
//                             left-3
//                             flex
//                             h-10
//                             w-10
//                             items-center
//                             justify-center
//                             rounded-sm
//                             border
//                             border-white/80
//                             bg-white/95
//                             shadow-sm
//                             backdrop-blur
//                           "
//                         >
//                           <Icon
//                             className="h-5 w-5 text-[#146eb4]"
//                             strokeWidth={1.8}
//                           />
//                         </div>
//                       </div>

//                       {/* =================================================
//                           TITLE
//                       ================================================= */}

//                       <h3 className="mt-6 text-lg font-semibold text-[#161e2d]">
//                         {step.title}
//                       </h3>

//                       {/* =================================================
//                           DESCRIPTION
//                       ================================================= */}

//                       <p className="mt-3 text-sm leading-6 text-[#5f6b7a]">
//                         {step.description}
//                       </p>
//                     </div>

//                     {/* =================================================
//                         FOOTER
//                     ================================================= */}

//                     <div
//                       className="
//                         absolute
//                         bottom-0
//                         left-0
//                         right-0
//                         border-t
//                         border-[#eaeded]
//                         bg-[#fafafa]
//                         px-6
//                         py-3
//                       "
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8793a3]">
//                           SecureVault service
//                         </span>

//                         <ArrowRight
//                           className="
//                             h-3.5
//                             w-3.5
//                             text-[#8793a3]
//                             transition
//                             group-hover:translate-x-1
//                             group-hover:text-[#ff9900]
//                           "
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* =================================================
//             SECURITY PANEL
//         ================================================= */}

//         <div className="mt-8 overflow-hidden rounded-sm border border-[#d5dbdb] bg-[#f7f8f8]">
//           <div className="grid lg:grid-cols-[1fr_auto]">
//             {/* Left */}
//             <div className="flex gap-4 p-6 sm:p-7">
//               <div
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-sm
//                   border
//                   border-[#d5dbdb]
//                   bg-white
//                 "
//               >
//                 <LockKeyhole
//                   className="h-5 w-5 text-[#ff9900]"
//                   strokeWidth={1.7}
//                 />
//               </div>

//               <div>
//                 <div className="flex flex-wrap items-center gap-3">
//                   <h3 className="text-sm font-semibold text-[#161e2d] sm:text-base">
//                     Your vault is ready
//                   </h3>

//                   {/* Active */}
//                   <span
//                     className="
//                       flex
//                       items-center
//                       gap-1.5
//                       rounded-sm
//                       border
//                       border-[#a7d7c5]
//                       bg-[#f0fdf8]
//                       px-2
//                       py-1
//                     "
//                   >
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#067d68]" />

//                     <span className="text-[9px] font-bold uppercase tracking-wider text-[#067d68]">
//                       Active
//                     </span>
//                   </span>
//                 </div>

//                 <p className="mt-2 max-w-2xl text-xs leading-6 text-[#667085] sm:text-sm">
//                   Your important documents are organized in one centralized
//                   location with protected access and secure document storage.
//                 </p>
//               </div>
//             </div>

//             {/* Protection */}
//             <div
//               className="
//                 flex
//                 items-center
//                 border-t
//                 border-[#d5dbdb]
//                 px-6
//                 py-5
//                 lg:border-l
//                 lg:border-t-0
//               "
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-sm
//                     border
//                     border-[#d5dbdb]
//                     bg-white
//                   "
//                 >
//                   <Check className="h-4 w-4 text-[#067d68]" />
//                 </div>

//                 <div>
//                   <p className="text-[9px] font-bold uppercase tracking-wider text-[#8793a3]">
//                     Protection
//                   </p>

//                   <p className="mt-0.5 text-xs font-semibold text-[#344054]">
//                     Enabled from day one
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =================================================
//             BOTTOM STATUS
//         ================================================= */}

//         <div
//           className="
//             mt-8
//             flex
//             flex-col
//             gap-4
//             border-t
//             border-[#eaeded]
//             pt-6
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >
//           <p className="text-xs text-[#68778d]">
//             SecureVault provides a centralized place for your important
//             documents.
//           </p>

//           <div className="flex flex-wrap gap-5">
//             {/* Storage */}
//             <div className="flex items-center gap-2">
//               <span className="h-2 w-2 rounded-full bg-[#067d68]" />

//               <span className="text-[9px] font-bold uppercase tracking-wider text-[#68778d]">
//                 Storage online
//               </span>
//             </div>

//             {/* Security */}
//             <div className="flex items-center gap-2">
//               <span className="h-2 w-2 rounded-full bg-[#067d68]" />

//               <span className="text-[9px] font-bold uppercase tracking-wider text-[#68778d]">
//                 Security active
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import {
  UserPlus,
  UploadCloud,
  ShieldCheck,
  ArrowRight,
  Check,
  LockKeyhole,
  Server,
  Cloud,
} from "lucide-react";

import Accesssecurely from "../../assets/Access securely.png";
import Uploaddocuments from "../../assets/Upload documents.png";
import Createyouraccount from "../../assets/Create your account.png";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    image: Createyouraccount,
    title: "Create your account",
    description:
      "Create your SecureVault account and configure strong authentication for protected access.",
  },
  {
    number: "02",
    icon: UploadCloud,
    image: Uploaddocuments,
    title: "Upload documents",
    description:
      "Upload Aadhaar, PAN, passport, certificates and other important documents securely.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    image: Accesssecurely,
    title: "Access securely",
    description:
      "Your documents remain organized and protected, ready whenever you need them.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 text-[#161e2d] sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
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

        {/* Blue decoration */}
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#e8f3fb] blur-[100px]" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#f1f6fa] blur-[100px]" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="how-header max-w-4xl">

          {/* Label */}

          <div className="mb-5 flex items-center gap-3">
            <div className="h-4 w-1 bg-[#ff9900]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f6b7a]">
              How it works
            </span>
          </div>

          {/* Heading */}

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#161e2d] sm:text-4xl lg:text-5xl">
            Simple document management,

            <span className="block text-[#5f6b7a]">
              designed for{" "}

              <span className="secure-letter text-[#4285F4]">
                S
              </span>

              <span className="secure-letter text-[#EA4335]">
                e
              </span>

              <span className="secure-letter text-[#FBBC05]">
                c
              </span>

              <span className="secure-letter text-[#4285F4]">
                u
              </span>

              <span className="secure-letter text-[#34A853]">
                r
              </span>

              <span className="secure-letter text-[#EA4335]">
                e
              </span>

              <span className="secure-letter text-[#FBBC05]">
                i
              </span>

              <span className="secure-letter text-[#4285F4]">
                t
              </span>

              <span className="secure-letter text-[#34A853]">
                y
              </span>

              <span className="secure-letter text-[#5f6b7a]">
                .
              </span>
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5f6b7a] sm:text-base">
            Get started in minutes. Create your account, upload your important
            documents and access them securely from one centralized vault.
          </p>
        </div>

        {/* =================================================
            ARCHITECTURE BAR
        ================================================= */}

        <div className="how-architecture mt-10 flex flex-wrap items-center gap-3">

          {/* Cloud */}

          <div
            className="
              architecture-item
              flex
              items-center
              gap-2
              rounded
              border
              border-[#d5dbdb]
              bg-[#f7f8f8]
              px-3
              py-2
            "
          >
            <Cloud className="h-4 w-4 text-[#ff9900]" />

            <span className="text-xs font-semibold text-[#344054]">
              SecureVault Cloud
            </span>
          </div>

          <ArrowRight className="architecture-arrow hidden h-4 w-4 text-[#8793a3] sm:block" />

          {/* Storage */}

          <div
            className="
              architecture-item
              flex
              items-center
              gap-2
              rounded
              border
              border-[#d5dbdb]
              bg-[#f7f8f8]
              px-3
              py-2
            "
          >
            <Server className="h-4 w-4 text-[#146eb4]" />

            <span className="text-xs font-semibold text-[#344054]">
              Protected Storage
            </span>
          </div>

          <ArrowRight className="architecture-arrow hidden h-4 w-4 text-[#8793a3] sm:block" />

          {/* Security */}

          <div
            className="
              architecture-item
              flex
              items-center
              gap-2
              rounded
              border
              border-[#d5dbdb]
              bg-[#f7f8f8]
              px-3
              py-2
            "
          >
            <ShieldCheck className="h-4 w-4 text-[#067d68]" />

            <span className="text-xs font-semibold text-[#344054]">
              Secure Access
            </span>
          </div>
        </div>

        {/* =================================================
            PROCESS
        ================================================= */}

        <div className="how-process relative mt-14">

          {/* Desktop connector */}

          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[39px]
              hidden
              h-px
              bg-[#d5dbdb]
              lg:block
            "
          />

          <div className="grid gap-5 lg:grid-cols-3">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`process-card process-card-${index + 1} group relative`}
                >

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      min-h-[430px]
                      overflow-hidden
                      rounded-sm
                      border
                      border-[#d5dbdb]
                      bg-white
                      shadow-[0_2px_8px_rgba(15,23,42,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-[#ff9900]
                      hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)]
                    "
                  >

                    {/* Orange top indicator */}

                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        z-10
                        h-[3px]
                        bg-[#ff9900]
                        opacity-0
                        transition
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div className="p-6">

                      {/* Header */}

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#68778d]">
                          Step {step.number}
                        </span>

                        <span className="font-mono text-xs text-[#98a2b3]">
                          0{index + 1}
                        </span>

                      </div>

                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <div
                        className="
                          relative
                          mt-6
                          overflow-hidden
                          rounded-sm
                          border
                          border-[#d5dbdb]
                          bg-[#f7f8f8]
                        "
                      >

                        <img
                          src={step.image}
                          alt={step.title}
                          className="
                            process-image
                            h-40
                            w-full
                            object-cover
                            transition
                            duration-700
                          "
                        />

                        {/* Image overlay */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/20
                            via-transparent
                            to-transparent
                            opacity-0
                            transition
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        {/* Icon badge */}

                        <div
                          className="
                            absolute
                            bottom-3
                            left-3
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-sm
                            border
                            border-white/80
                            bg-white/95
                            shadow-sm
                            backdrop-blur
                            transition
                            duration-300
                            group-hover:scale-110
                            group-hover:border-[#ff9900]
                          "
                        >

                          <Icon
                            className="
                              h-5
                              w-5
                              text-[#146eb4]
                              transition
                              duration-300
                              group-hover:text-[#ff9900]
                            "
                            strokeWidth={1.8}
                          />

                        </div>
                      </div>

                      {/* =================================================
                          TITLE
                      ================================================= */}

                      <h3 className="mt-6 text-lg font-semibold text-[#161e2d] transition-colors duration-300 group-hover:text-[#146eb4]">
                        {step.title}
                      </h3>

                      {/* =================================================
                          DESCRIPTION
                      ================================================= */}

                      <p className="mt-3 text-sm leading-6 text-[#5f6b7a]">
                        {step.description}
                      </p>
                    </div>

                    {/* =================================================
                        FOOTER
                    ================================================= */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        border-t
                        border-[#eaeded]
                        bg-[#fafafa]
                        px-6
                        py-3
                      "
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#8793a3]">
                          SecureVault service
                        </span>

                        <ArrowRight
                          className="
                            h-3.5
                            w-3.5
                            text-[#8793a3]
                            transition
                            duration-300
                            group-hover:translate-x-1
                            group-hover:text-[#ff9900]
                          "
                        />

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            SECURITY PANEL
        ================================================= */}

        <div className="security-panel mt-8 overflow-hidden rounded-sm border border-[#d5dbdb] bg-[#f7f8f8]">

          <div className="grid lg:grid-cols-[1fr_auto]">

            {/* Left */}

            <div className="flex gap-4 p-6 sm:p-7">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-sm
                  border
                  border-[#d5dbdb]
                  bg-white
                "
              >

                <LockKeyhole
                  className="h-5 w-5 text-[#ff9900]"
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <h3 className="text-sm font-semibold text-[#161e2d] sm:text-base">
                    Your vault is ready
                  </h3>

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-sm
                      border
                      border-[#a7d7c5]
                      bg-[#f0fdf8]
                      px-2
                      py-1
                    "
                  >

                    <span className="h-1.5 w-1.5 rounded-full bg-[#067d68]" />

                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#067d68]">
                      Active
                    </span>

                  </span>
                </div>

                <p className="mt-2 max-w-2xl text-xs leading-6 text-[#667085] sm:text-sm">
                  Your important documents are organized in one centralized
                  location with protected access and secure document storage.
                </p>
              </div>
            </div>

            {/* Protection */}

            <div
              className="
                flex
                items-center
                border-t
                border-[#d5dbdb]
                px-6
                py-5
                lg:border-l
                lg:border-t-0
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-sm
                    border
                    border-[#d5dbdb]
                    bg-white
                  "
                >

                  <Check className="h-4 w-4 text-[#067d68]" />

                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#8793a3]">
                    Protection
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-[#344054]">
                    Enabled from day one
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATUS
        ================================================= */}

        <div
          className="
            bottom-status
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-[#eaeded]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-xs text-[#68778d]">
            SecureVault provides a centralized place for your important
            documents.
          </p>

          <div className="flex flex-wrap gap-5">

            {/* Storage */}

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-[#067d68]" />

              <span className="text-[9px] font-bold uppercase tracking-wider text-[#68778d]">
                Storage online
              </span>

            </div>

            {/* Security */}

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-[#067d68]" />

              <span className="text-[9px] font-bold uppercase tracking-wider text-[#68778d]">
                Security active
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
