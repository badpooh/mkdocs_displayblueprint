# IRT

`A2550IRT-3P`는 MCCB에 체결된 버스바 선로의 온도를 적외선 방식으로 계측하는 특수모듈이다. 독립 모듈로 A2500M에 연결할 때 Module ID를 할당하며 A/B/C 3상 온도를 표시한다.

## 화면 구성

| 모드 | 화면 |
| --- | --- |
| HOME | [Dashboard](home-dashboard.md), [Temperature](home-temperature.md), [Temperature Min](home-temperature-min.md), [Temperature Max](home-temperature-max.md), [Description](home-description.md), [A2550IRT Information](home-information.md) |
| SETUP | [Dashboard](setup-dashboard.md), [Load Wiring](setup-load-wiring.md), [EVENT Temperature](setup-event-temperature.md), [Description](setup-description.md) |
| EVENT | [Dashboard](event-dashboard.md), [All](event-all.md), [Temperature](event-temperature.md), [Etc.](event-etc.md) |

## 적용 기준

<details class="policy-details">
  <summary>모듈 및 계측</summary>
  <div class="policy-details__body">
    <ul>
      <li>상세모델명은 <code>A2550IRT-3P</code>다.</li>
      <li>독립 모듈 직접 연결이 1차 구현 대상이며, CMS-2P 종속 연결과 Pairing은 후속 순서다.</li>
      <li>결선모드와 무관하게 A/B/C 3상 온도 계측값을 표시한다.</li>
      <li>온도값은 FullScale 소수 1자리와 설정된 <code>℃/℉</code> 단위를 사용한다.</li>
    </ul>
  </div>
</details>

<details class="policy-details">
  <summary>현재 이미지 사용 기준</summary>
  <div class="policy-details__body">
    <p>현재 <code>docs/assets/screens/IRT</code>의 화면 자산을 사용한다. 이후 동일한 파일명으로 이미지를 교체하면 문서 링크를 수정하지 않고 반영할 수 있다.</p>
  </div>
</details>

<hr class="section-divider">

## 개발 구현 점검

<details class="section-toggle">
  <summary>개발 구현 점검</summary>
  <div class="section-toggle__body">
    <p>현재 문서만으로 메뉴·화면 이동, A/B/C 표시, Phase Sequence 동작, 온도 표시 형식·색상, 이벤트 설정 범위·기본값, Description 글자 수 및 이벤트 목록의 기본 동작은 구현할 수 있다. 단, 최종 구현과 검수 전에 아래 정책 및 데이터 인터페이스를 확정해야 한다.</p>
    <table>
      <thead>
        <tr><th>구분</th><th>확인 필요 내용</th></tr>
      </thead>
      <tbody>
        <tr><td>Min/Max</td><td>누적 시작점·초기화 조건, 전원 재시작·모듈 재연결 시 값 유지 여부</td></tr>
        <tr><td>이벤트 판정</td><td>Threshold 포함 여부, A/B/C 중 한 상 초과 시 발생 여부, Time Delay 동안의 연속 초과 조건, Hysteresis 적용 방향을 포함한 이벤트 해제·재발생 조건, Description 기록 항목</td></tr>
        <tr><td>비정상 계측값</td><td>센서 단선·통신 오류·미수신·측정범위 초과 시 표시값, Min/Max 및 이벤트 판정 포함 여부</td></tr>
        <tr><td>지원 범위</td><td>1차 버전의 독립 모듈 범위 확정, CMS-2P 종속 연결·Pairing 제외 시 화면 노출 및 미지원 처리 방식</td></tr>
        <tr><td>데이터 인터페이스</td><td>온도·Min/Max·Timestamp·이벤트 상태의 레지스터 주소, 데이터 타입, Scale, 무효값 코드 및 갱신 주기</td></tr>
      </tbody>
    </table>
  </div>
</details>

<hr class="section-divider">

## 근거

<details class="section-toggle">
  <summary>근거</summary>
  <div class="section-toggle__body">
    <ul>
      <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260604.md</code></li>
      <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260611.md</code></li>
      <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-23-0018.md</code></li>
    </ul>
  </div>
</details>
