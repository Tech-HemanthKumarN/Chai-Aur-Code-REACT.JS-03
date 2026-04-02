import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {UserContextProvider} from './context/UserContextProvider.jsx'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider> 
  )
}

export default App
