import { BellRing, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { userAgent } from "next/server";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>


export function CardDemo2023({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Tahun Pelajaran 2023/2024</CardTitle>
        <CardDescription>Materi dan Bahan Ajar</CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col gap-2">
        <Link href="https://google.com" className="w-full">
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SD - KELAS 1
          </Button>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1EOH6bIn4OecrwmxpWMmzBStpCprdIlKx?usp=sharing" className="w-full" >
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SMA - KELAS X
          </Button>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1Ds033kLWScLwm-E0VHk3U8WtcCjPqb0s?usp=sharing" className="w-full" >
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SMA - KELAS XI A
          </Button>
        </Link>

        <Link href="https://drive.google.com/drive/folders/1KWJsyQvV_TePTj3VDC6wt79ZDlFtP2Pl?usp=sharing" className="w-full" >
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SMA - KELAS XII
          </Button>
        </Link>

      </CardFooter>
    </Card>
  )
}
