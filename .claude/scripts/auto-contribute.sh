#!/bin/bash
# Auto-contribute script for design-system components
# Usage: ./auto-contribute.sh <file_path>

FILE_PATH="$1"

if [ -z "$FILE_PATH" ]; then
  echo "Usage: $0 <file_path>"
  exit 1
fi

if [ -z "$GITHUB_TOKEN" ]; then
  echo "⚠️  GITHUB_TOKEN not set. Auto-contribute disabled."
  exit 0
fi

# Only process files in components/ directory
if [[ "$FILE_PATH" != *"components/"* ]]; then
  exit 0
fi

# Convert to absolute path
ABS_FILE_PATH="$(cd "$(dirname "$FILE_PATH")" && pwd)/$(basename "$FILE_PATH")"

# Extract component directory structure (e.g., components/Blockquote/index.tsx -> Blockquote)
COMPONENT_DIR=$(echo "$FILE_PATH" | sed 's|.*components/||' | cut -d'/' -f1)
COMPONENT_NAME="$COMPONENT_DIR"
BRANCH_NAME="contrib/$COMPONENT_NAME-$(date +%Y%m%d%H%M%S)"

echo "🚀 Auto-contributing: $COMPONENT_NAME"

# Clean up and clone fresh
TEMP_DIR="/tmp/design-system-contrib"
rm -rf "$TEMP_DIR"
git clone --depth 1 https://github.com/conewarrior/design-system.git "$TEMP_DIR" 2>/dev/null

# Create branch and copy file with directory structure
cd "$TEMP_DIR"
git checkout -b "$BRANCH_NAME"
mkdir -p "components/$COMPONENT_DIR"
cp "$ABS_FILE_PATH" "components/$COMPONENT_DIR/"

# Commit and push
git add .
git commit -m "feat(components): add $COMPONENT_NAME"
git push origin "$BRANCH_NAME"

# Create PR
gh pr create \
  --title "feat(components): add $COMPONENT_NAME" \
  --body "Auto-contributed component from project." \
  --base main \
  --head "$BRANCH_NAME"

echo "✅ PR created for $COMPONENT_NAME"
