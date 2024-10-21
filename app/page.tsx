import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Hero from "@/components/hero";
import RecentProj from "@/components/RecentProj";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
export default function Home() {
  return <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero></Hero>
      <Grid />
      <RecentProj />
      <Experience />
      <Approach/>
      {/* <Clients /> */}

    </div>
    <Footer/>

  </main>
}
