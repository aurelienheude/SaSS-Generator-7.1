@echo off
mkdir sass
cd sass

echo @use "base/base"; > main.scss
echo.>> main.scss
echo @use "components"; >> main.scss
echo @use "layout"; >> main.scss
echo @use "pages"; >> main.scss

mkdir base utils layout components pages themes vendors

cd base

echo @use "../utils" as *; > _base.scss
echo.>> _base.scss
echo *{ >> _base.scss
echo    margin: 0; >> _base.scss
echo    padding: 0; >> _base.scss
echo } >> _base.scss

cd ../components

echo @use "../utils" as *; > _btn.scss
echo @use "../utils" as *; > _input.scss
echo @use "../utils" as *; > _icon.scss
echo @use "../utils" as *; > _navigation.scss

echo @forward "navigation"; > _index.scss
echo @forward "icon"; >> _index.scss
echo @forward "input"; >> _index.scss
echo @forward "btn"; >> _index.scss

cd ../layout

echo @use "../utils" as *; > _header.scss
echo @use "../utils" as *; > _grid.scss
echo @use "../utils" as *; > _footer.scss
echo @use "../utils" as *; > _forms.scss
echo @use "../utils" as *; > _modales.scss

echo @forward "footer"; > _index.scss
echo @forward "header"; >> _index.scss
echo @forward "grid"; >> _index.scss
echo @forward "forms"; >> _index.scss
echo @forward "modales"; >> _index.scss

cd ../pages

echo @use "../utils" as *; > _home.scss

echo @forward "home"; > _index.scss

cd ../utils

echo.> _mixins.scss
echo.> _placeholders.scss
echo.> _breakpoints.scss
echo.> _fonts.scss
echo.> _colors.scss

echo @forward "mixins"; > _index.scss
echo @forward "placeholders"; >> _index.scss
echo @forward "breakpoints"; >> _index.scss
echo @forward "fonts"; >> _index.scss
echo @forward "colors"; >> _index.scss