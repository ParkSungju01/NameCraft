"use client";

import { useState } from "react";
import SideNav from "@/components/sideNav";
import { SiTypescript, SiJavascript, SiReact } from "react-icons/si";

interface DataItem {
  id: number;
  name: string;
  icon?: React.ReactNode;
}

const types = [
  { id: 1, name: "변수" },
  { id: 2, name: "함수" },
  { id: 3, name: "클래스" },
  { id: 4, name: "파일" },
  { id: 5, name: "상수" },
];
const languages = [
  {
    id: 1,
    name: "TypeScript",
    icon: <SiTypescript color="#3178C6" className="w-4 h-4" />,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" className="w-4 h-4" />,
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact color="#61DAFB" className="w-4 h-4" />,
  },
];
const styles = [
  { id: 1, name: "자동" },
  { id: 2, name: "camelCase" },
  { id: 3, name: "PascalCase" },
  { id: 4, name: "snake_case" },
];

function ButtonVariants({
  data,
  selected,
  onSelect,
}: {
  data: DataItem[];
  selected: DataItem;
  onSelect: (item: DataItem) => void;
}) {
  return (
    <div className="w-full flex overflow-hidden">
      {data.map((item) => (
        <button
          key={item.id}
          className={`flex items-center justify-center gap-1 border w-full first:rounded-l-lg last:rounded-r-lg p-2 cursor-pointer  ${selected.id === item.id ? "bg-blue-100 border-blue-600 font-semibold text-blue-500" : "border-gray-300 hover:bg-gray-100"}`}
          onClick={() => onSelect(item)}
        >
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
}

function ButtonGroup({
  data,
  title,
  selected,
  onSelect,
}: {
  data: DataItem[];
  title: string;
  selected: DataItem;
  onSelect: (item: DataItem) => void;
}) {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <span className="text-sm font-semibold text-black">{title}</span>
      <ButtonVariants data={data} selected={selected} onSelect={onSelect} />
    </div>
  );
}

export default function Home() {
  const [description, setDescription] = useState("");
  const [selectedType, setSelectedType] = useState<DataItem>(types[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<DataItem>(
    languages[0],
  );
  const [selectedStyle, setSelectedStyle] = useState<DataItem>(styles[0]);
  const [result, setResult] = useState<string>("");

  return (
    <div className="flex font-sans">
      <SideNav />
      <main className="flex flex-col gap-4 w-full min-h-screen bg-zinc-100 p-4">
        <center className="flex gap-4">
          <section className="flex flex-col gap-4 h-150 bg-white rounded-lg w-125 px-5 py-4 text-black items-start">
            <h2 className="text-xl font-bold">어떤 이름이 필요하세요?</h2>
            <div className="w-full flex flex-col h-40 items-start gap-2">
              <span className="text-sm font-semibold text-black">설명</span>
              <textarea
                className="w-full h-full p-2 border rounded-lg border-gray-300 resize-none"
                placeholder="예: '새로운 프로젝트 이름', '캐릭터 이름', '회사 이름' 등"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <ButtonGroup
              data={types}
              title="대상 타입"
              selected={selectedType}
              onSelect={setSelectedType}
            />
            <ButtonGroup
              data={languages}
              title="언어"
              selected={selectedLanguage}
              onSelect={setSelectedLanguage}
            />
            <ButtonGroup
              data={styles}
              title="네이밍 스타일"
              selected={selectedStyle}
              onSelect={setSelectedStyle}
            />
            <button
              className="w-full h-10 mt-5 rounded-lg bg-blue-500 text-white font-bold cursor-pointer"
            >
              이름 추천받기
            </button>
          </section>
          <section className="flex flex-col h-150 bg-white rounded-lg grow items-start px-5 py-4">
            <h2 className="text-xl font-bold text-black">추천 결과</h2>
            <pre className="mt-4 whitespace-pre-wrap text-left text-sm text-black">
              {result}
            </pre>
          </section>
        </center>
        <footer className="h-full">
          <section className="h-full bg-white rounded-lg px-5 py-4">
            <span className="text-sm font-semibold text-black">최근 기록</span>
          </section>
        </footer>
      </main>
    </div>
  );
}
