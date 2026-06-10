import { Clock, Settings, User } from "lucide-react";
export default function Header() {
  return (
    <header className="sticky top-0 w-full h-16 flex border border-b-gray-300 items-center justify-between px-4 bg-white">
      <h1 className="text-xl font-bold text-gray-800">NameCraft</h1>
      <div className="flex items-center space-x-4">
        <button className="flex gap-1 justify-evenly w-30 h-10 py-2 px-2 text-black font-semibold border border-gray-300 rounded-md p-1 cursor-pointer">
          <Clock color="black" />
          <p className="">히스토리</p>
        </button>
        <button className="cursor-pointer">
          <Settings color="black" />
        </button>
        <button className="cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center">
          <User color="black" className="overflow-hidden" />
        </button>
      </div>
    </header>
  );
}
