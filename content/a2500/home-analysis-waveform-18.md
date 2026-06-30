# A2500 MAIN HOME ANALYSIS Waveform State 18 { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_ANALYSIS_Waveform_18.png" alt="A2500 MAIN HOME ANALYSIS Waveform State 18">
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
  <a class="screen-hotspot" href="../home-analysis-waveform-7/" title="Toggle Waveform Voltage display" aria-label="Toggle Waveform Voltage display" style="left:66.8%; top:26.4%; width:15.0%; height:8.9%;">Voltage</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-11/" title="Toggle Waveform Current display" aria-label="Toggle Waveform Current display" style="left:82.0%; top:26.4%; width:15.0%; height:8.9%;">Current</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-17/" title="Toggle Voltage waveform A" aria-label="Toggle Voltage waveform A" style="left:39.0%; top:37.5%; width:6.2%; height:8.3%;">A</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-17/" title="Toggle Voltage waveform B" aria-label="Toggle Voltage waveform B" style="left:45.4%; top:37.5%; width:6.2%; height:8.3%;">B</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-17/" title="Toggle Voltage waveform C" aria-label="Toggle Voltage waveform C" style="left:51.7%; top:37.5%; width:6.2%; height:8.3%;">C</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-17/" title="Toggle Current waveform A" aria-label="Toggle Current waveform A" style="left:59.1%; top:37.5%; width:6.4%; height:8.3%;">A</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-16/" title="Toggle Current waveform B" aria-label="Toggle Current waveform B" style="left:65.7%; top:37.5%; width:6.4%; height:8.3%;">B</a>
  <a class="screen-hotspot" href="../home-analysis-waveform-17/" title="Toggle Current waveform C" aria-label="Toggle Current waveform C" style="left:72.1%; top:37.5%; width:6.4%; height:8.3%;">C</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>Waveform</code>은 전압/전류/상 체크 버튼과 Scale 상태에 따라 화면 상태가 바뀐다.</li>
      <li>메뉴 전환 시 직전 체크 상태를 기억하지 않고, 정책에서 정한 기본 선택 상태로 돌아간다.</li>
      <li>단상/결선 조건에서 표시 가능한 채널만 노출하며, 상/전압/전류 색상은 공통 분석 화면 색상 정책을 따른다.</li>
    </ul>
    <p>근거: <code>Policy-23-0007</code>, <code>Policy-23-0012</code>, <code>Policy-24-0024</code>, <code>Policy-23-0018</code>, <code>임시회의-20240423</code>, <code>임시회의-20240725</code></p>
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
