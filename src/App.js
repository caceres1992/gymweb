
import React from 'react'
import Home from './pages/Home'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
        {/* Menu */}
      <NavBar/>
        
      {/* Pages */}
        <Home/>
    </div>
  )
}

export default App

