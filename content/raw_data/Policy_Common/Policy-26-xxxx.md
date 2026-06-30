---
doc_type: 제품공통정책
policy_id: Policy-26-xxxx
title: 표시 범위를 벗어나는 값에 대한 표현 ("N/A", "Invalid", "OVER", "UNDER")
decision_date: ""
status: 진행중([ing])
decision_status: 미작성
applied: ""
source_file: "Policy-26-xxxx [ing] 9a552152ed4849019af24de36e922a34.md"
notion_url: https://www.notion.so/rootech/Policy-26-xxxx-9a552152ed4849019af24de36e922a34
---

# Policy-26-xxxx [진행중] · 표시 범위 벗어나는 값 표현 (N/A/Invalid/OVER/UNDER)

> 결정 사항 미작성(진행중). 아래는 관련 배경.

## 결정 배경

- "A3700Nv1.7.0p4 Release 사전 Test"에서 HOME > ANALYSIS > Volt. Symm. Negative/Zero-Sequence 값 표시 개선사항 제기. 관련: 「Volt. Unbal. %」 "%" 항목 최대 표시 범위 수정.
- 참고: 정격 대비 [%] 표시는 1,000.0% 이상 시 OVER로 표시.

> [이미지 A3700N_20240123_182443.png] [참고/장치] HOME > Current(RMS). A/B/C/Average 모두 "OVER %" + 49674A 등(1000% 초과 시 OVER).

> [이미지 A3700N_20240123_182641.png] [참고/장치] HOME > Power(Active). A/B/C/Total "OVER %" + 188.6kW 등.

- 결정사항(부분): 1,000.0% 이상 시 표현 최대값 999.9%로 표시. Current·Power는 현 정책 유지, AccuraSM 현 정책 유지.

## 제품별 적용 이력

(적용 이력 없음 — 진행중)
