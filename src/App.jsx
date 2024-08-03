
import './App.css'
import {Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Donations from './components/Donations'
import Donation2 from './components/Donation2'
import Wth from './components/Wth'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Faq from './components/Faq'
import Adoption from './components/Adoption'
import Awareness from './components/Awareness'
import Counselling from './components/Counselling'
import Readmore from './components/Readmore'
import Meetus from './components/Meetus'


function App() {


  return (
    <>
    <div className="app dark:bg-black dark:text-white  ">

    
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Donations' element={<Donations/>}/>
    <Route path='/Donations2' element={<Donation2/>}/>
    <Route path='/Wth' element={<Wth/>}/>
    <Route path='/Aboutus' element={<Aboutus/>}/>
    <Route path='/Contactus' element={<Contactus/>}/>
    <Route path='/FAQ' element={<Faq/>}/>
    <Route path='/Adoption' element={<Adoption/>}/>
    <Route path='/Awareness' element={<Awareness/>}/>
    <Route path='/Counselling' element={<Counselling/>}/>
    <Route path='/Readmore' element={<Readmore/>}/>
    <Route path='/Meetus' element={<Meetus/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App
