import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex justify-center items-center h-[100px]">
          <ThemeBtn />
        </div>
      </ThemeContextProvider>
      
      <div className="w-full h-fit flex justify-center items-center">
        <Card />
      </div>
    </>
  );
}

export default App;







// Old Code 

// import { useEffect, useState } from "react";
// import "./App.css";
// import { ThemeContextProvider } from "./context/theme";
// import ThemeBtn from "./components/ThemeBtn";
// import Card from "./components/Card";

// function App() {
//   const [themeMode, setThemeMode] = useState("light");

//   const lightTheme = () => {
//     setThemeMode("light");
//   };

//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

  
//   // Actual change in theme
//   useEffect(() => {
//     document.querySelector("html").classList.remove("light", "dark");
//     document.querySelector("html").classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
//       <div className="flex min-h-screen items-center dark:bg-gray-800">
//         <div className="w-full">
       
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>

//         </div>
//       </div>
//     </ThemeContextProvider>
//   );
// }

// export default App;




/* In the old code the Card were not using ThemeContext to change its color but it is using Tailwind property , So I extract the card component from   ThemeContextProvide so that no confusion happen

Tailwind CSS is configured to use these light and dark classes to switch between light and dark theme styles. Here's how it works:

In the Card component, you have classes like dark:bg-gray-800 and dark:text-white. These classes are automatically applied when the dark class is present on the html element.
When the html element has the dark class (which happens when themeMode is set to "dark"), Tailwind applies the dark theme styles (bg-gray-800, text-white, etc.).
When the html element has the light class (which is applied by default or when themeMode is "light"), Tailwind applies the light theme styles (like bg-white, text-gray-900, etc.).
This dynamic theming behavior is powered by Tailwind's built-in support for dark mode, which looks for the presence of a dark class and applies the appropriate styles when detected.

*/
