import { History } from "lucide-react";
import SideNav from "@/components/sideNav";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans">
      <SideNav />
      <History color="black" />
    </div>
  );
}
