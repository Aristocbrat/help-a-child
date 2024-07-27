import React from 'react';


const Donations = () => {
  return (
    <div className=' bg-slate-400 max-w-[100%] h-[100vh] text-white flex items-center align-middle  justify-center'>
      
      <input type="checkbox" id="one" className='hidden' />
      <input type="checkbox" id="two" className='hidden' />
      <input type="checkbox" id="three" className='hidden' />
      <div className="container xl:w-[50%] sm:w-[90%] h-[90%] relative rounded-[6px] bg-[black] overflow-hidden shadow-sm">
        <h1 className='absolute text-lg md:text-2xl lg:text-3xl xl:text-3xl font-bold p-[20px] mt-3 text-center w-[100%]'>Sign Up</h1>
        <div className="indicator flex items-center align-middle top-[20%] text-2xl md:2xl lg:2xl xl:text-2xl justify-center absolute w-[100%] h-[50px] ">
          <div className="step  step1">
            <div>1</div>
            <span className='text-[12px] xl:text-lg'>Basic</span>
          </div>
          <div className="line line1"></div>
          <div className="step step2">
            <div>2</div>
            <span className='text-[12px] xl:text-lg'>Contact</span>
          </div>
          <div className="line line2"></div>
          <div className="step step3">
            <div>3</div>
            <span className='text-[12px] xl:text-lg'>Personal</span>
          </div>
          <div className="line line3"></div>
          <div className="step step4">
            <div>4</div>
            <span className='text-[12px] xl:text-lg'>Login</span>
          </div>
        </div>
        <div className="panel relative w-[100%] h-[100%] top-0 left-0 transition-all duration-400 ease">
          <div className="page1 absolute w-[500px] h-[100%] xl:left-[13%] sm:left-[-22%] ">
            <form action="#" className="form absolute items-center justify-center flex flex-col w-[100%] h-[100%] top-[90px]">
              <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-3xl'>Basic information</h2>
              <div className="form-group">
                <input type="text" required className='text-black'/>
                <label><i className="ri-user-6-line"></i>First name</label>
              </div>
              <div className="form-group">
                <input type="text" required className='text-black' />
                <label><i className="ri-user-6-line"></i>Last name</label>
              </div>
              <div className="buttons flex items-center justify-between flex-row w-[10%] h-[50px]">
                <label htmlFor="one" className="btn btnfirst">Next</label>
              </div>
            </form>
          </div>
          <div className="page2 absolute w-[500px] h-[100%] xl:left-[120%] sm:left-[85%]">
            <form action="#" className="form absolute items-center justify-center flex flex-col w-[100%] h-[100%] top-[90px]">
              <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-3xl'>Contact information</h2>
              <div className="form-group">
                <input type="email" required className='text-black' />
                <label><i className="ri-mail-line"></i>Email address</label>
              </div>
              <div className="form-group">
                <input type="number" required  className='text-black'/>
                <label><i className="ri-phone-line"></i>Phone number</label>
              </div>
              <div className="buttons flex items-center justify-between flex-row w-[80%] h-[50px]">
                <label htmlFor="one" className="btn"><i className="ri-arrow-left-double-line"></i>Previous</label>
                <label htmlFor="two" className="btn">Next<i className="ri-arrow-right-double-line"></i></label>
              </div>
            </form>
          </div>
          <div className="page3 absolute w-[200px] h-[100%] xl:left-[243%] sm:left-[246%] ">
            <form action="#" className="form absolute items-center justify-center flex flex-col w-[200%] h-[100%] top-[90px]">
              <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-3xl'>Personal information</h2>
              <div className="form-group">
                <input type="number" required className='text-black'/>
                <label>NIN</label>
              </div>
              <div className="form-group"> 
                <input type="text" required className='text-black' />
                <label>Gender</label>
              </div>
              <div className="buttons flex items-center justify-between flex-row w-[80%] h-[50px]">
                <label htmlFor="two" className="btn"><i className="ri-arrow-left-double-line"></i>Previous</label>
                <label htmlFor="three" className="btn">Next<i className="ri-arrow-right-double-line"></i></label>
              </div>
            </form>
          </div>
          <div className="page4 absolute w-[400px] h-[100%] xl:left-[360%] sm:left-[335%]">
            <form action="#" className="form absolute items-center justify-center flex flex-col w-[100%] h-[100%] top-[90px]">
              <h2>Login Details</h2>
              <div className="form-group">
                <input type="text" required className='text-black' />
                <label>Username</label>
              </div>
              <div className="form-group">
                <input type="password" required className='text-black' />
                <label><i className="ri-lock-line"></i>Password</label>
              </div>
              <div className="buttons flex items-center justify-between flex-row w-[80%] h-[50px]">
                <label htmlFor="three" className="btn">Previous</label>
                <button type="submit" className="btn submit">Submit</button>
                <a href="/Donations2" className='p-5 mt-4 cursor-pointer'>Proceed</a>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Donations;

