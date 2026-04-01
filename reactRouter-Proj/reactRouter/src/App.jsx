import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// --------------------------------------------------------------------------------------------------------------------------------------
//ABOUT LINK

// When ever u use  "a" tag the will refresh completly but in react we don't  have a concept of refresh so we use "Link"
// In standard HTML, we use <a href="...">. However, in React, using an anchor tag is discouraged for internal navigation.

// Anchor Tag (<a>): Refreshes the entire page, reloading all assets and losing the application state.

// Link Component:

// Usage: import { Link } from 'react-router-dom'

// Syntax: <Link to="/about">About</Link>

// Interview Tip: Link prevents page reloads by intercepting the click and updating the URL via the History API, then rendering only the necessary component.

//About NavLink

// 🟠 3. NavLink Component
// NavLink is a special version of the Link that knows whether or not it is "active."

// Key Feature: It provides access to an isActive state within its className or style props.

// Practical Usage: Useful for highlighting the current page in a navigation bar (e.g., changing the text color to orange when on that page).

// Example Code Snippet:

// JavaScript
// <NavLink
//   to="/about"
//   className={({ isActive }) => 
//     `block py-2 ${isActive ? "text-orange-700" : "text-gray-700"}`
//   }
// >
//   About
// </NavLink>

// ----------------------------------------------------------------------------------------------------------------------------------------

import{Link, NavLink} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    </>
  )
}

export default App
