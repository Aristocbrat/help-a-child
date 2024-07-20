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
        <div className="notify flex flex-col md:flex-row md:w-1/3 justify-evenly items-center p-4 ">
          <img src={me} alt="" className='w-12 md:w-16 lg:w-12 xl:w-13 rounded-full transform hover:scale-110 transition-transform duration-500' />
          <p className='w-8 md:w-12 lg:w-16 xl:w-20 flex gap-2'>
           <div className="bell"> <i className="ri-notification-line text-3xl md:text-4xl lg:text-3xl xl:text-3xl ml-[-2%] hover:text-black cursor-pointer bellignham">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </i>
            </div>
            <div className="mode">
            <label class="inline-flex items-center relative">
  <input class="peer hidden" id="toggle" type="checkbox" />
  <div
    class="relative w-[108px] h-[30px] bg-[#e8cd] peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[20px] peer-checked:after:left-[90px] peer-checked:after:translate-x-[-80%] shadow-sm duration-300 after:duration-300 after:shadow-md"
  ></div>
  <svg
    height="0"
    width="100"
    viewBox="0 0 24 24"
    data-name="Layer 1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-white peer-checked:opacity-60 absolute w-6 h-3 left-[3px]"
  >
    <path
      d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
    ></path>
  </svg>
  
</label>

            </div>
            {/* <i class="ri-moon-line text-3xl md:text-4xl lg:text-6xl xl:text-3xl  hover:text-black cursor-pointer ml-2"></i>
            <i class="ri-sun-line text-3xl md:text-4xl lg:text-6xl xl:text-3xl  hover:text-black cursor-pointer ml-2"></i> */}
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
