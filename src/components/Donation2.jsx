import React , {useState}from 'react'
import classr from "./../assets/images/schoool.jpg"
import reno  from "./../assets/images/renovation.jpg"
import building from "./../assets/images/building.jpg"

const Donation2 = () => {
    
  return (
    <div className='bg-[#8b8b8b] w-[100%] h-[100%]'>
        <div>
            <div className="projects">
                <div className="classroom w-[65%] flex gap-4  pt-[20px]">
                    <img src={classr} alt="" className='rounded-[7px] w-[50%] h-[100%]'/>
                    <div className="text">
                    <h2 className='hover:underline text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold'>School Project</h2>
                    <p className='text-lg md:text-2xl lg:text-3xl xl:text-3xl py-3'>Put more children in school <br/>
                    "Ensure children stay in school."</p>
                    <form action="#">
                        <div className="formg flex flex-col gap-2">
                            <input type="text" name="" required className='p-3 rounded-[20px] bg-black text-white'/>
                            <label htmlFor=""className='' >Username</label>
                            <input type="number" name="" required className='p-3 rounded-[20px] bg-black text-white'/>
                            <label htmlFor="Amount" className=''>Amount</label>
                        </div>
                    </form>
                    <div className=" flex">
                    <i className="ri-mastercard-fill text-8xl pe-4"></i>
                        <i className="ri-visa-fill text-8xl pe-4"></i>
                        <button type="submit" className='tky bg-[#101113]  text-white text-3xl   border-neutral-50 h-[80px] p-3 top-[-5px] rounded-[9px] font-bold  hover:bg-green-500'>Donate</button>
                        </div>
                    </div>
                </div>
                <hr  className='border-black p-3'/>
                <div className="building w-[65%] flex gap-4 mt-[20px] ">
                    <img src={building} alt="" className='rounded-[7px] w-[50%] h-[100%]'/>
                    <div className="text">
                    <h2 className='hover:underline text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold'>Building Project</h2>
                    <p className='text-lg md:text-2xl lg:text-3xl xl:text-3xl py-3'>Support our initiative to build a new home for orphaned children, <br/>providing them with a safe and nurturing environment to grow and thrive.</p>
                    <form action="#">
                        <div className="formg flex flex-col gap-2">
                            <input type="text" name="" required className='p-3 rounded-[20px] bg-black text-white w-[440px]'/>
                            <label htmlFor=""className='' >Username</label>
                            <input type="number" name="" required className='p-3 rounded-[20px] bg-black text-white w-[440px]'/>
                            <label htmlFor="Amount" className=''>Amount</label>
                        </div>
                    </form>
                    <div className=" flex">
                    <i className="ri-mastercard-fill text-8xl pe-4"></i>
                        <i className="ri-visa-fill text-8xl pe-4"></i>
                        <button type="submit" className='tky bg-[#101113]  text-white text-3xl   border-neutral-50 h-[80px] p-3 top-[-5px] rounded-[9px] font-bold  hover:bg-green-500'>Donate</button>
                        </div>
                    </div>
                </div>
                <hr  className='border-black p-3'/>
                <div className="Renovation w-[65%] flex gap-4 mt-[20px] ">
                    <img src={reno} alt="" className='rounded-[7px] w-[50%] h-[100%]'/>
                    <div className="text">
                    <h2 className='hover:underline text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold'>Building Renovation</h2>
                    <p className='text-lg md:text-2xl lg:text-3xl xl:text-3xl py-3'>Join us in renovating the orphanage to create a safe, comfortable, and nurturing environment for the children.</p>
                    <form action="#">
                        <div className="formg flex flex-col gap-2">
                            <input type="text" name="" required className='p-3 rounded-[20px] bg-black text-white w-[440px]'/>
                            <label htmlFor=""className='' >Username</label>
                            <input type="number" name="" required className='p-3 rounded-[20px] bg-black text-white w-[440px]'/>
                            <label htmlFor="Amount" className=''>Amount</label>
                        </div>
                    </form>
                    <div className=" flex">
                    <i className="ri-mastercard-fill text-8xl pe-4"></i>
                        <i className="ri-visa-fill text-8xl pe-4"></i>
                        <button type="submit" className=' tky bg-[#101113]  text-white text-3xl   border-neutral-50 h-[80px] p-3 top-[-5px] rounded-[9px] font-bold  hover:bg-green-500'>Donate</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
      
    </div>
  )
}

export default Donation2
