import Navbar from './pages/shear pages/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './pages/shear pages/Footer'

function App() {
const location = useLocation()
console.log(location);
const hidev = location.pathname.includes('login') || location.pathname.includes('register')

  return (
    <>
          { hidev || <Navbar></Navbar>}
          <Outlet></Outlet> 
          <Footer></Footer>
          
    </>
  )
}

export default App
