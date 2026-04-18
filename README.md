# GitHub Actions CI/CD Starter Project

A complete hands-on starter repository for learning GitHub Actions across 15 days. It includes a real Node.js application, 15 progressive workflow YAML files, setup instructions, and a verification checklist for every day.

## Quick start

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run lint`.
4. Run `npm test`.
5. Run `npm run build`.
6. Run `npm start`.
7. Open `http://localhost:3000/health`.

## GitHub environment setup

Create these environments in your repository settings:
- `staging`
- `production`

For production, enable required reviewers for approval practice.

## 15-day learning plan

### Days 1-5: Basics
- Day 1: First workflow on push
- Day 2: Setup Node.js
- Day 3: Add linting
- Day 4: Add tests
- Day 5: Combine lint and test

### Days 6-10: Build and staging
- Day 6: Build artifacts
- Day 7: Build after quality checks
- Day 8: Deploy to staging
- Day 9: Verify staging deployment
- Day 10: Release branch workflow

### Days 11-15: Production and security
- Day 11: Manual production deployment
- Day 12: Production approvals
- Day 13: Dependency security scan
- Day 14: CodeQL analysis
- Day 15: Full production pipeline

## Suggested push commands

```bash
git init
git add .
git commit -m "Add GitHub Actions CI/CD starter project"
git branch -M main
git remote add origin https://github.com/jgramesh/github-actions-cicd-starter.git
git push -u origin main
```
