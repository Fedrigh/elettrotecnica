@echo off
title Pubblicazione su GitHub ^& GitHub Pages
color 0A

echo =======================================================================
echo          PUBBLICAZIONE SU GITHUB ^& ATTIVAZIONE GITHUB PAGES
echo            Elettrotecnica Polimi - Hub Web di Studio
echo =======================================================================
echo.
echo  Questo script colleghera la cartella al tuo account GitHub e carichera
echo  tutti i file (Teoria, Simulatore, Gym Quiz, PDF ed APK).
echo.
echo  PASSAGGIO PRELIMINARE (se non l'hai gia fatto):
echo  1. Apri il browser su: https://github.com/new
echo  2. Come "Repository name" inserisci: elettrotecnica
echo  3. Assicurati che sia "Public"
echo  4. Lascia NON spuntate le opzioni "Add a README" e ".gitignore"
echo  5. Clicca sul pulsante verde "Create repository"
echo.
echo =======================================================================
echo.

set DEFAULT_URL=https://github.com/Fedrigh/elettrotecnica.git

echo  Premi INVIO per confermare l'URL predefinito:
echo  [%DEFAULT_URL%]
echo.
set /p REPO_URL="Oppure incolla un URL diverso (o premi INVIO): "

if "%REPO_URL%"=="" set REPO_URL=%DEFAULT_URL%

echo.
echo  [*] Configurazione remote origin: %REPO_URL%
cd /d "%~dp0elettrotecnica-web"

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo  [*] Invio dei file su GitHub (git push)...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================================
    echo   [SUCCESSO!] I file sono stati caricati correttamente su GitHub!
    echo =======================================================================
    echo.
    echo  ULTIMO PASSAGGIO PER AVERE IL SITO ONLINE SUBITO:
    echo  1. Apri la pagina Settings della tua repository su GitHub:
    echo     https://github.com/Fedrigh/elettrotecnica/settings/pages
    echo  2. Sotto la sezione "Build and deployment" - "Branch":
    echo     - Seleziona: main
    echo     - Cartella:  / (root)
    echo     - Clicca sul pulsante: Save
    echo.
    echo  Entro 60 secondi il tuo sito sara attivo per sempre all'indirizzo:
    echo  ^> https://Fedrigh.github.io/elettrotecnica/
    echo.
    echo  Potrai aprirlo e salvarlo come app su qualsiasi telefono, tablet o PC!
    echo =======================================================================
) else (
    echo.
    echo =======================================================================
    echo   [ATTENZIONE] Il push non e andato a buon fine.
    echo   Verifica di aver prima creato la repository vuota su:
    echo   https://github.com/new (chiamandola 'elettrotecnica')
    echo   e di aver effettuato l'accesso a GitHub con il tuo account.
    echo =======================================================================
)

echo.
pause
