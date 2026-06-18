# 이미지 자산 준비 가이드

이 문서는 밥 취향찾기 서비스에 들어갈 최종 이미지 자산의 파일명, 규격, 촬영/제작 기준을 정리합니다.

## 공통 원칙

- 실제 사진을 권장합니다. AI 생성 이미지나 일러스트를 쓸 경우에도 실제 밥처럼 보여야 합니다.
- 한 문항 안의 A/B 이미지는 같은 그릇, 같은 밥 양, 같은 카메라 각도, 같은 조명, 같은 배경이어야 합니다.
- 비교하려는 차이 하나만 다르게 보여주세요.
- 어느 한쪽도 더 고급스럽거나 더 맛있게 보이면 안 됩니다.
- 실패한 밥처럼 보이면 안 됩니다. 마름, 질음, 설익음, 떡짐, 과한 윤기, 과한 그림자는 피합니다.
- 이미지 안에는 텍스트, 라벨, 숫자, 손, 숟가락, 반찬, 식탁 소품을 넣지 않습니다.

## 파일 형식

- 권장 형식: `.webp`
- 대체 가능: `.jpg` 또는 `.png`
- 색상: sRGB
- 용량 목표: 장당 100~350KB 권장, 최대 700KB 이하
- 파일명은 반드시 소문자 영문, 숫자, 하이픈만 사용합니다.

## 첫 화면 이미지

위치:

```text
public/images/reference/rice-bowl-reference.webp
```

규격:

- 권장 크기: `1200x800`
- 최소 크기: `1000x667`
- 비율: 3:2 또는 4:3

내용:

- 흰 그릇에 담긴 갓 지은 흰쌀밥 1장
- 따뜻하고 깨끗한 배경
- 특정 질문의 정답처럼 보이지 않는 중립적인 밥

## Q1~Q3 비교 이미지

위치:

```text
public/images/questions/q1-a.webp
public/images/questions/q1-b.webp
public/images/questions/q2-a.webp
public/images/questions/q2-b.webp
public/images/questions/q3-a.webp
public/images/questions/q3-b.webp
```

규격:

- 권장 크기: `1000x750`
- 최소 크기: `1000x750`
- 비율: 4:3
- 모바일 카드에서 잘리므로, 중요한 밥알은 중앙 80% 안에 들어오게 해주세요.

문항별 기준:

| 파일명 | 보여줄 차이 |
|---|---|
| `q1-a.webp` | 밥알 하나하나의 경계가 비교적 또렷하게 보이는 밥 |
| `q1-b.webp` | 밥알끼리 붙어 경계가 덜 보이는 밥 |
| `q2-a.webp` | 밥알의 길이와 윤곽이 비교적 그대로 살아 있는 밥 |
| `q2-b.webp` | 밥알 표면이 부드럽게 퍼져 둥글게 보이는 밥 |
| `q3-a.webp` | 표면의 반짝임이 적고 밥알 결이 또렷해 보이는 밥 |
| `q3-b.webp` | 표면에 윤기가 돌고 촉촉해 보이는 밥 |

## Q4~Q9 참고 이미지

현재 P0에서는 Q4~Q9에 별도 비교 이미지를 쓰지 않습니다. 필요하다면 다음 파일명으로 추가할 수 있습니다.

```text
public/images/reference/q4-reference.webp
public/images/reference/q5-reference.webp
public/images/reference/q6-reference.webp
public/images/reference/q7-reference.webp
public/images/reference/q8-reference.webp
public/images/reference/q9-reference.webp
```

규격:

- 권장 크기: `1200x675`
- 비율: 16:9

주의:

- Q4~Q9는 감각 질문이라 사진이 오히려 사용자를 오도할 수 있습니다.
- 넣는다면 “설명 보조용” 중립 사진이어야 하며 A/B 판단을 대신하면 안 됩니다.

## 교체 방법

같은 파일명으로 `public/images/...` 안의 파일을 교체하면 됩니다. 코드 수정은 필요하지 않습니다.

최종 사진이 준비되면 `src/data/questions.ts`에서 Q1~Q3의 `imageA`, `imageB` 항목을 다시 연결하면 A/B 카드 안에 비교 이미지가 표시됩니다.
