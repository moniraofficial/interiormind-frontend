import Image from "next/image";
import Hero from "./components/Hero";
import TrustedBrands from "./components/TrustedBrands";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 👈 ২. এখানে আমাদের Hero সেকশনটি বসিয়ে দিলাম */}
  <Hero />
  {/* <TrustedBrands /> */}

    <Popular />
  <Features />

  <Stats />
  <Testimonials />
  <FAQ />
  <Newsletter />
    </main>
  );
}
