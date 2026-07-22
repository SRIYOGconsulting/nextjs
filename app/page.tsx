import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Header/>
      {/* HERO SECTION */}
      <section className="w-full sm:bg-[url('/home/slider/2.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6">

          <div className="block sm:hidden w-full h-[300px] bg-[url('/home/1.jpg')] bg-center bg-cover"></div>

          <div className="flex flex-col justify-start text-left z-10 w-full sm:w-1/2 mt-4 px-6 sm:mt-0">
            <div className="text-[23px] md:text-2xl font-semibold mb-3 opacity-90">
              Welcome to
            </div>

            <div className="font-bold text-3xl md:text-5xl mb-6">
              SRIYOG Consulting
            </div>

            <h1 className="text-[18px] max-w-[600px] leading-relaxed opacity-95">
              Professional consulting in Kathmandu, Nepal.
            </h1>

            <div className="mt-8 flex gap-4">
          <Link
              href="/about"
              className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
            >
              About
            </Link>

          <Link
              href="/book"
              className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
            >
              Book a Service
            </Link>
        </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
    <CookieConsent/>
    </>
  );
}
