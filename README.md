# React Tutorial ([Link](https://www.youtube.com/watch?v=SqcY0GlETPk))

## What's in this Repo
* `node_modules` folder is where all 3rd party libraries are installed (never have to touch it)
* `public` folder holds all public assets (videos, images, etc.)
* `src` folder holds all the main code
* Each .tsx file holds the React components
    * React components are function-based in this project
* index.html has the link to main.tsx which is the entry point to the application
* package.json has info about this project (name, scripts, dependencies, etc.)
* tsconfig.js is the typescript config file, tells compiler how to compile code to javascript (never have to touch it)
* vite.config.js is the config file for vite (never have to touch it)

## Notes from Tutorial
* First created a dev environment with vite
    * Vite is a build tool to help efficiently build and develop websites
    * npm create vite@4.1.0
* React creates a component tree from all the components we create
* React takes this tree and creates a virtual DOM, lightweight representation in memory
    * When a node is changed, React updates the virtual DOM
    * React DOM then compares new virtual DOM with the old and updates the actual DOM to reflect the changes
* React is a js library for creating user interfaces
    * only a TOOL to create dynamic user interfaces, that's all it does
    * Angular and Vue are frameworks, they provide all the tools needed to make webpages (like a TOOLSET)
* Bootstrap is a CSS library that gives a lot of CSS classes to help with styling
* You can't have multiple components in one React function, so you wrap everything in a React Fragment
    * This is so you don't have extra unnecessary divs in your DOM
    * You do this by wrapping your function body with empty angle brackets `<></>`