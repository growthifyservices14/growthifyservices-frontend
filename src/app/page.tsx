"use client";

import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  Briefcase,
  Award,
  Palette,
  Smartphone,
  Globe,
  Code2,
  Brain,
  TestTube,
  Wrench,
  Quote,
  ChevronRight,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const stats = [
  { icon: Star, value: "5.0", label: "Client Rating", suffix: "★" },
  { icon: Users, value: "150", label: "Happy Clients", suffix: "+" },
  { icon: Briefcase, value: "300", label: "Projects Delivered", suffix: "+" },
  { icon: Award, value: "10", label: "Years Experience", suffix: "+" },
];

const services = [
  {
    icon: Globe,
    name: "Web",
    highlight: "Development",
    desc: "We create responsive, scalable websites that align your goal.",
    href: "/services/web-development",
    image: "/images/services/web-dev.png",
  },
  {
    icon: Brain,
    name: "AI/ML",
    highlight: "Solutions",
    desc: "We transform complex data into intelligent & actionable insights.",
    href: "/services/ai-ml",
    image: "/images/services/ai-ml.png",
  },
  {
    icon: TestTube,
    name: "QA",
    highlight: "& Testing",
    desc: "We provide thorough testing to guarantee bug-free product.",
    href: "/services/qa-testing",
    image: "/images/services/qa-testing.png",
  },
  {
    icon: Wrench,
    name: "Support",
    highlight: "& Maintenance",
    desc: "Ensuring your digital solutions remain secure and updated.",
    href: "/services/support",
    image: "/images/services/support-maintainance.png",
  },
  {
    icon: Palette,
    name: "UI/UX",
    highlight: "Design",
    desc: "Intuitive and user-centric design solutions for better engagement.",
    href: "/services/ui-ux",
    image: "/images/services/ui-ux.png",
  },
  {
    icon: Smartphone,
    name: "App",
    highlight: "Development",
    desc: "Scalable mobile applications for iOS and Android platforms.",
    href: "/services/app-development",
    image: "/images/services/app-dev.png",
  },
  {
    icon: Code2,
    name: "Custom",
    highlight: "Software",
    desc: "Tailored software solutions designed for your unique needs.",
    href: "/services/custom-software",
    image: "/images/services/custom-software.png",
  },
];

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "LangChain",
    logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
  },
  {
    name: "Scikit-learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
];

const testimonials = [
  {
    name: "Ankit Rathore",

    content:
      "Growthify delivered beyond expectations. Premium quality and solid execution.",
    rating: 5,
    image: "testimonials/ankit.jpeg",
  },
  {
    name: "Aastha Mahajan",
    content: "Very professional team with deep technical expertise.",
    rating: 5,
    image: "testimonials/aastha.jpg",
  },
  {
    name: "Bhumika Nayak",
    content: "AI solution completely changed how we work with data.",
    rating: 5,
    image: "testimonials/bhumika.jpeg",
  },
];

export default function Page() {
  return (
    <div>
      <section className="relative flex items-center bg-white overflow-hidden ">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-10">
            {/* LEFT */}
            <div className="flex justify-center lg:justify-end px-6 lg:pr-12 py-12">
              <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#111111] leading-tight">
                  Grow Your Business <br />
                  with{" "}
                  <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                    Smart Digital
                  </span>{" "}
                  Solutions
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#6B7280]">
                  We help startups and enterprises design, develop, and scale
                  modern digital products.
                </p>

                <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                  {/* Mobile & Desktop buttons */}
                  <Link
                    href="/contact"
                    className="bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#5B21B6]"
                  >
                    Get Consultation
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border-2 border-[#6D28D9] text-[#6D28D9] px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#6D28D9] hover:text-white"
                  >
                    View Work
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Desktop */}
              <img
                src="/images/image.png"
                alt="Hero"
                className="hidden lg:block w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="bg-white relative z-10 pt-6 md:pt-16 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#111111]">
              Our <span className="text-[#6D28D9]">Achievements</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Google Rating Card with Link */}
            <Link
              href="https://share.google.com/ytbZDfvsGiogHKb9l"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-[#6D28D9] transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-3 group-hover:shadow-lg transition-shadow">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-3xl font-bold text-[#111111]">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Based on <span className="font-semibold">50+</span> reviews
                </p>
              </div>
            </Link>

            {/* Happy Clients Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-[#6D28D9] transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9]/10 to-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-3xl font-bold text-[#6D28D9] mb-1">
                  50+
                </div>
                <div className="text-sm text-[#6B7280] font-medium">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Projects Delivered Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-[#6D28D9] transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9]/10 to-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-3xl font-bold text-[#6D28D9] mb-1">
                  100+
                </div>
                <div className="text-sm text-[#6B7280] font-medium">
                  Projects Delivered
                </div>
              </div>
            </div>

            {/* Years Experience Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-[#6D28D9] transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9]/10 to-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <div className="text-3xl font-bold text-[#6D28D9] mb-1">2+</div>
                <div className="text-sm text-[#6B7280] font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111]">
              Our <span className="text-[#6D28D9]">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="group bg-white border border-gray-200 rounded-2xl hover:border-[#6D28D9] hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#111111] mb-1">
                      <span className="text-[#6D28D9]">{service.name}</span>{" "}
                      {service.highlight}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mt-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="relative h-48 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111]">
              Technologies We <span className="text-[#6D28D9]">Excel In</span>
            </h2>
            <p className="mt-4 text-lg text-[#6B7280] max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technologies to deliver
              reliable, scalable, and future-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-[#6B7280] text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111]">
              What Our <span className="text-[#6D28D9]">Clients Say</span>
            </h2>
            <p className="mt-4 text-lg text-[#6B7280]">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Quote className="w-10 h-10 text-[#6D28D9] mb-4" />
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#111111]">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
