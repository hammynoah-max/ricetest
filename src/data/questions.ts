export type AnswerValue = -1 | 0 | 1;
export type QuestionCategory = "appearance" | "stickiness" | "texture" | "bonus";
export type QuestionAxis = "stickiness" | "softness" | "gloss" | "aromaInterest";

export type Question = {
  id: string;
  order: number;
  category: QuestionCategory;
  axis: QuestionAxis;
  weight: number;
  prompt: string;
  optionA: string;
  optionB: string;
  neutralLabel: string;
  imageA?: string;
  imageB?: string;
  imageAltA?: string;
  imageAltB?: string;
  illustration?: string;
  illustrationAlt?: string;
  helper?: string;
  visualKind?: "separate" | "shape" | "gloss";
};

export const questions: Question[] = [
  {
    id: "q1",
    order: 1,
    category: "appearance",
    axis: "stickiness",
    weight: 2,
    prompt: "밥을 보았을 때 어느 모습이 더 먹음직스럽나요?",
    optionA: "밥알 하나하나의 경계가 비교적 또렷하게 보이는 밥",
    optionB: "밥알끼리 붙어 경계가 덜 보이는 밥",
    neutralLabel: "둘 다 비슷하다",
    imageA: "/images/questions/q1-a.webp",
    imageB: "/images/questions/q1-b.webp",
    imageAltA: "밥알 경계가 또렷하게 떨어져 보이는 밥",
    imageAltB: "밥알끼리 부드럽게 붙어 모여 보이는 밥",
    illustration: "/images/illustrations/q1-hero.webp",
    illustrationAlt: "밥알이 떨어진 모습과 붙은 모습을 비교하는 일러스트",
    visualKind: "separate",
  },
  {
    id: "q2",
    order: 2,
    category: "appearance",
    axis: "softness",
    weight: 1,
    prompt: "갓 지은 밥알의 모양은 어느 쪽이 더 좋나요?",
    optionA: "밥알의 길이와 윤곽이 비교적 그대로 살아 있는 밥",
    optionB: "밥알 표면이 부드럽게 퍼져 둥글게 보이는 밥",
    neutralLabel: "둘 다 비슷하다",
    imageA: "/images/questions/q2-a.webp",
    imageB: "/images/questions/q2-b.webp",
    imageAltA: "밥알의 길이와 윤곽이 살아 있는 밥",
    imageAltB: "밥알 표면이 둥글고 부드럽게 보이는 밥",
    illustration: "/images/illustrations/q2-hero.webp",
    illustrationAlt: "길쭉한 밥알과 둥근 밥알 형태를 비교하는 일러스트",
    visualKind: "shape",
  },
  {
    id: "q3",
    order: 3,
    category: "appearance",
    axis: "gloss",
    weight: 0,
    prompt: "밥 표면은 어느 쪽이 더 먹음직스럽나요?",
    optionA: "표면의 반짝임이 적고 밥알 결이 또렷해 보이는 밥",
    optionB: "표면에 윤기가 돌고 촉촉해 보이는 밥",
    neutralLabel: "둘 다 비슷하다",
    imageA: "/images/questions/q3-a.webp",
    imageB: "/images/questions/q3-b.webp",
    imageAltA: "표면 반짝임이 적고 밥알 결이 또렷한 밥",
    imageAltB: "표면에 은은한 윤기와 촉촉함이 보이는 밥",
    illustration: "/images/illustrations/q3-hero.webp",
    illustrationAlt: "윤기가 적은 밥과 촉촉한 윤기가 있는 밥을 보여주는 일러스트",
    visualKind: "gloss",
  },
  {
    id: "q4",
    order: 4,
    category: "stickiness",
    axis: "stickiness",
    weight: 2,
    prompt: "숟가락으로 밥을 떴을 때 어느 쪽이 더 좋나요?",
    optionA: "밥알이 비교적 쉽게 떨어지는 밥",
    optionB: "여러 밥알이 함께 붙어 떠지는 밥",
    neutralLabel: "둘 다 비슷하다",
    illustration: "/images/illustrations/q4-hero.webp",
    illustrationAlt: "숟가락 위에서 떨어지는 밥알과 함께 붙어 떠지는 밥알을 비교하는 일러스트",
  },
  {
    id: "q5",
    order: 5,
    category: "stickiness",
    axis: "stickiness",
    weight: 1.5,
    prompt: "밥을 한입 넣었을 때 어느 느낌이 더 좋나요?",
    optionA: "밥알이 입안에서 비교적 서로 떨어져 느껴지는 밥",
    optionB: "여러 밥알이 서로 붙은 느낌으로 모여 있는 밥",
    neutralLabel: "둘 다 비슷하다",
    illustration: "/images/illustrations/q5-hero.webp",
    illustrationAlt: "입안에서 밥알이 떨어져 느껴지는 모습과 모여 느껴지는 모습을 비교하는 일러스트",
  },
  {
    id: "q6",
    order: 6,
    category: "texture",
    axis: "softness",
    weight: 2,
    prompt: "밥을 처음 씹을 때 어느 쪽이 더 좋나요?",
    optionA: "밥알을 누를 때 씹는 힘이 조금 더 필요한 밥",
    optionB: "밥알이 적은 힘으로 쉽게 눌리는 밥",
    neutralLabel: "둘 다 비슷하다",
    illustration: "/images/illustrations/q6-hero.webp",
    illustrationAlt: "밥알을 씹을 때 필요한 힘의 차이를 보여주는 일러스트",
    helper: "단단함은 설익었다는 뜻이 아니에요.",
  },
  {
    id: "q7",
    order: 7,
    category: "texture",
    axis: "softness",
    weight: 2,
    prompt: "잘 익은 밥알을 씹을 때 어느 쪽이 더 좋나요?",
    optionA: "씹어도 밥알의 형태가 잠시 남아 있는 밥",
    optionB: "씹으면 밥알의 형태가 빠르게 풀리는 밥",
    neutralLabel: "둘 다 비슷하다",
    illustration: "/images/illustrations/q7-hero.webp",
    illustrationAlt: "씹은 뒤 밥알 형태가 남는 경우와 빠르게 풀리는 경우를 비교하는 일러스트",
  },
  {
    id: "q8",
    order: 8,
    category: "texture",
    axis: "softness",
    weight: 1.5,
    prompt: "밥알을 씹어 눌렀을 때 어느 느낌이 더 좋나요?",
    optionA: "눌린 뒤에도 밥알의 탄력이 조금 남는 느낌",
    optionB: "힘을 주면 밥알이 부드럽게 으깨지는 느낌",
    neutralLabel: "둘 다 비슷하다",
    illustration: "/images/illustrations/q8-hero.webp",
    illustrationAlt: "탄력이 남는 밥알과 부드럽게 으깨지는 밥알을 비교하는 일러스트",
  },
  {
    id: "q9",
    order: 9,
    category: "bonus",
    axis: "aromaInterest",
    weight: 0,
    prompt: "고소하거나 팝콘을 떠올리게 하는 향이 나는 밥은 어떠세요?",
    optionA: "익숙하고 은은한 밥 향이 더 좋다",
    optionB: "그런 특별한 향이 있는 밥도 먹어보고 싶다",
    neutralLabel: "잘 모르겠다",
    illustration: "/images/illustrations/q9-hero.webp",
    illustrationAlt: "밥에서 고소한 향이 퍼지는 모습을 표현한 일러스트",
  },
];
