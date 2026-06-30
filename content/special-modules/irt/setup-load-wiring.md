# IRT SETUP Load Wiring

<div class="screen-link-wrap">
  <img src="/assets/screens/IRT/SETUP_Measurement.png" alt="IRT SETUP MEASUREMENT Load Wiring">
  <a class="screen-hotspot" href="../home-dashboard/" title="HOME Dashboard로 이동" aria-label="HOME Dashboard로 이동" style="left: 17.4%; top: 2.1%; width: 3.9%; height: 8.4%;">H</a>
  <a class="screen-hotspot" href="../setup-dashboard/" title="SETUP Dashboard로 이동" aria-label="SETUP Dashboard로 이동" style="left: 21.3%; top: 2.1%; width: 3.9%; height: 8.4%;">S</a>
  <a class="screen-hotspot" href="../event-dashboard/" title="EVENT Dashboard로 이동" aria-label="EVENT Dashboard로 이동" style="left: 25.2%; top: 2.1%; width: 3.9%; height: 8.4%;">E</a>
  <a class="screen-hotspot" href="../setup-event-temperature/" title="EVENT Temperature로 이동" aria-label="EVENT Temperature로 이동" style="left: 23.8%; top: 12.5%; width: 15%; height: 10.5%;">EVENT</a>
  <a class="screen-hotspot" href="../setup-description/" title="SYSTEM Description으로 이동" aria-label="SYSTEM Description으로 이동" style="left: 38.8%; top: 12.5%; width: 15%; height: 10.5%;">SYSTEM</a>
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
      <td style="border-right: 1px solid var(--md-typeset-table-color);">Phase Sequence</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">0: A-B-C<br>1: C-B-A</td>
      <td>0: A-B-C</td>
    </tr>
  </tbody>
</table>
</div></details>

<hr class="section-divider">

## 적용 정책

`Policy-23-0037`의 전류모듈 상순서 변경 정책과 동일한 범위를 사용한다. CMS-2P 온도 표시 정책을 준용하여 `Phase Sequence` 변경 시 화면의 `A`, `B`, `C` 상 표시는 고정하고, 각 상에 대응하는 계측값의 표시 순서만 변경한다.

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260604.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260611.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20250612.md</code> (CMS-2P 온도 상 표시 정책 준용)</li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-23-0037.md</code></li>
</ul></div></details>
