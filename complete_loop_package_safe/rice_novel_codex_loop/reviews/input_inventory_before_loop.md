# 작업 시작 전 파일 점검

## 읽을 수 있는 파일
- `AGENTS.md`
- `CODEX_MASTER_LOOP_PROMPT.md`
- `RUNBOOK.md`
- `state/PROJECT_STATE.md`
- `state/SCORECARD.md`
- `state/CHANGELOG.md`
- `source/source_01.pdf`
- `source/source_02.hwpx`
- `source/source_03.hwpx`
- `source/source_04`
- `source/source_05`
- `source/source_06`
- `workbook/workbook_01.docx`

## 추출이 필요한 파일
- `source/source_01.pdf` -> `extracted/source_01_pdf.md`
- `source/source_02.hwpx` -> `extracted/source_02_hwpx.md`
- `source/source_03.hwpx` -> `extracted/source_03_hwpx.md`
- `source/source_04` -> `extracted/source_04_hwpx.md`
- `source/source_05` -> `extracted/source_05_hwpx.md`
- `source/source_06` -> `extracted/source_06_hwpx.md`
- `workbook/workbook_01.docx` -> `extracted/workbook_01_docx.md`

## 추출 실패 파일
- 없음

## 추출 방식
- 원본 파일은 수정하지 않았다.
- 추출 스크립트는 `extracted/extract_text.py`에 저장했다.
- 추출 결과 목록은 `extracted/extraction_report.md`와 `extracted/extraction_inventory.json`에 저장했다.
