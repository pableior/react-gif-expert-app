# GifExpertApp

This is the ropository of GifExpertApp of react.

Instalación y configuracion de Jest + React Testing Library
En proyectos de React + Vite
Instalaciones:
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
Opcional: Si usamos Fetch API en el proyecto:
yarn add --dev whatwg-fetch
Actualizar los scripts del package.json
"scripts: {
  ...
  "test": "jest --watchAll"
Crear la configuración de babel babel.config.cjs
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.cjs

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


-- prop types 
yarn add prop-typess