# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



To render an element created with `React.createElement()`, you need to use the `ReactDOM.render()` method provided by React. Here's how you can do it:

1. Import React and ReactDOM:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   ```

2. Create your React element using `React.createElement()`:
   ```javascript
   const element = React.createElement('div', { className: 'container' }, 'Hello, World!');
   ```

3. Render the element into the DOM using `ReactDOM.render()`:
   ```javascript
   ReactDOM.render(element, document.getElementById('root'));
   ```

Here's the complete example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Create the React element
const element = React.createElement('div', { className: 'container' }, 'Hello, World!');

// Render the element into the DOM
ReactDOM.render(element, document.getElementById('root'));
```

In this example:
- We import `React` and `ReactDOM`.
- We create a React element using `React.createElement()`, specifying the type of element (`'div'`), properties (`{ className: 'container' }`), and children (`'Hello, World!'`).
- We use `ReactDOM.render()` to render the created element into the DOM. The first argument is the React element, and the second argument is the DOM element where you want to render the React element (e.g., a div with the id `'root'`). Make sure you have an HTML element with the specified id in your HTML file where you want to render your React application.