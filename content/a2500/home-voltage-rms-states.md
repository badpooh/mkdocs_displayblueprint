# A2500 MAIN HOME VOLTAGE RMS 상태 개요 { .screen-title-fit }

`HOME > VOLTAGE > RMS`의 추가 상태 화면은 왼쪽 메뉴에서 개별 페이지로 확인한다.

| 상태 화면 | 행 라벨 | 추가 표시 |
| --- | --- | --- |
| [L-N](home-voltage-rms-ln.md) | `A`, `B`, `C`, `Average` | 현재값 |
| [L-L Min](home-voltage-rms-ll-min.md) | `AB`, `BC`, `CA`, `Average` | 최소값과 발생 시각 |
| [L-L Max](home-voltage-rms-ll-max.md) | `AB`, `BC`, `CA`, `Average` | 최대값과 발생 시각 |
| [L-N Min](home-voltage-rms-ln-min.md) | `A`, `B`, `C`, `Average` | 최소값과 발생 시각 |
| [L-N Max](home-voltage-rms-ln-max.md) | `A`, `B`, `C`, `Average` | 최대값과 발생 시각 |
| [모듈 전환](home-voltage-rms-module.md) | 선택 모듈 기준 | 화살표 눌림 및 전환 결과 |

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>HOME &gt; VOLTAGE</code>는 A3700N 기준으로 정리하며, <code>RMS</code>, <code>Fundamental</code>, <code>THD %</code>, <code>Frequency</code>, <code>Residual</code> 구성을 사용한다.</li>
      <li><code>RMS</code>, <code>Fundamental</code>, <code>THD %</code>는 좌측 메뉴를 하나로 두고 화면 내부의 <code>L-L</code>/<code>L-N</code> 버튼으로 상태를 전환한다.</li>
      <li>전압 계열 기본 상태는 <code>L-L</code>/<code>VLL</code> 우선이다. 단, <code>HOME &gt; ANALYSIS &gt; Phasor</code>는 예외적으로 <code>VLN</code>을 기본 선택으로 둔다.</li>
      <li><code>Min</code>/<code>Max</code>는 우측 상단 상태 버튼으로 취급한다. 선택 중인 버튼을 다시 누르거나 같은 메뉴를 다시 선택하면 기본 화면 상태로 돌아간다.</li>
    </ul>
    <p>근거: <code>Policy-24-0018</code>, <code>Policy-23-0001</code>, <code>Policy-23-0002</code>, <code>Policy-23-0003</code>, <code>Policy-24-0024</code>, <code>Policy-25-0001</code>, <code>Policy-23-0018</code>, <code>Policy-24-0003</code></p>
    <h4>공통 정책</h4>
    <ul>
      <li>계측값은 TFT LCD 숫자/단위 표시 정책을 따른다. 같은 화면 안의 같은 종류 값은 단위를 통일하고, 값은 화면 자리수 기준으로 반올림한다.</li>
      <li>같은 HOME 또는 SETUP 메뉴 버튼을 다시 선택하면 해당 메뉴의 기본 화면 상태로 돌아간다. 화면 안의 상태 버튼도 같은 기준으로 기본 상태 복귀를 정의한다.</li>
      <li>Min, Max, Peak 등 저장값은 명시적인 Reset 동작이 있을 때만 초기화한다.</li>
    </ul>
    <p>근거: <code>Policy-23-0018</code>, <code>Policy-24-0003</code>, <code>Policy-25-0001</code></p>
    <details class="policy-details">
      <summary>버튼 선택과 화면 전환</summary>
      <div class="policy-details__body">
        <ul>
          <li><code>L-L</code>/<code>L-N</code>은 하나만 선택되는 탭 그룹이며 기본값은 <code>L-L</code>이다.</li>
          <li><code>Min</code>은 <code>Max</code> 왼쪽에 배치한다.</li>
          <li>메뉴 또는 모듈 이동 시 이전 선택을 기억하지 않고 <code>L-L</code> 선택, <code>Min/Max</code> 해제 상태로 표시한다.</li>
          <li><code>VOLTAGE</code> 주메뉴 또는 <code>RMS</code> 부메뉴를 재선택하면 RMS L-L 화면으로 전환한다.</li>
        </ul>
        <p>근거: <code>Policy-23-0001</code>, <code>Policy-23-0002</code>, <code>Policy-23-0003</code>, <code>Policy-24-0024</code>, <code>Policy-25-0001</code></p>
      </div>
    </details>
    <details class="policy-details">
      <summary>Min/Max 값과 단위</summary>
      <div class="policy-details__body">
        <ul>
          <li>Min/Max 값은 명시적인 초기화 명령으로만 초기화하며 결선모드 변경 시 초기화하지 않는다.</li>
          <li>전압은 Reading 4자리로 반올림하고 값에 따라 <code>V/kV/MV/GV/TV</code> 단위를 적용한다.</li>
          <li>한 화면의 동일 종류 값은 가장 큰 값의 단위를 기준으로 통일한다.</li>
          <li>발생 시각은 샘플 화면 기준 <code>YYYY-MM-DD HH:mm:ss</code> 형식이다. 저장 및 갱신 조건은 정책 근거 추가 확인이 필요하다.</li>
        </ul>
        <p>근거: <code>Policy-24-0003</code>, <code>Policy-23-0018</code></p>
      </div>
    </details>
  </div>
</details>
<!-- codex-policy-end -->
