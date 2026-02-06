"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "AI/ML",
  "Custom Software",
];

const projects = [
  {
    title: "Builds Your Mind Website",
    category: "Web Development",
    image: "portfolio/buildsyourmind.png",
    description:
      "Builds Your Mind is a purpose-driven educational kit brand focused on creating eco-friendly, engaging and practical learning solutions for students and learners of all ages.",
    tech: ["Next.js", "Docker", "MySQL", "Python"],
  },
  {
    title: "Healthcare Mobile App",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    description:
      "Patient management and telemedicine app for a leading healthcare provider.",
    tech: ["React Native", "Firebase", "Node.js"],
    result: "50K+ downloads",
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    description:
      "AI-powered analytics dashboard for real-time business intelligence and predictions.",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    result: "40% faster decisions",
  },

  {
    title: "Career & Job Opportunity Portal",
    category: "Web Development",
    image: "portfolio/job.jpg",
    description:
      "FreshersHunt.in is an online career resource platform focused on helping students, fresh graduates ,and early-career professionals find IT jobs, off-campus drives, internships, and free learningresources across India",
    tech: ["React", "Next.js", "MySQL", "Node.js"],
  },

  {
    title: "Banking App Redesign",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    description: "Complete UX overhaul for a major bank's mobile application.",
    tech: ["Figma", "Principle", "Lottie"],
    result: "4.8 App Store rating",
  },
  {
    title: "Anubhuti Donation Management Software",
    category: "Custom Software",
    image: "portfolio/donor-management-software.png",
    description:
      "A desktop-based donation management system developed to efficiently record, track, and manage donations with secure data handling, donor records, and transparent reporting for organizations.",
    tech: ["Python", "Django", "React", "PostgreSQL"],
  },
  {
    title: "Course Selling website",
    category: "Web Development",
    image: "portfolio/course-selling.jpg",
    description: "Property listing and management platform with virtual tours.",
    tech: ["Next.js", "Three.js", "Node.js", "MongoDB"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-6 md:pt-8 pb-24 md:pb-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#111111] mt-4 mb-6">
            Our Work Speaks{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
              For Itself
            </span>
          </h1>
          <p className="text-xl text-[#6B7280]">
            Explore our portfolio of successful projects across various
            industries. Each project showcases our commitment to excellence and
            innovation.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#6D28D9] text-white hover:bg-[#5B21B6]"
                  : "bg-[#F9FAFB] text-[#333333] hover:bg-[#E5E7EB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="flex items-center gap-2 text-white font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[#6D28D9] text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#111111] mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-[#6B7280] text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F9FAFB] text-[#333333] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <div className="bg-[#F3F4F6] rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-[#6B7280] text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Share your idea and
            we&apos;ll bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#6D28D9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5B21B6] transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
