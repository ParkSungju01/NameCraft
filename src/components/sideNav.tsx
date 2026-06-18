"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Folder, CodeXml, Clock, Settings, Astroid } from "lucide-react";

const menus = [
  { href: "/projects", label: "프로젝트", icon: Folder },
  { href: "/", label: "이름추천", icon: Astroid },
  { href: "/history", label: "추천기록", icon: Clock },
  { href: "/code-analysis", label: "코드분석", icon: CodeXml },
  { href: "/settings", label: "설정", icon: Settings },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="w-65 h-screen border-r border-gray-300 p-4 bg-white flex flex-col items-start py-10 px-2">
      <ul className="space-y-4 px-2 w-full">
        {menus.map((menu) => {
          const Icon = menu.icon;
          const isActive = pathname === menu.href;

          return (
            <li key={menu.href}>
              <Link
                href={menu.href}
                className={`text-black flex items-center gap-2 h-10 px-3 rounded-md cursor-pointer ${
                  isActive ? "bg-blue-100 text-blue-500 font-semibold" : "hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
