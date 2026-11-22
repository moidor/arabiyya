@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:8080/index.html?version=2.1"
  echo Arabiyya est accessible sur http://localhost:8080/index.html?version=2.1
  echo Garde cette fenetre ouverte tant que tu utilises le serveur local.
  py -m http.server 8080
  goto :end
)
where python >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:8080/index.html?version=2.1"
  echo Arabiyya est accessible sur http://localhost:8080/index.html?version=2.1
  python -m http.server 8080
  goto :end
)
echo Python n'est pas installe ou n'est pas dans le PATH.
echo Ouvre index.html directement pour tester, ou installe Python pour la PWA locale.
pause
:end
endlocal
