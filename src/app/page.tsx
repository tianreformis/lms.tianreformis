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
          subtitle="Semester II"
          xlink="https://drive.google.com/drive/folders/1XZFN_sDOVl8VPncM9DJZXO9NOm8qO6ZF?usp=sharing"
          xilink="https://drive.google.com/drive/folders/1XPSFe7v0Jc6_nFSNh25kDPtcr_JTcIK2?usp=sharing"
          xiilink="https://drive.google.com/drive/folders/17YqWaQhzmwIwpAUHma7xjKmaB7_1GXRf?usp=drive_link"

        />

        <CardDemo
          title="Tahun Pelajaran 2024/2025"
          subtitle="Semester I"
          xlink="https://drive.google.com/drive/folders/1EOH6bIn4OecrwmxpWMmzBStpCprdIlKx?usp=sharing"
          xilink="https://drive.google.com/drive/folders/1Ds033kLWScLwm-E0VHk3U8WtcCjPqb0s?usp=sharing"
          xiilink="https://drive.google.com/drive/folders/1KWJsyQvV_TePTj3VDC6wt79ZDlFtP2Pl?usp=sharing"
        />

        <CardDemo
          title="Tahun Pelajaran 2023/2024"
          subtitle="Semester II"
          xlink="https://drive.google.com/drive/folders/1Aw9jO66UNUoJCHS7uNMP3pLb6lI6M17A?usp=drive_link"
          xilink="https://drive.google.com/drive/folders/1B6VwNEzjZquR8R8ZuDcbG9D8GnutcjYm?usp=drive_link"
          xiilink="https://drive.google.com/drive/folders/1B1d5B79bDN-hWj1AmewrxH-7v61Yk2cP?usp=drive_link"
        />

        <CardDemo
          title="Tahun Pelajaran 2023/2024"
          subtitle="Semester I"
          xlink="https://drive.google.com/drive/folders/11XBkM1Pxn7jXDWh3I4Di7XT-YojxV0F7?usp=drive_link"
          xilink="https://drive.google.com/drive/folders/11VjYbRiNOFY7_dK8frSZEfgvAA4w1kAK?usp=drive_link"
          xiilink="https://drive.google.com/drive/folders/13OB7cBPM_nzl2tOXKNGbiJyAReoJpifT?usp=drive_link"
        />

<CardDemo
          title="Tahun Pelajaran 2022/2023"
          subtitle="Semester II"
          xlink="https://drive.google.com/drive/folders/1qIxIlmb6W-stUfg669RmOIJ1IElrfyu6?usp=drive_link"
          xilink="https://drive.google.com/drive/folders/12TxbCDQhTcstT5hoPFlzzzsFy2kyql6Z?usp=drive_link"
          xiilink="https://drive.google.com/drive/folders/12toJXPfls2oOYo7iKUfsIfCDgvgD0xvs?usp=drive_link"
        />

<CardDemo
          title="Tahun Pelajaran 2022/2023"
          subtitle="Semester I"
          xlink="https://drive.google.com/drive/folders/1SxeA_EIuB3k1_ykx0J0Oy-9y1ieAndm5?usp=drive_link"
          xilink="https://drive.google.com/drive/folders/1QKO6UCep8e34PfIGVRGsHv7zVrilkUJf?usp=drive_link"
          xiilink="https://drive.google.com/drive/folders/1PyaU7WO2ylvqjQb2YkkmUet5zxTQ-EwY?usp=drive_link"
        />

      </div>



    </main>
  );
}
