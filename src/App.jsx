import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />
      <Hero />
      
      {/* Main Content with Sections for Navigation IDs */}
      {/* <div className="pt-20"> Padding top to account for fixed navbar */}
        
        {/* <section id="home" className="min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-400">Junior Developer | React Enthusiast</p>
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8 bg-white/5">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl text-center text-gray-300">
            I'm a passionate junior developer learning to build modern web applications. 
            I love exploring new technologies and solving problems with code.
          </p>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400">A cool react application doing something awesome.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-400">Another amazing project showcasing my skills.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 bg-white/5">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-6">Let's get in touch!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Send Message
          </button>
        </section>

      </div> */}
    </div>
  )
}

export default App
