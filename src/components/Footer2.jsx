import React , {useEffect} from 'react'
import Typed from 'typed.js';
import imgw from './../assets/images/imagew.jpg'

const Footer2 = () => {
    useEffect(() => {
        const time = () => {
          document.getElementById('year').innerHTML = new Date().getFullYear();
        };
        time();
      }, []);

      useEffect(() => {
        const elements = document.querySelectorAll('.spanex');
        const typedInstances = [];
    
        elements.forEach((element) => {
          const typed = new Typed(element, {
            strings: ['Help a child.', 'Make the world a better place.', 'Thank you for your effort.', 'We really appreciate.', 'God bless you.'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
          });
          typedInstances.push(typed);
        });
    
        return () => {
          typedInstances.forEach((typed) => typed.destroy());
        };
      }, []);
  return (
    <div>
         <div className='footer2 py-2 relative bottom-0 w-[99%] xl:px-3 flex items-center flex-col '>
      <div className="footer-wrapper flex flex-col max-w-[100%] w-full xl:p-4 sm:px-3 xl:ml-6 ">
        <section className="footertop flex flex-wrap items-start py-4 px-0 justify-between">
          <div className="footerheadline flex flex-col justify-center text-white xl:w-[97%] sm:w-[100%] rounded px-4 py-4 ">
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <div className='flex xl:flex-row sm:flex-col'>
                <img src={imgw} alt="" className='xl:w-[40%] rounded-[20px]'/>
                <span className='xl:w-[550px] text-[13px] md:text-lg lg:text-lg xl:text-lg xl:ml-5'>Adoption is an act of love. It must come from a desire to love a child.
                     It must be motivated by our love for God and humanity. 
                     It must be because we want to raise a child for God as a demonstration of our love.
                     Every child is a gift from God.</span>
                     </div>
                     <a href="/Readmore"><button className='border-white py-3 hover:bg-green-500 hover:py-2  hover:rounded-[20px] hover:mt-2 duration-500'>Read more <i className="ri-skip-right-line"></i></button></a><br/>
              Subscribe to our Channel on YouTube and check out our Programs.
              <i className="ri-youtube-fill text-4xl text-red-600"></i>
            </h2>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl'>Stay up to date with our Programs and Donations.</p>
          </div>
          <div className="footerSignup flex flex-col sm:flex-row text-base md:text-lg lg:text-xl xl:text-xl">
            
          </div>
        </section>
        <div className="footerColumns xl:w-[97%] sm:w-[100%] flex flex-col flex-wrap overflow-hidden">
          <section className='logo flex justify-center w-[full] py-9'>
            <h2 className='gtext text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[550px] ms-[27%] seperation font-bold'>
              <i className="ri-vip-crown-line"></i> CwoalG
            </h2>
          </section>
          <section className="help gtext ">
            
            <ul className='flex flex-wrap justify-between py-4 text-[13px] md:text-lg lg:text-xl xl:text-lg'>
              <li className='hover:bg-black dark:hover:bg-slate-400 hover:text-white hover:p-2 hover:rounded-[9px] duration-300 '><a href="/Adoption" className='font-bold text-[13px] md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Adoption</a></li>
              <li className='hover:bg-black dark:hover:bg-slate-400 hover:text-white hover:p-2 hover:rounded-[9px] duration-300'><a href="/Counselling" className='font-bold text-[13px] md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Counselling</a></li>
              <li className='hover:bg-black dark:hover:bg-slate-400 hover:text-white hover:p-2 hover:rounded-[9px] duration-300'><a href="/Donations" className='font-bold text-[13px] md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Donations</a></li>
              <li className='hover:bg-black dark:hover:bg-slate-400 hover:text-white hover:p-2 hover:rounded-[9px] duration-300'><a href="/Awareness" className='font-bold text-[13px] md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Awareness</a></li>
            </ul>
          </section>
          <hr className='p-4 border-black dark:border-white'/>
          <div className="footerBottom gtext">
            <div className="socials xl:py-7 xl:w-full " data-aos="fade-up">
              <ul className='flex flex-wrap xl:justify-between sm:justify-evenly text-base md:text-lg lg:text-xl xl:text-2xl xl:gap-3 sm:gap-1  '>
                <li>
                  <a href="" title='Instagram'>
                    <i className="ri-instagram-fill text-purple-950 text-xl md:text-2xl lg:text-3xl xl:text-5xl hover:scale-105  transition-transform duration-500"></i>
                  </a>
                </li>
                <li>
                  <a href="" title='X'>
                    <i className="ri-twitter-x-line text-black dark:text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl hover:scale-105 transition-transform duration-500"></i>
                  </a>
                </li>
                <li>
                  <a href="" title='Facebook' >
                    <i className="ri-facebook-fill text-blue-700 text-xl md:text-2xl lg:text-3xl xl:text-5xl hover:-scale-y-100 transition-transform duration-500"></i>
                  </a>
                </li>
                <li>
                  <a href="" title='Linkedin'>
                    <i className="ri-linkedin-fill text-blue-700 text-xl md:text-2xl lg:text-3xl xl:text-5xl hover:scale-105 transition-transform duration-500"></i>
                  </a>
                </li>
                <li><p className='font-bold pt-3 sm:ml-[-1%] xl:mt-0 sm:mt-[-3%] px-4'>You can follow us on our socials <i className="ri-thumb-up-fill hover:text-blue-600  "></i></p></li>
                <li><p className='xl:px-5 xl:ml-0 sm:ml-[18%]  w-[300px]'>
                  <label className="relative text-[#fc7c9e] xl:flex cursor-pointer items-center justify-center gap-[1em]"for="heart">
  <input class="peer appearance-none" id="heart" name="heart" type="checkbox" />
  <span class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#FF91AF]">
  </span>
  <svg
    class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:1000] [stroke-dashoffset:1000] peer-checked:[stroke-dashoffset:0]"
    viewBox="0 0 68 87"
    fill="#FF91AF"
    height="87"
    width="70"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.048 74.752c-.74 0-3.428.03-3.674-.175-3.975-3.298-10.07-11.632-12.946-15.92C7.694 53.09 5.626 48.133 3.38 42.035 1.937 38.12 1.116 35.298.93 31.012c-.132-3.034-.706-7.866 0-10.847C2.705 12.67 8.24 7.044 15.801 7.044c1.7 0 3.087-.295 4.55.875 4.579 3.663 5.515 8.992 7.172 14.171.142.443 3.268 6.531 2.1 7.698-.362.363-1.161-10.623-1.05-12.071.26-3.37 1.654-5.522 3.15-8.398 3.226-6.205 7.617-7.873 14.52-7.873 2.861 0 5.343-.274 8.049 1.224 16.654 9.22 14.572 23.568 5.773 37.966-1.793 2.934-3.269 6.477-5.598 9.097-1.73 1.947-4.085 3.36-5.774 5.424-2.096 2.562-3.286 5.29-5.598 7.698-4.797 4.997-9.56 10.065-14.522 14.872-1.64 1.588-10.194 6.916-10.672 7.873-.609 1.217 2.76-.195 4.024-.7"
      stroke-width="4px"
      pathLength="1000"
      stroke="black"
    ></path>
  </svg>

  <p class="xl:text-[1em] text-black dark:text-white font-semibold [user-select:none] px-3">Spread love Always</p>
</label>
</p></li>
              </ul>
            </div>

            {/* ---------------------------------------------------------------------------- */}
            <div className="address  font-bold px-5 mt-8 xl:mt-0 " >
              <p>
                <span className='font-bold xl:text-2xl'>Contact Us</span>
                <p data-aos="fade-down-right">No 7 Victory Avenue Olosun Ota, Ogun State</p>
                <p data-aos="fade-down-right">Phone: (+234)8020921654</p>
                <a href="mailto:">Email: emmanuelforbez@gmail.com</a></p>
                <p className="py-4 xl:ms-[24%] sm:text-lg  xl:text-5xl  ps-4"><span className='spanex'></span></p>
            </div>
           
            <div className="awareness flex xl:flex-row sm:flex-col mt-12 justify-center gap-6">
                <section className='xl:border-r-4  border-black dark:border-white'>
                  <h2 className='xl:text-2xl font-bold'>Success stories</h2>
                  <p>Read about the impact of your contributions and the success stories of the children we support.</p>
                </section>
                <section className='xl:border-r-4 border-black dark:border-white'>
                  <h2 className='xl:text-2xl font-bold'>Get Involved</h2>
                  <p>Find out how you can get involved and make a difference in a child's life.</p>
                </section>
                <section className='xl:border-r-4  border-black dark:border-white'> 
                  <h2 className='xl:text-2xl font-bold'>Legal</h2>
                  <p>Privacy Policy | Terms of Service.</p>
                </section>
                <section >
                  <h2 className='xl:text-2xl font-bold'>Our Mission</h2>
                  <p>Providing a safe, nurturing environment where every child can grow, learn, and thrive</p>
                </section>

            </div>
            <small className='gtext flex justify-center pt-9 text-base md:text-lg lg:text-xl xl:text-2xl mt-[90px]'>
              <i className="ri-copyright-line"></i> CwoalG 
              <span id='year'> </span>
              <span className='ps-3'> All rights reserved</span>
            </small>
            
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Footer2
