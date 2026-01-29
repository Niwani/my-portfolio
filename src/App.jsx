import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutMe />
    </div>
  )
}

export default App
