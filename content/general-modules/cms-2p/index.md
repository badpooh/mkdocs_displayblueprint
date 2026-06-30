# CMS-2P

`A2550CMS-2P`는 A2500에 연결되는 일반모듈이며, 결선모드에 따라 HOME Dashboard의 상·피더 표시가 변경된다.

## 화면 구성

CMS-2P는 결선 설정 기준으로 화면을 묶어 관리한다. 각 설정 안에서 HOME Dashboard, CURRENT 등 세부 화면으로 이동한다.

| 결선모드 | 화면 묶음 | 주요 화면 |
| --- | --- | --- |
| 1P2F | [CMS-2P 1P2F](1p2f.md) | HOME Dashboard, HOME CURRENT |
| 1P2W | [CMS-2P 1P2W](1p2w.md) | HOME Dashboard |
| 3P3W | [CMS-2P 3P3W](3p3w.md) | HOME Dashboard |
| 3P4W | [CMS-2P 3P4W](3p4w.md) | HOME Dashboard |

## 적용 기준

<details class="policy-details">
  <summary>Dashboard 공통 기준</summary>
  <div class="policy-details__body"><ul>
    <li>3P3W와 3P4W는 동일한 Dashboard 구성을 사용한다.</li>
    <li>3P4W의 MAIN 화면은 3P3W MAIN 화면 자산을 공통으로 사용하되, 모듈 전환 시 3P4W CMS-2P 화면으로 이동한다.</li>
    <li>결선모드별 MAIN과 CMS-2P 화면에서 좌측·우측 화살표 중 어느 쪽을 눌러도 서로 대응하는 화면으로 전환한다.</li>
  </ul></div>
</details>

<details class="policy-details">
  <summary>모듈 전환 기준</summary>
  <div class="policy-details__body"><ul>
    <li>상단 모듈선택창은 Module ID 오름차순으로 이동한다.</li>
    <li>같은 모델이면 화면 Index를 유지하고, 다른 모델이면 해당 모델·모드의 최근 화면으로 이동한다. 최근 화면이 없으면 현재 모드 Dashboard를 표시한다.</li>
    <li>Dashboard에서 모듈 전환 시 화면별 선택값은 디폴트 상태로 표시한다.</li>
  </ul></div>
</details>

<hr class="section-divider">

## 근거

<details class="section-toggle"><summary>근거</summary><div class="section-toggle__body"><ul>
  <li><code>LLM_RAG_260611/Policy_A2500/정기회의-20230202.md</code></li>
  <li><code>LLM_RAG_260611/Policy_A2500/정기회의-20230407.md</code></li>
  <li><code>LLM_RAG_260611/Policy_A2500/정기회의-20230420.md</code></li>
  <li><code>LLM_RAG_260611/Policy_Common/Policy-24-0024.md</code></li>
</ul></div></details>
