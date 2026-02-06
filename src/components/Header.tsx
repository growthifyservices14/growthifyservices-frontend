// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // import {
// //   Menu,
// //   X,
// //   ChevronDown,
// //   Palette,
// //   Smartphone,
// //   Globe,
// //   Code2,
// //   Brain,
// //   TestTube,
// //   Wrench,
// //   Building2,
// //   BookOpen,
// // } from "lucide-react";

// // /* DATA */

// // const services = [
// //   { name: "UI/UX Design", href: "/services/ui-ux" },
// //   {
// //     name: "App Development",
// //     href: "/services/app-development",
// //   },
// //   { name: "Web Development", href: "/services/web-development" },
// //   { name: "Custom Software", href: "/services/custom-software" },
// //   { name: "AI/ML Solutions", href: "/services/ai-ml" },
// //   { name: "QA & Testing", href: "/services/qa-testing" },
// //   { name: "Support & Maintenance", href: "/services/support" },
// // ];

// // const companyLinks = [
// //   { name: "About Us", href: "/company/about" },
// //   { name: "Blog", href: "/company/blog" },
// // ];

// // export default function Header() {
// //   const pathname = usePathname();
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [mobileMenu, setMobileMenu] = useState(false);
// //   const [dropdown, setDropdown] = useState<string | null>(null);

// //   useEffect(() => {
// //     const onScroll = () => setIsScrolled(window.scrollY > 20);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   useEffect(() => {
// //     setMobileMenu(false);
// //     setDropdown(null);
// //   }, [pathname]);

// //   // Prevent body scroll when mobile menu is open
// //   useEffect(() => {
// //     if (mobileMenu) {
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "unset";
// //     }
// //     return () => {
// //       document.body.style.overflow = "unset";
// //     };
// //   }, [mobileMenu]);

// //   return (
// //     <>
// //       <header
// //         className={`fixed top-0 left-0 right-0 z-50 h-[88px] lg:h-[104px] transition-colors ${
// //           isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
// //         }`}
// //       >
// //         <div className="px-4 sm:px-6 lg:px-14 h-full w-full">
// //           <nav className="flex items-center justify-between h-full gap-4">
// //             {/* LOGO */}
// //             <Link href="/" className="flex-shrink-0">
// //               <div>
// //                 <h1 className="text-xl sm:text-2xl font-bold text-[#6D28D9] leading-none">
// //                   GROWTHIFY
// //                 </h1>
// //                 <p className="text-[10px] sm:text-xs font-bold tracking-widest ml-6 sm:ml-10">
// //                   SERVICES
// //                 </p>
// //               </div>
// //             </Link>

// //             {/* DESKTOP MENU */}
// //             <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
// //               {[
// //                 { name: "Home", path: "/" },
// //                 { name: "Portfolio", path: "/portfolio" },
// //                 { name: "Career", path: "/career" },
// //               ].map((item) => (
// //                 <Link
// //                   key={item.path}
// //                   href={item.path}
// //                   className={`font-medium ${
// //                     pathname === item.path
// //                       ? "text-[#6D28D9]"
// //                       : "text-gray-700 hover:text-[#6D28D9]"
// //                   }`}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}

// //               {/* SERVICES */}
// //               <div
// //                 className="relative"
// //                 onMouseEnter={() => setDropdown("services")}
// //                 onMouseLeave={() => setDropdown(null)}
// //               >
// //                 <button className="flex items-center gap-1 font-medium">
// //                   Services <ChevronDown size={16} />
// //                 </button>
// //                 {dropdown === "services" && (
// //                   <div className="absolute top-full left-0 mt-4 bg-white border rounded-2xl shadow-xl p-4 w-[360px]">
// //                     {services.map((s) => (
// //                       <Link
// //                         key={s.name}
// //                         href={s.href}
// //                         className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50"
// //                       >
// //                         <span>{s.name}</span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* COMPANY */}
// //               <div
// //                 className="relative"
// //                 onMouseEnter={() => setDropdown("company")}
// //                 onMouseLeave={() => setDropdown(null)}
// //               >
// //                 <button className="flex items-center gap-1 font-medium">
// //                   Company <ChevronDown size={16} />
// //                 </button>
// //                 {dropdown === "company" && (
// //                   <div className="absolute top-full left-0 mt-4 bg-white border rounded-2xl shadow-xl p-4 w-[260px]">
// //                     {companyLinks.map((c) => (
// //                       <Link
// //                         key={c.name}
// //                         href={c.href}
// //                         className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50"
// //                       >
// //                         <span>{c.name}</span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             {/* CTA */}
// //             <Link
// //               href="/contact"
// //               className="hidden lg:inline-flex bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5B21B6]"
// //             >
// //               Let's Talk
// //             </Link>

// //             {/* MOBILE BUTTON */}
// //             <button
// //               className="lg:hidden flex-shrink-0 p-2 -mr-2"
// //               onClick={() => setMobileMenu(!mobileMenu)}
// //               aria-label="Toggle menu"
// //             >
// //               {mobileMenu ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* MOBILE MENU */}
// //       {mobileMenu && (
// //         <div className="fixed inset-0 z-40 lg:hidden">
// //           {/* Backdrop */}
// //           <div
// //             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
// //             onClick={() => setMobileMenu(false)}
// //           />

// //           {/* Menu Panel */}
// //           <div className="absolute top-[88px] inset-x-0 bottom-0 bg-white overflow-y-auto">
// //             <div className="p-6 space-y-6">
// //               {/* Main Links */}
// //               <div className="space-y-4">
// //                 {[
// //                   { name: "Home", path: "/" },
// //                   { name: "Portfolio", path: "/portfolio" },
// //                   { name: "Career", path: "/career" },
// //                 ].map((item) => (
// //                   <Link
// //                     key={item.path}
// //                     href={item.path}
// //                     className={`block text-lg font-medium ${
// //                       pathname === item.path
// //                         ? "text-[#6D28D9]"
// //                         : "text-gray-700"
// //                     }`}
// //                   >
// //                     {item.name}
// //                   </Link>
// //                 ))}
// //               </div>

// //               <div
// //                 className="relative"
// //                 onMouseEnter={() => setDropdown("services")}
// //                 onMouseLeave={() => setDropdown(null)}
// //               >
// //                 <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
// //                   Services
// //                   <ChevronDown
// //                     className={`w-4 h-4 transition-transform duration-300 ${dropdown === "services" ? "rotate-180" : ""}`}
// //                   />
// //                 </button>

// //                 {/* Dropdown */}
// //                 <div
// //                   className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded-2xl shadow-xl p-2 w-[220px] transition-all duration-200 ease-in-out ${
// //                     dropdown === "services"
// //                       ? "opacity-100 scale-100"
// //                       : "opacity-0 scale-95 pointer-events-none"
// //                   }`}
// //                   onMouseEnter={() => setDropdown("services")}
// //                   onMouseLeave={() => setDropdown(null)}
// //                 >
// //                   {services.map((s) => (
// //                     <Link
// //                       key={s.href}
// //                       href={s.href}
// //                       className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700"
// //                     >
// //                       {s.name}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //               {/* Company */}
// //               <div>
// //                 <button
// //                   onClick={() =>
// //                     setDropdown(dropdown === "company" ? null : "company")
// //                   }
// //                   className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
// //                 >
// //                   Company
// //                   <ChevronDown
// //                     size={20}
// //                     className={`transition-transform ${
// //                       dropdown === "company" ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                 </button>
// //                 {dropdown === "company" && (
// //                   <div
// //                     className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded-2xl shadow-xl p-2 w-[220px] transition-all duration-200 ease-in-out ${
// //                       dropdown === "company"
// //                         ? "opacity-100 scale-100"
// //                         : "opacity-0 scale-95 pointer-events-none"
// //                     }`}
// //                   >
// //                     {companyLinks.map((c) => (
// //                       <Link
// //                         key={c.href}
// //                         href={c.href}
// //                         className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700"
// //                       >
// //                         {c.name}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               {/* CTA Button */}
// //               <Link
// //                 href="/contact"
// //                 className="block w-full text-center bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5B21B6]"
// //               >
// //                 Let's Talk
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   Menu,
//   X,
//   ChevronDown,
//   Palette,
//   Smartphone,
//   Globe,
//   Code2,
//   Brain,
//   TestTube,
//   Wrench,
//   Building2,
//   BookOpen,
// } from "lucide-react";

// /* DATA */

// const services = [
//   { name: "UI/UX Design", href: "/services/ui-ux", icon: Palette },
//   {
//     name: "App Development",
//     href: "/services/app-development",
//     icon: Smartphone,
//   },
//   { name: "Web Development", href: "/services/web-development", icon: Globe },
//   { name: "Custom Software", href: "/services/custom-software", icon: Code2 },
//   { name: "AI/ML Solutions", href: "/services/ai-ml", icon: Brain },
//   { name: "QA & Testing", href: "/services/qa-testing", icon: TestTube },
//   { name: "Support & Maintenance", href: "/services/support", icon: Wrench },
// ];

// const companyLinks = [
//   { name: "About Us", href: "/company/about", icon: Building2 },
//   { name: "Blog", href: "/company/blog", icon: BookOpen },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [dropdown, setDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenu(false);
//     setDropdown(null);
//   }, [pathname]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenu) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenu]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 h-[88px] lg:h-[104px] transition-colors ${
//           isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
//         }`}
//       >
//         <div className="px-4 sm:px-6 lg:px-14 h-full w-full">
//           <nav className="flex items-center justify-between h-full gap-4">
//             {/* LOGO */}
//             <Link href="/" className="flex-shrink-0">
//               <div>
//                 <h1 className="text-xl sm:text-2xl font-bold text-[#6D28D9] leading-none">
//                   GROWTHIFY
//                 </h1>
//                 <p className="text-[10px] sm:text-xs font-bold tracking-widest ml-6 sm:ml-10">
//                   SERVICES
//                 </p>
//               </div>
//             </Link>

//             {/* DESKTOP MENU */}
//             <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "Portfolio", path: "/portfolio" },
//                 { name: "Career", path: "/career" },
//               ].map((item) => (
//                 <Link
//                   key={item.path}
//                   href={item.path}
//                   className={`font-medium transition-colors ${
//                     pathname === item.path
//                       ? "text-[#6D28D9]"
//                       : "text-gray-700 hover:text-[#6D28D9]"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* SERVICES */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdown("services")}
//                 onMouseLeave={() => setDropdown(null)}
//               >
//                 <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#6D28D9] transition-colors">
//                   Services{" "}
//                   <ChevronDown size={16} className="transition-transform" />
//                 </button>
//                 {dropdown === "services" && (
//                   <div className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-xl shadow-lg p-2 w-[280px]">
//                     {services.map((s) => {
//                       const Icon = s.icon;
//                       return (
//                         <Link
//                           key={s.name}
//                           href={s.href}
//                           className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700 group"
//                         >
//                           <Icon
//                             size={18}
//                             className="text-gray-400 group-hover:text-blue-600 transition-colors"
//                           />
//                           <span className="font-medium">{s.name}</span>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               {/* COMPANY */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdown("company")}
//                 onMouseLeave={() => setDropdown(null)}
//               >
//                 <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#6D28D9] transition-colors">
//                   Company{" "}
//                   <ChevronDown size={16} className="transition-transform" />
//                 </button>
//                 {dropdown === "company" && (
//                   <div className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-xl shadow-lg p-2 w-[200px]">
//                     {companyLinks.map((c) => {
//                       const Icon = c.icon;
//                       return (
//                         <Link
//                           key={c.name}
//                           href={c.href}
//                           className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700 group"
//                         >
//                           <Icon
//                             size={18}
//                             className="text-gray-400 group-hover:text-blue-600 transition-colors"
//                           />
//                           <span className="font-medium">{c.name}</span>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* CTA */}
//             <Link
//               href="/contact"
//               className="hidden lg:inline-flex bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5B21B6] transition-colors"
//             >
//               Let's Talk
//             </Link>

//             {/* MOBILE BUTTON */}
//             <button
//               className="lg:hidden flex-shrink-0 p-2 -mr-2"
//               onClick={() => setMobileMenu(!mobileMenu)}
//               aria-label="Toggle menu"
//             >
//               {mobileMenu ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {mobileMenu && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setMobileMenu(false)}
//           />

//           {/* Menu Panel */}
//           <div className="absolute top-[88px] inset-x-0 bottom-0 bg-white overflow-y-auto">
//             <div className="p-6 space-y-6">
//               {/* Main Links */}
//               <div className="space-y-4">
//                 {[
//                   { name: "Home", path: "/" },
//                   { name: "Portfolio", path: "/portfolio" },
//                   { name: "Career", path: "/career" },
//                 ].map((item) => (
//                   <Link
//                     key={item.path}
//                     href={item.path}
//                     className={`block text-lg font-medium ${
//                       pathname === item.path
//                         ? "text-[#6D28D9]"
//                         : "text-gray-700"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>

//               {/* Services */}
//               <div>
//                 <button
//                   onClick={() =>
//                     setDropdown(dropdown === "services" ? null : "services")
//                   }
//                   className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
//                 >
//                   Services
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${
//                       dropdown === "services" ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {dropdown === "services" && (
//                   <div className="mt-3 space-y-1 pl-4">
//                     {services.map((s) => {
//                       const Icon = s.icon;
//                       return (
//                         <Link
//                           key={s.href}
//                           href={s.href}
//                           className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700"
//                         >
//                           <Icon size={18} className="text-gray-400" />
//                           <span>{s.name}</span>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               {/* Company */}
//               <div>
//                 <button
//                   onClick={() =>
//                     setDropdown(dropdown === "company" ? null : "company")
//                   }
//                   className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
//                 >
//                   Company
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${
//                       dropdown === "company" ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {dropdown === "company" && (
//                   <div className="mt-3 space-y-1 pl-4">
//                     {companyLinks.map((c) => {
//                       const Icon = c.icon;
//                       return (
//                         <Link
//                           key={c.href}
//                           href={c.href}
//                           className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700"
//                         >
//                           <Icon size={18} className="text-gray-400" />
//                           <span>{c.name}</span>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               {/* CTA Button */}
//               <Link
//                 href="/contact"
//                 className="block w-full text-center bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5B21B6] transition-colors"
//               >
//                 Let's Talk
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  ChevronDown,
  Palette,
  Smartphone,
  Globe,
  Code2,
  Brain,
  TestTube,
  Wrench,
  Building2,
  BookOpen,
} from "lucide-react";

/* DATA */

const services = [
  { name: "UI/UX Design", href: "/services/ui-ux", icon: Palette },
  {
    name: "App Development",
    href: "/services/app-development",
    icon: Smartphone,
  },
  { name: "Web Development", href: "/services/web-development", icon: Globe },
  { name: "Custom Software", href: "/services/custom-software", icon: Code2 },
  { name: "AI/ML Solutions", href: "/services/ai-ml", icon: Brain },
  { name: "QA & Testing", href: "/services/qa-testing", icon: TestTube },
  { name: "Support & Maintenance", href: "/services/support", icon: Wrench },
];

const companyLinks = [
  { name: "About Us", href: "/company/about", icon: Building2 },
  { name: "Blog", href: "/company/blog", icon: BookOpen },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    setDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown(null);
    }, 200); // 200ms delay before closing
    setCloseTimeout(timeout);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[88px] lg:h-[104px] transition-colors ${
          isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-14 h-full w-full">
          <nav className="flex items-center justify-between h-full gap-4">
            {/* LOGO */}
            <Link href="/" className="flex-shrink-0">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#6D28D9] leading-none">
                  GROWTHIFY
                </h1>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest ml-6 sm:ml-10">
                  SERVICES
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
              {[
                { name: "Home", path: "/" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Career", path: "/career" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition-colors ${
                    pathname === item.path
                      ? "text-[#6D28D9]"
                      : "text-gray-700 hover:text-[#6D28D9]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#6D28D9] transition-colors">
                  Services{" "}
                  <ChevronDown size={16} className="transition-transform" />
                </button>
                {dropdown === "services" && (
                  <div
                    className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-xl shadow-lg p-2 w-[280px]"
                    onMouseEnter={() => handleMouseEnter("services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.name}
                          href={s.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700 group"
                        >
                          <Icon
                            size={18}
                            className="text-gray-400 group-hover:text-blue-600 transition-colors"
                          />
                          <span className="font-medium">{s.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* COMPANY */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#6D28D9] transition-colors">
                  Company{" "}
                  <ChevronDown size={16} className="transition-transform" />
                </button>
                {dropdown === "company" && (
                  <div
                    className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-xl shadow-lg p-2 w-[200px]"
                    onMouseEnter={() => handleMouseEnter("company")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {companyLinks.map((c) => {
                      const Icon = c.icon;
                      return (
                        <Link
                          key={c.name}
                          href={c.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700 group"
                        >
                          <Icon
                            size={18}
                            className="text-gray-400 group-hover:text-blue-600 transition-colors"
                          />
                          <span className="font-medium">{c.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5B21B6] transition-colors"
            >
              Let's Talk
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden flex-shrink-0 p-2 -mr-2"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenu(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-[88px] inset-x-0 bottom-0 bg-white overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Main Links */}
              <div className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Career", path: "/career" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block text-lg font-medium ${
                      pathname === item.path
                        ? "text-[#6D28D9]"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div>
                <button
                  onClick={() =>
                    setDropdown(dropdown === "services" ? null : "services")
                  }
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      dropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdown === "services" && (
                  <div className="mt-3 space-y-1 pl-4">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700"
                        >
                          <Icon size={18} className="text-gray-400" />
                          <span>{s.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Company */}
              <div>
                <button
                  onClick={() =>
                    setDropdown(dropdown === "company" ? null : "company")
                  }
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
                >
                  Company
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      dropdown === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdown === "company" && (
                  <div className="mt-3 space-y-1 pl-4">
                    {companyLinks.map((c) => {
                      const Icon = c.icon;
                      return (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-700"
                        >
                          <Icon size={18} className="text-gray-400" />
                          <span>{c.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="block w-full text-center bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5B21B6] transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
