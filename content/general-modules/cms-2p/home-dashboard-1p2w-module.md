# CMS-2P HOME Dashboard 1P2W

<div class="screen-link-wrap">
  <img src="/assets/screens/CMS-2P/CMS_2P_1P2W-HOME_Dashboard_2.png" alt="CMS-2P 1P2W HOME Dashboard">
  <a class="screen-hotspot" href="../home-dashboard-1p2w-main/" title="1P2W MAIN Dashboard로 이동" aria-label="좌측 화살표로 1P2W MAIN Dashboard 이동" style="left:30%; top:1%; width:5%; height:11%;">◀</a>
  <a class="screen-hotspot" href="../home-dashboard-1p2w-main/" title="1P2W MAIN Dashboard로 이동" aria-label="우측 화살표로 1P2W MAIN Dashboard 이동" style="left:66%; top:1%; width:4%; height:11%;">▶</a>
  <span class="screen-marker" aria-hidden="true" style="left:31%; top:29%;">1</span>
  <span class="screen-marker" aria-hidden="true" style="left:93.5%; top:68.5%;">2</span>
</div>

## 적용 정책

- 좌측·우측 화살표 중 어느 쪽을 눌러도 1P2W MAIN Dashboard로 이동한다.
- 1P2W Dashboard는 단일 피더의 전압·전류·전력·전력량을 표시한다.

<hr class="section-divider">

## 화면 동작

<p><span class="marker-ref">1</span><strong>전압 표시 및 전압 버튼 숨김</strong></p>

- 분기의 상선택 정보에 따라 전압 표시 방식을 결정한다.
  - 상선택이 `AN` 또는 `NA`이면 상전압을 표시한다.
  - 상선택이 `AB` 또는 `BA`이면 선간전압을 표시한다.
- 「L-L」·「L-N」 버튼을 숨긴다.

<p><span class="marker-ref">2</span><strong>모듈선택에 따른 항목값 갱신</strong></p>

- 모듈선택에 따라 화면 항목값을 갱신한다.
  - 메인 선택 시 A2500M의 값을 표시한다.
  - 분기 선택 시 선택된 분기 모듈의 값을 표시한다.

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>docs/assets/screens/CMS-2P/CMS_2P_1P2W-HOME_Dashboard_2.png</code></li>
  <li><code>LLM_RAG_260611/Policy_A2500/정기회의-20230420.md</code></li>
  <li><code>LLM_RAG_260611/Policy_Common/Policy-24-0024.md</code></li>
</ul></div></details>
