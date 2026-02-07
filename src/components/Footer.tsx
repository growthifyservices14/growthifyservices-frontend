"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ArrowRight,
  Sparkles,
  Youtube,
  X,
  MessageCircle,
  Send,
} from "lucide-react";

const services = [
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Custom Software", href: "/services/custom-software" },
  { name: "AI/ML Solutions", href: "/services/ai-ml" },
  { name: "QA & Testing", href: "/services/qa-testing" },
  { name: "Support & Maintenance", href: "/services/support" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Career", href: "/career" },
  { name: "About Us", href: "/company/about" },
  { name: "Blog", href: "/company/blog" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/growthifyservices/",
  },
  { name: "Twitter", icon: Twitter, href: "#" },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCibITwy4K88RxwzdMDRhmRQ",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/growthifyservices.in/?igsh=d2NkcHMwN3ZxeXMw",
  },
];

export default function Footer() {
  const [text, setText] = useState("");
  const fullText = "Turning Vision Into Destiny";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    console.log("Subscribed Email:", email);

    // TEMP success
    alert("Thanks for subscribing!");
    setEmail("");
  };

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else {
        setTimeout(() => setIsDeleting(!isDeleting), 800);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowWhatsAppPopup(false);
    };
    if (showWhatsAppPopup) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showWhatsAppPopup]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsAppPopup(true);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918989282885", "_blank");
    setShowWhatsAppPopup(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      {/* <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat with Growthify"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute inset-0 rounded-full bg-[#6D28D9] animate-ping opacity-30"></span>
      </button> */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      </button>

      {/* WhatsApp Chatbot Popup */}
      {showWhatsAppPopup && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:justify-end p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowWhatsAppPopup(false)}
        >
          <div
            className="bg-white w-full sm:w-96 rounded-2xl shadow-2xl overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#6D28D9]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight">
                    Growthify Assistant
                  </h3>
                  <p className="text-xs text-white/80">
                    We usually reply instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 bg-gradient-to-b from-[#F5F3FF] to-white space-y-4">
              {/* Message 1 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-[#E9D5FF] p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                  <p className="text-sm text-gray-800">
                    👋 <strong>Thanks for reaching us!</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    We help businesses grow using AI, automation & custom
                    software.
                  </p>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-[#E9D5FF] p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                  <p className="text-sm text-gray-600">
                    💬 Click below to continue this conversation on WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 border-t bg-gray-50">
              <button
                onClick={openWhatsApp}
                className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
              >
                Continue Chat
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-gray-500 mt-2">
                You’ll be redirected to WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animated Scrolling Banner */}
      <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-4 sm:py-6 overflow-hidden border-y border-gray-300">
        <div className="flex animate-scroll">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center whitespace-nowrap">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6B7280] mx-4 sm:mx-6 md:mx-8">
                TRANSFORM YOUR IDEAS
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D28D9] opacity-60 mx-3" />

              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6B7280] mx-4 sm:mx-6 md:mx-8">
                WE BUILD DIGITAL SOLUTIONS
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D28D9] opacity-60 mx-3" />

              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6B7280] mx-4 sm:mx-6 md:mx-8">
                GROW YOUR BUSINESS
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D28D9] opacity-60 mx-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
                Get the latest from{" "}
                <span className="text-[#6D28D9]">Growthify</span>
              </h3>
              <p className="text-sm sm:text-base text-[#6B7280]">
                Share your email so we can send you guides and industry news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full sm:flex-1 md:w-80 lg:w-96 px-4 sm:px-6 py-3 sm:py-4 bg-white text-[#111111] border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#6D28D9] text-sm sm:text-base"
              />

              <button
                onClick={handleSubscribe}
                className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-[#6D28D9] text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-[#5B21B6] transition-colors flex items-center justify-center gap-2"
              >
                <span className="sm:hidden">Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#F3F4F6] text-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold block">
                  GROWTHIFY
                </span>
                <div className="text-xs sm:text-sm mt-1 tracking-[0.15em] uppercase bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent font-bold min-h-[1.5rem] sm:min-h-[1.75rem]  whitespace-nowrap overflow-visible">
                  {text}
                </div>
              </Link>
              <p className="text-sm sm:text-base text-[#6B7280] mb-4 sm:mb-6 leading-relaxed">
                Your trusted technology partner for digital transformation. We
                turn ideas into powerful digital solutions that drive growth.
              </p>
              <div className="flex gap-2 sm:gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#6D28D9] hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm sm:text-base text-[#6B7280] hover:text-[#6D28D9] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -ml-5 sm:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span className="break-words">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-[#6B7280] hover:text-[#6D28D9] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -ml-5 sm:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Get In Touch
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="mailto:support@growthifyservices.in"
                    className="text-sm sm:text-base text-[#6B7280] hover:text-[#6D28D9] transition-colors flex items-start gap-2 sm:gap-3"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-[#6D28D9] flex-shrink-0" />
                    <span className="break-all">
                      support@growthifyservices.in
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918989282885"
                    className="text-sm sm:text-base text-[#6B7280] hover:text-[#6D28D9] transition-colors flex items-start gap-2 sm:gap-3"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-[#6D28D9] flex-shrink-0" />
                    +91 89892 82885
                  </a>
                </li>
                <li>
                  <div className="text-sm sm:text-base text-[#6B7280] flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-[#6D28D9] flex-shrink-0" />
                    <span className="leading-relaxed">
                      257nyay nagar extension, Sector B, Nyay Nagar, Sukhliya,
                      Indore, Madhya Pradesh, 452010, India
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* Left */}
            <p className="text-[#6B7280] text-xs sm:text-sm">
              © {new Date().getFullYear()} Growthify Services. All rights
              reserved.
            </p>

            {/* Center */}
            <p className="text-[#6B7280] text-xs sm:text-sm font-medium">
              Made by{" "}
              <span className="text-[#6D28D9]">Growthify Services Team 💜</span>
            </p>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <Link
                href="https://www.growthifyservices.in/"
                className="text-[#6B7280] hover:text-[#6D28D9] text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.growthifyservices.in/"
                className="text-[#6B7280] hover:text-[#6D28D9] text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 6s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
