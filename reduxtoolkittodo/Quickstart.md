# Understanding the Concept of a Redux in React:


# Understanding the History of Redux.

Redux is a popular and powerful JavaScript library used for managing the state of your web application. It's often used in conjunction with frameworks like React, but it can be used with other JavaScript libraries as well.

In easy language, imagine your web application's state as a big, global object that holds all the important data. This data can be things like user information, application settings, or any information your app needs to work. Redux helps you keep track of and change this data in a structured and predictable way...

To implement Redux in the React library, you'll need both the core Redux library and the "react-redux" library, which serves as a subdomain of Redux.


The story is the same as what we see in the Context API. When we transfer data from one component to another, the problem of prop drilling arises. To solve this issue, we create a global context using the Context API and access global data through our custom hook.


The problem of prop drilling has been a long-standing issue in React, and in other JavaScript libraries as well. Many tools have emerged to address this problem. In the early days, a library called Flux was used to solve the issue of global context.

Flux architecture was designed by Facebook to address the problem of state management. The main focus of Flux is on state management, where there is a central store from which we retrieve all data, similar to accessing a global variable.

Another interesting concept in Flux is the idea of data flow. Data flows to the store in the same way as we retrieve data from the store. This means that there's a structured mechanism for using and updating values, preventing issues from arising.

However, Flux's data flow mechanism has its shortcomings, leading to the introduction of a new library called Redux. Redux is an improved version of Flux, introducing key concepts such as "single source of truth," meaning there's only one store. The store is read-only, and changes made to it occur through functions, not direct modifications. These functions are called reducers, and they handle changes to the store.

When Redux was introduced, it received widespread appreciation because it seamlessly integrates with various JavaScript libraries. Redux is not limited to React; it's an independent library that works with React, other  libraries like view, angular and more JavaScript frameworks.



The latest addition to Redux is Redux Toolkit. 

You might wonder, why Redux Toolkit when Redux is already effective?

Redux itself works well, but there have been some issues, especially with middleware like Redux Thunk, which aids in debugging. This functionality didn't work seamlessly in Redux, often requiring a lot of time for setup. Then Redux Toolkit came along, offering a simplified process. You no longer need to set up multiple components and configurations. It provides more abstractions in React and an easier method for creating a store, eliminating the need for extensive configuration.


=> History Lesson End Here


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# Let's understand some concepts that apply to both Redux and Redux Toolkit.

1. Store:
In both Redux and Redux Toolkit, we create a store, which is like a global variable that holds all our application's data. This store is where we store and retrieve everything we need.

2. Reducer:
The reducer is another essential concept. With the help of the reducer function we can make changes in the store. The reducer specifies how the state should change in response to actions. In Redux, you might have multiple reducers to manage different portions of the store, and Redux Toolkit simplifies this process.

3. Selector:
Selectors are used to retrieve specific values from the store. When you want to get certain data from the store, you use a selector method. This can help you efficiently access the data you need.

4. Dispatcher:
The dispatcher method comes into play when you need to send or dispatch values to the store. Dispatching an action is how you trigger changes in the state.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Now let's jump into the project to learn the concept of redux.
First, we create a React app using the Vite bundler. After that, we install the Redux and Redux Toolkit libraries following the documentation provided by Redux. Finally, we configure Redux.





# We start the project by making a store in the folder "app"
Our Application  has usually only one store called single source of truth.

--> Inside our app folder we create a store called store.js:


"store.js"

```jsx 
import {  configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
    
    })
```


Steps involving in creating a store :

First, we import the `configureStore` method from Redux Toolkit. After that, we call the `configureStore` method and pass it an object as an argument. We then assign the result of this method to a variable.




























# Now we Creating reducers for our Store.
 
The reducers created in Redux Toolkit are slightly different; they are referred to as "slices." This is a naming convention specific to Redux Toolkit.

To implement this convention, we create a folder called "features" in our app. Within this folder, we organize different features like a login feature, a product feature, etc. In this context, we create a "todo" feature to better comprehend the concept of reducers. Inside the "todo" folder, we create a file named "todoSlice.js." Don't worry too much about the specific name "todoSlice.js"; it indicates that this file contains slice reducers, essentially serving as an alternative term for reducers within the context of Redux Toolkit.



"todoSlice.js"

```jsx 
import {createSlice , nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos :[{id:1 , text: "Add Your Stuffs"}]
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos  = state.todos.filter((todo)=>
                 todo.id !== action.payload
            )
        },
    }
})

// Export reducer for individual componenet
export const {addTodo,removeTodo} =  todoSlice.actions

// Export reducers for store.
export default todoSlice.reducer
```


--> Here we import two methods "createSlice" and "nanoid" 

"createSlice"
In React, you typically use the Redux Toolkit library to create slices for your Redux store. A "slice" is a portion of your Redux store that contains the state, reducer functions, and action creators specific to a particular part of your application's data.

nanoid is a small library for generating unique, URL-safe IDs. It's often used in React and other JavaScript applications when you need to create unique identifiers for various purposes, such as key props for React components, unique database document IDs, or any situation where you need unique strings.



--> The first crucial aspect of a store is its initial state.

```jsx 
const initialState = {
    todos :[{id:1 , text: "Add Your Stuffs"}]
}
```

It determines how the store appears at the beginning: whether it starts empty, contains predefined values, or retrieves values from a database. 

You have the flexibility to define the initial state as per your requirements. It can be an initial object, an array, or any structure you prefer. In this context, we set the initial state as an object, and within that object, it contains an array.

We use this initial state value inside our slice method.
We can also create the initial state inside our slice functionality.



--> Now we create Slice

```jsx 
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos  = state.todos.filter((todo)=>
                 todo.id !== action.payload
            )
        },
    }
})
```


To create a slice using the `createSlice` method, we use the `createSlice` function and pass an object. Inside this object, we specify variables and functions as key-value pairs. These variables typically include the name of the slice, the initial state of the slice, and the reducers. The `reducers` key-value pairs contains *properties* or *methods* used to modify the state.


**Difference between reducers and context api**:
In the Context API, we declare functions without defining them. In contrast, in Redux, we not only declare functions but also define them.



**We defining methods within reducers,**
we always have access to two essential things as arguments: the first is the `state`, and the second is the `action`. These two elements provide us with the necessary information to manage and update the application's state effectively.


In the code you provided, the state and action are passed as arguments to the reducer functions. Let's define these function arguments:

1. **`state`**: 
   - In the context of the `addTodo` and `removeTodo` reducer functions, `state` represents the current state of your Redux store.
   - It typically includes properties that describe the data and state of your application. In this case, it likely has a property called `todos`, which is an array holding the list of todo items.

2. **`action`**: 
   - The `action` parameter is an object that describes what action needs to be taken. 
   - It is dispatched by your application to trigger a change in the Redux store.
   - The `action` object typically has two properties:
     - `type`: A string that identifies the type of action to be performed, e.g., "addTodo" or "removeTodo."
     - `payload`: Data related to the action. In the `addTodo` action, the `payload` property contains the text for the new todo, and in the `removeTodo` action, it contains the ID of the todo to be removed.

So, in the code you provided, `state` is the current state of the store, and `action` is an object containing information about the action to be taken, which includes the action type (`type`) and additional data (`payload`).




--> I'll explain the code for the `addTodo` and `removeTodo` reducer functions in detail:

1. **`addTodo` Reducer**:
   - This reducer is responsible for adding a new todo item to the state.

   ```javascript
   addTodo: (state, action) => {
       const todo = {
           id: nanoid(),
           text: action.payload
       }
       state.todos.push(todo)
   },
   ```

   - When the `addTodo` action is dispatched, it triggers this reducer function.
   - It takes two parameters: `state` and `action`. `state` represents the current state, and `action` contains the action information.
   - Inside the reducer, a new `todo` object is created with two properties:
     - `id`: This is generated using `nanoid()`, ensuring that each todo has a unique identifier.
     - `text`: It is taken from the `action.payload`, which typically contains the text for the new todo.
   - The new `todo` is then added to the `state.todos` array by using `state.todos.push(todo)`. This modifies the state to include the new todo in the list.

2. **`removeTodo` Reducer**:
   - This reducer is responsible for removing a todo item from the state based on its ID.

   ```javascript
   removeTodo: (state, action) => {
       state.todos = state.todos.filter((todo) =>
           todo.id !== action.payload
       )
   },
   ```

   - When the `removeTodo` action is dispatched, it triggers this reducer function.
   - Like the `addTodo` reducer, it takes `state` and `action` as parameters.
   - In this reducer, the `state.todos` array is modified by filtering it with the `filter` method. It keeps only the todos whose `id` doesn't match the `action.payload`.
   - The result of the `filter` operation is assigned back to `state.todos`, effectively removing the todo with the specified `id` from the list.

These reducer functions define how the state should change in response to the `addTodo` and `removeTodo` actions. When these actions are dispatched, they use the provided data in the `action` to make the appropriate modifications to the state.



-->Now, we export our reducers so that both our individual components and the entire store can access these reducers.

```jsx
// Export reducer for individual componenet
export const {addTodo,removeTodo} =  todoSlice.actions
// Export reducers for store.
export default todoSlice.reducer
```

In summary, these lines facilitate the export of action creators and the reducer function from your todoSlice, making them available for use in other parts of your application, such as your React components and store configuration.





















# Now we go to a store.js and import our reducers.


```jsx
import {  configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
```

Firstly we import it:

```jsx
import todoReducer from '../features/todo/todoSlice'
```


And pass this reducer to our store through the configureStore method as a key value:

```jsx
key : reducer
value : todoReducer
```















# Now, let's examine the reducers "addTodo" and "removeTodo" methods by creating our components. Inside these components, we'll utilize "addTodo" and "removeTodo" actions. This will help us comprehend the concepts of `useSelector` and `useDispatch`.

"AddTodo.js"


`useDispatch`
-------------

--> First, we import the `dispatch` method. The `dispatch` method is used to make changes to the store by utilizing the reducers.

```jsx
import { useDispatch } from "react-redux"
```

--> Next, we import individual reducers so that we can use them in our components to modify the store variables.

```jsx
import { addTodo } from "../features/todo/todoSlice"
```


--> Now, let's understand how this functionality works inside `AddTodo.jsx`.

We need to add something to our store, and this addition is done through the process of dispatching events to the store
through `useDispatch`.

We add values to the store with the help of a dispatcher. We store the dispatcher reference in a variable and then pass the reducer function addTodo to it.







"Todo.js"

`useSelector`
--------------

In Redux Toolkit, `useSelector` is a hook provided by the `react-redux` library that allows you to extract data from the Redux store state in your React components. It simplifies the process of accessing and subscribing to the state.

Here's how to use `useSelector` in Redux Toolkit:

1. **Import `useSelector`**:
   In your React component file, you need to import `useSelector` from the `react-redux` library.

   ```javascript
   import { useSelector } from 'react-redux';
   ```

2. **Use `useSelector`**:
   Inside your component, you can use `useSelector` to access specific parts of the Redux store state. You provide a selector function as an argument to `useSelector`, and it returns the selected state.

   ```javascript
   const selectedData = useSelector((state) => state.someSlice.someData);
   ```

   - `state` is the current state of your Redux store.
   - `someSlice` represents a specific slice of the state, and `someData` is a property within that slice.

3. **Access the Selected Data**:
   Once you've used `useSelector`, you can access the selected data and use it within your component. The data you've selected will automatically be updated whenever the relevant part of the state changes.



Here's a simple example of how you might use `useSelector` in a React component:

```javascript
import React from 'react';
import { useSelector } from 'react-redux';

function DisplayData() {
  const selectedData = useSelector((state) => state.someSlice.someData);

  return (
    <div>
      <p>Selected Data: {selectedData}</p>
    </div>
  );
}

export default DisplayData;
```

In this example, `selectedData` is derived from the state, specifically from the `someData` property in the `someSlice` of the Redux store. When `someData` changes in the store, the `DisplayData` component will automatically re-render with the updated data.




--> In our application, we want to obtain the list of all our todos from the store. We access this list through the use of the `useSelector` hook.


--> First, we import the `useSelector` hook. The `useSelector` method is used to  extract data from the Redux store  by utilizing the reducers.

```jsx
import { useSelector } from "react-redux"
```

--> How `useSelector` functionality works in our App.

```jsx
const todos = useSelector(state => state.todos)
```

In this line of code, we are using the `useSelector` hook to extract data from the variable todos that is in Redux store state and assign it to the variable we made  `todos` variable. Let's break it down:

- `(state => state.todos)`: This is the selector function that you pass to `useSelector`. It defines what part of the state you want to access.

  - `state` is the argument representing the current state of the Redux store. You can name it anything you like, but it's commonly referred to as `state`.
  
  - `state.todos` is used to access the `todos` property that is array in our case within the state. 

- `const todos = ...`: This line defines a constant variable named `todos` that receives the result of the selector function.



The `todos.map((todo) => ...)` part of the code is using the `map` function to iterate over the `todos` array. Let's break it down:

1. `todos`: This is an array containing a list of todo items. Each item in the array represents a single todo.

2. `.map()`: The `map` function is a higher-order function in JavaScript used to iterate over arrays and apply a function to each item in the array. It returns a new array with the results of applying the function to each item.

3. `(todo) => ...`: This is an arrow function that takes an individual `todo` from the `todos` array as a parameter. Inside the function, you define what should be done with each `todo`.

In the code you provided, this `map` function is used to generate a list of elements (list items in this case) based on the `todos` array. For each `todo` in the array, a `<li>` element is created. This allows you to display each todo as a list item in your component. The content and appearance of each list item are defined within the `.map` function, allowing you to display the todo text and provide a button for removing it, among other things.





# Now let's understand the story of main jsx and App.jsx

And also perform our main work wrapping the component:

 for wrapping our component in any main file App.jsx and main.jsx we need two things provider and store ,


---> We import provider from react Redux


```jsx
 import { Provider } from 'react-redux'
```

---> We import a store from our app folder where we create our store 
store name is conventional we can write anything instead of that

```jsx
 import {store} from './app/store'
```
 
 so we import provider and store and pass a property name store and pass value store into it





 The line `import {store} from './app/store'` is responsible for importing your Redux store configuration into your application. Let's break it down in detail:

1. `import {store}`: This is an ES6 destructuring import statement. It allows you to import specific variables or objects from a module. In this case, you are importing the `store` variable from the module located at `'./app/store'`.

2. `'./app/store'`: This is the path to the module you are importing from. It specifies the location of the module containing your Redux store configuration.

So, when you use `import {store} from './app/store'`, you are essentially bringing in the `store` object that you've created and configured in your Redux store setup, allowing you to use this store to manage your application's state. This store is then provided to your entire React application through the `Provider` component, as seen in your rendering code.






Can I change the name of store that is inside curly braces.

Yes, you can change the name of the imported variable from the store in the curly braces when using ES6 destructuring import. For example, if you originally imported your store like this:

```javascript
import { store } from './app/store';
```

You can change the name of the variable like this:

```javascript
import { store as myCustomStoreName } from './app/store';
```

Now, you can refer to the store as `myCustomStoreName` in your code instead of `store`. This can be helpful if you want to use a different or more descriptive variable name for the store within your application.