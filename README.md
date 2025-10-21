# BALL x PIT Evolution Chart

An interactive evolution chart for the video game BALL x PIT, showing ball combinations and their resulting evolutions.

## ⚠️ Asset Notice

**Important**: This project uses game assets from BALL x PIT. These assets are NOT owned by this project's creators.

See [ASSETS.md](./ASSETS.md) for full copyright and attribution information.

## Features

- Interactive evolution grid showing starter balls and combinations
- Advanced evolution formulas with visual representations  
- Detailed tooltips with ball descriptions
- Responsive design with hover effects

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```sh
npm pack
```

To create a production version of your showcase app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```sh
npm publish
```
