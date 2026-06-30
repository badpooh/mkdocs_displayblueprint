# A2500 MAIN SETUP CONTROL Data Reset { .screen-title-fit }

<div class="screen-link-wrap">
  <img src="/assets/screens/MAIN/SETUP/MAIN_SETUP_CONTROL_DataReset.png" alt="A2500 MAIN SETUP CONTROL Data Reset">
  <a class="screen-hotspot" href="../home-voltage-rms/" title="Go to HOME VOLTAGE RMS" aria-label="Go to HOME VOLTAGE RMS" style="left:0%; top:0%; width:17%; height:12.4%;">HOME</a>
  <a class="screen-hotspot" href="../setup-voltage/" title="Go to SETUP MEASUREMENT" aria-label="Go to SETUP MEASUREMENT" style="left:0%; top:12.5%; width:23.8%; height:10.5%;">MEASUREMENT</a>
  <a class="screen-hotspot" href="../setup-event-dip/" title="Go to SETUP EVENT" aria-label="Go to SETUP EVENT" style="left:23.8%; top:12.5%; width:14.5%; height:10.5%;">EVENT</a>
  <a class="screen-hotspot" href="../setup-network-ethernet/" title="Go to SETUP NETWORK" aria-label="Go to SETUP NETWORK" style="left:38.3%; top:12.5%; width:18.0%; height:10.5%;">NETWORK</a>
  <a class="screen-hotspot" href="../setup-device-main-cm/" title="Go to SETUP DEVICE" aria-label="Go to SETUP DEVICE" style="left:56.3%; top:12.5%; width:14.8%; height:10.5%;">DEVICE</a>
  <a class="screen-hotspot" href="../setup-control-test-mode/" title="Go to SETUP CONTROL" aria-label="Go to SETUP CONTROL" style="left:71.1%; top:12.5%; width:15.9%; height:10.5%;">CONTROL</a>
  <a class="screen-hotspot" href="../setup-system-description/" title="Go to SETUP SYSTEM" aria-label="Go to SETUP SYSTEM" style="left:87.0%; top:12.5%; width:13.0%; height:10.5%;">SYSTEM</a>
  <a class="screen-hotspot" href="../setup-control-test-mode/" title="Go to SETUP CONTROL Test Mode" aria-label="Go to SETUP CONTROL Test Mode" style="left:0%; top:24%; width:19.4%; height:9.2%;">Test Mode</a>
  <a class="screen-hotspot" href="../setup-control-demand-sync/" title="Go to SETUP CONTROL Demand Sync" aria-label="Go to SETUP CONTROL Demand Sync" style="left:0%; top:33%; width:19.4%; height:9.6%;">Demand Sync</a>
  <a class="screen-hotspot" href="../setup-control-data-reset/" title="Go to SETUP CONTROL Data Reset" aria-label="Go to SETUP CONTROL Data Reset" style="left:0%; top:42.5%; width:19.4%; height:9.6%;">Data Reset</a>
</div>

<!-- codex-policy-start -->
## 정책

<details class="policy-details">
  <summary>정책</summary>
  <div class="policy-details__body">
    <h4>화면 정책</h4>
    <ul>
      <li><code>Test Mode</code>, <code>Data Reset</code>, <code>Demand Sync</code>는 HOME 계측값, Energy, Peak, Min/Max 저장값과 직접 연결되는 제어 화면으로 정리한다.</li>
      <li>Data Reset은 대상 값만 명시적으로 초기화하며, HOME 화면의 Min/Max/Peak 보존 정책과 함께 적용한다.</li>
    </ul>
    <p>근거: <code>Policy-23-0042</code>, <code>Policy-23-0053</code>, <code>Policy-23-0054</code>, <code>Policy-24-0013</code>, <code>Policy-24-0003</code></p>
  </div>
</details>
<!-- codex-policy-end -->
