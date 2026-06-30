# A2500 MAIN HOME SYSTEM A2500D Information { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_SYSTEM_A2500D.png" alt="A2500 MAIN HOME SYSTEM A2500D Information">
  <a class="screen-hotspot" href="../setup-dashboard/" title="Go to SETUP Dashboard" aria-label="Go to SETUP Dashboard" style="left:0%; top:0%; width:17%; height:12.4%;">SETUP</a>
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to HOME VOLTAGE RMS" aria-label="Go to HOME VOLTAGE RMS" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-rms/" title="Go to HOME CURRENT RMS" aria-label="Go to HOME CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-active/" title="Go to HOME POWER Active Power" aria-label="Go to HOME POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-active/" title="Go to HOME ENERGY Active Energy" aria-label="Go to HOME ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-phasor/" title="Go to HOME ANALYSIS Phasor" aria-label="Go to HOME ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-description/" title="Go to HOME SYSTEM Description" aria-label="Go to HOME SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../home-system-description/" title="Go to Description" aria-label="Go to Description" style="left:0%; top:24%; width:19.4%; height:9.2%;">Description</a>
  <a class="screen-hotspot" href="../home-system-local-time/" title="Go to Local Time" aria-label="Go to Local Time" style="left:0%; top:33%; width:19.4%; height:9.6%;">Local Time</a>
  <a class="screen-hotspot" href="../home-system-network-state/" title="Go to Network State" aria-label="Go to Network State" style="left:0%; top:42.5%; width:19.4%; height:9.6%;">Network State</a>
  <a class="screen-hotspot" href="../home-system-a2500m/" title="Go to A2500M Information" aria-label="Go to A2500M Information" style="left:0%; top:52%; width:19.4%; height:9.6%;">A2500M</a>
  <a class="screen-hotspot" href="../home-system-a2500d/" title="Go to A2500D Information" aria-label="Go to A2500D Information" style="left:0%; top:61.2%; width:19.4%; height:9.6%;">A2500D</a>
  <a class="screen-hotspot" href="../home-system-a2550cmz/" title="Go to A2550CMZ Information" aria-label="Go to A2550CMZ Information" style="left:0%; top:70.7%; width:19.4%; height:9.6%;">A2550CMZ</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>Description</code>, <code>Local Time</code>, <code>Network State</code>, 장치 정보 화면은 HOME SYSTEM의 읽기 전용 정보 화면으로 정리한다.</li>
      <li>장치 정보 화면은 Serial/Hardware Revision, Firmware Version 그룹, 대표 SW 버전 표기 정책을 따른다.</li>
      <li><code>Network State</code>는 포트 상태와 RSTP 상태 표기 정책을 A2500 회의 문서 기준으로 해석한다.</li>
    </ul>
    <p>근거: <code>Policy-23-0011</code>, <code>Policy-23-0016</code>, <code>Policy-23-0046</code>, <code>Policy-24-0037</code>, <code>임시회의-20240308</code>, <code>임시회의-20240725</code></p>
    <details class="policy-details">
      <summary>PID(Product ID)</summary>
      <div class="policy-details__body">
        <ul>
          <li>PID 기준은 A2500M Information 화면의 Serial Number 정책을 따른다.</li>
          <li>A2500D의 PID는 <code>E1</code>이다.</li>
        </ul>
      </div>
    </details>
    <h4>공통 정책</h4>
    <details class="policy-details">
      <summary>Application/Firmware Version 구성</summary>
      <div class="policy-details__body">
        <ul>
          <li>Version은 <code>Major</code>, <code>Minor</code>, <code>Patch</code>, <code>Develop</code>, <code>Internal Patch</code>, <code>Build 횟수</code>로 구성한다.</li>
          <li>장치 화면에는 <code>Major</code>, <code>Minor</code>, <code>Patch</code>, <code>Develop</code>만 표시한다.</li>
          <li><code>Develop</code> 값이 <code>0</code>이면 표시하지 않는다.</li>
          <li>AccuraSM의 Developer Mode에서는 <code>Internal Patch</code>와 <code>Build 횟수</code>를 표시한다.</li>
          <li><code>Internal Patch</code>는 <code>p</code>, <code>Build 횟수</code>는 <code>b</code>를 붙여 표시한다.</li>
        </ul>
      </div>
    </details>
  </div>
</details>
<!-- codex-policy-end -->
