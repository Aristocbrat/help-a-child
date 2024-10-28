import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; 
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

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
        <div className="menu flex flex-col md:flex-row w-full font-sans align-middle">
          <div className="logo flex justify-center md:justify-start md:w-1/3 p-4">
            <a href="/">
              <h2 className='text-black  text-3xl md:text-4xl lg:text-5xl xl:py-4 xl:text-4xl  dark:text-slate-500 font-extrabold'>
                <i className="ri-vip-crown-line"></i> CwoalG
              </h2>
            </a>
          </div>
          
          <div className="links flex flex-wrap xl:w-[90%] flex-row md:w-2/3 justify-evenly 
          items-center xl:p-1 sm:p-2 mx-auto xl:font-semibold sm:font-light sm:gap-6">
            
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 underline underline-offset-8 text-black xl:px-1 sm:px-2 duration-300"
                  : "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:font-extrabold hover:text-yellow-400 hover:xl:px-1 hover:sm:px-2  duration-300"
              }>
              <i className="ri-home-4-line"></i> Home
            </NavLink>
            
            <NavLink 
              to="/Donations" 
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 underline underline-offset-8 text-black xl:p-3 sm:px-2  duration-300"
                  : "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:font-extrabold hover:text-yellow-400 xl:hover:px-1 sm:hover:px-2  duration-300"
              }>
              <i className="ri-service-line"></i> Donations
            </NavLink>

            <NavLink 
              to="/Wth" 
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 underline underline-offset-8 text-black xl:px-1 sm:px-2  duration-300"
                  : "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:font-extrabold hover:text-yellow-400 xl:hover:px-1 hover:sm:px-2  duration-300"
              }>
              <i className="ri-archive-stack-line"></i> Ways to Help
            </NavLink>

            <NavLink 
              to="/Aboutus" 
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 underline underline-offset-8 text-black xl:px-1 sm:px-2  duration-300"
                  : "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:font-extrabold hover:text-yellow-400 xl:hover:px-1 hover:sm-px-2   duration-300"
              }>
              <i className="ri-user-line"></i> About-us
            </NavLink>

            <NavLink 
              to="/Contactus" 
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 underline underline-offset-8 text-black xl:p-1 sm:p-2  duration-300"
                  : "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:font-extrabold hover:text-yellow-400 xl:hover:px-1 sm:hover:px-2  duration-300"
              }>
              <i className="ri-phone-line"></i> Contact us
            </NavLink>

            <NavLink 
              to="/FAQ" 
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 underline underline-offset-8 text-black xl:px-1 sm:px-2  duration-300"
                  : "text-[10px] md:text-lg lg:text-xl xl:text-lg py-2 md:py-0 hover:font-extrabold hover:text-yellow-400 xl:hover:px-1 sm:hover:px-2  duration-300"
              }>
              <i className="ri-question-answer-line"></i> FAQ
            </NavLink>
          </div>

          <div className="notify flex flex-row md:flex-row md:w-1/3 justify-evenly items-center xl:p-4">
            <div className="bellignham hover:animate-bellRing active:scale-80">
              <i className="ri-notification-fill text-3xl md:text-4xl lg:text-3xl xl:text-3xl ml-[-7%] text-black dark:text-white duration-300 dark:hover:text-[#ffd900d5] hover:text-[#ffd900d5] rounded-full cursor-pointer"></i>
            </div>

            <div className="mode">
              <label className="inline-flex items-center relative">
                <input 
                  className="peer hidden" 
                  id="toggle" 
                  type="checkbox" 
                  checked={darkMode} 
                  onChange={() => setDarkMode(!darkMode)} 
                />
                <div className="relative w-[108px] h-[30px] bg-[#334338] peer-checked:bg-zinc-500 rounded-full after:absolute after:w-[20px] after:h-[20px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[20px] peer-checked:after:left-[90px] peer-checked:after:translate-x-[-80%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
                <svg height="0" width="100" viewBox="0 0 24 24" className="fill-white peer-checked:opacity-60 absolute w-6 h-3 left-[3px]">
                  <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-black dark:border-white p-3'/>
    </div>
  );
};

export default Navbar;
