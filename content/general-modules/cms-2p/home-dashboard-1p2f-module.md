# CMS-2P HOME Dashboard 1P2F { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_2.png" alt="CMS-2P 1P2F HOME Dashboard">
  <a class="screen-hotspot" href="../home-dashboard-1p2f-main/" title="Go to 1P2F MAIN Dashboard" aria-label="Go to 1P2F MAIN Dashboard" style="left:17.4%; top:1.2%; width:3.9%; height:8.8%;">H</a>
  <a class="screen-hotspot" href="../home-dashboard-1p2f-main/" title="Go to 1P2F MAIN Dashboard" aria-label="Go to 1P2F MAIN Dashboard" style="left:30%; top:1%; width:5%; height:11%;">Prev</a>
  <a class="screen-hotspot" href="../home-dashboard-1p2f-main/" title="Go to 1P2F MAIN Dashboard" aria-label="Go to 1P2F MAIN Dashboard" style="left:66%; top:1%; width:4%; height:11%;">Next</a>
  <a class="screen-hotspot" href="../home-voltage-1p2f-ll/" title="Go to VOLTAGE RMS L-L" aria-label="Go to VOLTAGE RMS L-L" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-1p2f-rms/" title="Go to CURRENT RMS" aria-label="Go to CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-1p2f-active/" title="Go to POWER Active Power" aria-label="Go to POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-1p2f-active/" title="Go to ENERGY Active Energy" aria-label="Go to ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-1p2f-phasor/" title="Go to ANALYSIS Phasor" aria-label="Go to ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-1p2f-description/" title="Go to SYSTEM Description" aria-label="Go to SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <button class="screen-hotspot screen-image-toggle" type="button" data-screen-image-toggle data-default-src="/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_2.png" data-alternate-src="/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_2_fd2.png" data-default-alt="CMS-2P 1P2F HOME Dashboard Fd.1" data-alternate-alt="CMS-2P 1P2F HOME Dashboard Fd.2" aria-pressed="false" aria-label="Fd.2 화면으로 전환" title="피더 화면 전환" style="left:55.2%; top:26.4%; width:10%; height:8.7%;">피더 화면 전환</button>
  <span class="screen-marker" aria-hidden="true" style="left:24.2%; top:30%;">1</span>
  <span class="screen-marker" aria-hidden="true" style="left:62.4%; top:3%;">2</span>
  <span class="screen-marker" aria-hidden="true" style="left:39%; top:50.2%;">2</span>
  <span class="screen-marker" aria-hidden="true" style="left:93.5%; top:68.5%;">3</span>
</div>

## 적용 정책

- 좌측·우측 화살표 중 어느 쪽을 눌러도 1P2F MAIN Dashboard로 이동한다.
- 상단 `H` 버튼을 누르면 1P2F MAIN Dashboard로 이동한다.
- 상단 `VOLTAGE` 탭을 누르면 VOLTAGE RMS L-L 기본 화면으로 이동한다.
- 1P2F는 피더 기준 Dashboard를 표시하며 피더 선택의 디폴트는 Fd.1이다.

<hr class="section-divider">

## 화면 동작

<p><span class="marker-ref">1</span><strong>전압 표시 및 피더 레이블</strong></p>

- 분기의 상선택 정보에 따라 전압 표시 방식을 결정한다.
  - 상선택이 `AN` 또는 `NA`이면 상전압을 표시한다.
  - 상선택이 `AB` 또는 `BA`이면 선간전압을 표시한다.
- 「L-L」·「L-N」 버튼을 숨기고 선택된 피더 레이블을 표시한다.

<p><span class="marker-ref">2</span><strong>외부 ZCT 누설전류 표시</strong></p>

- 외부 ZCT 옵션이 있는 모듈은 모듈명에 `+Z`가 표시되며, 「분기 > SETUP > MEASUREMENT > Leakage > External ZCT Connection」이 `Enable`일 때 ZCT 관련 항목을 표시한다.

<p><span class="marker-ref">3</span><strong>CMS-2P 분기모듈 항목값 갱신</strong></p>

- 모듈선택창이 분기모듈이면서 CMS-2P이면 선택된 피더 레이블을 표시하고 각 항목값을 선택된 피더 정보로 갱신한다.

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>docs/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_2.png</code></li>
  <li><code>docs/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_2_fd2.png</code></li>
  <li><code>LLM_RAG_260611/Policy_A2500/정기회의-20230420.md</code></li>
  <li><code>LLM_RAG_260611/Policy_Common/Policy-24-0024.md</code></li>
</ul></div></details>
