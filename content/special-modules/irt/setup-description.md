# IRT SETUP Description

<div class="screen-link-wrap">
  <img src="/assets/screens/IRT/SETUP_System.png" alt="IRT SETUP SYSTEM Description">
  <a class="screen-hotspot" href="../home-dashboard/" title="HOME Dashboard로 이동" aria-label="HOME Dashboard로 이동" style="left: 17.4%; top: 2.1%; width: 3.9%; height: 8.4%;">H</a>
  <a class="screen-hotspot" href="../setup-dashboard/" title="SETUP Dashboard로 이동" aria-label="SETUP Dashboard로 이동" style="left: 21.3%; top: 2.1%; width: 3.9%; height: 8.4%;">S</a>
  <a class="screen-hotspot" href="../event-dashboard/" title="EVENT Dashboard로 이동" aria-label="EVENT Dashboard로 이동" style="left: 25.2%; top: 2.1%; width: 3.9%; height: 8.4%;">E</a>
  <a class="screen-hotspot" href="../setup-load-wiring/" title="MEASUREMENT Load Wiring으로 이동" aria-label="MEASUREMENT Load Wiring으로 이동" style="left: 0%; top: 12.5%; width: 23.8%; height: 10.5%;">MEASUREMENT</a>
  <a class="screen-hotspot" href="../setup-event-temperature/" title="EVENT Temperature로 이동" aria-label="EVENT Temperature로 이동" style="left: 23.8%; top: 12.5%; width: 15%; height: 10.5%;">EVENT</a>
</div>

## 설정사항

<details class="section-toggle"><summary>설정사항</summary><div class="section-toggle__body">
<table>
  <thead>
    <tr>
      <th style="border-right: 1px solid var(--md-typeset-table-color);">항목</th>
      <th style="border-right: 1px solid var(--md-typeset-table-color);">범위</th>
      <th>디폴트</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">Load Name</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">최대 30자</td>
      <td>Null</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">User-Defined Info</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">최대 30자</td>
      <td>Null</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">Location</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">최대 30자</td>
      <td>Null</td>
    </tr>
  </tbody>
</table>
</div></details>

<hr class="section-divider">

## 적용 정책

각 항목이 20자를 초과하면 `20자+…`로 표시한다. 빈 문자열은 `-`가 아니라 빈칸으로 표시하고, 길이가 제한된 SETUP 화면은 고정폭 폰트를 사용한다.

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260611.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-23-0016.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-24-0027.md</code></li>
</ul></div></details>
