import React , {useEffect} from 'react'
import imgw from './../assets/images/imagew.jpg'

const Footer2 = () => {
    useEffect(() => {
        const time = () => {
          document.getElementById('year').innerHTML = new Date().getFullYear();
        };
        time();
      }, []);
  return (
    <div>
         <div className='footer2 py-2 relative bottom-0 w-full flex items-center flex-col '>
      <div className="footerline w-full"></div>
      <div className="footer-wrapper flex flex-col max-w-[90%] w-full p-4">
        <section className="footertop flex flex-wrap items-start py-4 px-0 justify-between">
          <div className="footerheadline flex flex-col justify-center text-white w-[90%] rounded px-4 py-4">
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <div className='flex flex-row'>
                <img src={imgw} alt="" className='w-[40%] rounded-[20px]'/>
                <span className='w-[550px] text-xl md:text-lg lg:text-lg xl:text-lg ml-5'>Adoption is an act of love. It must come from a desire to love a child.
                     It must be motivated by our love for God and humanity. 
                     It must be because we want to raise a child for God as a demonstration of our love.
                     Every child is a gift from God.</span>
                     </div>
                     <button className='border-white py-4'>Read more <i class="ri-skip-right-line"></i></button><br/>
              Subscribe to our Channel on YouTube and check out our Programs.
              <i className="ri-youtube-fill text-4xl text-red-600"></i>
            </h2>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl'>Stay up to date with our Programs and Donations.</p>
          </div>
          <div className="footerSignup flex flex-col sm:flex-row text-base md:text-lg lg:text-xl xl:text-xl">
            
          </div>
        </section>
        <div className="footerColumns w-[100%]">
          <section className='logo flex justify-center w-[full] py-9'>
            <h2 className='gtext text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[550px]'>
              <i className="ri-vip-crown-line"></i> CwoalG
            </h2>
          </section>
          <section className="help gtext">
            
            <ul className='flex flex-wrap justify-between py-4 text-base md:text-lg lg:text-xl xl:text-lg'>
              <li className='hover:bg-black hover:text-white hover:p-3 hover:rounded-[9px] '><a href="" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Adoption</a></li>
              <li className='hover:bg-black hover:text-white hover:p-3 hover:rounded-[9px]'><a href="" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Counselling</a></li>
              <li className='hover:bg-black hover:text-white hover:p-3 hover:rounded-[9px]'><a href="" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Donations</a></li>
              <li className='hover:bg-black hover:text-white hover:p-3 hover:rounded-[9px]'><a href="" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Awareness</a></li>
            </ul>
          </section>
          <hr className='p-4 border-black'/>
          <div className="footerBottom gtext">
            <div className="socials py-7 w-[700px]">
              <ul className='flex flex-wrap justify-between text-base md:text-lg lg:text-xl xl:text-2xl'>
                <li>
                  <a href="" title='Instagram'>
                    <i className="ri-instagram-fill text-purple-950 text-xl md:text-2xl lg:text-3xl xl:text-5xl"></i>
                  </a>
                </li>
                <li>
                  <a href="" title='X'>
                    <i className="ri-twitter-x-line text-black text-xl md:text-2xl lg:text-3xl xl:text-5xl"></i>
                  </a>
                </li>
                <li>
                  <a href="" title='Facebook'>
                    <i className="ri-facebook-fill text-blue-700 text-xl md:text-2xl lg:text-3xl xl:text-5xl"></i>
                  </a>
                </li>
                <li>
                  <a href="" title='Facebook'>
                    <i className="ri-linkedin-fill text-blue-700 text-xl md:text-2xl lg:text-3xl xl:text-5xl"></i>
                  </a>
                </li>
                <li><p className='font-bold pt-3'>You can follow us on our socials <i class="ri-thumb-up-line "></i></p></li>
              </ul>
            </div>
            <small className='gtext flex justify-center py-9 text-base md:text-lg lg:text-xl xl:text-2xl'>
              <i className="ri-copyright-line"></i> CwoalG 
              <span id='year'> All rights reserved</span>
            </small>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Footer2
