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


export function CardDemo(
  { 
    className, 
    title,
  subtitle,
  xlink,
  xilink,
  xiilink,
    ...props 
  }
  : 
  CardProps&{
    title:string,
    subtitle:string,
    xlink:string,
    xilink:string,
    xiilink:string,
  },  
) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col gap-2">
        <Link href="https://google.com" className="w-full">
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            TK A
          </Button>
        </Link>
        <Link href={xlink} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SMA - KELAS X
          </Button>
        </Link>
        <Link href={xilink} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SMA - KELAS XI A
          </Button>
        </Link>

        <Link href={xiilink} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" />
            SMA - KELAS XII
          </Button>
        </Link>

      </CardFooter>
    </Card>
  )
}
