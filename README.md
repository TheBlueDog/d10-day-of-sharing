# Project: D10: Day of Sharing 24


## Setting up Tailwind and PostCSS
- `npm init -y`
- `npm install tailwindcss postcss-cli autoprefixer`
- `npx tailwind init`
- `touch postcss.config.js`
- Add plugins require to `postcss.config` file
- Create new `css/tailwind.css` file
- Add `@tailwind base, components, utilities` to `tailwind.css`
- Add `build` script to `package.json` file
- Run `npm run build`
- Create `index.html`
- `npm install -g live-server`
- Run `live-server docs`

### Enable utilities for background colors

- Enable `active` variants for background colors in `tailwind.config` by adding `backgroundColor: ['responsive', 'hover', 'focus', 'active']`. (When one utility is added, you need to add all.)
- When changes are made to the config run `npm run build`

### Watch CSS

- Add `watch` line to package.json to monitor changes in the `tailwind.css`
- Run `npm run watch`


## Booting up

- Run `live-server docs`
- Run `npm run watch`