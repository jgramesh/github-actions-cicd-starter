#!/usr/bin/env bash
set -euo pipefail
TARGET_ENV="${1:-staging}"
mkdir -p deployments/${TARGET_ENV}
cp -r dist/* deployments/${TARGET_ENV}/
echo "Deployed build artifacts to deployments/${TARGET_ENV}"
