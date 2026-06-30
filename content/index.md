# LLMWiki

이 문서는 `docs/assets/screens`의 A2500 화면 이미지를 기준으로, `RawData/LLM_RAG_260611` 안의 공통 정책과 A2500 정책 요약본에서 확인되는 내용을 MkDocs 형태로 정리한 것이다.

## 작성 범위

| 화면 파일 | 문서 | 정책 매칭 |
| --- | --- | --- |
| `MAIN_HOME_VOLTAGE_RMS_LL.png` | [HOME Voltage RMS L-L](a2500/home-voltage-rms.md) | `HOME > VOLTAGE > RMS L-L`의 L-L 표시, L-N/Min/Max 전환, 숫자/단위 표시 정책 |
| `HOME_VOLTAGE_RMS_L-*.png` | [HOME Voltage RMS 상태 화면](a2500/home-voltage-rms-states.md) | L-L/L-N 기본값과 Min/Max 발생 시각 표시, 상단 모듈 전환 상태 |
| `HOME_VOLTAGE_Residual.png` | [HOME Voltage Residual](a2500/home-voltage-residual.md) | `HOME > VOLTAGE > Residual`의 데이터뷰 제목, Min/Max 버튼, 잔류 전압 표시 정책 |
| `HOME_ANALYSIS_Phasor.png` | [HOME Analysis Phasor](a2500/home-analysis-phasor.md) | `HOME > ANALYSIS > Phasor`의 제목, VLN 기본 선택, 전압/전류 체크 버튼, 기준원 정책 |
| `SETUP_Voltage.png` | [SETUP Voltage](a2500/setup-voltage.md) | `SETUP > MEASUREMENT > Voltage`의 Reference Voltage, Min. Meas., Volt. Phase Selection 정책 |
| `IRT/*.png` | [특수모듈 IRT](special-modules/irt/index.md) | A2550IRT-3P의 HOME·SETUP·EVENT 화면과 온도·이벤트·Description 정책 |
| `MAIN/DC_HOME/*.png` | [IO모듈 A2500_DC](io-modules/a2500-dc/index.md) | A2500_DC의 MAIN DC_HOME 화면과 DC 계측 화면 정책 정리용 |
| `DCM-50V-80A/*.png` | [특수모듈_DC DCM-50V-80A](special-modules-dc/dcm-50v-80a/index.md) | DCM-50V-80A의 HOME·SETUP·EVENT 화면 정책 정리용 |

## 참고 원칙

- 정책 근거가 확인된 항목은 각 화면 문서의 "적용 정책"에 명시했다.
- 화면에는 보이지만 요약본에서 직접 정책 근거를 찾지 못한 항목은 "정책 확인 필요"로 분리한다.
- 원본 이미지는 `docs/assets/screens`에 두고, MkDocs 빌드 결과인 `site/assets/screens`는 자동 생성물로 취급한다.
