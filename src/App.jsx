import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

// apontamentos arquivo central
function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <div className='container'>
          < Outlet />
        </div>
      </div>
    </>
  )
}

export default App
