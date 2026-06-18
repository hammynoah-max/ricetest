# RUNBOOK.md

## 권장 루프 수
무제한 자동 반복은 금지한다. 권장 구조는 **3 + 3 + 3 + 1, 최대 10회**다.

1차: 루프 1~3 — 작품 헌법과 볍씨 생애  
2차: 루프 4~6 — 인물, 사건, 정보 장면화  
3차: 루프 7~9 — 감각 언어, 독자 검토, 통합  
최종: 루프 10 — 출판 기획자 진단

각 3회 뒤에는 반드시 작가가 검토한다.

## 1차 실행 프롬프트
저장소의 AGENTS.md와 CODEX_MASTER_LOOP_PROMPT.md를 먼저 읽어라. 루프 1부터 3까지만 순서대로 수행하고 HUMAN_GATE_1.md를 만든 뒤 멈춰라. 원본 파일은 수정하지 말고 모든 결과를 새 파일로 저장하라.

## 2차 실행 프롬프트
AGENTS.md, 최신 PROJECT_STATE.md, 작가의 HUMAN_GATE_1 답변을 읽어라. 루프 4부터 6까지만 수행하고 HUMAN_GATE_2.md를 만든 뒤 멈춰라.

## 3차 실행 프롬프트
AGENTS.md, 최신 상태 파일, 작가의 HUMAN_GATE_2 답변을 읽어라. 루프 7부터 9까지만 수행하고 통합 기획서를 만든 뒤 멈춰라.

## 최종 실행 프롬프트
지금까지의 상태 파일과 통합 기획서를 읽고 루프 10만 수행하라. 작품을 더 쓰지 말고 집필 착수 가능성과 작가가 결정할 질문을 편집자 보고서로 정리하라.

## 완전 자동 실행 프롬프트
AGENTS.md와 CODEX_MASTER_LOOP_PROMPT.md에 따라 최대 10회 실행하라. HUMAN_GATE에 작가 답변이 없으면 확정하지 말고 `[작가 결정 필요]`로 남겨라. 정지 조건이 충족되면 즉시 멈추고 중간 보고서를 작성하라. 원자료와 작가 작성본은 절대 덮어쓰지 마라.

## 폴더 구조
rice-novel/
- AGENTS.md
- CODEX_MASTER_LOOP_PROMPT.md
- RUNBOOK.md
- source/
- workbook/
- extracted/
- drafts/
- reviews/
- state/
