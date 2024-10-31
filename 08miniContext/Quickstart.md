# Optimizing Data Transfer in React Components

## Scenario

Consider a scenario where you have a component at the very bottom of a deeply nested hierarchy, and your goal is to pass data from this component to another one located deep within the nesting. To achieve this, you currently pass the data through multiple intermediary components, some of which don't actually require the passed props but serve as necessary channels for the data to reach the final target component.

This approach, known as "prop drilling," is observed to be unoptimized, as it involves unnecessary steps and can be cumbersome.

## Unoptimized Approach

In the process of passing props, you notice that the intermediate components play a key role in guiding the data flow, even though they themselves don't make use of these props. This results in an intricate chain of components through which data must cascade to reach the target component.

## An Efficient Solution

To address this inefficiency, you propose an alternative solution. The idea is to create a global object, and components requiring specific values can request them directly from this global object. This approach eliminates the need to cascade values through multiple components, streamlining the data transfer process.

## Introducing the Context API

After implementing the global context, the need for passing data through an intricate chain of components is completely eliminated. This practice, commonly known as "prop drilling," is a common issue not only in React but also in other libraries or frameworks.

Enter the **Context API**, a solution that simplifies the management and sharing of data across components, making the task more efficient and user-friendly.

This problem of efficient data transfer is not unique to React but is encountered in other libraries and frameworks as well.



## `Redux` is also dealing concept related to Context API.

Redux is a popular JavaScript library used for managing the state of a web application. It helps you keep track of all the data in your app, like user information, app settings, or any other information that needs to be shared among different parts of your application.

Think of it as a big storage room where you can neatly organize and store all the information your app needs. Redux makes sure that different parts of your app can access and update this information without causing chaos. It's especially helpful in large applications where many components or pages need to communicate with each other.

Redux works by creating a central place, called a "store," where all your application's data is kept. When you want to change something in your app, you send a message called an "action" to the store. The store then updates the data based on the action. Any part of your app that needs to know about the change can be informed by the store.

In simple terms, Redux helps you manage your app's data in an organized and predictable way, making it easier to build and maintain complex applications.




## We understand the concept of Cotext API by creating Project


In this scenario, we're dealing with the Context API, which is like creating a global variable for all your app's data. However, it's important to understand that this is specific to managing state in React. If it were as straightforward as creating a global file and using it, that would indeed be simple. But in React, it's a bit more intricate.

React state management involves handling your app's data in a way that aligns with React's principles. It's not as straightforward as just creating a global file, primarily because React has its own way of managing data. This approach might seem a bit more complex, but it's necessary to work effectively within the React ecosystem.


## Steps We Cover:

To start, we create a folder named "context" Inside this folder, we make a new file  with a ".js" extension because this file contains plain JavaScript. We organize different context files for various purposes. For example, in this case, we have a **userContext** file.

In simple terms, we begin by making a specific folder for our context-related stuff. Each context gets its own JavaScript file to keep things neat and organized. For the example of managing user-related information, we'd create a **userContext** file in that folder.


 In the **userContext** file, we keep the context we've created using ` react.createContext()` . This context is stored in a variable and exported as a data variable for later use.



## `React.createContext()`

`React.createContext()` is a function in React that helps you manage and share data between different components without the need for **prop drilling** ***(passing data through multiple levels of components)***. Let me explain it in detail and in easy language:

In a React application, you often have a tree of components, where data needs to flow from a top-level component to deeper child components. Traditionally, you would pass this data down as props from parent to child, and sometimes from child to child, and so on. This can become cumbersome and lead to prop drilling, as discussed in the previous paragraphs.

Here's where `React.createContext()` comes in to simplify the process:

1. **Create a Context**: You start by creating a "context" using `React.createContext()`. This context is like a container for your data. Think of it as a way to define what kind of data you want to share with your components.

    ```jsx
    const MyContext = React.createContext();
    ```

2. **Provide Data**: In your component tree, you wrap the components that need access to the data with a `MyContext.Provider` component. This provider component takes a `value` prop, which is where you provide the data you want to share.

    ```jsx
    <MyContext.Provider value={myData}>
      {/* Components that can access myData */}
    </MyContext.Provider>
    ```

3. **Consume Data**: Now, any component that is a child of the `MyContext.Provider` can consume the data using the `MyContext.Consumer` component or the `useContext` hook.

    - Using `MyContext.Consumer` (more traditional way):
    
        ```jsx
        <MyContext.Consumer>
          {value => (
            // You can access and use value (which is your data) here
          )}
        </MyContext.Consumer>
        ```

    - Using the `useContext` hook (more modern way):
    
        ```jsx
        import React, { useContext } from 'react';

        function MyComponent() {
          const value = useContext(MyContext);
          // You can access and use value (which is your data) here
        }
        ```

This way, you can easily share data between components without the need for prop drilling. The `MyContext.Provider` at a higher level of your component tree provides the data, and any component below it can consume the data using either `MyContext.Consumer` or the `useContext` hook.

It's a powerful tool for managing state and data in your React application and helps keep your code more organized and less complex.

-----------------------------------------------------------------------------------------------------------------------






This is the first part where we establish a context that will later serve as a provider. In this section, we'll understand how the provider takes the value from this context and offers it. You see, the core function of context is to provide a variable, and each context inherently acts as a provider. Therefore, the "user context" also plays the role of a provider in this context management system.



### Once we've created the context, the next step is to build a context provider for it. In our case, we've created a file called "userContextProvider.jsx" to serve this purpose.



### Why we create a context provider  file with .JSX Extension?

We create a context provider file with a .jsx extension because JSX (JavaScript XML) is commonly used in React to define the structure and behavior of components.It's a way to signify that the file contains React-specific code and JSX syntax for defining how the context is provided to components within the application. 



### userContextProvider.jsx

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  return (
      <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;  

```


In your code, the `{children}` is a special prop that allows you to wrap and include other components within the `UserContextProvider` component. 

Here's a simple explanation: The `UserContextProvider` is a component that provides a certain context to its child components. To make it more flexible and reusable, it can wrap any other component or components, and those components will be treated as "children" of the `UserContextProvider`. This way, any component wrapped by `UserContextProvider` can access the context it provides.

For instance, if you use `UserContextProvider` to wrap your entire application, all the components within your app can access the user-related data stored in the `UserContext` thanks to the `{children}` prop. It's a way to make sure that the context is available to all the components nested inside `UserContextProvider`.

### Up to this point, we've successfully created a global context. But how do we actually access and use this global context in our application?

    
To utilize this global context, we need to provide access to it in our main file. Some developers choose to grant access to the global context in their "main.jsx" file, while others do it in an "app.jsx" file. Both approaches are valid, and the functionality remains the same. 


**App.jsx**

In simpler terms, we begin by importing the "UserContextProvider" into our "app.jsx" file. By doing this, we make sure that the "UserContextProvider" component is available for use within the "app.jsx" file. Any component we place within the "UserContextProvider" component can now access the global context seamlessly.

```jsx

import UserContextProvider from "./Context/UserContextProvider"

function App() {
    
    
    return (
        <UserContextProvider>
    <h1>React with Chai</h1>

    </UserContextProvider>
  )
}

export default App

```


### Up to this point, we've successfully created a global context. But how do we actually access and use this global context in our application?


For understanding the scenario, we create two component files within the component folder. One of these components illustrates how to **access data from the global context**, and in the other, we explore **how data can be sent to the global context** so that it can be utilized by other components.

To put it more clearly, when working with two component files in the component folder, one demonstrates the process of retrieving data from the global context, while the other shows how data can be transmitted to the global context for use by other components.


In "Login.jsx"  file we explore how data can be transmitted to the global context for use by other components.


### Login.jsx

```jsx
import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password}) // passing data to Global Context
    }

  return (
      <div>
      <h2>Login</h2>
      <input 
      type="text" 
      placeholder="username" 
      value={username}
      onChange={(e)=> setUsername(e.target.value) }
      />
      {" "}
      <input 
      type="password" 
      placeholder="password" 
      value={password}
      onChange={(e)=> setPassword(e.target.value) }
      />
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
```

We begin by importing the essential context files. Following this, we define the UI component. Afterward, we delve into the process of fetching values from the "UserContext" with the assistance of the "useContext" hook.



### `useContext`

Certainly! The `useContext` hook in React is a way to access data or functions stored in a context. Let's break down how it works in detail and in easy language:

**1. What is Context?**
   - In React, "context" is like a global data store that can hold information or functions that you want to share across multiple components.

**2. Creating a Context:**
   - First, you create a context using `createContext()`. You define what kind of data or functions you want to store in this context. For example, you could have a context for user authentication, themes, or language settings.

**3. Providing the Context:**
   - You create a "Provider" component using the context. This provider component wraps parts of your application where you want to make this data or functions available. It sets the initial data or provides functions to update the data.

**4. Consuming the Context:**
   - In components where you want to access the shared data or functions, you use the `useContext` hook.
   - You specify which context you want to access. The `useContext` hook retrieves the data or functions from the nearest provider up the component tree.

**5. How `useContext` Works:**
   - The `useContext` hook returns the data or functions from the context. You can assign these values to variables in your component.

**6. Automatic Updates:**
   - If you update the data in the context (for example, changing the user's authentication status), all components that use `useContext` will automatically receive the updated data. This helps keep your application's state consistent across different parts of your app.

**Example Use Case:**
   - Imagine you have a user authentication context. You create a provider that holds user information and authentication status. Components that need to know if a user is authenticated can use `useContext` to access this information. When a user logs in or out, you update the context, and all the components that use it are automatically informed.

In simple terms, the `useContext` hook in React makes it easy to share and access data or functions across different parts of your application without manually passing them through props. It's a powerful tool for managing global application state, and it simplifies the process of keeping your components in sync with shared data.

"setUser"?

We pass the setUser function from the context provider, and we utilize it within a useContext hook. This is necessary because the useContext hook requires the specific context it should work with. Since there can be multiple contexts in an application, it's crucial to provide the right context to ensure the correct functionality.

```jsx
  const handleSubmit = (e)=>{
      e.preventDefault()
        setUser({username,password})
    }
```

In this handleSubmit , we transmit data such as usernames or passwords to the global context through the "setUser" context.



### Now we see how to fetch data that we pass in global context  .


If you believe that fetching data from the global context can be achieved by directly accessing the "user" data, just as we do with "setUser" using the "UserContext" hook, then you are indeed correct.































