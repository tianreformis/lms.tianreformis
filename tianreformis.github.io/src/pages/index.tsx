import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/pages/component/navbar";
import Hero from "@/pages/component/hero";
import Footer from "./component/footer";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"]
  ,weight:"500"
 });

export default function Home() {
  return (
    <main
      className={`flex flex-col w-full h-full min-h-full
        ${poppins.className}`}
      data-theme="light"
    >
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
