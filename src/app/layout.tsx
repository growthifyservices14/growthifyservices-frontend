import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Growthify Services | Your Tech Partner for Digital Excellence",
  description:
    "We help startups and enterprises design, develop, and grow with cutting-edge technology solutions. Expert UI/UX, App Development, Web Development, AI/ML, and more.",
  keywords:
    "software development, web development, app development, UI/UX design, AI/ML solutions, QA testing, digital transformation",
  authors: [{ name: "Growthify Services" }],
  openGraph: {
    title: "Growthify Services | Your Tech Partner for Digital Excellence",
    description:
      "We help startups and enterprises design, develop, and grow with cutting-edge technology solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Growthify Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        <main className="pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
