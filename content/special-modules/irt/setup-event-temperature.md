# IRT SETUP EVENT Temperature

<div class="screen-link-wrap">
  <img src="/assets/screens/IRT/SETUP_Event.png" alt="IRT SETUP EVENT Temperature">
  <a class="screen-hotspot" href="../home-dashboard/" title="HOME Dashboard로 이동" aria-label="HOME Dashboard로 이동" style="left: 17.4%; top: 2.1%; width: 3.9%; height: 8.4%;">H</a>
  <a class="screen-hotspot" href="../setup-dashboard/" title="SETUP Dashboard로 이동" aria-label="SETUP Dashboard로 이동" style="left: 21.3%; top: 2.1%; width: 3.9%; height: 8.4%;">S</a>
  <a class="screen-hotspot" href="../event-dashboard/" title="EVENT Dashboard로 이동" aria-label="EVENT Dashboard로 이동" style="left: 25.2%; top: 2.1%; width: 3.9%; height: 8.4%;">E</a>
  <a class="screen-hotspot" href="../setup-load-wiring/" title="MEASUREMENT Load Wiring으로 이동" aria-label="MEASUREMENT Load Wiring으로 이동" style="left: 0%; top: 12.5%; width: 23.8%; height: 10.5%;">MEASUREMENT</a>
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
      <td style="border-right: 1px solid var(--md-typeset-table-color);">Trigger</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">0: Disable<br>1: Enable</td>
      <td>0: Disable</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">Threshold [℃]</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">0.0–150.0</td>
      <td>75.0</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">Time Delay [ms]</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">0–10000</td>
      <td>0</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">DO Notification</td>
      <td style="border-right: 1px solid var(--md-typeset-table-color);">0: Not Used<br>1–12: DO.1–DO.12</td>
      <td>0: Not Used</td>
    </tr>
  </tbody>
</table>
</div></details>

<hr class="section-divider">

## 적용 정책

Hysteresis는 장치 화면에 표시하지 않으며 내부 고정값 `2.0℃`를 적용한다. 추후 A2550CMS-2P에도 동일한 정책을 적용한다.

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260604.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260611.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-23-0052.md</code></li>
</ul></div></details>
