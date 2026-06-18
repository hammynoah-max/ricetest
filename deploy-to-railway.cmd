@echo off
setlocal
cd /d "%~dp0"

echo [1/6] Installing dependencies...
call npm.cmd install --cache .\.npm-cache
if errorlevel 1 exit /b 1

echo [2/6] Running tests...
call npm.cmd test
if errorlevel 1 exit /b 1

echo [3/6] Building app...
call npm.cmd run build
if errorlevel 1 exit /b 1

echo [4/6] Preparing git repository...
if not exist .git (
  git init
  if errorlevel 1 exit /b 1
)

git branch -M main
git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin https://github.com/hammynoah-max/ricetest.git
) else (
  git remote set-url origin https://github.com/hammynoah-max/ricetest.git
)

echo [5/6] Creating commit...
git add .
git commit -m "Deploy rice taste test MVP"
if errorlevel 1 (
  echo No new commit was created. Continuing to push current branch...
)

echo [6/6] Pushing to GitHub...
git push -u origin main
if errorlevel 1 exit /b 1

echo Done. Railway should start deploying from GitHub.
