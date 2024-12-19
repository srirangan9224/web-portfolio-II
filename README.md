# Web Portfolio

## About
this is a web portfolio built in React and Vite.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tailwind CSS
this project contains configurations for adding Tailwind CSS. 

## React Bootstrap
This project uses React Bootstrap for the navbar and styling.


---
## Instructions for hosting using ```Github Pages```
1. Change or Add ```vite.config.js``` to contain the following: 

    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
        plugins: [react()],
        base: '/myrepository/', // Set this to your repository name with leading and trailing slashes (this is ACMWebPortfolio2 in my case)
    });
    ```

2. Install ```gh-pages``` Package:
    - run ```npm install --save-dev gh-pages```

3. Add ```"homepage"``` to ```package.json```:
 
    ```javascript
    "homepage": "https://your-username.github.io/your-repo-name",
    ```

    ### Additionally, add the following under the ```scripts``` section in ```package.json```:

    ```javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    ```

4. Finally, deploy to github pages

    ### Run : 
    ```npm run deploy```
