# Understanding the Context API  in React (Another Approach) :

"Let's explore another way to understand the context API.

 To do this, we'll create a new project. In this project, we'll implement a toggle switch that can switch between dark and light modes within the HTML. However, if we decide to create a separate component for the switch, we might wonder how to inform our card component that the dark mode has been toggled. The HTML state needs to be updated when the card is aware of this change. This scenario is similar to what we encounter in login and profile functionality, where both components need to share globally synchronized data using the context API. In this project, we'll apply the concept of the context API in a different way."

-----------------------------------------------------------------------------------------------
"First, we begin with the `app.jsx` file, where we import the code from our GitHub repository. Inside this file, we create a component in which we include other components, such as our theme button component and card component."



"You can see that we've created the app.js and added a div with a specific class, but to incorporate the theme provider context, we first create the context and then implement the provider."

-----------------------------------------------------------------------------------------------

"Now, let's create our context. However, we're taking a different approach this time. First, we create a context file called theme.js inside the context folder. Everything remains the same as in the previous approach until we call the createContext method. In our previous approach, we didn't pass any arguments to createContext, but here we pass a default value."


```jsx 

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
 
```

"We pass a default value as an object, which contains both values and functions."


```jsx 

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
 
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

 
```

"First, we invoke the createContext method and provide it with certain arguments. We store the resulting context in a variable and export it. After that, we also create a provider, store it in a variable, and export it from the same file. However, in the previous approach, we created the provider in a separate file. It's worth noting that the output of both approaches remains the same."

"In the same file, you can create a custom hook and export it. This function is used to access global context data and methods."


"In this approach, we only need to import one thing in our component file, which is the custom hook. However, in the previous approach, we had to import both useContext and the UserContext. Often in production, it's more efficient to consolidate things in the same file, making it a better approach."


  -----------------------------------------------------------------------------------------------

Now lets jump into app.jsx

 
```jsx
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'


function App() {
  
  const [themeMode , setThemeMode] = useState('light')

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // Actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

return (
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                        <ThemeBtn />

                    </div>
                    
                    <div className="w-full max-w-sm mx-auto">
                      
                        <Card/>

                    </div>
                </div>
            </div>


</ThemeProvider>          

  )
}

export default App

```



```jsx
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>      

</ThemeProvider> 
```
"We are only creating a provider for the theme context.  and we have to pass a value to that provider. Until you pass a value, it's not confirmed which value is accessible by all and which value is not accessible by all."






"The value we pass in the wrapper component includes both data and methods, but we may not be aware of what each method does."

"So, take the method name and define its functionality. This functionality will automatically be associated with that method. However, it's important to note that defining this functionality doesn't automatically inject it into the HTML; you need to specify this functionality in your JavaScript code."

```jsx
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
```



"We take the `useEffect` hook here, so that our functionality runs accordingly as changes take place in our components. With this, all the work of the context is completed."


```jsx
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
```

-----------------------------------------------------------------------------------------------------------------------------------

"Now, we create our components in the component folder and import and use these components in the `app.jsx` file."


"Now, when we run the project, the UI loads successfully, but the toggle button does not work. Although we change the class in the HTML element to 'light,' our component does not reflect the light theme. This happens because the class in our HTML component changes but doesn't get transmitted to the card component. To facilitate this transmission, we make use of the concept of context."


"In the context file `theme.js`, we created our custom hook. Inside this custom hook, we use the `useContext` hook,for passing the global context. Any component that needs to access the global context can do so by calling our custom hook."


```jsx

export default function useTheme() {
  return useContext(ThemeContext);
}

```




"Now, we navigate to the context file `ThemeBtn.jsx`. Here, we can observe the use of our custom hook. Through our hook, we obtain access to the theme context, which serves as a global context."

```jsx

const { themeMode , lightTheme , darkTheme } = useTheme()

```

"Now, let's examine the input button. Inside the input element, we observe the `onChange` event. When the `onChange` event occurs, it triggers a function called `onChangeBtn`, which checks whether the theme is currently set to dark or light and makes the necessary adjustments accordingly."


"All of these actions are performed within the `btn` component, while the `card` component remains unaware of these changes. To ensure that the changes made in the state are reflected in the `card` component, the responsibility falls to the `useTheme` hook. We retrieve all the values in `theme`, and in the `app.jsx` file, we declare a `useEffect` hook. This hook monitors for changes in the theme, and when a change occurs, the `useEffect` updates all components wrapped with the theme context in the `app.jsx` file."


"Now, the final step is to configure the tailwind file."


```jsx

  darkMode : "class",

```
