import { useState, useEffect } from 'react';
import { LoadingPage, Sidebar, Hero, Banner } from './components';
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

          <div className='pt-16'>
            <Sidebar />
            <Hero />
          </div>


        </div>
      )
    }

    </div>
  )
}

export default App
