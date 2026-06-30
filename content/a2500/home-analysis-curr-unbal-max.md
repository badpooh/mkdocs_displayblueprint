# A2500 MAIN HOME ANALYSIS Current Unbalance Max { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_ANALYSIS_CurrUnbal_Max.png" alt="A2500 MAIN HOME ANALYSIS Current Unbalance Max">
  <a class="screen-hotspot" href="../setup-dashboard/" title="Go to SETUP Dashboard" aria-label="Go to SETUP Dashboard" style="left:0%; top:0%; width:17%; height:12.4%;">SETUP</a>
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to HOME VOLTAGE RMS" aria-label="Go to HOME VOLTAGE RMS" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-rms/" title="Go to HOME CURRENT RMS" aria-label="Go to HOME CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-active/" title="Go to HOME POWER Active Power" aria-label="Go to HOME POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-active/" title="Go to HOME ENERGY Active Energy" aria-label="Go to HOME ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-phasor/" title="Go to HOME ANALYSIS Phasor" aria-label="Go to HOME ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-description/" title="Go to HOME SYSTEM Description" aria-label="Go to HOME SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../home-analysis-phasor/" title="Go to Phasor" aria-label="Go to Phasor" style="left:0%; top:24%; width:19.4%; height:9.2%;">Phasor</a>
  <a class="screen-hotspot" href="../home-analysis-harmonics/" title="Go to Harmonics" aria-label="Go to Harmonics" style="left:0%; top:33%; width:19.4%; height:9.6%;">Harmonics</a>
  <a class="screen-hotspot" href="../home-analysis-waveform/" title="Go to Waveform" aria-label="Go to Waveform" style="left:0%; top:42.5%; width:19.4%; height:9.6%;">Waveform</a>
  <a class="screen-hotspot" href="../home-analysis-volt-symm-ll/" title="Go to Voltage Symmetrical Component L-L" aria-label="Go to Voltage Symmetrical Component L-L" style="left:0%; top:52%; width:19.4%; height:9.6%;">Volt. Symm.</a>
  <a class="screen-hotspot" href="../home-analysis-volt-unbal/" title="Go to Voltage Unbalance" aria-label="Go to Voltage Unbalance" style="left:0%; top:61.2%; width:19.4%; height:9.6%;">Volt. Unbal.</a>
  <a class="screen-hotspot" href="../home-analysis-curr-symm/" title="Go to Current Symmetrical Component" aria-label="Go to Current Symmetrical Component" style="left:0%; top:70.7%; width:19.4%; height:9.6%;">Curr. Symm.</a>
  <a class="screen-hotspot" href="../home-analysis-curr-unbal/" title="Go to Current Unbalance" aria-label="Go to Current Unbalance" style="left:0%; top:80.0%; width:19.4%; height:9.6%;">Curr. Unbal.</a>
  <a class="screen-hotspot" href="../home-analysis-curr-unbal/" title="Clear Max state" aria-label="Clear Max state" style="left:84.4%; top:26.5%; width:12.6%; height:8.7%;">Max</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>Volt. Symm.</code>는 <code>L-L</code>/<code>L-N</code> 탭을 화면 내부 상태 버튼으로 처리한다.</li>
      <li><code>Volt. Unbal.</code>, <code>Curr. Symm.</code>, <code>Curr. Unbal.</code>는 분석 화면 숫자/단위 표시 정책을 따른다.</li>
      <li>범위 밖 또는 유효하지 않은 계측값은 공통 예외 표시 정책에 따라 처리한다.</li>
    </ul>
    <p>근거: <code>Policy-24-0018</code>, <code>Policy-23-0018</code>, <code>Policy-26-xxxx</code>, <code>Policy-25-0001</code></p>
    <details class="policy-details">
      <summary>3상 모듈 전용 표시</summary>
      <div class="policy-details__body">
        <ul>
          <li>단상 모듈에서는 <code>Curr. Unbal. %</code> 서브 메뉴를 표시하지 않는다.</li>
          <li>표시 기준은 CM 모듈과 동일하게 적용한다.</li>
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
