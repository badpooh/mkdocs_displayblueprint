# A2500 MAIN HOME CURRENT Fundamental Current Min { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_CURRENT_Fundamental_Min.png" alt="A2500 MAIN HOME CURRENT Fundamental Current Min">
  <a class="screen-hotspot" href="../setup-dashboard/" title="Go to SETUP Dashboard" aria-label="Go to SETUP Dashboard" style="left:0%; top:0%; width:17%; height:12.4%;">SETUP</a>
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to HOME VOLTAGE RMS" aria-label="Go to HOME VOLTAGE RMS" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-rms/" title="Go to HOME CURRENT RMS" aria-label="Go to HOME CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-active/" title="Go to HOME POWER Active Power" aria-label="Go to HOME POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-active/" title="Go to HOME ENERGY Active Energy" aria-label="Go to HOME ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-phasor/" title="Go to HOME ANALYSIS Phasor" aria-label="Go to HOME ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-description/" title="Go to HOME SYSTEM Description" aria-label="Go to HOME SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../home-current-rms/" title="Go to Current RMS" aria-label="Go to Current RMS" style="left:0%; top:24%; width:19.4%; height:9.2%;">RMS</a>
  <a class="screen-hotspot" href="../home-current-fundamental/" title="Go to Fundamental Current" aria-label="Go to Fundamental Current" style="left:0%; top:33%; width:19.4%; height:9.6%;">Fundamental</a>
  <a class="screen-hotspot" href="../home-current-demand/" title="Go to Demand Current" aria-label="Go to Demand Current" style="left:0%; top:42.5%; width:19.4%; height:9.6%;">Demand</a>
  <a class="screen-hotspot" href="../home-current-thd/" title="Go to Current THD" aria-label="Go to Current THD" style="left:0%; top:52%; width:19.4%; height:9.6%;">THD/TDD %</a>
  <a class="screen-hotspot" href="../home-current-crest-factor/" title="Go to Crest Factor" aria-label="Go to Crest Factor" style="left:0%; top:61.2%; width:19.4%; height:9.6%;">Crest Factor</a>
  <a class="screen-hotspot" href="../home-current-k-factor/" title="Go to K-Factor" aria-label="Go to K-Factor" style="left:0%; top:70.7%; width:19.4%; height:9.6%;">K-Factor</a>
  <a class="screen-hotspot" href="../home-current-leak-residual/" title="Go to Leak & Residual" aria-label="Go to Leak & Residual" style="left:0%; top:80.0%; width:19.4%; height:9.6%;">Leak & Residual</a>
  <a class="screen-hotspot" href="../home-current-fundamental/" title="Clear Min state" aria-label="Clear Min state" style="left:71.8%; top:26.5%; width:12.6%; height:8.7%;">Min</a>
  <a class="screen-hotspot" href="../home-current-fundamental-max/" title="Go to Max state" aria-label="Go to Max state" style="left:84.4%; top:26.5%; width:12.6%; height:8.7%;">Max</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>HOME &gt; CURRENT</code>의 RMS, Fundamental, Demand, THD, TDD, Crest Factor, K-Factor, Leak &amp; Residual 화면은 계측값 자리수와 단위 통일 규칙을 따른다.</li>
      <li><code>TDD</code>는 Nominal Current 설정값을 기준으로 계산/표시하는 화면으로 취급한다.</li>
      <li><code>Leak &amp; Residual</code> 계열은 Residual 용어를 기준으로 정리하고, 잔류 전류/누설 전류 성격의 표시 정책을 함께 적용한다.</li>
      <li><code>Min</code>, <code>Max</code>, <code>Peak</code> 버튼은 상태 버튼이며, 같은 버튼 재선택 또는 메뉴 재진입 시 기본 화면으로 복귀한다.</li>
    </ul>
    <p>근거: <code>Policy-23-0018</code>, <code>Policy-23-0049</code>, <code>Policy-24-0003</code>, <code>Policy-25-0001</code></p>
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
