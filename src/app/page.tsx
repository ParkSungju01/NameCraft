import SideNav from "@/components/sideNav";
import { SiTypescript, SiJavascript, SiReact } from "react-icons/si";

interface DataItem {
  name: string;
  icon?: React.ReactNode;
}

const types = [{ name: "변수"}, { name: "함수"}, { name: "클래스"}, { name: "파일"}, { name: "상수"}];
const languages = 
[
  { name: "TypeScript",
    icon: <SiTypescript color="#3178C6" className="w-4 h-4" />
}, { name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" className="w-4 h-4" />
}, { name: "React",
    icon: <SiReact color="#61DAFB" className="w-4 h-4" />
}];
const styles = [{ name: "자동"}, { name: "camelCase"}, { name: "PascalCase"}, { name: "snake_case"}];

const buttonVariants = (data: DataItem[]) => {
  return (
    <div className="w-full flex overflow-hidden">
      {data.map((item) => (
        <button key={item.name} className="flex items-center justify-center gap-1 border border-gray-300 w-full first:rounded-l-lg last:rounded-r-lg p-2">
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
};
function ButtonGroup({ data, title }: { data: DataItem[]; title:string }) {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <span className="text-sm font-semibold text-black">{title}</span>
      {buttonVariants(data)}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex font-sans">
      <SideNav />
      <main className="flex flex-col gap-4 w-full min-h-screen bg-zinc-100 p-4">
        <center className="flex gap-4">
          <section className="flex flex-col gap-4 h-150 bg-white rounded-lg w-125 px-5 py-4 text-black items-start">
            <h2 className="text-xl font-bold">어떤 이름이 필요하세요?</h2>
            <div className="w-full flex flex-col items-start gap-2">
              <span className="text-sm font-semibold text-black">프로젝트</span>
              <select className="w-full h-10 p-2 border rounded-lg border-gray-300">
                <option value="project">선택</option>
                <option value="character">미정</option>
                <option value="company">미정</option>
              </select>
            </div>
            <div className="w-full flex flex-col h-40 items-start gap-2">
              <span className="text-sm font-semibold text-black">설명</span>
              <textarea
              className="w-full h-full p-2 border rounded-lg border-gray-300 resize-none"
              placeholder="예: '새로운 프로젝트 이름', '캐릭터 이름', '회사 이름' 등"
              />
            </div>
            <ButtonGroup data={types} title="대상 타입" />
            <ButtonGroup data={languages} title="대상 언어" />
            <ButtonGroup data={styles} title="네이밍 스타일" />
          </section>
          <section className="flex flex-col h-150 bg-white rounded-lg grow items-start px-5 py-4">
            <h2 className="text-xl font-bold text-black">추천 결과</h2>
          </section>
        </center>
        <footer className="h-full">
          <section className="h-full bg-white rounded-lg"></section>
        </footer>
      </main>
    </div>
  );
}
