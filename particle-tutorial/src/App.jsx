import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticleBackground from './components/Particle';
import { toast } from "react-toastify";
 

function App() {

  const [count, setCount] = useState(0)

  const onHandleClick = () => {
  setCount((count) => count + 1);
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  toast.promise(resolveAfter3Sec, {
  pending: "Promise is pending",
  success: "Promise resolved 👌" ,
  error: "Promise rejected 🤯",
});
  }

    // const usEeff = useEffect(() => {
    // setCount((count) => count + 1); 
    //  },[])


  return (
    <>
      <ParticleBackground/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onHandleClick}>
          count is {count} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
