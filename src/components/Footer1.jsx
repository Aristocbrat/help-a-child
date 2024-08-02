import React from 'react'
import myface from "./../assets/images/myface.jpg"
import sis from "./../assets/images/sis.jpeg"
import kay from "./../assets/images/kay.jpeg"

const Footer1 = () => {
  return (
    <div className='px-3'>
       <div className='footer w-full h-full bg-black text-white rounded-[9px] xl:p-2 mt-20'>
      <div className='text-center'>
        <p className=' sm:text-[12px] md:text-2xl lg:text-3xl xl:text-lg py-10 px-3'>
          "The orphanage provides a safe haven for children who have experienced trauma or abuse,
          ensuring they have access to care and resources necessary for their well-being and development"
        </p>
        <p className='hearts text-red-600 flex justify-center text-[14px] md:text-3xl lg:text-3xl xl:text-lg  animate-pulse duration-700 py-4'>
          <span className='px-2'>Your donation can also support the Heartbeat Program, helping children with heart conditions </span>
          <i className="ri-heart-3-fill"></i>
          <i className="ri-empathize-fill"></i>
          <i className="ri-heart-3-fill"></i>
          <i className="ri-hearts-fill"></i>
        </p>
        <span>
  <button className='bg-black text-white border border-neutral-50 xl:p-4 sm:p-3 rounded-[9px] font-bold hover:bg-green-500'>
    <a href="/Donations" className='text-[13px]'>Click Here</a>
  </button>
</span>
        <p className='gtext text-[14px] md:text-2xl lg:text-2xl xl:text-3xl py-4'>
          Help a child today. Heal the World . Make it a better place
        </p>
      </div>
    </div>
    <div className="someanime py-3 flex xl:flex-row md:flex-row  sm:flex-col sm:m-auto flex-wrap justify-evenly w-[93%] gap-3 ">
    <div class=" rounded-2xl shadow-sm shadow-sky-500">
<div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-4 hover:before:-translate-x-32 hover:duration-500 after:absolute  after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20
 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 hover:rotate-6 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
  <div class="z-10 flex flex-col items-center gap-2">
    <img src={myface} alt="" className='w-[100px] rounded-full' />
    <span class="text-slate-400 text-2xl font-bold">Aristobrat</span>
    <p class="text-slate-500 font-bold">Founder of Cwoalg</p>
  </div>
</div>
</div>
<div class=" rounded-2xl shadow-sm shadow-sky-500 ">
<div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-4 hover:before:-translate-x-32 hover:duration-500 after:absolute  after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20
 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 hover:rotate-6 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
  <div class="z-10 flex flex-col items-center gap-2">
    <img src={kay} alt="" className='w-[100px] h-[130px] rounded-full' />
    <span class="text-slate-400 text-2xl font-bold">Joseph</span>
    <p class="text-slate-500 font-bold">Co-Founder of Cwoalg</p>
  </div>
</div>
</div>
<div class=" rounded-2xl shadow-sm shadow-sky-500">
<div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-4 hover:before:-translate-x-32 hover:duration-500 after:absolute  after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20
 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 hover:rotate-6 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
  <div class="z-10 flex flex-col items-center gap-2">
    <img src={sis} alt="" className='w-[100px] h-[130px] rounded-full' />
    <span class="text-slate-400 text-2xl font-bold">Dorcas</span>
    <p class="text-slate-500 font-bold">Co-Founder of Cwoalg</p>
  </div>
</div>
</div>


    </div>
    <div className="locations w-[70%] mx-auto">
      <h1 className='font-bold xl:text-2xl py-4 flex justify-center'>To Locate our offices closer to you. </h1>
      <div className="dropdowns flex xl:justify-evenly justify-between">
      <div className="dropdown">
      <h1 className='font-bold text-xl bg-black text-white px-3 rounded transition-all duration-500 ease-linear cursor-pointer hover:scale-50'>Lagos<i className="ri-arrow-down-double-line"></i></h1>
      <ul className='ps-1 py-2'>
        <li className=' duration-1500 opacity-0   bg-black text-white  px-2 py-2'><a href="">Ikeja</a></li>
        <hr className='opacity-0 hover:opacity-10' />
        <li className='transition-bg-color-transform duration-1500 opacity-0  bg-black text-white  px-2 py-2'><a href="">Oshodi</a></li>
        <hr  className='opacity-0 hover:opacity-10'/>
        <li className=' duration-1500 opacity-0   bg-black text-white  px-2 py-2'><a href="">Egbeda</a></li>
      </ul>
      </div>
      <div className="dropdown">
      <h1 className='font-bold text-xl bg-black text-white px-3 rounded transition-all duration-500 ease-linear cursor-pointer hover:scale-50'>Ogun<i className="ri-arrow-down-double-line"></i></h1>
      <ul className='ps-1 py-2'>
        <li className=' duration-1500 opacity-0 bg-black text-white  px-2 py-2' ><a href="">Olosun ota</a></li>
        <hr  className='opacity-0 hover:opacity-10'/>
        <li className=' duration-1500 opacity-0  bg-black text-white  px-2 py-2'><a href="">Sango ota</a></li>
        <hr className='opacity-0 hover:opacity-10'/>
        <li className='transition-bg-color-transform duration-1500 opacity-0   bg-black text-white  px-2 py-2'><a href="">Oju ore</a></li>
      </ul>
      </div>
      <div className="dropdown">
      <h1 className='font-bold text-xl bg-black text-white px-3 rounded transition-all duration-500 ease-linear cursor-pointer hover:scale-50'>Abuja<i className="ri-arrow-down-double-line"></i></h1>
      <ul className='ps-1 py-2'>
        <li className=' duration-1500 opacity-0   bg-black text-white  px-2 py-2'><a href="">Gwarinpa</a></li>
        <hr className='opacity-0 hover:opacity-10'/>
        <li className=' duration-1500 opacity-0  bg-black text-white  px-2 py-2'><a href="">Wuse 2</a></li>
        <hr className='opacity-0 hover:opacity-10'/>
        <li className='transition-bg-color-transform duration-1500 opacity-0  bg-black text-white  px-2 py-2'><a href="">Kubwa</a></li>
      </ul>
      </div>
      </div>
     
  
</div>

    </div>
  )
}

export default Footer1
