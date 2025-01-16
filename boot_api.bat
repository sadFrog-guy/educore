@echo off
setlocal enabledelayedexpansion

:: Устанавливаем путь по умолчанию
set "default_path=C:\projects\work\educoreApi"

:: Проверяем, был ли передан аргумент
if "%~1"=="" (
    set "project_path=%default_path%"
) else (
    set "project_path=%~1"
)

:: Открываем указанный путь
echo Opening your Django project's directory: !project_path!
cd /d "!project_path!"

:: Активация виртуального окружения
echo Activating venv...
call venv/scripts/activate

:: Запуск сервера
echo Booting your server...
call py manage.py runserver

:: Завершение
echo.
echo Done!
pause