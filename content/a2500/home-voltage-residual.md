# A2500 MAIN HOME VOLTAGE Residual { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_VOLTAGE_Residual.png" alt="A2500 MAIN HOME VOLTAGE Residual">
  <a class="screen-hotspot" href="../setup-dashboard/" title="Go to SETUP Dashboard" aria-label="Go to SETUP Dashboard" style="left:0%; top:0%; width:17%; height:12.4%;">SETUP</a>
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to HOME VOLTAGE RMS" aria-label="Go to HOME VOLTAGE RMS" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-rms/" title="Go to HOME CURRENT RMS" aria-label="Go to HOME CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-active/" title="Go to HOME POWER Active Power" aria-label="Go to HOME POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-active/" title="Go to HOME ENERGY Active Energy" aria-label="Go to HOME ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-phasor/" title="Go to HOME ANALYSIS Phasor" aria-label="Go to HOME ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-description/" title="Go to HOME SYSTEM Description" aria-label="Go to HOME SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to RMS Voltage" aria-label="Go to RMS Voltage" style="left:0%; top:24%; width:19.4%; height:9.2%;">RMS</a>
  <a class="screen-hotspot" href="../home-voltage-fundamental-ll/" title="Go to Fundamental Voltage L-L" aria-label="Go to Fundamental Voltage L-L" style="left:0%; top:33%; width:19.4%; height:9.6%;">Fundamental</a>
  <a class="screen-hotspot" href="../home-voltage-thd-ll/" title="Go to Voltage THD L-L" aria-label="Go to Voltage THD L-L" style="left:0%; top:42.5%; width:19.4%; height:9.6%;">THD %</a>
  <a class="screen-hotspot" href="../home-voltage-frequency/" title="Go to Frequency" aria-label="Go to Frequency" style="left:0%; top:52%; width:19.4%; height:9.6%;">Frequency</a>
  <a class="screen-hotspot" href="../home-voltage-residual/" title="Go to Residual Voltage" aria-label="Go to Residual Voltage" style="left:0%; top:61.2%; width:19.4%; height:9.6%;">Residual</a>
  <a class="screen-hotspot" href="../home-voltage-residual-min/" title="Go to Min state" aria-label="Go to Min state" style="left:71.8%; top:26.5%; width:12.6%; height:8.7%;">Min</a>
  <a class="screen-hotspot" href="../home-voltage-residual-max/" title="Go to Max state" aria-label="Go to Max state" style="left:84.4%; top:26.5%; width:12.6%; height:8.7%;">Max</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>HOME &gt; VOLTAGE</code>는 A3700N 기준으로 정리하며, <code>RMS</code>, <code>Fundamental</code>, <code>THD %</code>, <code>Frequency</code>, <code>Residual</code> 구성을 사용한다.</li>
      <li><code>Min</code>/<code>Max</code>는 우측 상단 상태 버튼으로 취급한다. 선택 중인 버튼을 다시 누르거나 같은 메뉴를 다시 선택하면 기본 화면 상태로 돌아간다.</li>
    </ul>
    <p>근거: <code>Policy-24-0018</code>, <code>Policy-23-0002</code>, <code>Policy-23-0003</code>, <code>Policy-24-0024</code>, <code>Policy-25-0001</code>, <code>Policy-23-0018</code>, <code>Policy-24-0003</code></p>
    <details class="policy-details">
      <summary>잔류전압 표시 자리수</summary>
      <div class="policy-details__body">
        <ul>
          <li>잔류전압 자리수는 전압과 동일하게 표시한다.</li>
          <li>Reading 값은 4자리로 표시한다.</li>
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
    <h4>적용 완료</h4>
    <details class="policy-details">
      <summary>적용 완료: 데이터뷰 제목</summary>
      <div class="policy-details__body">
        <p><code>Policy-23-0049</code>는 데이터뷰 제목을 가능한 Full Name으로 표시하도록 정리한다. <code>HOME &gt; VOLTAGE &gt; Residual</code> 제목은 <code>Residual Voltage</code>로 유지하며, <code>Min</code>/<code>Max</code> 버튼을 눌러도 제목에 <code>Max</code> 또는 <code>Min</code>을 추가하지 않는다.</p>
        <p>근거: <code>Policy-23-0049</code></p>
      </div>
    </details>
    <details class="policy-details">
      <summary>적용 완료: Residual 하위 메뉴</summary>
      <div class="policy-details__body">
        <p><code>Policy-24-0018</code>은 A2500의 <code>HOME &gt; VOLTAGE</code> 부메뉴를 A3700N 기준으로 통일하면서 <code>RMS</code>, <code>Fundamental</code>, <code>THD %</code>, <code>Frequency</code>, <code>Residual</code> 구성을 사용한다. 현재 화면의 좌측 메뉴와 <code>Residual</code> 선택 상태는 이 구성과 맞다.</p>
        <p>근거: <code>Policy-24-0018</code></p>
      </div>
    </details>
    <details class="policy-details">
      <summary>적용 완료: 숫자와 단위 표시</summary>
      <div class="policy-details__body">
        <p><code>Policy-23-0018</code>에 따라 잔류 전압은 전압 계열 표시 정책을 따른다. 기본 단위는 <code>V</code>이며, 값 범위에 따라 자동 단위 변경 대상이 된다. HOME 계측값은 자리수에 맞춰 반올림하고, 같은 화면의 같은 종류 값은 단위를 통일한다.</p>
        <p>근거: <code>Policy-23-0018</code></p>
      </div>
    </details>
  </div>
</details>
<!-- codex-policy-end -->
