import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import NavBar from './components/NavBar_Component/NavBar'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <Header/>
     <NavBar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
