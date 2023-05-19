import { useState, useEffect } from 'react';
import { LoadingPage, Sidebar  } from './components';
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
          <Sidebar />
        </div>
      )
    }

    </div>
  )
}

export default App
