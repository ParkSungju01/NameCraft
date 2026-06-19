import OpenAI from "openai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "OPENAI_API_KEY가 설정되어 있지 않습니다." },
        { status: 500 },
      );
    }

    const { description, targetType, language, namingStyle } =
      await request.json();

    if (!description || !targetType || !language || !namingStyle) {
      return Response.json(
        { error: "필수 값이 누락되었습니다." },
        { status: 400 },
      );
    }

    const client = new OpenAI({ apiKey });

    const prompt = `너는 개발자를 위한 변수명/함수명/클래스명 네이밍 도우미야. 아래 조건에 맞는 이름 후보 7개를 추천해줘.

설명: ${description}
대상 타입: ${targetType}
언어: ${language}
네이밍 스타일: ${namingStyle}

응답은 반드시 JSON 배열로만 반환해. 마크다운 코드블록은 사용하지 마.
각 항목은 다음 형태로 작성해:
[
  {
    "name": "추천 이름",
    "reason": "추천 이유",
    "meaning": "추천 이름에 있는 영단어의 뜻"
  }
]
그리고 추천이유에서 기본적으로 한글로 표시하되, 영단어는 한글로 표현하지말고 영어로 표현해줘.
예) 불리언은 boolean으로 표시
`;

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL ?? "gpt-5.2",
      input: prompt,
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "이름 추천 요청 중 알 수 없는 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}
