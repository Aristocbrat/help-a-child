
import './App.css'
import {Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Donations from './components/Donations'
import Donation2 from './components/Donation2'
import Wth from './components/Wth'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Footer2 from './components/Footer2'

function App() {


  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Donations' element={<Donations/>}/>
    <Route path='/Donations2' element={<Donation2/>}/>
    <Route path='/Wth' element={<Wth/>}/>
    <Route path='/Aboutus' element={<Aboutus/>}/>
    <Route path='/Contactus' element={<Contactus/>}/>
    {/* <Route path='/FAQ' element={<FAQ/>}/> */}
   
    

   </Routes>
   </>
  )
}

export default App
