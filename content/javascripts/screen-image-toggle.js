document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : event.target?.parentElement;
  const button = target?.closest("[data-screen-image-toggle]");
  if (!button) return;

  const screen = button.closest(".screen-link-wrap");
  const image = screen?.querySelector("img");
  if (!image) return;

  const showingAlternate = button.getAttribute("aria-pressed") === "true";
  image.src = showingAlternate ? button.dataset.defaultSrc : button.dataset.alternateSrc;
  image.alt = showingAlternate
    ? button.dataset.defaultAlt || "CMS-2P 1P2F HOME Dashboard Fd.1"
    : button.dataset.alternateAlt || "CMS-2P 1P2F HOME Dashboard Fd.2";
  button.setAttribute("aria-pressed", String(!showingAlternate));
  button.setAttribute(
    "aria-label",
    showingAlternate
      ? button.dataset.defaultAriaLabel || "Fd.2 화면으로 전환"
      : button.dataset.alternateAriaLabel || "Fd.1 화면으로 전환",
  );
});

document.querySelectorAll("[data-screen-image-toggle]").forEach((button) => {
  const alternateImage = new Image();
  alternateImage.src = button.dataset.alternateSrc;
});

const hotspot = (href, label, style, options = {}) => ({ href, label, style, ...options });

const topHomeDcHotspots = [
  hotspot("../home-dashboard/", "HOME Dashboard로 이동", "left:17.4%; top:2.1%; width:3.9%; height:8.4%;"),
  hotspot("../home-voltage-dc/", "VOLTAGE DC로 이동", "left:0%; top:12.5%; width:17.5%; height:10.5%;"),
  hotspot("../home-current-dc/", "CURRENT DC로 이동", "left:17.5%; top:12.5%; width:16.3%; height:10.5%;"),
  hotspot("../home-power-dc/", "POWER DC로 이동", "left:33.8%; top:12.5%; width:16.2%; height:10.5%;"),
  hotspot("../home-energy-dc/", "ENERGY DC로 이동", "left:50%; top:12.5%; width:16.3%; height:10.5%;"),
  hotspot("../home-analysis-waveform/", "ANALYSIS Waveform으로 이동", "left:66.3%; top:12.5%; width:16.2%; height:10.5%;"),
  hotspot("../home-system-description/", "SYSTEM Description으로 이동", "left:82.5%; top:12.5%; width:17.5%; height:10.5%;"),
];

const a2500DcHotspots = {
  "MAIN_DC_HOME_Dashboard.png": [
    ...topHomeDcHotspots,
    hotspot("../home-voltage-dc/", "VOLTAGE 카드에서 DC 전압으로 이동", "left:1.5%; top:25.3%; width:31.7%; height:35.5%;"),
    hotspot(null, "VOLTAGE Dashboard RMS 화면으로 전환", "left:22.6%; top:25.6%; width:10%; height:9%;", {
      alternateSrc: "/assets/screens/MAIN/DC_HOME/MAIN_DC_HOME_Dashboard_RMS.png",
      defaultSrc: "/assets/screens/MAIN/DC_HOME/MAIN_DC_HOME_Dashboard.png",
      defaultAlt: "A2500_DC MAIN DC_HOME Dashboard",
      alternateAlt: "A2500_DC MAIN DC_HOME Dashboard RMS",
      defaultAriaLabel: "VOLTAGE Dashboard RMS 화면으로 전환",
      alternateAriaLabel: "VOLTAGE Dashboard DC 화면으로 전환",
    }),
    hotspot("../home-current-dc/", "CURRENT 카드에서 DC 전류로 이동", "left:34%; top:25.3%; width:31.8%; height:35.5%;"),
    hotspot("../home-power-dc/", "POWER 카드에서 DC 전력으로 이동", "left:66.7%; top:25.3%; width:31.7%; height:35.5%;"),
    hotspot("../home-energy-dc/", "ENERGY 카드에서 DC 전력량으로 이동", "left:1.5%; top:61.8%; width:31.7%; height:35.5%;"),
    hotspot("../home-analysis-waveform/", "ANALYSIS 카드에서 Waveform으로 이동", "left:34%; top:61.8%; width:31.8%; height:35.5%;"),
    hotspot("../home-system-description/", "SYSTEM 카드에서 Description으로 이동", "left:66.7%; top:61.8%; width:31.7%; height:35.5%;"),
  ],
  "MAIN_DC_HOME_VOLTAGE_DC.png": [
    ...topHomeDcHotspots,
    hotspot("../home-voltage-dc/", "DC Voltage로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-voltage-rms/", "RMS Voltage로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_VOLTAGE_RMS.png": [
    ...topHomeDcHotspots,
    hotspot("../home-voltage-dc/", "DC Voltage로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-voltage-rms/", "RMS Voltage로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_CURRENT_DC.png": [
    ...topHomeDcHotspots,
    hotspot("../home-current-dc/", "DC Current로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-current-rms/", "RMS Current로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual/", "DC Residual Current로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-rms-residual/", "RMS Residual Current로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_CURRENT_RMS.png": [
    ...topHomeDcHotspots,
    hotspot("../home-current-dc/", "DC Current로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-current-rms/", "RMS Current로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual/", "DC Residual Current로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-rms-residual/", "RMS Residual Current로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_CURRENT_DCResidual.png": [
    ...topHomeDcHotspots,
    hotspot("../home-current-dc/", "DC Current로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-current-rms/", "RMS Current로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual/", "DC Residual Current로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-rms-residual/", "RMS Residual Current로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual-max/", "Max 상태로 이동", "left:84.4%; top:26.5%; width:12.6%; height:8.7%;"),
  ],
  "MAIN_DC_HOME_CURRENT_DCResidual_Max.png": [
    ...topHomeDcHotspots,
    hotspot("../home-current-dc/", "DC Current로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-current-rms/", "RMS Current로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual/", "DC Residual Current로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-rms-residual/", "RMS Residual Current로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual/", "Min 상태로 이동", "left:71.8%; top:26.5%; width:12.4%; height:8.7%;"),
  ],
  "MAIN_DC_HOME_CURRENT_RMSResidual.png": [
    ...topHomeDcHotspots,
    hotspot("../home-current-dc/", "DC Current로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-current-rms/", "RMS Current로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-dc-residual/", "DC Residual Current로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../home-current-rms-residual/", "RMS Residual Current로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_POWER_DC.png": [
    ...topHomeDcHotspots,
    hotspot("../home-power-dc/", "DC Power로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-power-real/", "Real Power로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_POWER_Real.png": [
    ...topHomeDcHotspots,
    hotspot("../home-power-dc/", "DC Power로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-power-real/", "Real Power로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_ENERGY_DC.png": [
    ...topHomeDcHotspots,
    hotspot("../home-energy-dc/", "DC Energy로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-energy-real/", "Real Energy로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_ENERGY_Real.png": [
    ...topHomeDcHotspots,
    hotspot("../home-energy-dc/", "DC Energy로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-energy-real/", "Real Energy로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_ANALYSIS_Waveform.png": [
    ...topHomeDcHotspots,
    hotspot("../home-analysis-waveform/", "Waveform으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  ],
  "MAIN_DC_HOME_SYSTEM_Description.png": [
    ...topHomeDcHotspots,
    hotspot("../home-system-description/", "Description으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-system-a2550dcm/", "A2550DCM Information으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-system-do/", "DO로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_SYSTEM_A2550DCM.png": [
    ...topHomeDcHotspots,
    hotspot("../home-system-description/", "Description으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-system-a2550dcm/", "A2550DCM Information으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-system-do/", "DO로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
  ],
  "MAIN_DC_HOME_SYSTEM_DO.png": [
    ...topHomeDcHotspots,
    hotspot("../home-system-description/", "Description으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../home-system-a2550dcm/", "A2550DCM Information으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../home-system-do/", "DO로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
  ],
};

const dcmModeHotspots = [
  hotspot("../home-dashboard/", "HOME Dashboard로 이동", "left:17.4%; top:2.1%; width:3.9%; height:8.4%;"),
  hotspot("../setup-dashboard/", "SETUP Dashboard로 이동", "left:21.3%; top:2.1%; width:3.9%; height:8.4%;"),
  hotspot("../event-dashboard/", "EVENT Dashboard로 이동", "left:25.2%; top:2.1%; width:3.9%; height:8.4%;"),
];

const dcmHomeTopHotspots = [
  ...dcmModeHotspots,
  hotspot("../home-voltage-dc/", "VOLTAGE DC로 이동", "left:0%; top:12.5%; width:17.5%; height:10.5%;"),
  hotspot("../home-current-dc/", "CURRENT DC로 이동", "left:17.5%; top:12.5%; width:16.3%; height:10.5%;"),
  hotspot("../home-power-dc/", "POWER DC로 이동", "left:33.8%; top:12.5%; width:16.2%; height:10.5%;"),
  hotspot("../home-energy-dc/", "ENERGY DC로 이동", "left:50%; top:12.5%; width:16.3%; height:10.5%;"),
  hotspot("../home-analysis-waveform/", "ANALYSIS Waveform으로 이동", "left:66.3%; top:12.5%; width:16.2%; height:10.5%;"),
  hotspot("../home-system-description/", "SYSTEM Description으로 이동", "left:82.5%; top:12.5%; width:17.5%; height:10.5%;"),
];

const dcmHomeVoltageHotspots = [
  ...dcmHomeTopHotspots,
  hotspot("../home-voltage-dc/", "DC Voltage로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  hotspot("../home-voltage-rms/", "RMS Voltage로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
];

const dcmHomeCurrentHotspots = [
  ...dcmHomeTopHotspots,
  hotspot("../home-current-dc/", "DC Current로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  hotspot("../home-current-rms/", "RMS Current로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  hotspot("../home-current-dc-residual/", "DC Residual Current로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
  hotspot("../home-current-rms-residual/", "RMS Residual Current로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
];

const dcmHomePowerHotspots = [
  ...dcmHomeTopHotspots,
  hotspot("../home-power-dc/", "DC Power로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  hotspot("../home-power-real/", "Real Power로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
];

const dcmHomeEnergyHotspots = [
  ...dcmHomeTopHotspots,
  hotspot("../home-energy-dc/", "DC Energy로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  hotspot("../home-energy-real/", "Real Energy로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
];

const dcmHomeAnalysisHotspots = [
  ...dcmHomeTopHotspots,
  hotspot("../home-analysis-waveform/", "Waveform으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
];

const dcmHomeSystemHotspots = [
  ...dcmHomeTopHotspots,
  hotspot("../home-system-description/", "Description으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  hotspot("../home-system-a2550dcm/", "A2550DCM Information으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  hotspot("../home-system-do/", "DO로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
];

const dcmSetupTopHotspots = [
  ...dcmModeHotspots,
  hotspot("../setup-measurement-voltage/", "MEASUREMENT Voltage로 이동", "left:0%; top:12.5%; width:23.8%; height:10.5%;"),
  hotspot("../setup-event-voltage/", "EVENT Voltage로 이동", "left:23.8%; top:12.5%; width:15%; height:10.5%;"),
  hotspot("../setup-io-do/", "I/O DO로 이동", "left:38.8%; top:12.5%; width:15%; height:10.5%;"),
  hotspot("../setup-control-dc-adjustment/", "CONTROL DC Adjustment로 이동", "left:53.8%; top:12.5%; width:15%; height:10.5%;"),
  hotspot("../setup-system-description/", "SYSTEM Description으로 이동", "left:68.8%; top:12.5%; width:15%; height:10.5%;"),
];

const dcmEventTopHotspots = [
  ...dcmModeHotspots,
  hotspot("../event-measurement-all/", "MEASUREMENT All로 이동", "left:0%; top:12.5%; width:23.8%; height:10.5%;"),
];

const dcmHotspots = {
  "DCM-50V-80A_HOME_Dashboard.png": [
    ...dcmHomeTopHotspots,
    hotspot("../home-voltage-dc/", "VOLTAGE 카드에서 DC 전압으로 이동", "left:1.5%; top:25.3%; width:31.7%; height:35.5%;"),
    hotspot(null, "VOLTAGE Dashboard RMS 화면으로 전환", "left:22.6%; top:25.6%; width:10%; height:9%;", {
      alternateSrc: "/assets/screens/DCM-50V-80A/DCM-50V-80A_SETUP_Dashboard_real.png",
      defaultSrc: "/assets/screens/DCM-50V-80A/DCM-50V-80A_HOME_Dashboard.png",
      defaultAlt: "DCM-50V-80A HOME Dashboard",
      alternateAlt: "DCM-50V-80A HOME Dashboard RMS",
      defaultAriaLabel: "VOLTAGE Dashboard RMS 화면으로 전환",
      alternateAriaLabel: "VOLTAGE Dashboard DC 화면으로 전환",
    }),
    hotspot("../home-current-dc/", "CURRENT 카드에서 DC 전류로 이동", "left:34%; top:25.3%; width:31.8%; height:35.5%;"),
    hotspot("../home-power-dc/", "POWER 카드에서 DC 전력으로 이동", "left:66.7%; top:25.3%; width:31.7%; height:35.5%;"),
    hotspot("../home-energy-dc/", "ENERGY 카드에서 DC 전력량으로 이동", "left:1.5%; top:61.8%; width:31.7%; height:35.5%;"),
    hotspot("../home-analysis-waveform/", "ANALYSIS 카드에서 Waveform으로 이동", "left:34%; top:61.8%; width:31.8%; height:35.5%;"),
    hotspot("../home-system-description/", "SYSTEM 카드에서 Description으로 이동", "left:66.7%; top:61.8%; width:31.7%; height:35.5%;"),
  ],
  "DCM-50V-80A_VOLTAGE_DC.png": [
    ...dcmHomeVoltageHotspots,
  ],
  "DCM-50V-80A_VOLTAGE_RMS.png": [
    ...dcmHomeVoltageHotspots,
  ],
  "DCM-50V-80A_Current_DC.png": [
    ...dcmHomeCurrentHotspots,
  ],
  "DCM-50V-80A_Current_RMS.png": [
    ...dcmHomeCurrentHotspots,
  ],
  "DCM-50V-80A_HOME_CURRENT_DCResidual.png": [
    ...dcmHomeCurrentHotspots,
    hotspot("../home-current-dc-residual-min/", "Min 상태로 이동", "left:71.8%; top:26.5%; width:12.4%; height:8.7%;"),
    hotspot("../home-current-dc-residual-max/", "Max 상태로 이동", "left:84.4%; top:26.5%; width:12.6%; height:8.7%;"),
  ],
  "DCM-50V-80A_HOME_CURRENT_DCResidual_Min.png": [
    ...dcmHomeCurrentHotspots,
    hotspot("../home-current-dc-residual/", "현재 상태로 이동", "left:59%; top:26.5%; width:12.4%; height:8.7%;"),
    hotspot("../home-current-dc-residual-max/", "Max 상태로 이동", "left:84.4%; top:26.5%; width:12.6%; height:8.7%;"),
  ],
  "DCM-50V-80A_HOME_CURRENT_DCResidual_Max.png": [
    ...dcmHomeCurrentHotspots,
    hotspot("../home-current-dc-residual/", "현재 상태로 이동", "left:59%; top:26.5%; width:12.4%; height:8.7%;"),
    hotspot("../home-current-dc-residual-min/", "Min 상태로 이동", "left:71.8%; top:26.5%; width:12.4%; height:8.7%;"),
  ],
  "DCM-50V-80A_HOME_CURRENT_RMSResidual.png": [
    ...dcmHomeCurrentHotspots,
  ],
  "DCM-50V-80A_HOME_POWER_DC.png": [
    ...dcmHomePowerHotspots,
  ],
  "DCM-50V-80A_HOME_POWER_Real.png": [
    ...dcmHomePowerHotspots,
  ],
  "DCM-50V-80A_HOME_ENERGY_DC.png": [
    ...dcmHomeEnergyHotspots,
  ],
  "DCM-50V-80A_HOME_ENERGY_Real.png": [
    ...dcmHomeEnergyHotspots,
  ],
  "DCM-50V-80A_HOME_ANALYSIS_Waveform.png": [
    ...dcmHomeAnalysisHotspots,
  ],
  "DCM-50V-80A_HOME_SYSTEM_Description.png": [
    ...dcmHomeSystemHotspots,
  ],
  "DCM-50V-80A_HOME_SYSTEM_A2550DCM.png": [
    ...dcmHomeSystemHotspots,
  ],
  "DCM-50V-80A_HOME_SYSTEM_DO.png": [
    ...dcmHomeSystemHotspots,
  ],
  "DCM-50V-80A_SETUP_Dashboard.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-measurement-voltage/", "MEASUREMENT 카드에서 Voltage로 이동", "left:1.5%; top:25.3%; width:31.7%; height:35.5%;"),
    hotspot("../setup-event-voltage/", "EVENT 카드에서 Voltage로 이동", "left:34%; top:25.3%; width:31.8%; height:35.5%;"),
    hotspot("../setup-io-do/", "DO 카드로 이동", "left:66.7%; top:25.3%; width:31.7%; height:35.5%;"),
    hotspot("../setup-control-dc-adjustment/", "CONTROL 카드에서 DC Adjustment로 이동", "left:1.5%; top:61.8%; width:31.7%; height:35.5%;"),
    hotspot("../setup-system-description/", "SYSTEM 카드에서 Description으로 이동", "left:34%; top:61.8%; width:31.8%; height:35.5%;"),
  ],
  "DCM-50V-80A_SETUP_MEASUREMENT_Voltage.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-measurement-voltage/", "Voltage 설정으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../setup-measurement-current/", "Current 설정으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_SETUP_MEASUREMENT_Current.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-measurement-voltage/", "Voltage 설정으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../setup-measurement-current/", "Current 설정으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_SETUP_EVENT_Voltage.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-event-voltage/", "Voltage 이벤트 설정으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../setup-event-current/", "Current 이벤트 설정으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_SETUP_EVENT_Current.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-event-voltage/", "Voltage 이벤트 설정으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../setup-event-current/", "Current 이벤트 설정으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_SETUP_IO_DO.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-io-do/", "DO 설정으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  ],
  "DCM-50V-80A_SETUP_CONTROL_DCAdjustment.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-control-dc-adjustment/", "DC Adjustment로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  ],
  "DCM-50V-80A_SETUP_SYSTEM_Description.png": [
    ...dcmSetupTopHotspots,
    hotspot("../setup-system-description/", "Description으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
  ],
  "DCM-50V-80A_EVENT_Dashboard.png": [
    ...dcmEventTopHotspots,
    hotspot("../event-measurement-all/", "MEASUREMENT 카드에서 All로 이동", "left:1.5%; top:25.3%; width:33%; height:23.5%;"),
    hotspot("../event-measurement-voltage/", "Voltage 이벤트 목록으로 이동", "left:38%; top:37%; width:59%; height:10.5%;"),
    hotspot("../event-measurement-current/", "Current 이벤트 목록으로 이동", "left:38%; top:47.5%; width:59%; height:10.5%;"),
    hotspot("../event-measurement-power/", "Power 이벤트 목록으로 이동", "left:38%; top:58%; width:59%; height:10.5%;"),
    hotspot("../event-measurement-etc/", "Etc. 이벤트 목록으로 이동", "left:38%; top:68.5%; width:59%; height:10.5%;"),
  ],
  "DCM-50V-80A_EVENT_MEASUREMENT_All.png": [
    ...dcmEventTopHotspots,
    hotspot("../event-measurement-all/", "All 이벤트 목록으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../event-measurement-voltage/", "Voltage 이벤트 목록으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-current/", "Current 이벤트 목록으로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-power/", "Power 이벤트 목록으로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-etc/", "Etc. 이벤트 목록으로 이동", "left:0%; top:61.2%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_EVENT_MEASUREMENT_Voltage.png": [
    ...dcmEventTopHotspots,
    hotspot("../event-measurement-all/", "All 이벤트 목록으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../event-measurement-voltage/", "Voltage 이벤트 목록으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-current/", "Current 이벤트 목록으로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-power/", "Power 이벤트 목록으로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-etc/", "Etc. 이벤트 목록으로 이동", "left:0%; top:61.2%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_EVENT_MEASUREMENT_Current.png": [
    ...dcmEventTopHotspots,
    hotspot("../event-measurement-all/", "All 이벤트 목록으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../event-measurement-voltage/", "Voltage 이벤트 목록으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-current/", "Current 이벤트 목록으로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-power/", "Power 이벤트 목록으로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-etc/", "Etc. 이벤트 목록으로 이동", "left:0%; top:61.2%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_EVENT_MEASUREMENT_Power.png": [
    ...dcmEventTopHotspots,
    hotspot("../event-measurement-all/", "All 이벤트 목록으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../event-measurement-voltage/", "Voltage 이벤트 목록으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-current/", "Current 이벤트 목록으로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-power/", "Power 이벤트 목록으로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-etc/", "Etc. 이벤트 목록으로 이동", "left:0%; top:61.2%; width:19.4%; height:9.6%;"),
  ],
  "DCM-50V-80A_EVENT_MEASUREMENT_Etc.png": [
    ...dcmEventTopHotspots,
    hotspot("../event-measurement-all/", "All 이벤트 목록으로 이동", "left:0%; top:24%; width:19.4%; height:9.2%;"),
    hotspot("../event-measurement-voltage/", "Voltage 이벤트 목록으로 이동", "left:0%; top:33%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-current/", "Current 이벤트 목록으로 이동", "left:0%; top:42.5%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-power/", "Power 이벤트 목록으로 이동", "left:0%; top:52%; width:19.4%; height:9.6%;"),
    hotspot("../event-measurement-etc/", "Etc. 이벤트 목록으로 이동", "left:0%; top:61.2%; width:19.4%; height:9.6%;"),
  ],
};

const basename = (src) => decodeURIComponent(src.split("/").pop() || "");

const addScreenHotspots = () => {
  document.querySelectorAll(".screen-link-wrap").forEach((screen) => {
    if (screen.querySelector(".screen-hotspot")) return;

    const image = screen.querySelector("img");
    if (!image) return;

    const hotspots = a2500DcHotspots[basename(image.src)] || dcmHotspots[basename(image.src)];
    if (!hotspots) return;

    hotspots.forEach(({ href, label, style, alternateSrc, defaultSrc, defaultAlt, alternateAlt, defaultAriaLabel, alternateAriaLabel }) => {
      if (alternateSrc) {
        const button = document.createElement("button");
        button.className = "screen-hotspot screen-image-toggle";
        button.type = "button";
        button.dataset.screenImageToggle = "";
        button.dataset.defaultSrc = defaultSrc || image.getAttribute("src");
        button.dataset.alternateSrc = alternateSrc;
        if (defaultAlt) button.dataset.defaultAlt = defaultAlt;
        if (alternateAlt) button.dataset.alternateAlt = alternateAlt;
        if (defaultAriaLabel) button.dataset.defaultAriaLabel = defaultAriaLabel;
        if (alternateAriaLabel) button.dataset.alternateAriaLabel = alternateAriaLabel;
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", defaultAriaLabel || label);
        button.title = label;
        button.setAttribute("style", style);
        button.textContent = label;
        screen.appendChild(button);

        const alternateImage = new Image();
        alternateImage.src = alternateSrc;
        return;
      }

      const link = document.createElement("a");
      link.className = "screen-hotspot";
      link.href = href;
      link.title = label;
      link.setAttribute("aria-label", label);
      link.setAttribute("style", style);
      link.textContent = label;
      screen.appendChild(link);
    });
  });
};

addScreenHotspots();

if (typeof document$ !== "undefined") {
  document$.subscribe(addScreenHotspots);
}
