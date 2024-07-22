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
         <div className='footer2 py-2 relative bottom-0 w-full flex items-center flex-col '>
      <div className="footerline w-full"></div>
      <div className="footer-wrapper flex flex-col max-w-[90%] w-full p-4">
        <section className="footertop flex flex-wrap items-start py-4 px-0 justify-between">
          <div className="footerheadline flex flex-col justify-center text-white w-[90%] rounded px-4 py-4 ">
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
            <h2 className='gtext text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[550px] ms-[27%] seperation font-bold'>
              <i className="ri-vip-crown-line"></i> CwoalG
            </h2>
          </section>
          <section className="help gtext ">
            
            <ul className='flex flex-wrap justify-between py-4 text-base md:text-lg lg:text-xl xl:text-lg'>
              <li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-[9px] duration-300 '><a href="/Adoption" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Adoption</a></li>
              <li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-[9px] duration-300'><a href="/" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Counselling</a></li>
              <li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-[9px] duration-300'><a href="/Donations" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Donations</a></li>
              <li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-[9px] duration-300'><a href="/Awareness" className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-lg'><i className="ri-star-line"></i> Awareness</a></li>
            </ul>
          </section>
          <hr className='p-4 border-black'/>
          <div className="footerBottom gtext">
            <div className="socials py-7 w-[700px]" data-aos="fade-up">
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
                  <a href="" title='Facebook' >
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
            <div className="address  font-bold " >
              <p>
          

                <span className='font-bold text-2xl'>Contact Us</span>

                <p data-aos="fade-down-right">No 7 Victory Avenue Olosun Ota, Ogun State</p>
                <p data-aos="fade-down-right">Phone: (+234)8020921654</p>
                <a href="mailto:">Email: emmanuelforbez@gmail.com</a></p>
                <p className="py-4 ms-[24%]  text-5xl  ps-4"><span className='spanex'></span></p>
            </div>
           
            <div className="awareness flex mt-12 justify-center gap-6">
                <section className='border-r-4  border-black'>
                  <h2 className='text-2xl font-bold'>Success stories</h2>
                  <p>Read about the impact of your contributions and the success stories of the children we support.</p>
                </section>
                <section className='border-r-4 border-black'>
                  <h2 className='text-2xl font-bold'>Get Involved</h2>
                  <p>Find out how you can get involved and make a difference in a child's life.</p>
                </section>
                <section className='border-r-4  border-black'>
                  <h2 className='text-2xl font-bold'>Legal</h2>
                  <p>Privacy Policy | Terms of Service.</p>
                </section>
                <section >
                  <h2 className='text-2xl font-bold'>Our Mission</h2>
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
