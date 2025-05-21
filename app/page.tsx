import Image from "next/image";
import "./globals.css"
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import HomeIndex from "@/components/Pages/HomeIndex";
import { linksHome } from "@/Data";

export default function Home() {
  const links = linksHome
  return (
    <>
      <Navbar links={links} pathname="/"/>
      <main className="max-w-6xl mx-auto pt-8">
        <HomeIndex/>
      </main>
      <Footer/>
    </>
  );
}
