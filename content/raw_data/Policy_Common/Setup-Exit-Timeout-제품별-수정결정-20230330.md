---
doc_type: 참고자료
title: Setup Exit Timeout 기능의 제품별 수정결정 (2023-03-30)
decision_date: 2023-03-30
status: 참고자료
source_file: "Setup Exit Timeout 기능의 제품별 수정결정-20230330 d75b8ae9c8ef4f25951ea5a9239b604b.md"
notion_url: https://www.notion.so/rootech/Setup-Exit-Timeout-기능의-제품별-수정결정-20230330-d75b8ae9c8ef4f25951ea5a9239b604b
related: Policy-23-0019
---

# Setup Exit Timeout 기능의 제품별 수정결정 (2023-03-30)

> Policy-23-0019의 부속 자료. 모드 동작: ①변경모드→조회모드 ②조회모드→HOME모드 ③변경모드→HOME모드

## 용어 정의

- 설정변경모드(변경모드): 설정값 변경 중 상태 (Custom_LCD는 값 점멸, TFT_LCD는 설정팝업 열림)
- 설정조회모드(조회모드): 설정값을 보기만 하는 상태

## 제품별 수정 결정 (취소선=수정 전 60초 고정)

| 제품 | LCD타입 | ②조회→HOME | ③변경→HOME | 범위/디폴트 | 통신맵 |
| --- | --- | --- | --- | --- | --- |
| A2300 | Custom | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 912번지 |
| A2300N | Custom | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 912번지 |
| A2350CT | Custom | 10초(고정) | 30초(고정) | - (하드웨어로 수정불가) | - |
| A2350TEMP | FSTN | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 설정항목추가 |
| A2500 | TFT | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 설정항목추가 |
| A2550CM | Custom | Setup Exit Timeout | Setup Exit Timeout | 5~60(30) | 3983번지 |
| A2550TEMP | FSTN | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 4505번지 |
| A3500E | Custom | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 13982번지 |
| A3500F | FND | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 13982번지 |
| A3700(old) | Custom | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 2215번지 |
| A3700N | TFT | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 설정항목추가 |
| A2700D | TFT | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 설정항목추가 |
| A2750D | FSTN | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 51264번지 |
| A2750P | Custom | Setup Exit Timeout | Setup Exit Timeout | 5~60(30) | 51244번지 |
| A2750LD | TFT | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 설정항목추가 |
| A2750LC | FND | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 51264번지 |
| A7300 | TFT | Setup Exit Timeout | Setup Exit Timeout | 60~3600(600) | 설정항목추가 (RelayPart 「SETUP > SYSTEM > Security」, MeterPart는 RelayPart 설정 따름) |

- 화면 설정항목 위치 예: A2350TEMP/A2550TEMP 「INTERFACE SETUP > SETUP EXIT > Timeout」, A2750D 「USER INTERFACE > Setup Exit > Timeout」, A2750P 「SETUP > S.End > Setup Exit Timeout」.
