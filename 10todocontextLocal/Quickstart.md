# Understanding the Context API with Local Storage in React:

In this project, we learned the concept of the Context API and implemented it with local storage. We grasped this topic by creating a to-do app where we could add tasks and store them in local storage, ensuring they wouldn't disappear when we reload the application window.

This structure, combined the  facilitated the development of our to-do app while ensuring efficient utilization of the Context API and local storage.



To develop this project, we followed a structured approach. We began by creating a context in the "context" folder. In this folder, we established a "TodoContext.js" file. Within this file, we used the `createContext` method to create a context and stored it in a variable, which we then exported for use in our components.


-------------------------------------------------------------------------------------------------------------

```jsx 
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
``` 


```jsx
    addTodo: (todo) => {},
```
You will pass todo in it, todo means todos[] array , which is defined above. As you will pass todo, add function will do some functionality which is defined in app.js file.

```jsx
updateTodo: (id, todo) => {},
```
You will pass the value of the input field in it and also give the id of which component you want to update.

```jsx
    deleteTodo: (id) => {},
```
In delete you will pass only id, it means which component will you delete.


```jsx
    toggleComplete: (id) => {},
```
The component will be updated in the toggle component, the rest of the work is done as per the css requirement of the component.






We provide certain arguments in the `createContext` method. We pass an object, and inside that object, we create an array. Inside the array, there is another object. Apart from the array, there are key-value pairs that are actually functions.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
This is the major difference between the Context API and Redux. In the Context API, we only need to provide the name of the function in the `createContext` argument, but we do not define its functionality there. In Redux, there is no such limitation, and we can define the functionality more flexibly.

Context api is not made for bigger projects For bigger project we use Redux Zustand etc.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We further advanced our project by creating a custom hook named "useTodo." This hook allowed us to access the "TodoContext" context within our components.

Additionally, we constructed a "TodoProvider" to serve as the provider for the "TodoContext" context. We stored it in a variable and exported it to the files where this context was needed.




---------------------------------------------------------------------------------------------------------

# We define the functionality of the function that we pass in the argument of the context in "app.jsx" or in any file of our choosing.

Here, we concentrate on the arguments we pass in our context, allowing us to utilize them across all components associated with that context.

``` jsx
todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ]

```

The "todo" data that is coming from the "TodoContext.js" file needs to be stored somewhere, and it is used to update the user interface. To manage this data, we store it in a state variable. The default value for this state, set using the `useState` hook, is an empty array. This allows us to keep track of the "todo" items and update the UI based on their state.

``` jsx
 const [todos, setTodos] = useState([]);
```


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
In your component, you'll use todos to keep track of the "todos" items, and when you want to add, update, delete, or manipulate to-do items, you'll use "setTodos" to modify the todos state. When you call setTodos with a new value, it triggers a re-render of your component with the updated state, allowing you to reflect those changes in your user interface.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




``` jsx
 const addTodo =  (todo) => {
     setTodos((prev)=>{
         return [{id:Date.now() , ...todo},...prev]
  })
 }
```


Certainly! This code appears to be a JavaScript function that adds a new "todo" item to a list of todos. Let me break it down for you in easy language:

1. `const addTodo = (todo) => {`: This line declares a function named `addTodo` that takes one argument, `todo`, which is an object representing a task or item to be added to a list of todos.

2. `setTodos((prev) => {`: This code suggests that `setTodos` is a function that updates a list of todos. It uses a callback function that takes the previous state of the todos as an argument, which is denoted as `prev`. This is often used in React when you're working with state management.

3. Inside the callback function, the following line is executed:

   ```javascript
   return [{id: Date.now(), ...todo}, ...prev]
   ```

   - `Date.now()`: This function returns the current timestamp in milliseconds. It is used to generate a unique `id` for the new todo item.
   - `{id: Date.now(), ...todo}`: This creates a new object with a unique `id` and copies all the properties from the `todo` object passed as an argument using the spread operator (`...`). So, the new todo item will have a unique `id` and the properties of the original `todo`.
   - `[...prev]`: This part creates a new array by spreading all the elements from the previous todo list, effectively keeping all the existing todos.

For example, if the previous state of todos was [ { id: 1, todo: "Task 1", completed: false }, { id: 2, todo: "Task 2", completed: true } ], using ...prev would effectively create a copy of this array:

4. The final result of this line is a new array that contains the newly created todo item at the beginning, followed by all the previous todos. This represents the updated list of todos.

In summary, the `addTodo` function takes a `todo` object, generates a unique ID for it, and adds it to the list of todos, which is updated using the `setTodos` function. This is a common pattern for adding items to a list in React applications, where state is managed using functions like `setTodos`.

    -------------------------------------------------------------------------------------










``` jsx
  const updateTodo = (id, todo) => {
      setTodos((prev) => {
          const updatedTodos = prev.map((prevTodo) => {
              if (prevTodo.id === id) {
                  return todo;
        } else {
            return prevTodo;
        }
      });

      return updatedTodos;
    });
  };

```

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
In this context, `todo` represents an array of to-do items. We iterate through the `todos` array to identify the specific to-do item that needs an update. To achieve this, we use the `setTodos` function with a callback. Inside this callback, we access the previous state value, but we don't return anything. We loop through the previous value, knowing that by using `map`, we can access each to-do item, and each item is an object with an `id` property. We then compare this `id` to the one we want to update. If there's a match, we replace the old to-do with the new value. If the `id` doesn't match, we leave the old to-do as it is within the previous value. This process ensures that only the specific to-do item we're interested in gets updated while preserving the rest of the previous state.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


Certainly! This code is a JavaScript function called `updateTodo`. Its purpose is to update an existing todo item in a list of todos, typically used in a React application with state management. Let me break it down in easy language:

1. `const updateTodo = (id, todo) => {`: This line defines a function named `updateTodo` that takes two arguments: `id` and `todo`. The `id` represents the unique identifier of the todo you want to update, and `todo` represents the new version of the todo you want to replace the old one with.

2. `setTodos((prev) => {`: This code suggests that `setTodos` is a function used to update the list of todos. It takes a callback function as an argument, which receives the previous state of the todos as `prev`.

If we pass `todo` directly as `setTodos(todo)`, all the previous values of `setTodos` are overwritten. To retain access to the previous state, as we've already covered in previous concepts, we pass the new value in a callback function.

3. Inside the callback function, you'll find the following code block:

   ```javascript
   prev.map((prevTodo) => {
     if (prevTodo.id === id) {
       return todo;
     } else {
       return prevTodo;
     }
   })
   ```

   - `prev.map((prevTodo) => { ... })`: This line is using the `map` function to loop through each todo item in the previous list, denoted as `prevTodo`.

   - Inside the `map` function, it checks if the `id` of the `prevTodo` matches the `id` provided as an argument to the function. If there's a match (i.e., the `prevTodo` has the same ID as the one you want to update), it returns the `todo` provided as the new version of that todo.

   - If there's no match (the `prevTodo` doesn't have the same ID), it returns the `prevTodo` itself, effectively keeping it unchanged.

4. The result of this mapping operation is a new array that represents the updated list of todos. Any todo with the same `id` as the one you wanted to update will be replaced with the new `todo`, and the rest of the todos will remain the same.

In simple terms, the `updateTodo` function takes an `id` and a new `todo`, and it updates the list of todos by replacing the old todo with the provided `id` with the new `todo`. It keeps all other todos unchanged. This is a common pattern for updating items in a list in React applications with state management.


      ------------------------------------------------------------------------










``` jsx
  const deleteTodo = (id) => {
      setTodos((prev) => {
          return prev.filter((todo) => {
              return todo.id !== id;
      });
    });
  };
```
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Now, let's define the functionality for deleting a to-do item. To perform a delete operation, we need the `id` of the item within the component. We achieve this by calling the `setTodos` function within a callback. In this callback, we gain access to the previous state value and apply the `filter` method. It's important to understand that the `filter` method works with the concept of creating a new array. This new array includes all the values from the original array, except the one specified by the `id` that needs to be deleted. This approach ensures that the new array contains all the values except for the one with the specified `id`.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^





Of course! This code appears to be a JavaScript function named `deleteTodo`. Its purpose is to remove a specific todo item from a list of todos. Let me explain it in easy language:

1. `const deleteTodo = (id) => {`: This line defines a function called `deleteTodo` that takes one argument, `id`. The `id` is the unique identifier of the todo item you want to delete.

2. `setTodos((prev) => {`: It suggests that `setTodos` is a function used to update the list of todos. The function takes a callback as an argument and provides the previous state of the todos as `prev`.

3. Inside the callback function, you'll find the following code:

   ```javascript
   prev.filter((todo) => {
     return todo.id !== id;
   })
   ```

   - `prev.filter((todo) => { ... })`: This code uses the `filter` method to iterate through each todo in the previous list, which is denoted as `todo`.

   - Inside the `filter` function, it checks whether the `id` of the `todo` matches the `id` provided as an argument. If it does not match, it returns `true`, which means the `todo` should be kept in the new array. If it matches, it returns `false`, which means the `todo` should be excluded from the new array.

4. The result of this `filter` operation is a new array that contains all the todos except the one with the specified `id`. This new array represents the updated list of todos.

In simple terms, the `deleteTodo` function takes an `id` and removes the todo item with that `id` from the list of todos. It keeps all other todos in the list. This is a common pattern for deleting items from a list in React applications with state management. However, there is a small issue in this code, and it needs a modification to work correctly. You should return the filtered array so that it can be used to update the state with `setTodos`. Here's the corrected code:

```javascript
const deleteTodo = (id) => {
    setTodos((prev) => {
        return prev.filter((todo) => {
            return todo.id !== id;
    });
  });
}
```

By returning the filtered array, you ensure that the state is updated with the new list of todos after the specified todo item is removed.




      ------------------------------------------------------------------------







``` jsx
  const toggleComplete = (id) => {
      setTodos((prev) => {
      return prev.map((prevTodo) => {
          if (prevTodo.id === id) {
              return { ...prevTodo, completed: !prevTodo.completed };
        } else {
            return prevTodo;
        }
      });
    });
  };
```
Certainly! This code defines a JavaScript function called `toggleComplete`. Its purpose is to toggle the completion status of a specific todo item in a list of todos. Let me explain it in easy language:

1. `const toggleComplete = (id) => {`: This line declares a function named `toggleComplete` that takes one argument, `id`, which is the unique identifier of the todo item you want to toggle the completion status for.

2. `setTodos((prev) => {`: It suggests that `setTodos` is a function used to update the list of todos. This function takes a callback as an argument and provides the previous state of the todos as `prev`.

3. Inside the callback function, you'll find the following code:

   ```javascript
   prev.map((prevTodo) => {
     if (prevTodo === id) {
       return { ...prevTodo, completed: !prevTodo.completed };
     } else {
       return prevTodo;
     }
   })
   ```

   - `prev.map((prevTodo) => { ... })`: This code uses the `map` function to iterate through each todo item in the previous list, denoted as `prevTodo`.

   - Inside the `map` function, it checks if the `prevTodo` is equal to the provided `id`. If they match, it means this is the todo item you want to toggle, and it returns a new object that is a copy of `prevTodo` with the `completed` property inverted (toggled from `true` to `false` or vice versa).

   - If there is no match (the `prevTodo` is not the one with the specified `id`), it returns `prevTodo` as it is.

4. The result of this `map` operation is a new array that represents the updated list of todos. The completion status of the todo with the specified `id` is toggled, and all other todos remain unchanged.

In simple terms, the `toggleComplete` function takes an `id` and toggles the completion status of the corresponding todo item in the list of todos. This is a common pattern for toggling properties of items in a list in React applications with state management. However, there's a bug in your code. You should be comparing `prevTodo.id` to `id` instead of comparing the entire `prevTodo` object to `id`. Here's the corrected code:






-----------------------------------------------------------------------------------------------------------------------------------

# Now we understand the concept of local storage functionality.



When the application is loaded for the first time, which method is run first and can access data from local storage?

Here we use "useEffect" (hook) method:


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
You can access local storage directly when you're in React, as long as you're not discussing server-side rendering. In cases where all operations occur on the server and data doesn't reach the browser, local storage becomes irrelevant.

When retrieving a value from browser local storage, it's important to note that the value is in string format. You can convert this value to JSON format as needed. Conversely, when storing a value in local storage, you should convert it to a string, as browser local storage only understands string data.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


   ```jsx
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  ```


Certainly! This code is written in React and uses the `useEffect` hook. Let me explain it in simpler terms:

1. `useEffect` is a special function in React that allows you to perform side effects in your components. Side effects can be things like fetching data, updating the DOM, or, in this case, reading from local storage.

2. Inside the `useEffect`, there's a block of code that does the following:

   a. It looks into the browser's local storage for an item named "todos." Local storage is a way to store data on the user's web browser.

   b. It then tries to convert the data it finds in local storage from a string (the way it's stored in local storage) into a JavaScript object using `JSON.parse`. This assumes that the data in local storage was originally in JSON format.

   c. It checks if there is any data (todos) in local storage and if the `todos` array has a length greater than 0, which means it has items in it.

   d. If there are todos in local storage, it updates the state using the `setTodos` function. This means it sets the "todos" data to be the same as what was found in local storage, effectively restoring the previous state.

3. The `[]` you see at the end of `useEffect` is called the dependency array. It tells React to run this effect only once, when the component first mounts. It means this effect will only run when the component is first created.

So, in simple terms, this code retrieves a list of "todos" from local storage (if there are any) when the component is first loaded and sets the component's state to display those todos if they exist. It's a way to remember and display data that was previously saved in local storage.



    -------------------------------------------------------------------------------------------------






```jsx
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
```

Certainly! This code is also in React and uses the `useEffect` hook. Let's break it down in easy language:

1. `useEffect` is a special function in React that allows you to perform side effects in your components. In this case, the code inside `useEffect` is used to save data to the browser's local storage whenever the `todos` state changes.

2. Inside the `useEffect`, there's a block of code that does the following:

   a. It takes the current value of the `todos` state, which is an array of to-do items.

   b. It converts this array into a JSON string using `JSON.stringify`. Local storage can only store data as strings, so this step turns the array into a string that can be saved.

   c. It uses `localStorage.setItem` to save this JSON string with the key "todos" in the browser's local storage. This means it's storing the current state of your to-do items in the browser so that you can access it later, even if you refresh the page or close the browser.

3. The `[todos]` you see at the end of `useEffect` is called the dependency array. It tells React to run this effect whenever the `todos` state changes. So, whenever you add, edit, or delete a to-do item, this effect will run and update the data in local storage to reflect the current state of your to-do list.

In simple terms, this code automatically saves your to-do list to the browser's local storage whenever it changes. This ensures that your to-do items are preserved even if you close your browser or refresh the page, making your to-do list persistent across sessions.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"We automatically add values to local storage when our 'todo' context is updated because it is wrapped inside the 'useEffect' method."
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

















---------------------------------------------------------------------------------------------------
# Now we add component to our application in component folder.

"TodoForm.jsx"

```jsx
import React, { useState } from "react";
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false})
      setTodo("")
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
```

First, we define a state to represent individual to-do objects. 

When the submission event occurs, we call the 'add' function. Inside this function, we have the 'addTodo' functionality, which is part of the context defined in 'app.js'. We access this functionality through our custom hook 'addTodo,' which helps us utilize our global context data and functions.












"TodoItem.jsx"

```jsx
import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  // making state
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleDone = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleDone}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
```

let's break down this code step by step in simple terms:

1. We have a React component called `TodoItem`. It's responsible for rendering and managing individual to-do items.

2. Inside the component, we're using the `useState` function from React to define some states:
   - `isTodoEditable` is used to track whether the to-do item is currently editable. It starts as `false`.
   - `todoMsg` is used to store the message or content of the to-do item. It's initially set to the text of the to-do item being passed as a prop.

3. We're using the `useTodo` hook to get access to three functions: `updateTodo`, `deleteTodo`, and `toggleComplete`. These functions seem related to managing to-do items but are likely part of a context or global state management system.

4. There's a function called `editTodo`, which is used when you want to edit a to-do item. It calls the `updateTodo` function with the to-do's ID and the updated message. It also sets `isTodoEditable` to `false` after editing.

5. Another function called `toggleDone` is used to mark a to-do item as completed or not. It likely uses the `toggleComplete` function.

6. The `return` part of the component is what gets displayed in the UI. Here's a breakdown of what's being rendered:

   - A `div` element with various CSS classes to style the to-do item. The style depends on whether the to-do is completed or not.
   - An `input` element with a checkbox, which allows you to mark the to-do item as completed or not. It triggers the `toggleDone` function when the checkbox is changed.

   - Another `input` element, which is a text input for editing the to-do's message. It has different styles based on whether it's editable or not. The `value` and `onChange` properties are used to handle the text and its changes.

   - There's a button that serves both as an "Edit" and "Save" button. It toggles between these two states based on whether the to-do item is editable. Clicking it calls the `editTodo` function to save changes.

   - Lastly, there's a "Delete" button that, when clicked, calls the `deleteTodo` function to remove the to-do item.

In summary, this code is a React component for displaying and managing individual to-do items. It handles editing, marking as done, saving changes, and deleting to-do items. It uses states to keep track of the item's message and whether it's currently editable. It also relies on functions from a context or global state to manage the to-do items.




---------------------------------------------------------------------------------------------------


# Now, let's navigate to the "app.jsx" file because our component is ready.

Within "app.jsx," we've placed our "TodoForm" component directly in the commented area. However, for the "TodoItem" component, we need to run a loop so that each individual item loads when we invoke the functionality.

To achieve this, we use the `map` function. Inside the `map` function, we create a `div` for each to-do item, and we assign a unique key to each item. We use the `todo.id` as the key to ensure uniqueness. Then, we render our "TodoItem" component and pass the `todo` as a prop.


```jsx
 {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
```

When we're using context, there's no issue with passing props when needed. Context allows us to share data and functions across components without the need for prop drilling.
