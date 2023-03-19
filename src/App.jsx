import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        this is the header
      </header>
      <div className="hero">this is the hero section</div>
      <span className="searchBar">this is the search bar</span>
      <div className="featuredRestaurants">these are the featured restaurants</div>
      <footer></footer>
    </>
  )
}

export default App
