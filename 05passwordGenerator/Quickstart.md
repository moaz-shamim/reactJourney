# Understanding the Concept of "useEffect", "useRef" and "useCallback" with  project:


--> Firstly we apply "useState" hooks to manage state. variables and their associated updater functions
--------------------------------------------------------------------------------------------------
This hook allows functional components to manage state. You can use it to declare state variables and their associated updater functions, making it easy to handle and update state within functional components.


--> Then we understand all the "dependencies" in our components.
---------------------------------------------------------------------

In React, "dependencies" can be thought of as things your component relies on or cares about.

State Dependencies (useState): When you create a piece of information or "state" in your component, like a number or a piece of text, you can think of its initial value as what your component starts with. This initial value is like a starting point for your component.

Effect Dependencies (useEffect): Imagine your component as a set of instructions. When you use the useEffect hook, you can say, "Hey React, listen for changes in these pieces of information, and when they change, do something." So, these pieces of information are like the steps in your instructions that say when to do things.

In both cases, dependencies help React know when to update your component. When a dependency changes, React understands that something has happened, and it should respond accordingly by re-rendering or running a specific piece of code.


--> If the Function run again and again for dependency ,
---------------------------------------------------------
 It cause Performance Issues: If a function is running too frequently, it can lead to performance issues. For instance, if a function constantly re-renders the component for minor changes, it can make your application feel slow and unresponsive.

 So we have to optimise it by Memoization , Memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache Memory, and retrieving that same information from the cache the next time it's needed instead of computing it again.



-->So to achieve we learn the concept of "useCallback"
----------------------------------------------------

"useCallback" is a hook in React that allows you to optimize the performance of your components by memoizing (remembering) functions. In simpler terms, it's a way to make your React components more efficient when dealing with functions, 


Preventing Function Recreations: In React, functions can be recreated every time a component renders. This is not a problem for small applications, but in larger and more complex apps, it can lead to unnecessary work and reduced performance. useCallback helps you prevent this by "memoizing" functions, meaning it remembers the same function between renders unless its dependencies change.

Usage with Dependencies: You typically use useCallback when you have a function that depends on some variables (dependencies). If any of these dependencies change, the function is recreated. However, if the dependencies don't change, the function remains the same, which can save on unnecessary work.



-->Then we call our functional Component by using  "useEffect" hooks 
-------------------------------------------------------------------
to call our passwordGenerator functional component. 
 

What does useEffect do? 

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, calling the main function , but we could also perform data fetching or call some other imperative API.




--> Then we pass our input field reference by using "useRef" hook
-------------------------------------------------------------------


"useRef"

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

"useRef " is a special hook that allows you to work with references to elements in the DOM (Document Object Model) and to store values that aren't meant to trigger re-renders of your component.

DOM Elements: With useRef, you can create a reference to a specific HTML element, like a button or an input field. This reference lets you interact with that element directly, change its properties, or read its values without having to search for it in the DOM using JavaScript.










