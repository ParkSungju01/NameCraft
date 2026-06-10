export default function SideNav() {
  return (
    <nav className="w-65 h-screen border-r border-gray-300 p-4 bg-white flex flex-col items-start py-10 px-2">
      <ul className="space-y-4">
        <li className="text-black">프로젝트</li>
        <li className="text-black">이름추천</li>
        <li className="text-black">추천기록</li>
        <li className="text-black">코드분석</li>
        <li className="text-black">설정</li>
      </ul>
    </nav>
  );
}
