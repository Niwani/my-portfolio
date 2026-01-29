import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {

  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App
