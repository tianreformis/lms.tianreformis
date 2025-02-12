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
      <div className="pt-2 flex flex-col lg:flex-row gap-3 ">
        <CardDemo 
        title="Tahun Pelajaran 2024/2025"
        subtitle = "Semester II"
        xlink="https://drive.google.com/drive/folders/1XZFN_sDOVl8VPncM9DJZXO9NOm8qO6ZF?usp=sharing"
        xilink="https://drive.google.com/drive/folders/1XPSFe7v0Jc6_nFSNh25kDPtcr_JTcIK2?usp=sharing"
        xiilink="https://drive.google.com/drive/folders/17YqWaQhzmwIwpAUHma7xjKmaB7_1GXRf?usp=drive_link"
        
        />
        
        <CardDemo 
        title="Tahun Pelajaran 2024/2025"
        subtitle = "Semester I"
        xlink="https://drive.google.com/drive/folders/1EOH6bIn4OecrwmxpWMmzBStpCprdIlKx?usp=sharing"
        xilink="https://drive.google.com/drive/folders/1Ds033kLWScLwm-E0VHk3U8WtcCjPqb0s?usp=sharing"
        xiilink="https://drive.google.com/drive/folders/1KWJsyQvV_TePTj3VDC6wt79ZDlFtP2Pl?usp=sharing"
        />
        <CardDemo2023 />
      </div>



    </main>
  );
}
