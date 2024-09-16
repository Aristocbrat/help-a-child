
import './App.css'
import {Routes , Route } from 'react-router-dom'
import Navbar from './components/constants/Navbar'
import Home from './components/client/Home'
import Donations from './components/client/Donations'
import Donation2 from './components/client/Donation2'
import Wth from './components/client/Wth'
import Aboutus from './components/client/Aboutus'
import Contactus from './components/client/Contactus'
import Faq from './components/client/Faq'
import Adoption from './components/client/Adoption'
import Awareness from './components/client/Awareness'
import Counselling from './components/client/Counselling'
import Readmore from './components/Readmore'
import Meetus from './components/Meetus'
import Footer2 from './components/constants/Footer2'



function App() {


  return (
    <>
    <div className="app dark:bg-black dark:text-white dark:duration-500 duration-500 ">
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
   <Footer2/>
   </div>
   </>
  )
}

export default App
