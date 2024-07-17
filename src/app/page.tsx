import { Header } from "@/components/header";
import { TabsDemo } from "@/components/tabsdemo";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-2">
    <TabsDemo />
      <Header />
      
    </main>
  );
}
