# CMS-2P HOME Dashboard 1P2F MAIN { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_1.png" alt="CMS-2P 1P2F HOME Dashboard MAIN">
  <a class="screen-hotspot" href="../home-dashboard-1p2f-main/" title="Go to 1P2F MAIN Dashboard" aria-label="Go to 1P2F MAIN Dashboard" style="left:17.4%; top:1.2%; width:3.9%; height:8.8%;">H</a>
  <a class="screen-hotspot" href="../home-dashboard-1p2f-module/" title="Go to 1P2F CMS-2P Dashboard" aria-label="Go to 1P2F CMS-2P Dashboard" style="left:30%; top:1%; width:5%; height:11%;">Prev</a>
  <a class="screen-hotspot" href="../home-dashboard-1p2f-module/" title="Go to 1P2F CMS-2P Dashboard" aria-label="Go to 1P2F CMS-2P Dashboard" style="left:66%; top:1%; width:4%; height:11%;">Next</a>
  <a class="screen-hotspot" href="../home-voltage-1p2f-ll/" title="Go to VOLTAGE RMS L-L" aria-label="Go to VOLTAGE RMS L-L" style="left:0%; top:12.5%; width:17.5%; height:10.5%;">VOLTAGE</a>
  <a class="screen-hotspot" href="../home-current-1p2f-rms/" title="Go to CURRENT RMS" aria-label="Go to CURRENT RMS" style="left:17.5%; top:12.5%; width:16.3%; height:10.5%;">CURRENT</a>
  <a class="screen-hotspot" href="../home-power-1p2f-active/" title="Go to POWER Active Power" aria-label="Go to POWER Active Power" style="left:33.8%; top:12.5%; width:16.2%; height:10.5%;">POWER</a>
  <a class="screen-hotspot" href="../home-energy-1p2f-active/" title="Go to ENERGY Active Energy" aria-label="Go to ENERGY Active Energy" style="left:50%; top:12.5%; width:16.3%; height:10.5%;">ENERGY</a>
  <a class="screen-hotspot" href="../home-analysis-1p2f-phasor/" title="Go to ANALYSIS Phasor" aria-label="Go to ANALYSIS Phasor" style="left:66.3%; top:12.5%; width:16.2%; height:10.5%;">ANALYSIS</a>
  <a class="screen-hotspot" href="../home-system-1p2f-description/" title="Go to SYSTEM Description" aria-label="Go to SYSTEM Description" style="left:82.5%; top:12.5%; width:17.5%; height:10.5%;">SYSTEM</a>
  <button class="screen-hotspot screen-image-toggle" type="button" data-screen-image-toggle data-default-src="/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_1.png" data-alternate-src="/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_1_fd2.png" aria-pressed="false" aria-label="Fd.2 화면으로 전환" title="피더 화면 전환" style="left:55.25%; top:26.6%; width:9.9%; height:8.4%;">피더 화면 전환</button>
  <span class="screen-marker" aria-hidden="true" style="left:53.8%; top:29%;">1</span>
  <span class="screen-marker" aria-hidden="true" style="left:90.4%; top:29%;">2</span>
</div>

## 적용 정책

- 좌측·우측 화살표 중 어느 쪽을 눌러도 1P2F CMS-2P Dashboard로 이동한다.
- 상단 `H` 버튼을 누르면 1P2F MAIN Dashboard로 이동한다.
- 상단 `VOLTAGE` 탭을 누르면 VOLTAGE RMS L-L 기본 화면으로 이동한다.
- 모듈 전환 시 CMS-2P의 1P2F Dashboard 디폴트 화면을 표시한다.

<hr class="section-divider">

## 화면 동작

<p><span class="marker-ref">1</span><strong>피더선택 버튼 동작</strong></p>

- 피더선택 버튼을 Tap하면 `Fd.1` → `Fd.2` 순서로 순환한다. CMS-2P는 `Fd.3`을 제공하지 않는다.
- 피더 변경 시 「CURRENT」 영역의 평균전류와 누설전류를 선택된 피더의 값으로 갱신한다.
- 피더 변경 시 「CURRENT」·「POWER」·「ENERGY」 영역의 항목값을 선택된 피더의 값으로 갱신한다.
- 각 영역 우상단의 선택된 피더 레이블 문자열을 갱신한다.
- 모듈선택창이 분기모듈이면 「SYSTEM」 영역도 선택된 피더 정보로 갱신한다.
- 설정이 `Off`인 피더는 선택 순환에서 제외하며, 피더선택 버튼을 Tap해도 해당 피더로 변경하지 않는다.
- Fd.2가 `Off`이면 Fd.1만 표시하고 피더선택 버튼을 Tap해도 반응하지 않는다.

<p><span class="marker-ref">1</span><span class="marker-ref">2</span><strong>1P2F 설정 시 표시 조건</strong></p>

- 「분기 > SETUP > MEASUREMENT > Load Mode > Mode」를 `3: 1P2F`로 설정하면 다음 요소를 표시한다.
  - <span class="marker-ref">1</span>피더선택 버튼
  - <span class="marker-ref">2</span>선택된 피더 레이블

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>docs/assets/screens/CMS-2P/CMS_2P_1P2F-HOME_Dashboard_1.png</code></li>
  <li><code>LLM_RAG_260611/Policy_A2500/정기회의-20230420.md</code></li>
  <li><code>LLM_RAG_260611/Policy_Common/Policy-24-0024.md</code></li>
</ul></div></details>
