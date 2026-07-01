# Codex 문서 정리 주의사항

이 문서는 MkDocs 화면 상세 설계를 정리할 때 Codex가 반복해서 실수할 수 있는 부분을 기록한다.

## 화면 제목과 이미지 높이

- 1P2F HOME 화면 문서의 H1은 `화면 제목 스타일`로 통일한다.
- 화면 제목 스타일은 H1에 `{ .screen-title-fit }`을 붙인 형태다.
- 이 스타일은 긴 화면 이름도 한 줄에 최대한 들어가게 하고, 같은 화면 묶음의 이미지 시작 높이를 맞추기 위한 기준이다.
- 새 HOME 화면 문서를 만들 때는 기본 제목에도 먼저 `{ .screen-title-fit }`을 적용하고, 실제 Chrome 렌더에서 이미지 높이를 확인한다.
- 화면 제목이 길면 브라우저 폭에 따라 제목이 2줄로 접히고, 아래 이미지 시작 높이가 달라질 수 있다.
- `L-L`, `L-N`, `Min`, `Max`처럼 같은 화면 묶음 안에서 비교되는 화면은 이미지 시작 높이가 같아야 한다.
- 상태 화면 제목이 더 길더라도 먼저 화면 제목 스타일로 한 줄 유지가 가능한지 확인한다.
- 높이 비교가 애매하면 실제 Chrome 렌더 기준으로 `img top` 값을 비교한다.
- 1P2F HOME 화면에서는 제목 스타일을 예외가 아니라 기본 규칙으로 적용한다.

## 네비게이션 기준

- CMS-2P는 `모델 > 결선 설정 > 화면 그룹` 순서로 정리한다.
- 예: `CMS-2P > 1P2F > HOME > VOLTAGE`.
- 화면 종류를 먼저 두고 그 아래에 결선 설정을 흩뜨리지 않는다.
- `MAIN`, `cms-2p`처럼 같은 화면 그룹 안의 레벨 표기는 일관되게 유지한다.

## 기본 화면 이동

- 상단 `H` 버튼은 해당 결선 설정의 HOME Dashboard 기본 화면으로 이동한다.
- 상단 `VOLTAGE` 탭은 VOLTAGE 기본 화면으로 이동한다.
- 1P2F VOLTAGE 기본 화면은 `RMS L-L`이다.
- 상단 `CURRENT` 탭은 CURRENT 기본 화면으로 이동한다.
- 1P2F CURRENT 기본 화면은 `RMS`이다.
- 왼쪽 `RMS` 메뉴는 `RMS L-L` 기본 화면으로 이동한다.
- 왼쪽 `Fundamental` 메뉴는 `Fundamental L-L` 기본 화면으로 이동한다.

## 조건부 상태

- 설정 조건 때문에 같은 화면이 다르게 보이는 경우에는 네비게이션에 별도 화면처럼 노출하지 않는다.
- 예: `Feeder Off`는 CURRENT RMS의 조건부 상태로 관리한다.
- 조건부 상태는 해당 기본 화면 문서 안에서 토글 또는 접힌 영역으로 정리한다.

## 클릭 영역

- 화면 안의 H/S/E 버튼, 상단 탭, 왼쪽 메뉴, 상태 버튼 등 실제 UI에서 클릭 가능한 부분은 이미지 위 핫스팟으로 연결한다.
- 설명 텍스트나 제목을 임의로 클릭 영역처럼 만들지 않는다.
- 마커는 값, 단위, 시간, 라벨을 가리지 않는 빈 공간 위주로 배치한다.
- 마커 위치는 실제 화면에서 보이는 버튼 좌표를 기준으로 확인한다.

## 상태 버튼 동작

- `Min`, `Max`, `Peak` 같은 오른쪽 상태 버튼은 누르면 활성화된 상태 화면으로 이동한다.
- 활성화된 같은 상태 버튼을 다시 누르면 활성화가 해제되고 해당 기본 화면으로 돌아간다.
- `L-L`, `L-N`, `THD`, `TDD` 같은 모드 전환 버튼은 같은 상태 안에서 모드만 바꾼다.
- 예: `RMS L-N Min`에서 활성 `Min`을 다시 누르면 `RMS L-N` 기본 화면으로 돌아간다.

## 실수 기록: 버튼 묶음 좌표 재사용

- `VOLTAGE THD L-L/L-N`처럼 `Min` 버튼이 없는 화면에는 `RMS/Fundamental`의 `L-L/L-N/Min/Max` 좌표를 그대로 재사용하면 안 된다.
- THD 화면은 실제 버튼 묶음이 `L-L / L-N / Max` 3개로 구성되어 있으며, 오른쪽 영역의 3칸을 연속으로 사용한다.
- 이 경우 좌표는 이미지 기준으로 다시 잡아야 한다. 1P2F VOLTAGE THD에서는 `L-L` 약 `58.8%`, `L-N` 약 `71.4%`, `Max` 약 `84.4%` 위치를 사용한다.
- 버튼 개수가 다르면 빠진 버튼의 빈자리를 남기는 방식으로 추정하지 말고, 반드시 원본 화면 이미지에서 실제 버튼 위치를 확인한다.

## 실수 기록: 활성 모드 버튼 자기 링크

- `L-L`, `L-N` 같은 모드 버튼은 현재 활성화된 자기 자신 버튼을 다시 누르는 네비게이션으로 만들지 않는다.
- 예: `THD L-L` 화면에서는 `L-L` 활성 버튼에는 핫스팟을 두지 않고, `L-N`과 `Max`만 연결한다. `THD L-N` 화면에서는 반대로 `L-L`과 `Max`만 연결한다.
- `Max`처럼 활성 상태를 다시 누르면 기본 화면으로 돌아가는 상태 버튼과, `L-L/L-N`처럼 현재 선택 모드를 보여주는 버튼을 구분해야 한다.

## 화면 자산 위치

- A2500M과 함께 쓰는 공통 HOME 화면 자산은 `docs/assets/screens/MAIN/HOME`에 둔다.
- CMS-2P 결선 설정에만 해당하는 Dashboard, CURRENT RMS, Temperature 같은 전용 화면 자산은 `docs/assets/screens/CMS-2P`에 둔다.
- 문서에서 공통 HOME 화면을 참조할 때는 `/assets/screens/MAIN/HOME/...` 경로와 `docs/assets/screens/MAIN/HOME/...` 원본 경로를 함께 맞춘다.
- 파일을 이동한 뒤에는 `src`, `data-default-src`, `data-alternate-src`, 화면 자료 목록의 `<code>` 경로를 모두 확인한다.
- 예전 루트 경로인 `/assets/screens/HOME_...`처럼 폴더명이 빠진 참조가 남아 있지 않은지 빌드 전 스캔한다.

## 정책 섹션 작성

- 정책 섹션은 크게 `이 화면에만 적용되는 정책`과 `공통 정책` 두 갈래로 정리한다.
- 화면 전용 정책 제목은 화면 이름에 맞게 구체화한다. 예: `Description 화면 정책`, `CURRENT RMS 화면 정책`.
- 여러 화면에 반복 적용되는 내용은 해당 화면마다 `공통 정책` 접힌 블록으로 직접 적는다.
- `This page documents...`, `Use the screen image...`, `Keep detailed setting behavior...` 같은 영어 자리표시자 정책 문구를 넣지 않는다.
- 화면을 보고 추측한 단순 설명은 정책으로 쓰지 않는다. 정책 근거가 없으면 빈 정책 섹션을 만들지 않는다.

## 설정사항 표 작성

- SETUP 화면의 설정값, 설정범위, 디폴트는 `## 설정사항` 섹션으로 작성한다.
- 양식은 `special-modules/irt/setup-load-wiring.md`와 같은 `section-toggle` 접이식 HTML table을 사용한다.
- 컬럼은 기본적으로 `항목`, `범위`, `디폴트` 3개를 사용한다. 별도 요청이 있을 때만 `비고` 컬럼을 추가한다.
- 화면 제목 또는 현재 메뉴가 이미 같은 그룹을 나타내면 `{Voltage}` 같은 그룹 헤더 행은 표에 넣지 않는다.
- Markdown 표보다 아래 HTML table 양식을 우선 사용한다.

```html
## 설정사항

<details class="section-toggle"><summary>설정사항</summary><div class="section-toggle__body">
<table>
  <thead>
    <tr>
      <th style="border-right: 1px solid var(--md-typeset-table-color);">항목</th>
      <th style="border-right: 1px solid var(--md-typeset-table-color);">범위</th>
      <th>디폴트</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">항목명</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">범위</td>
      <td>디폴트</td>
    </tr>
  </tbody>
</table>
</div></details>
```

## 검증

- 변경 후 `mkdocs build`를 실행한다.
- 기존 `a2500/setup-voltage.md` 누락 경고는 현재 알려진 기존 경고다.
- 새 문서가 nav에 없다는 경고가 생기면 의도적으로 숨긴 조건부/상태 문서인지, 네비에 추가해야 할 고정 문서인지 확인한다.
