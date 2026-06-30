---
doc_type: 참고자료
title: Setup Exit Timeout 기능의 제품별 현황 (2023-03-21)
decision_date: 2023-03-21
status: 참고자료
source_file: "Setup Exit Timeout 기능의 제품별 현황-20230321 e1d5c27be0e94e459c110e9ae532ed33.md"
notion_url: https://www.notion.so/rootech/Setup-Exit-Timeout-기능의-제품별-현황-20230321-e1d5c27be0e94e459c110e9ae532ed33
related: Policy-23-0019, Setup Exit Timeout 제품별 수정결정-20230330
---

# Setup Exit Timeout 기능의 제품별 현황 (2023-03-21)

> Policy-23-0019의 조사 자료. 용어: 변경모드(설정값 변경 중 — Custom LCD 점멸/TFT 팝업 열림), 조회모드(보기만).

## 제품별 현황 요약 (①변경→조회 / ②조회→HOME / ③변경→HOME)

| 제품 | LCD | ① | ② | ③ | 범위/디폴트 | 화면 설정항목 | 통신맵 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A2300/A2300N | Custom | 60초 고정 | Setup Exit Timeout | - | 60~3600(600) | 없음 | 912번지 |
| A2350CT | Custom | - | 10초 고정 | 30초 고정 | - | 없음 | - |
| A2350TEMP | FSTN | - | SET | SET | 60~3600(600) | INTERFACE SETUP>SETUP EXIT | - |
| A2500 | TFT | 자동전환 없음 | 없음 | 없음 | - | - | - |
| A2550CM | Custom | - | SET | SET | 5~60(30) | 없음 | 3983번지 |
| A2550TEMP | FSTN | - | SET | SET | 60~3600(600) | INTERFACE SETUP>SETUP EXIT | 4505번지 |
| A3500E/F | Custom/FND | 60초 고정 | SET | - | - | 없음 | 13982번지 |
| A3700(old) | Custom | 60초 고정 | SET | - | 60~3600(600) | 없음 | 2215번지 |
| A3700N / A2700D / A2750LD | TFT | 자동전환 없음 | 없음 | 없음 | - | - | - |
| A2750D | FSTN | - | SET | SET | 60~3600(600) | USER INTERFACE>Setup Exit | 51264번지 |
| A2750P | Custom | 없음(변경모드 유지) | SET | 없음 | 5~60(10) | SETUP>S.End | 51244번지 |
| A2750LC | FND | - | SET | SET | 60~3600(600) | 없음 | 51264번지 |
| A7300 | TFT | - | SET | SET | 60~3600(600) | RelayPart SETUP>SYSTEM>Security (Meter는 Relay 따름) | 비공개(내부 번지 있음) |

(SET = Setup Exit Timeout 후 전환)

## 참고 화면

> [이미지 Untitled 457.png] [참고/A3700N 장치] SETUP > SYSTEM > LCD & Buzzer — LCD Backlight Timeout/Low Level/Buzzer만 있고 **Setup Exit 항목 없음**(자동전환 기능 없음 그룹).

> [이미지 Untitled 458.png] [참고/A2350TEMP] Custom LCD 메뉴 구조도(EVENT/DIO/INTERFACE/SYSTEM 4칼럼). INTERFACE SETUP에 **SETUP EXIT Timeout: 600 sec**.

> [이미지 Untitled 459.png] [참고/A2550 통신매뉴얼] 3.5.3 Common Setup. 3982 LCD backlight timeout(10~999, 60), **3983 LCD setup exit timeout(5~60, 30)**.

> [이미지 Untitled 460.png] [참고/A2750P 매뉴얼] 설정종료 타임아웃 "S.End" — Setup Exit Timeout 5~60sec, 디폴트 10sec.

> [이미지 Untitled 461.png] [참고/A7300 장치] RELAY > SETUP > SYSTEM > Security. Password for Local Setup + **Setup Exit Timeout [sec] = 600**.

> [이미지 Untitled 462.png] [참고/A7300 METER] SETUP > SYSTEM > LCD & Buzzer — Setup Exit 항목 없음(RelayPart 설정 따름).

## 비고

- A2300계열·A3700(old)·A3500: 변경모드 60초 고정 후 조회모드 → 다시 Setup Exit Timeout 후 HOME(예: 600초면 총 ~2분).
- A2550CM/TEMP·A2350TEMP·A2750D/LC·A7300: 변경/조회 무관 Setup Exit Timeout 후 HOME.
