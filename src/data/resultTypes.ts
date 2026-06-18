export type ResultTypeId =
  | "soft-sticky"
  | "firm-sticky"
  | "soft-separate"
  | "firm-separate"
  | "balanced";

export type ResultType = {
  id: ResultTypeId;
  name: string;
  area: string;
  headline: string;
  detail: string;
  shareLine: string;
  primaryVarietyIds: string[];
  secondaryVarietyIds: string[];
};

export const resultTypes: Record<ResultTypeId, ResultType> = {
  "soft-sticky": {
    id: "soft-sticky",
    name: "촉촉포근형",
    area: "찰진 × 부드러운",
    headline: "서로 포근히 모이고, 입안에서는 부드럽게 풀리는 밥",
    detail:
      "밥알이 서로 붙어 보이는 모습에 끌리고, 씹을 때는 적은 힘으로 부드럽게 풀리는 식감을 좋아한다.",
    shareLine: "포근하게 모이는 밥이 좋은 사람",
    primaryVarietyIds: ["chamdeuream", "samgwang", "yeonghojinmi", "koshihikari"],
    secondaryVarietyIds: ["jinsang"],
  },
  "firm-sticky": {
    id: "firm-sticky",
    name: "쫀득탄력형",
    area: "찰진 × 단단한",
    headline: "밥알은 서로 모이되, 씹을 때 탄력이 남는 밥",
    detail:
      "밥알끼리 붙는 느낌을 좋아하면서도 너무 쉽게 으깨지기보다 형태와 탄력이 조금 남는 쪽을 선호한다.",
    shareLine: "쫀득함과 씹는 맛을 모두 포기 못하는 사람",
    primaryVarietyIds: ["ilpum", "saecheongmu"],
    secondaryVarietyIds: ["chindeul", "samgwang"],
  },
  "soft-separate": {
    id: "soft-separate",
    name: "산뜻편안형",
    area: "고슬한 × 부드러운",
    headline: "밥알은 또렷하고, 입안에서는 가볍게 풀리는 밥",
    detail:
      "밥알끼리 지나치게 붙지 않고 윤곽이 보이는 모습을 좋아하지만 씹을 때는 부드럽게 풀리는 식감을 선호한다.",
    shareLine: "밥알은 산뜻하게, 식감은 편안하게",
    primaryVarietyIds: ["odae", "alchanmi"],
    secondaryVarietyIds: ["yeonghojinmi", "koshihikari"],
  },
  "firm-separate": {
    id: "firm-separate",
    name: "또렷씹는맛형",
    area: "고슬한 × 단단한",
    headline: "밥알 하나하나의 모양과 씹는 맛이 분명한 밥",
    detail:
      "밥알이 서로 분리되어 보이는 모습과 씹을 때 형태가 남는 느낌을 함께 좋아한다.",
    shareLine: "밥알 하나하나가 존재감을 보여야 하는 사람",
    primaryVarietyIds: ["sindongjin", "chindeul"],
    secondaryVarietyIds: ["saecheongmu", "ilpum"],
  },
  balanced: {
    id: "balanced",
    name: "균형밥상형",
    area: "중앙·경계",
    headline: "찰기와 고슬함, 부드러움과 씹는 맛 사이의 균형",
    detail:
      "어느 한쪽이 지나치게 강한 밥보다 여러 감각이 자연스럽게 어우러진 밥을 좋아한다.",
    shareLine: "매일 먹기 좋은 균형을 찾는 사람",
    primaryVarietyIds: ["samgwang", "koshihikari", "alchanmi"],
    secondaryVarietyIds: ["yeonghojinmi", "chindeul", "odae"],
  },
};
