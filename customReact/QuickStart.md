# In this section we create our own react Library.

Whatever React app we have created so far, we create  it from Custom React(build or own react) and  from Vite (by customizing the template). 



Steps to create our own library of react:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

--> Fistly we created index.html "same as in Vite react " and  connect it with customreact.js that we created,

--> React creates itsown DOM but we use Browser DOM for rendering our element.

--> React grabs the root ID from index.html  and  create a "root" element by using createRoot() function and and create a container for your entire React app   render  the  container with  jsx-element inside it using the render method. we also do the same but we create our own customRender() method.


=  Creating a Root Element: A "root" element is like the container for your entire React app. It's where all your  =  React components and user interface elements will be placed.


--------------------------------------------------------------------------------------------------------------------


Some important points about React Library:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

--> We can create a function that return jsx-component is a functional component , We can  write it on main.jsx     file or we can create a separarte file for that.

= When you return this function (component) to the ReactDOM.render method for rendering, it will create a React    = element based on your component and render the component's output to the DOM.

--> Nested Components: You can render components within other components. For example, within your MyApp component, --  you can render child components:

function MyApp() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}


-->  In the ReactDOM.render method in React, you can pass only one top-level component. This method is designed to --   render a single root component in the specified DOM element. The top-level component can, in turn, contain and --   render multiple nested components as needed to build your application's user interface.

-- Eg :- 

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp />

  // <App />
  // <ReactElement/>
  // <anotherElement/>
  // anotherElement
  // ReactElement
  //  MyApp()
)

We have here multiple jsx component but we can pass only one component <MyApp /> rest are commented.






--------------------------------------------------------------------------------------------------------------------


--> Whay is  JSX ?

-- In easy language, JSX stands for "JavaScript XML." It's a way to write code in JavaScript that looks a lot like -- HTML. JSX is commonly used with React, a popular JavaScript library for building user interfaces.

Here's a simple explanation of JSX:

-- Familiar HTML-Like Syntax: JSX allows you to write code that looks very similar to HTML. You can use tags like -- <div>, <p>, <h1>, and so on, just like in regular HTML.

-- JavaScript Inside: Inside these JSX tags, you can include JavaScript expressions and variables. This means you -- can embed dynamic data and logic directly within your "HTML" code.

-- Transpilation: However, web browsers don't understand JSX directly. So, JSX code needs to be converted (transpiled) into regular JavaScript before it can be used on the web. This is typically done using tools like Babel.

For example, in JSX, you can write something like:

ex:-
const name = "John";
const greeting = <p>Hello, {name}!</p>;




--------------------------------------------------------------------------------------------------------------------


--> Note:  We create  a jsx-component  and return it through the functional component to react render method , but behid the seen react convert it into React element .



--> In React, the datatype of a "React element" is typically an object. React elements are lightweight objects that --  describe what you want to see on the screen. These elements are not actual DOM elements; they are plain     ---  JavaScript objects used by React to create and update the DOM.

--> React elements have a specific structure with a type property representing the type of component or DOM element --    (e.g., a string for HTML elements or a reference to a component), and a props property representing the -----  properties (or attributes) to be applied to the element.

Example:

const element = React.createElement(
    'div', 
    { className: 'container' }, 
    'Hello, React!'
);

