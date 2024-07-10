
import './App.css'
import {Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Donations from './components/Donations'
import Donation2 from './components/Donation2'

function App() {


  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Donations' element={<Donations/>}/>
    <Route path='/Donations2' element={<Donation2/>}/>
    {/* <Route path='/Wth' element={<Wth/>}/> */}
    {/* <Route path='/Aboutus' element={<Aboutus/>}/> */}
    {/* <Route path='/Contactus' element={<Contact/>}/> */}
    {/* <Route path='/FAQ' element={<FAQ/>}/> */}
    

   </Routes>
   {/* <Donation2/>  */}
   
   </>
  )
}

export default App
