"use client";

import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  Clock,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "We strive for excellence in everything we do, delivering quality that exceeds expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We operate with complete transparency and honesty in all our business dealings.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe in the power of teamwork and partnership with our clients.",
  },
  {
    icon: Award,
    title: "Innovation",
    desc: "We continuously explore new technologies and approaches to solve complex problems.",
  },
];

const team = [
  {
    name: "Amit Upadhyay",
    role: "Co-Founder & Operations Head",
    image: "teams/amit.jpg",
  },
  {
    name: "Ayush Upadhyay",
    role: "Co-Founder & Tech Lead",
    image: "teams/ayush.jpeg",
  },
  {
    name: "Vishakha Rathod",
    role: "Full Stack Developer",
    image: "teams/vishakha.jpeg",
  },
  {
    name: "Love Singh",
    role: "Backend Developer",
    image: "teams/love.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-6 md:pt-8 pb-24 md:pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mt-4 mb-6 leading-tight">
              We Build Digital{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                Futures
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] mb-8">
              Growthify is a technology company dedicated to helping businesses
              thrive in the digital age. With over 2 years of experience,
              we&apos;ve delivered 100+ successful projects worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#6D28D9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#5B21B6] transition-all"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#6D28D9] text-[#6D28D9] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#6D28D9] hover:text-white transition-all"
              >
                See Our Work
              </Link>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0 pb-16 sm:pb-12 lg:pb-0">
            <div className="aspect-square bg-gradient-to-br from-[#E9D5FF] to-[#DDD6FE] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card - Mobile Centered, Desktop Left Bottom */}
            <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-bottom-6 lg:-left-6 lg:translate-x-0 bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-[calc(100%-2rem)] lg:max-w-none">
              <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6D28D9]">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">Years</div>
                </div>
                <div className="w-px h-8 sm:h-10 lg:h-12 bg-[#E5E7EB]"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6D28D9]">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">
                    Clients
                  </div>
                </div>
                <div className="w-px h-8 sm:h-10 lg:h-12 bg-[#E5E7EB]"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6D28D9]">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-[#6D28D9]/50 transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#6D28D9]/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in an
                ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-[#6D28D9]/50 transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#6D28D9]/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                To be the most trusted technology partner for businesses
                worldwide, known for delivering exceptional quality, innovation,
                and measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-[#6B7280] text-base sm:text-lg">
              The principles that guide everything we do at Growthify.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#E9D5FF] to-[#DDD6FE] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#6D28D9]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4">
              Leadership{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-[#6B7280] text-base sm:text-lg">
              Meet the people driving innovation at Growthify.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                {/* Image */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    style={{ objectPosition: "40% 10%" }}
                  />
                </div>
                {/* Name */}
                <h4 className="text-lg font-bold text-[#111111]">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-sm text-[#6D28D9] font-medium mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Prodev Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Animated Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 animate-float-slow"
              viewBox="0 0 200 200"
            >
              <path
                d="M 20 100 Q 60 20, 100 100 T 180 100"
                stroke="#6D28D9"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              className="absolute bottom-10 right-10 w-48 h-48 sm:w-64 sm:h-64 animate-float-reverse"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Floating Dots */}
          <div className="absolute top-20 right-20 w-3 h-3 bg-[#6D28D9] rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-2 h-2 bg-[#8B5CF6] rounded-full animate-ping"></div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#8B5CF6] text-lg sm:text-xl animate-pulse">
                ✦
              </span>
              <span className="text-[#8B5CF6] font-bold text-xs sm:text-sm uppercase tracking-wider">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey With Us?
            </h2>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>{" "}
              <span className="text-white">Together</span>
            </h3>

            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business grow with
              technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#111111] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl group w-full sm:w-auto justify-center"
              >
                <span>GET CONSULTATION</span>
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                    alt="Team member"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                    alt="Team member"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                    alt="Team member"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
              </Link>

              <div className="flex items-center gap-3 sm:gap-4">
                <svg
                  width="60"
                  height="30"
                  viewBox="0 0 80 40"
                  className="hidden sm:block animate-bounce-slow"
                >
                  <path
                    d="M 10 20 Q 40 5, 70 25"
                    stroke="#6D28D9"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 70 25 L 65 20 M 70 25 L 65 30"
                    stroke="#6D28D9"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="bg-[#2d2d2d] px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-[#6D28D9]/30">
                  <span className="text-white text-sm sm:text-base font-medium italic">
                    We get booked fast 🔥
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
