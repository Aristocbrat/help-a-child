import React from 'react'
import me from './../assets/images/dphng.jpeg'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
      <div className="menu flex flex-col md:flex-row w-full font-sans align-middle">
        <div className="logo flex justify-center md:justify-start md:w-1/3 p-4">
          <h2 className='gtext text-3xl md:text-4xl lg:text-5xl py-4 xl:text-4xl'>
            <i className="ri-vip-crown-line"></i> CwoalG
          </h2>
        </div>
        <div className="links flex flex-col md:flex-row md:w-2/3 justify-evenly items-center p-1  mx-auto ">
          <a href="/" className='text-xl md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-home-4-line"></i> Home
          </a>
          <a href="/Donations" className='text-xl md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-service-line"></i> Donations
          </a>
          <a href="/Wth" className='text-xl md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-archive-stack-line"></i> Ways to Help
          </a>
          <a href="/Aboutus" className='text-xl md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-user-line"></i> About-us
          </a>
          <a href="/Contactus" className='text-xl md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-phone-line"></i> Contact us
          </a>
          <a href="/FAQ" className='text-xl md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-question-answer-line"></i> FAQ
          </a>
        </div>
        <div className="notify flex flex-col md:flex-row md:w-1/3 justify-evenly items-center p-4">
          <img src={me} alt="" className='w-12 md:w-16 lg:w-12 xl:w-13 rounded-full transform hover:scale-110 transition-transform duration-500' />
          <p className='w-8 md:w-12 lg:w-16 xl:w-20'>
            <i className="ri-notification-line text-3xl md:text-4xl lg:text-3xl xl:text-3xl  hover:text-black cursor-pointer"></i>
            <i class="ri-moon-line text-3xl md:text-4xl lg:text-6xl xl:text-3xl  hover:text-black cursor-pointer ml-2"></i>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
