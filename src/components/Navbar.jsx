import React,{useEffect, useState} from 'react'



const Navbar = () => {
 


  const [darkMode, setDarkMode] = useState( "darkMode",false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
 

  return (
    <div>
      <div className="navbar">
        
      <div className="menu flex flex-col md:flex-row w-full font-sans align-middle ">
        <div className="logo flex justify-center md:justify-start md:w-1/3 p-4">
        <a href="/"><h2 className='gtext text-3xl md:text-4xl lg:text-5xl xl:py-4 xl:text-4xl seperation dark:text-slate-500 font-bold'>
            <i className="ri-vip-crown-line"></i> CwoalG
          </h2></a>
          
        </div>
        <div className="links flex flex-wrap flex-row  md:flex-row md:w-2/3 justify-evenly items-center xl:p-1 sm:p-2 mx-auto xl:font-semibold sm:font-bold ">
          <a href="/" className='text-[13px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-home-4-line"></i> Home
          </a>
          <a href="/Donations" className='text-[13px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-service-line"></i> Donations
          </a>
          <a href="/Wth" className='text-[13px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-archive-stack-line"></i> Ways to Help
          </a>
          <a href="/Aboutus" className='text-[13px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-user-line"></i> About-us
          </a>
          <a href="/Contactus" className='text-[13px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-phone-line"></i> Contact us
          </a>
          <a href="/FAQ" className='text-[13px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0  hover:bg-stone-700 hover:text-white hover:p-3 hover:rounded duration-300'>
            <i className="ri-question-answer-line"></i> FAQ
          </a>
        </div>
        <div className="notify flex flex-row md:flex-row md:w-1/3 justify-evenly items-center xl:p-4 ">
          {/* <img src={me} alt="" className='w-12 md:w-16 lg:w-12 xl:w-13 rounded-full transform hover:scale-110 transition-transform duration-500 '  /> */}
          <p className='w-8 md:w-12 lg:w-16 xl:w-20 flex  xl:flex-row xl:gap-2 xl:ml-0 sm:ml-[-30%]'>
           <div className="bellignham hover:animate-bellRing active:scale-80"> <i className="ri-notification-fill text-3xl md:text-4xl lg:text-3xl xl:text-3xl ml-[-7%] text-black dark:text-white duration-300 dark:hover:text-[#ffd900d5] hover:text-[#ffd900d5] rounded-full  cursor-pointer " >
            </i>
            </div>
            <div className="mode">
            <label class="inline-flex items-center relative">
  <input class="peer hidden" id="toggle" type="checkbox" checked={darkMode}  onChange={() => setDarkMode(!darkMode)} />
  <div
    class="relative w-[108px] h-[30px] bg-[#334338] peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[20px] peer-checked:after:left-[90px] peer-checked:after:translate-x-[-80%] shadow-sm duration-300 after:duration-300 after:shadow-md"
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

          </p>
        </div>
      </div>
    </div>
    <hr  className='border-black dark:border-white p-3'/>
    </div>
  )
}

export default Navbar
