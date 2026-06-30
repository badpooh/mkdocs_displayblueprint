# A2500 MAIN HOME POWER Power Factor { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_POWER_PF.png" alt="A2500 MAIN HOME POWER Power Factor">
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
  <a class="screen-hotspot" href="../home-power-pf-min/" title="Go to Min state" aria-label="Go to Min state" style="left:71.8%; top:26.5%; width:12.6%; height:8.7%;">Min</a>
  <a class="screen-hotspot" href="../home-power-pf-max/" title="Go to Max state" aria-label="Go to Max state" style="left:84.4%; top:26.5%; width:12.6%; height:8.7%;">Max</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li>피상전력이 <code>0</code>이면 <code>No Load</code> 상태로 표시하고, <code>PF Value at No Load</code> 설정에 따라 <code>1.000</code> 또는 <code>0.000</code>을 표시한다.</li>
      <li><code>No Load</code> 상태의 PF 값은 Max/Min 계산에 포함하지 않는다. 단, Data Reset 또는 설정값 변경 시점의 Timestamp 표시는 유지한다.</li>
      <li><code>PF</code>가 <code>1.000</code> 또는 <code>0.000</code>으로 표시되는 Max/Min 화면에서는 Angle Status를 표시하지 않는다.</li>
      <li><code>No Load</code>, <code>Leading</code>, <code>Lagging</code> 등 용어와 대소문자는 정책 문서의 표기 규칙을 따른다.</li>
    </ul>
    <p>근거: <code>Policy-23-0030</code>, <code>Policy-23-0051</code>, <code>Policy-24-0029</code>, <code>임시회의-20240926</code>, <code>임시회의-20241024</code>, <code>Policy-23-0018</code>, <code>Policy-24-0003</code>, <code>Policy-25-0001</code></p>
    <details class="policy-details">
      <summary>No Load 표시</summary>
      <div class="policy-details__body">
        <ul>
          <li>피상전력이 <code>0</code>이면 No Load 상태로 표시한다.</li>
          <li><code>SETUP &gt; MEASUREMENT &gt; Power &gt; PF Value at No Load</code> 설정에 따라 <code>1.000</code> 또는 <code>0.000</code>을 표시한다.</li>
        </ul>
      </div>
    </details>
    <details class="policy-details">
      <summary>Max/Min 표시 정책</summary>
      <div class="policy-details__body">
        <ul>
          <li>피상전력이 <code>0</code>일 때 <code>SETUP &gt; CONTROL &gt; Data Reset &gt; Max/Min</code> 조건에서도 <code>PF Value at No Load</code> 설정에 따라 <code>1.000</code> 또는 <code>0.000</code>으로 표시한다.</li>
          <li>설정값 변경이 발생하면 해당 시각을 Timestamp로 표시한다.</li>
          <li>피상전력이 <code>0</code>일 때 No Load PF 값은 Max/Min 계산에 포함하지 않는다.</li>
          <li>화면에는 No Load와 Timestamp, <code>1.000</code> 또는 <code>0.000</code>을 표시한다.</li>
          <li>Data Reset 시 Timestamp는 Data Reset 시각을 표시한다.</li>
        </ul>
      </div>
    </details>
    <details class="policy-details">
      <summary>PF 값이 1.000 또는 0.000일 때 Max/Min 표시</summary>
      <div class="policy-details__body">
        <ul>
          <li>PF 표시값이 <code>1.000</code> 또는 <code>0.000</code>이면 Max/Min 화면에 Angle Status를 표시하지 않는다.</li>
          <li>Timestamp와 <code>1.000</code> 또는 <code>0.000</code> 값은 표시한다.</li>
          <li>Timestamp는 실제값 변화를 기준으로 갱신한다. 장치 화면에는 반올림된 값을 표시한다.</li>
        </ul>
      </div>
    </details>
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
