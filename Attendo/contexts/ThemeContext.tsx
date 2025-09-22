import { createContext, useState } from "react";


export const ThemeContext = createContext({
theme: "light" as "light" | "dark",
toggle: () => {},
});


export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
const [theme, setTheme] = useState<"light" | "dark">("light");
return (
<ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === "light" ? "dark" : "light") }}>
{children}
</ThemeContext.Provider>
);
};