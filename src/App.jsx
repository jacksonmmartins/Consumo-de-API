import './App.css'
import Navbar from './components/Navbar'
// outlet é o equivalente informar que o arquivo central irá utilizar todas as rotas descritas no main.jsx
import { Outlet } from 'react-router-dom'

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
