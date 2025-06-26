import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './Imagegalary'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>

<h1>{import.meta.env.VITE_HI}</h1>
<h1>vinit nagar master branch</h1>

<img src="test.png" style={{ height: '100px' }} alt="Test image" />

<video src="test.mp4" controls style={{ width: '200px', marginTop: '10px' }} />

<audio src="test.mp3" controls style={{ marginTop: '10px' }} />

<object data="test.pdf" type="application/pdf" width="200" height="150">
  <p>PDF preview not supported</p>
</object>

<img src="test.svg" alt="Test SVG" style={{ height: '50px', marginTop: '10px' }} />

<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>

<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
<ImageGallery />
    </>
  )
}

export default App
