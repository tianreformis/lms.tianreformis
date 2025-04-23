import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="index1" className="">
      <TabsList className="grid sticky w-full grid-cols-2">
        <TabsTrigger value="index1">Tahun Pelajaran 2024/2025</TabsTrigger>
        <TabsTrigger value="index2">Tahun Pelajaran 2023/2024</TabsTrigger>
        
      </TabsList>
      <TabsContent value="index1">
        <Card>
          <CardHeader>
            <CardTitle>Materi 2024/2025</CardTitle>
            <CardDescription>
              Semester I
            </CardDescription>
          </CardHeader>
          
          <CardFooter className="flex flex-col justify-start align-baseline items-baseline gap-2">
            <Button className="">TK KELAS A</Button>
            <Button>SMA KELAS X</Button>
            <Button>SMA KELAS XI A</Button>
            <Button>SMA KELAS XII IPA/IPS</Button>               
          
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="index2">
        <Card>
          <CardHeader>
            <CardTitle>Materi 2023/2025</CardTitle>
            <CardDescription>
              Semester I
            </CardDescription>
          </CardHeader>
          
          <CardFooter className="flex flex-col justify-start align-baseline items-baseline gap-2">
            <Button className="">TK KELAS A</Button>
            <Button>SMA KELAS X</Button>
            <Button>SMA KELAS XI A</Button>
            <Button>SMA KELAS XII</Button>               
          
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default TabsDemo;