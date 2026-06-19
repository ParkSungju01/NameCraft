interface ResultBoxProps {
  name: string;
  reason: string;
  meaning: string;
}

function parseResult(result: string) {
  try {
    const content = JSON.parse(result);

    return Array.isArray(content) ? (content as ResultBoxProps[]) : null;
  } catch {
    return null;
  }
}

export default function ResultBox({ result }: { result: string }) {
  if (!result) {
    return (
      <p className="text-sm text-gray-500">
        설명을 입력하고 이름 추천받기를 눌러주세요.
      </p>
    );
  }

  const content = parseResult(result);

  if (!content) {
    return <p className="text-sm text-gray-700 whitespace-pre-wrap">{result}</p>;
  }

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start border border-gray-300 p-3 rounded-lg text-black gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[14px] font-mono">
              {index + 1}
            </span>
            <h3 className="font-bold text-[20px] text-green-600 font-mono">
              {item.name}
            </h3>
          </div>
          <p className="text-start">{item.reason}</p>
          <div className="flex gap-1">
            <p className="font-semibold">영어 의미 :</p> 
            <p>{item.meaning}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
