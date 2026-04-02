import React from "react";

import UserContext from "./UserContext";

export const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

 



// This code represents a Context Provider in React. It is the core of the Context API, which is a powerful feature used to manage "Global State."

// In the Chai aur Code series, Hitesh uses this to solve one specific, major headache in React: Prop Drilling.

// 🟢 What is this exactly?
// Think of this file as a "Global Data Warehouse." 1.  UserContext.Provider: This is the "shipping station."
// 2.  value={{user, setUser}}: This is the "package" being shipped. It contains both the data (user) and the function to change that data (setUser).
// 3.  {children}: This is a prop that represents any component you wrap inside this provider (like your whole App).

// 🔵 It will help for what? (The "Why")
// 1. Avoiding Prop Drilling
// Usually, if you have data in App.js and need it in a tiny Profile component 5 levels deep, you have to pass that data through every single middle component, even if they don't need it.
// With Context: Any component, no matter how deep, can "plug in" and grab the user data directly.

// 2. Global Authentication
// This is the most common real-world use case. Once a user logs in, you want their name and profile picture available in the Header, the Profile Page, and the Settings Page. Instead of fetching it 3 times, you store it here once.

// 3. Theme Switching (Dark/Light Mode)
// If you want to change the color of your entire app with one click, Context is the best tool to hold that theme variable.