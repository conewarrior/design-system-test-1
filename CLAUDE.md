# Project Guidelines

## 디자인 시스템

이 프로젝트는 @design-geniefy/ui 디자인 시스템을 사용합니다.

### 토큰
- CDN: https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css
- 모든 색상, 간격, radius는 tokens.css의 CSS 변수 사용 필수

### 규칙 (자동 적용)
UI 생성 시 design-rules skill이 node_modules에서 자동 로드됩니다:
- 하드코딩 색상 금지 (#fff, rgb 등) → var(--color-*) 사용
- 8px 단위 간격만 사용 → var(--spacing-*) 사용
- radius는 토큰만 사용 → var(--radius-*) 사용
- 화면당 컴포넌트 최대 7개
- 배경/강조 색상 최대 3개

> 💡 design-rules.md는 npm 업데이트 시 자동으로 최신 버전이 적용됩니다.

### 컴포넌트 생성 규칙 (필수)

**⚠️ 기존 컴포넌트 코드를 참고하지 마라. 기존 코드가 틀렸을 수 있다.**

컴포넌트 생성 시 반드시 다음 순서를 따른다:

1. **design-rules.md를 유일한 소스로 사용**
   - `node_modules/@design-geniefy/ui/.claude/skills/design-rules.md` 규칙 확인
   - 기존 컴포넌트 패턴 복사 금지

2. **생성 전 체크리스트**
   - [ ] 토큰만 사용 (하드코딩 색상/간격 금지)
   - [ ] SVG 아이콘만 사용 (이모지/텍스트 문자 금지)
   - [ ] Shadow 사용 금지 (Modal/Dropdown/Toast 제외)
   - [ ] 적절한 radius 토큰 사용

3. **생성 후 자가 검증**
   - 작성한 코드가 design-rules 위반하는지 점검
   - lint-design-rules.sh 자동 실행됨

4. **기존 컴포넌트 위반 발견 시**
   - 별도로 사용자에게 보고
   - 새 컴포넌트는 규칙대로 작성

### 컴포넌트 기여
components/ 폴더에 새 컴포넌트 생성 시 자동으로 design-system 저장소에 기여됩니다.

### 설정 버전 관리

**/setup-design 실행 시 반드시 다음 순서를 따른다:**

1. **먼저 현재 상태 검증**
   ```bash
   .claude/scripts/verify-design-setup.sh
   ```

2. **누락된 항목만 적용**
   - 검증 결과에서 ❌ 표시된 항목만 설정
   - 이미 ✅인 항목은 스킵하지 않고 **최신 스펙과 비교**

3. **상태 파일 업데이트**
   - `.claude/design-system-state.json` 버전 및 날짜 갱신

> ⚠️ "이미 설정됨"으로 스킵하지 말 것. 항상 verify 스크립트 결과를 기준으로 판단.
