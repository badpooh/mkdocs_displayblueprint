# A2500 MAIN HOME VOLTAGE RMS L-L { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/HOME/MAIN_HOME_VOLTAGE_RMS_LL.png" alt="A2500 MAIN HOME VOLTAGE RMS L-L">
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
  <a class="screen-hotspot" href="../home-voltage-rms-ln/" title="Go to L-N state" aria-label="Go to L-N state" style="left:58.8%; top:26.5%; width:12.6%; height:8.7%;">L-N</a>
  <a class="screen-hotspot" href="../home-voltage-rms-ll-min/" title="Go to Min state" aria-label="Go to Min state" style="left:71.8%; top:26.5%; width:12.4%; height:8.7%;">Min</a>
  <a class="screen-hotspot" href="../home-voltage-rms-ll-max/" title="Go to Max state" aria-label="Go to Max state" style="left:84.4%; top:26.5%; width:12.6%; height:8.7%;">Max</a>
</div>

## UI 정보

<details class="section-toggle section-toggle--primary">
  <summary>UI 정보</summary>
  <div class="section-toggle__body">
    <p>아래 도면은 <code>HOME_VOLTAGE_RMS_layout.png</code> 기준의 UI 배치 정보다. 도면 안에 표시된 좌표, 크기, 간격, 폰트 크기 정보를 우선 기준으로 사용한다.</p>

    <img class="ui-layout-image" src="/assets/screens/MAIN/HOME/MAIN_HOME_VOLTAGE_RMS_layout.png" alt="VOLTAGE RMS UI layout">

    <h3>도면 보완 정보</h3>
    <p>도면에 직접 표시되지 않은 색상, 폰트 테마, 선 두께, 스케일 기준만 아래 표에 별도로 정리한다.</p>

    <table>
      <thead>
        <tr><th>항목</th><th>UI 스펙</th></tr>
      </thead>
      <tbody>
        <tr><td>구현 기준 해상도</td><td><code>800 x 480 px</code></td></tr>
        <tr><td>도면 이미지 해상도</td><td><code>2666 x 1600 px</code></td></tr>
        <tr><td>좌표 스케일 기준</td><td>실제 구현 좌표는 <code>800 x 480 px</code> 기준을 사용한다. 도면 이미지는 설명용 확대 이미지다.</td></tr>
        <tr><td>기본 폰트 테마</td><td><code>Inter</code>, fallback <code>Arial</code>, <code>sans-serif</code></td></tr>
        <tr><td>기본 텍스트 색상</td><td><code>#000000</code></td></tr>
        <tr><td>상단 상태바 배경</td><td><code>#b9ccda</code></td></tr>
        <tr><td>선택 탭/선택 버튼 배경</td><td><code>#21426a</code></td></tr>
        <tr><td>비선택 탭/비선택 버튼 배경</td><td><code>#718ea2</code></td></tr>
        <tr><td>본문 패널 배경</td><td><code>#ffffff</code></td></tr>
        <tr><td>좌측 하위 메뉴 비선택 배경</td><td><code>#dedede</code></td></tr>
        <tr><td>좌측 하위 메뉴 빈 영역 배경</td><td><code>#b1b1b1</code></td></tr>
        <tr><td>데이터뷰 제목 색상</td><td><code>#565757</code></td></tr>
        <tr><td>데이터 행 구분선</td><td><code>#dedede</code>, <code>1px</code></td></tr>
        <tr><td>제목 하단 기준선</td><td>상단 진한 선 <code>#565757</code>, 하단 보조선 <code>#aaaaaa</code>, 총 약 <code>3px</code></td></tr>
        <tr><td>ID 배지 배경</td><td><code>#106ac4</code></td></tr>
        <tr><td>AC 배지 배경</td><td><code>#6949c5</code> 계열</td></tr>
        <tr><td>알람 배지 배경</td><td><code>#fe8325</code></td></tr>
        <tr><td>MAIN 박스 radius</td><td>약 <code>6px</code></td></tr>
        <tr><td>ID/알람 배지 radius</td><td>pill 형태, 높이의 약 <code>50%</code></td></tr>
        <tr><td>본문 탭 버튼 radius</td><td><code>0px</code>, 직각 처리</td></tr>
        <tr><td>HOME 텍스트</td><td>약 <code>28px</code>, Bold</td></tr>
        <tr><td>MAIN 텍스트</td><td>약 <code>24px</code>, Bold</td></tr>
        <tr><td>1차 탭 텍스트</td><td>약 <code>20px</code>, Bold</td></tr>
        <tr><td>좌측 하위 메뉴 텍스트</td><td>약 <code>18px</code>, Regular, 선택 항목은 Bold</td></tr>
        <tr><td>데이터뷰 제목 텍스트</td><td>약 <code>24px</code>, Bold</td></tr>
        <tr><td>L-L/L-N/Min/Max 버튼 텍스트</td><td>약 <code>18px</code>, Bold</td></tr>
        <tr><td>행 라벨 텍스트</td><td>약 <code>24px</code>, Bold</td></tr>
        <tr><td>계측값 텍스트</td><td><code>48px</code>, Bold</td></tr>
        <tr><td>단위 텍스트</td><td>약 <code>25px</code>, Bold</td></tr>
        <tr><td>클릭 핫스팟</td><td>화면 이미지를 기준으로 <code>Residual</code> 영역과 <code>ANALYSIS</code> 탭 영역에 투명 링크를 둔다.</td></tr>
      </tbody>
    </table>
  </div>
</details>

<hr class="section-divider">

<!-- codex-policy-start -->
## 화면 정책

<details class="policy-details">
  <summary>적용 완료 정책</summary>
  <div class="policy-details__body">
    <p>이 화면에 실제 반영된 정책만 적용 완료 항목으로 정리한다.</p>
    <details class="policy-details">
      <summary>적용 완료: VOLTAGE 하위 메뉴 통합</summary>
      <div class="policy-details__body">
        <p><code>Policy-24-0018</code>에 따라 A2500의 <code>HOME &gt; VOLTAGE</code>는 A3700N 기준으로 통일한다. 기존의 <code>Line-to-Line</code>/<code>Line-to-Neutral</code> 개별 부메뉴는 <code>RMS</code> 하나로 통합하고, 데이터뷰 안에서 <code>L-L</code>/<code>L-N</code> 탭버튼으로 전환한다.</p>
        <table>
          <thead>
            <tr><th>기존 분리 메뉴</th><th>통합 후 메뉴</th><th>데이터뷰 제목</th></tr>
          </thead>
          <tbody>
            <tr><td><code>Line-to-Line</code>, <code>Line-to-Neutral</code></td><td><code>RMS</code></td><td><code>RMS Voltage</code></td></tr>
            <tr><td><code>LL Fund.</code>, <code>LN Fund.</code></td><td><code>Fundamental</code></td><td><code>Fund. Volt.</code></td></tr>
            <tr><td><code>LL THD %</code>, <code>LN THD %</code></td><td><code>THD %</code></td><td><code>Total Harmonic Distortion</code></td></tr>
          </tbody>
        </table>
        <p>근거: <code>Policy-24-0018</code></p>
      </div>
    </details>

    <details class="policy-details">
      <summary>적용 완료: L-L/L-N 기본 선택</summary>
      <div class="policy-details__body">
        <p><code>Policy-23-0001</code>과 <code>Policy-24-0024</code>에 따라 전압 표시는 <code>L-L</code>을 먼저 배치하고 기본값으로 선택한다. 단, <code>HOME &gt; ANALYSIS &gt; Phasor</code> 화면은 예외적으로 <code>VLN</code>이 기본값이다.</p>
        <p>근거: <code>Policy-23-0001</code>, <code>Policy-24-0024</code></p>
      </div>
    </details>

    <details class="policy-details">
      <summary>적용 완료: 숫자와 단위 표시</summary>
      <div class="policy-details__body">
        <p><code>Policy-23-0018</code>은 TFT LCD 숫자값 단위 표시 정책을 적용한다.</p>
        <table>
          <thead>
            <tr><th>항목</th><th>정책</th></tr>
          </thead>
          <tbody>
            <tr><td>전압 기본 단위</td><td><code>V</code></td></tr>
            <tr><td>Scale</td><td>Reading 4자리</td></tr>
            <tr><td>단위 변경</td><td>값에 따라 <code>V</code>, <code>kV</code>, <code>MV</code> 등 자동 변경</td></tr>
            <tr><td>같은 화면의 같은 종류 값</td><td>Max 값을 기준으로 단위 통일</td></tr>
            <tr><td>반올림</td><td>HOME 계측값은 자리수에 맞게 반올림</td></tr>
            <tr><td>1000자리 구분</td><td>입력값을 제외한 일반 계측값에는 콤마 미표시</td></tr>
          </tbody>
        </table>
        <p>근거: <code>Policy-23-0018</code></p>
      </div>
    </details>
  </div>
</details>
<!-- codex-policy-end -->
