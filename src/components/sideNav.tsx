import { Folder, CodeXml, Clock, Settings, Astroid} from "lucide-react";
export default function SideNav() {
  return (
    <nav className="w-65 h-screen border-r border-gray-300 p-4 bg-white flex flex-col items-start py-10 px-2">
      <ul className="space-y-4 px-2">
        <li className="text-black flex items-center gap-2 h-10">
          <Folder className="w-4 h-4" />
          프로젝트
        </li>
        <li className="text-black flex items-center gap-2 h-10">
          <Astroid className="w-4 h-4" />
          이름추천
        </li>
        <li className="text-black flex items-center gap-2 h-10">
          <Clock className="w-4 h-4" />
          추천기록
        </li>
        <li className="text-black flex items-center gap-2 h-10">
          <CodeXml className="w-4 h-4" />
          코드분석
        </li>
        <li className="text-black flex items-center gap-2 h-10">
          <Settings className="w-4 h-4" />
          설정
        </li>
      </ul>
    </nav>
  );
}
