import { createContext, useContext } from "react";

// new code
export const ThemeContext = createContext({ themeMode: "light" });

// old code
// export const ThemeContext = createContext({ themeMode: "light" , darkTheme: () => {}, lightTheme: () => {} });
 
export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
