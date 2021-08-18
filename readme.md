
<p align='center'>
Mocking up web app with <b>Vuetify 3 - Vite</b><sup><em>(speed)</em></sup><br>
</p>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 Vuetify 3

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)
<br>

## Pre-packed

### UI Frameworks

- Vuetify 3 Alpha

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA


### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Dev tools

- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
