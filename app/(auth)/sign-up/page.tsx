import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SingUp(){
   return(
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
         <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
         <div className="space-y-4 mt-5">
           <Input />
           <Button>Sign Up</Button>
         </div>
      </form>
    </div>
   )
}