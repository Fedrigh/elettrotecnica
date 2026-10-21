@echo off
title Elettrotecnica Polimi - Hub Web Completo
color 0B
echo =======================================================================
echo     ELETTROTECNICA (ELN / MTM) - POLITECNICO DI MILANO
echo               HUB WEB COMPLETO DI STUDIO & SIMULAZIONE
echo =======================================================================
echo.
echo  Apertura dell'Hub nel browser predefinito...
echo  - 16 Capitoli di Teoria Completa (1^° e 2^° Parziale)
echo  - Simulatore d'Esame 1^° Parziale (210 Esercizi)
echo  - Gym Quiz Esercizi a Mente (200 Esercizi)
echo  - Download Eserciziario PDF (406 pag) ed App Android APK
echo.
start "" "%~dp0index.html"
timeout /t 2 >nul
exit
