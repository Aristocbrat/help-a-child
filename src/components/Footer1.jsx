import React from 'react'

const Footer1 = () => {
  return (
    <div className='px-3'>
       <div className='footer w-full h-full bg-black text-white rounded-[9px] xl:p-4 mt-20'>
      <div className='text-center'>
        <p className=' sm:text-[12px] md:text-2xl lg:text-3xl xl:text-lg py-10 px-3'>
          "The orphanage provides a safe haven for children who have experienced trauma or abuse,
          ensuring they have access to care and resources necessary for their well-being and development"
        </p>
        <p className='hearts text-red-600 flex justify-center text-[14px] md:text-3xl lg:text-3xl xl:text-lg  animate-pulse py-4'>
          <span className='px-5'>Your donation can also support the Heartbeat Program, helping children with heart conditions </span>
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
    </div>
  )
}

export default Footer1
