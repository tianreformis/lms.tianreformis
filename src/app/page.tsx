import { Header } from "@/components/header";
import ModeToggle from "@/components/toggle-dark";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-2">
     
      <Header />
    </main>
  );
}
