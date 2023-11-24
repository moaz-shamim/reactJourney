# In this section we learn about hooks by creating a simple project.

I created a counter project in react using simple js, when I tried to update the counter it got updated but it was not showing on the browser UI.

The reason my counter value is not updating in the browser is because we are  using the counterValue variable, which is just a plain JavaScript variable, to maintain the counter value. This variable is separate from the state managed by React's useState "hook", so changes to counterValue do not trigger React to re-render your component and update the UI.


## Here we have to see , what is hook and how we use it.

--> "Hooks in React are a way to add state and other React features to functional components."
---------------------------------------------------------------------------------------
 They were introduced to make it easier to manage and reuse stateful logic in functional components. 


--> "In React, state represents information in your app that can change over time".
--------------------------------------------------------------------------------
 When the state changes, it can affect what you see on the screen. For instance, if you're building a counter app, the count value is part of the state. When you press a button to increase or decrease the count, you're causing a change in the state. React automatically updates the display to show the new count.


So, a "change in state" is simply when something in your app, like data, values, or information, is different from what it was before, and React takes care of updating your app's user interface to reflect that change. It's a fundamental concept that makes React apps dynamic and responsive to user interactions.



## Here are some key React hooks and their purposes:


useState:
-----------
This hook allows functional components to manage state. You can use it to declare state variables and their associated updater functions, making it easy to handle and update state within functional components.


useEffect:
----------
 It's used to perform side effects in functional components, such as data fetching, DOM manipulation, and setting up subscriptions. You can use it to run code after the component has rendered or when specific dependencies change.


useContext: 
----------
This hook provides access to a shared context, allowing components to consume values from a context provider higher up the component tree. It's useful for passing data, such as themes or user authentication, to multiple components without prop drilling.

useRef:
----------
 useRef creates a mutable ref object that can be used to keep track of a value that doesn't trigger re-renders when it changes. This is useful for accessing and interacting with DOM elements directly.

useReducer:
----------
 It's an alternative to useState that allows you to manage more complex state logic in a predictable and maintainable way by using reducers, similar to how state is managed in Redux.

Custom Hooks:
-------------
 You can create your own custom hooks by composing existing hooks or encapsulating specific logic. Custom hooks are an excellent way to share and reuse stateful or side-effect logic across multiple components.



React useState Hook:
--------------------
The React useState Hook allows us to track state in a function component.\
To use the useState Hook, we first need to import it into our component.



Initialize useState
--------------------

We initialize our state by calling `useState()` in our function component.
useState accepts an initial state and returns "two" values:

1.  The current state.
2.  A function that updates the state.

```js
  let [counterValue, setCounter] = useState(0)
 ```

 `counterValue` : current state.\
 `setCounter`   : Function that updates the state.