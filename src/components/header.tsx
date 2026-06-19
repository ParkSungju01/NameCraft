"use client";

import { Clock, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 w-full h-16 flex border border-b-gray-300 items-center justify-between px-4 bg-white">
      <div className="flex items-center" onClick={() => router.push("/")}>
        <Image
          src={Logo}
          alt="NameCraft"
          width={64}
          height={64}
          className="pt-3"
        />
        <h1 className="text-xl font-bold text-gray-800">NameCraft</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="flex gap-1 justify-evenly w-30 h-10 py-2 px-2 text-black font-semibold border border-gray-300 rounded-md p-1 cursor-pointer"
          onClick={() => router.push("/history")}
        >
          <Clock color="black" />
          <p className="">히스토리</p>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => router.push("/settings")}
        >
          <Settings color="black" />
        </button>
        <button className="cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center">
          <User color="black" className="overflow-hidden" />
        </button>
      </div>
    </header>
  );
}
