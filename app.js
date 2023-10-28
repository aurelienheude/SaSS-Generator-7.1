const fs = require('fs');

// Crée un répertoire "sass" et se déplace dedans
fs.mkdirSync('sass');
process.chdir('sass');

// Crée le fichier "main.scss" avec les importations
fs.writeFileSync('main.scss', `
@use "base/base";
@use "components";
@use "layout";
@use "pages";
`);

// Crée les répertoires "base", "utils", "layout", "components", "pages", "themes" et "vendors"
fs.mkdirSync('base');
fs.mkdirSync('utils');
fs.mkdirSync('layout');
fs.mkdirSync('components');
fs.mkdirSync('pages');
fs.mkdirSync('themes');
fs.mkdirSync('vendors');

// Crée le fichier "_base.scss" dans le répertoire "base"
process.chdir('base');
fs.writeFileSync('_base.scss', `@use "../utils" as *;

* {
    margin: 0;
    padding: 0;
}
`);

// Crée les fichiers "_btn.scss", "_input.scss", "_icon.scss" et "_navigation.scss" dans le répertoire "components"
process.chdir('../components');
fs.writeFileSync('_btn.scss', '@use "../utils" as *;');
fs.writeFileSync('_input.scss', '@use "../utils" as *;');
fs.writeFileSync('_icon.scss', '@use "../utils" as *;');
fs.writeFileSync('_navigation.scss', '@use "../utils" as *;');

// Crée le fichier "_index.scss" dans le répertoire "components"
fs.writeFileSync('_index.scss', `@forward "navigation";
@forward "icon";
@forward "input";
@forward "btn";
`);

// Crée les fichiers "_header.scss", "_grid.scss", "_footer.scss", "_forms.scss" et "_modales.scss" dans le répertoire "layout"
process.chdir('../layout');
fs.writeFileSync('_header.scss', '@use "../utils" as *;');
fs.writeFileSync('_grid.scss', '@use "../utils" as *;');
fs.writeFileSync('_footer.scss', '@use "../utils" as *;');
fs.writeFileSync('_forms.scss', '@use "../utils" as *;');
fs.writeFileSync('_modales.scss', '@use "../utils" as *;');

// Crée le fichier "_index.scss" dans le répertoire "layout"
fs.writeFileSync('_index.scss', `@forward "footer";
@forward "header";
@forward "grid";
@forward "forms";
@forward "modales";
`);

// Crée le fichier "_home.scss" dans le répertoire "pages"
process.chdir('../pages');
fs.writeFileSync('_home.scss', '@use "../utils" as *;');

// Crée le fichier "_index.scss" dans le répertoire "pages"
fs.writeFileSync('_index.scss', '@forward "home";');

// Crée les fichiers vides dans le répertoire "utils"
process.chdir('../utils');
fs.writeFileSync('_mixins.scss', '');
fs.writeFileSync('_placeholders.scss', '');
fs.writeFileSync('_breakpoints.scss', '');
fs.writeFileSync('_fonts.scss', '');
fs.writeFileSync('_colors.scss', '');

// Crée le fichier "_index.scss" dans le répertoire "utils"
fs.writeFileSync('_index.scss', `@forward "mixins";
@forward "placeholders";
@forward "breakpoints";
@forward "fonts";
@forward "colors";
`);
