# IRT HOME Temperature

<div class="screen-link-wrap">
  <img src="/assets/screens/IRT/HOME_Temperature.png" alt="IRT HOME MEASUREMENT Temperature">
  <a class="screen-hotspot" href="../home-dashboard/" title="HOME Dashboard로 이동" aria-label="HOME Dashboard로 이동" style="left: 17.4%; top: 2.1%; width: 3.9%; height: 8.4%;">H</a>
  <a class="screen-hotspot" href="../setup-dashboard/" title="SETUP Dashboard로 이동" aria-label="SETUP Dashboard로 이동" style="left: 21.3%; top: 2.1%; width: 3.9%; height: 8.4%;">S</a>
  <a class="screen-hotspot" href="../event-dashboard/" title="EVENT Dashboard로 이동" aria-label="EVENT Dashboard로 이동" style="left: 25.2%; top: 2.1%; width: 3.9%; height: 8.4%;">E</a>
  <a class="screen-hotspot" href="../home-description/" title="SYSTEM Description으로 이동" aria-label="SYSTEM Description으로 이동" style="left: 23.8%; top: 12.5%; width: 15%; height: 10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../home-temperature-min/" title="Temperature Min으로 이동" aria-label="Temperature Min으로 이동" style="left: 71.8%; top: 26.5%; width: 12.4%; height: 8.7%;">Min</a>
  <a class="screen-hotspot" href="../home-temperature-max/" title="Temperature Max로 이동" aria-label="Temperature Max로 이동" style="left: 84.4%; top: 26.5%; width: 12.6%; height: 8.7%;">Max</a>
</div>

## 적용 정책

- 표시 채널: `A`, `B`, `C`
- Min/Max 버튼은 `Min`, `Max` 순서로 배치한다.
- 온도는 FullScale 소수 1자리로 표시하며 온도 단위 설정에 따라 `℃/℉`를 사용한다.
- CMS-2P 온도 표시 정책을 준용한다. `Phase Sequence`가 `A-B-C` 또는 `C-B-A`로 변경되어도 화면의 상 표시는 `A`, `B`, `C`로 고정하고, 각 상에 대응하는 계측값의 표시 순서만 변경한다.
- 온도 막대 색상은 CMS-2P의 온도 그래프 색상 구간을 동일하게 적용한다.

| 온도 범위 | 표시 색상 | 색상 코드 |
| --- | --- | --- |
| `x < 25.0` | <span style="color:#0091FF; text-shadow:0 0 1px #333;">파랑</span> | <span style="color:#0091FF; text-shadow:0 0 1px #333;">#0091FF</span> |
| `25.0 <= x < 50.0` | <span style="color:#00FFFF; text-shadow:0 0 1px #333;">청록</span> | <span style="color:#00FFFF; text-shadow:0 0 1px #333;">#00FFFF</span> |
| `50.0 <= x < 75.0` | <span style="color:#28FF00; text-shadow:0 0 1px #333;">초록</span> | <span style="color:#28FF00; text-shadow:0 0 1px #333;">#28FF00</span> |
| `75.0 <= x < 100.0` | <span style="color:#FFEE00; text-shadow:0 0 1px #333;">노랑</span> | <span style="color:#FFEE00; text-shadow:0 0 1px #333;">#FFEE00</span> |
| `100.0 <= x < 125.0` | <span style="color:#FF9100; text-shadow:0 0 1px #333;">주황</span> | <span style="color:#FF9100; text-shadow:0 0 1px #333;">#FF9100</span> |
| `125.0 <= x` | <span style="color:#FF0000; text-shadow:0 0 1px #333;">빨강</span> | <span style="color:#FF0000; text-shadow:0 0 1px #333;">#FF0000</span> |

- 막대 길이의 계산 기준은 확인한 정책에 명시되어 있지 않다.

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260604.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20260611.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_A2500/임시회의-20250612.md</code> (CMS-2P 온도 상 표시 및 그래프 색상 정책 준용)</li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-23-0002.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-23-0018.md</code></li>
  <li><code>RawData/LLM_RAG_260611/Policy_Common/Policy-24-0024.md</code></li>
</ul></div></details>
