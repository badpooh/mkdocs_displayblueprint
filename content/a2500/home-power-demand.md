# A2500 MAIN HOME POWER Demand Active Power { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_POWER_Demand.png" alt="A2500 MAIN HOME POWER Demand Active Power">
  <a class="screen-hotspot" href="../setup-dashboard/" title="Go to SETUP Dashboard" aria-label="Go to SETUP Dashboard" style="left:0%; top:0%; width:17%; height:12.4%;">SETUP</a>
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to HOME VOLTAGE RMS" aria-label="Go to HOME VOLTAGE RMS" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-rms/" title="Go to HOME CURRENT RMS" aria-label="Go to HOME CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-active/" title="Go to HOME POWER Active Power" aria-label="Go to HOME POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-active/" title="Go to HOME ENERGY Active Energy" aria-label="Go to HOME ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-phasor/" title="Go to HOME ANALYSIS Phasor" aria-label="Go to HOME ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-description/" title="Go to HOME SYSTEM Description" aria-label="Go to HOME SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../home-power-active/" title="Go to Active Power" aria-label="Go to Active Power" style="left:0%; top:24%; width:19.4%; height:9.2%;">Active</a>
  <a class="screen-hotspot" href="../home-power-reactive/" title="Go to Reactive Power" aria-label="Go to Reactive Power" style="left:0%; top:33%; width:19.4%; height:9.6%;">Reactive</a>
  <a class="screen-hotspot" href="../home-power-apparent/" title="Go to Apparent Power" aria-label="Go to Apparent Power" style="left:0%; top:42.5%; width:19.4%; height:9.6%;">Apparent</a>
  <a class="screen-hotspot" href="../home-power-pf/" title="Go to Power Factor" aria-label="Go to Power Factor" style="left:0%; top:52%; width:19.4%; height:9.6%;">Power Factor</a>
  <a class="screen-hotspot" href="../home-power-demand/" title="Go to Demand Active Power" aria-label="Go to Demand Active Power" style="left:0%; top:61.2%; width:19.4%; height:9.6%;">Demand</a>
  <a class="screen-hotspot" href="../home-power-demand-peak/" title="Go to Peak state" aria-label="Go to Peak state" style="left:84.4%; top:26.5%; width:12.6%; height:8.7%;">Peak</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>Active</code>, <code>Reactive</code>, <code>Apparent</code>, <code>Demand</code> 화면은 전력 계열 숫자/단위 표시 정책을 따른다.</li>
      <li>전력값은 화면 자리수 기준으로 반올림하고, 같은 화면 안의 같은 종류 값은 단위를 통일한다.</li>
      <li><code>Min</code>, <code>Max</code>, <code>Peak</code>는 저장 상태 화면이며 명시적 Reset 전까지 값을 유지한다.</li>
    </ul>
    <p>근거: <code>Policy-23-0018</code>, <code>Policy-24-0003</code>, <code>Policy-25-0001</code></p>
    <h4>공통 정책</h4>
    <ul>
      <li>계측값은 TFT LCD 숫자/단위 표시 정책을 따른다. 같은 화면 안의 같은 종류 값은 단위를 통일하고, 값은 화면 자리수 기준으로 반올림한다.</li>
      <li>같은 HOME 또는 SETUP 메뉴 버튼을 다시 선택하면 해당 메뉴의 기본 화면 상태로 돌아간다. 화면 안의 상태 버튼도 같은 기준으로 기본 상태 복귀를 정의한다.</li>
      <li>Min, Max, Peak 등 저장값은 명시적인 Reset 동작이 있을 때만 초기화한다.</li>
    </ul>
    <p>근거: <code>Policy-23-0018</code>, <code>Policy-24-0003</code>, <code>Policy-25-0001</code></p>
  </div>
</details>
<!-- codex-policy-end -->
