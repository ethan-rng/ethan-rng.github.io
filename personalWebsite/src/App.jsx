import { useState, useEffect } from 'react';
import { LoadingPage, Sidebar, Hero, Banner, AboutMe, Timeline, Footer } from './components';
import './App.css'

function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => { 
    setTimeout(() => {
      setLoad(false); 
    }, 2000);
  }, []);


  return (
    <div className="App">{
      load ? (
        <div>
          {/* Loader Page */}
          <LoadingPage  />
        </div>
      ) : (
        <div>
          {/* Actual Page */}
          <Banner />

          <div className='pt-10'>
            <Sidebar />
            <Hero />
          </div>

          <AboutMe />
          <Timeline />
          <Footer />
        </div>
      )
    }

    </div>
  )
}

export default App
