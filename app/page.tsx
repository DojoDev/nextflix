import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { ReactNode } from "react";


export default async function Home({children}:{children:ReactNode}) {
  const session = await getServerSession(authOptions)
  return (
    <>
    <div className="md-5">

    <Button variant="ghost">Hello from shadcn/ui</Button>
    {children}
    <h1>{session?.user?.name}</h1>
    </div>
    </>
  )
}
