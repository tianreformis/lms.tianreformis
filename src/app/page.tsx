import { CardDemo2023 } from "@/components/card/carddemo2023";
import { CardDemo } from "@/components/card/carddemo";
import { Header } from "@/components/header";
import { TabsDemo } from "@/components/tabsdemo";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-2">
      <Header />
      <div className="pt-2 flex flex-col sm:flex-col md:flex-row gap-3 ">
        <CardDemo />
        <CardDemo2023 />
      </div>



    </main>
  );
}
