"use client";

import { useState } from "react";
import { ButtonGroup } from "@/components/buttonGroup";
import SideNav from "@/components/sideNav";
import ResultBox from "@/components/resultBox";
import { SiTypescript, SiJavascript, SiPython } from "react-icons/si";

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
    name: "Python",
    icon: <SiPython color="#3776AB" className="w-4 h-4" />,
  },
];
const styles = [
  { id: 1, name: "자동" },
  { id: 2, name: "camelCase" },
  { id: 3, name: "PascalCase" },
  { id: 4, name: "snake_case" },
];

export default function Home() {
  const [description, setDescription] = useState("");
  const [selectedType, setSelectedType] = useState<DataItem>(types[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<DataItem>(
    languages[0],
  );
  const [selectedStyle, setSelectedStyle] = useState<DataItem>(styles[0]);
  const [result, setResult] = useState<string>("");

  async function handleRecommend() {
  setResult("추천 이름을 생성하는 중입니다...");

  try {
    const res = await fetch("/api/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        targetType: selectedType.name,
        language: selectedLanguage.name,
        namingStyle: selectedStyle.name,
      }),
    });

    const contentType = res.headers.get("content-type");
    const data = contentType?.includes("application/json")
      ? await res.json()
      : { error: await res.text() };

    if (!res.ok) {
      throw new Error(data.error ?? "이름 추천 요청에 실패했습니다.");
    }

    setResult(data.result);
    console.log("추천 결과:", data.result);
  } catch (error) {
    setResult(
      error instanceof Error
        ? error.message
        : "이름 추천 요청 중 알 수 없는 오류가 발생했습니다.",
    );
  }
  }
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
                placeholder="예: 사용자가 로그인했는지 확인하는 값"
                value={description}
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
              onClick={handleRecommend}
            >
              이름 추천받기
            </button>
          </section>
          <section className="flex flex-col h-150 bg-white rounded-lg w-162.5 items-start px-5 py-4 overflow-scroll gap-4">
            <div className="flex justify-between w-full">
              <h2 className="text-xl font-bold text-black">추천 결과</h2>
              <button className="text-black border border-gray-300 rounded-lg w-20 h-8 cursor-pointer hover:bg-gray-200" onClick={()=>{
                setResult("");
                setDescription("");
                setSelectedLanguage(languages[0]);
                setSelectedStyle(styles[0]);
                setSelectedType(types[0]);

              }}>초기화</button>
            </div>
            <ResultBox result={result} />
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
