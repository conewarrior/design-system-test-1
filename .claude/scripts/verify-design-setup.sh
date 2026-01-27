#!/bin/bash
# design-system 설정 상태 검증 스크립트
# Usage: ./verify-design-setup.sh

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

MISSING=0
STATE_FILE=".claude/design-system-state.json"

echo "🔍 Design System 설정 검증 중..."
echo "---"

# 1. npm 패키지 확인
if [ -d "node_modules/@design-geniefy/ui" ]; then
  echo -e "${GREEN}✅ npm 패키지: @design-geniefy/ui 설치됨${NC}"
else
  echo -e "${RED}❌ npm 패키지: @design-geniefy/ui 미설치${NC}"
  MISSING=$((MISSING + 1))
fi

# 2. CLAUDE.md 기본 규칙 확인
if grep -q "디자인 시스템" CLAUDE.md 2>/dev/null; then
  echo -e "${GREEN}✅ CLAUDE.md: 기본 디자인 규칙 있음${NC}"
else
  echo -e "${RED}❌ CLAUDE.md: 기본 디자인 규칙 없음${NC}"
  MISSING=$((MISSING + 1))
fi

# 3. CLAUDE.md 컴포넌트 생성 규칙 확인
if grep -q "컴포넌트 생성 규칙" CLAUDE.md 2>/dev/null; then
  echo -e "${GREEN}✅ CLAUDE.md: 컴포넌트 생성 규칙 있음${NC}"
else
  echo -e "${RED}❌ CLAUDE.md: 컴포넌트 생성 규칙 없음${NC}"
  MISSING=$((MISSING + 1))
fi

# 4. Hook - UserPromptSubmit 확인
if grep -q "UserPromptSubmit" .claude/settings.local.json 2>/dev/null; then
  echo -e "${GREEN}✅ Hook: UserPromptSubmit 설정됨${NC}"
else
  echo -e "${RED}❌ Hook: UserPromptSubmit 미설정${NC}"
  MISSING=$((MISSING + 1))
fi

# 5. Hook - PostToolUse (auto-contribute) 확인
if grep -q "auto-contribute" .claude/settings.local.json 2>/dev/null; then
  echo -e "${GREEN}✅ Hook: auto-contribute 설정됨${NC}"
else
  echo -e "${RED}❌ Hook: auto-contribute 미설정${NC}"
  MISSING=$((MISSING + 1))
fi

# 6. Hook - PostToolUse (lint) 확인
if grep -q "lint-design-rules" .claude/settings.local.json 2>/dev/null; then
  echo -e "${GREEN}✅ Hook: lint-design-rules 설정됨${NC}"
else
  echo -e "${RED}❌ Hook: lint-design-rules 미설정${NC}"
  MISSING=$((MISSING + 1))
fi

# 7. 스크립트 - auto-contribute.sh 확인
if [ -x ".claude/scripts/auto-contribute.sh" ]; then
  echo -e "${GREEN}✅ Script: auto-contribute.sh 있음${NC}"
else
  echo -e "${RED}❌ Script: auto-contribute.sh 없음${NC}"
  MISSING=$((MISSING + 1))
fi

# 8. 스크립트 - lint-design-rules.sh 확인
if [ -x ".claude/scripts/lint-design-rules.sh" ]; then
  echo -e "${GREEN}✅ Script: lint-design-rules.sh 있음${NC}"
else
  echo -e "${RED}❌ Script: lint-design-rules.sh 없음${NC}"
  MISSING=$((MISSING + 1))
fi

# 9. Dependabot 확인
if [ -f ".github/dependabot.yml" ]; then
  echo -e "${GREEN}✅ Dependabot: 설정됨${NC}"
else
  echo -e "${YELLOW}⚠️ Dependabot: 미설정 (선택사항)${NC}"
fi

# 10. Dependabot auto-merge 확인
if [ -f ".github/workflows/dependabot-auto-merge.yml" ]; then
  echo -e "${GREEN}✅ Dependabot auto-merge: 설정됨${NC}"
else
  echo -e "${YELLOW}⚠️ Dependabot auto-merge: 미설정 (선택사항)${NC}"
fi

# 결과 출력
echo "---"
if [ $MISSING -eq 0 ]; then
  echo -e "${GREEN}✅ 모든 필수 설정 완료${NC}"

  # 버전 정보 출력
  if [ -f "$STATE_FILE" ]; then
    VERSION=$(grep -o '"setupVersion": "[^"]*"' "$STATE_FILE" | cut -d'"' -f4)
    UPDATED=$(grep -o '"lastUpdated": "[^"]*"' "$STATE_FILE" | cut -d'"' -f4)
    echo -e "   버전: $VERSION (${UPDATED})"
  fi
else
  echo -e "${RED}❌ ${MISSING}개 항목 누락 - /setup-design 실행 필요${NC}"
  exit 1
fi
