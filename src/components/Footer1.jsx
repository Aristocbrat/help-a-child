import React from 'react'

const Footer1 = () => {
  return (
    <div>
       <div className='footer w-full h-full bg-black text-white rounded-[9px] p-4'>
      <div className='text-center'>
        <p className=' text-lg md:text-2xl lg:text-3xl xl:text-lg py-10'>
          "The orphanage provides a safe haven for children who have experienced trauma or abuse,
          ensuring they have access to care and resources necessary for their well-being and development"
        </p>
        <p className='hearts text-red-600 flex justify-center text-lg md:text-3xl lg:text-3xl xl:text-lg  animate-pulse py-4'>
          <span className='px-2'>Your donation can also support the Heartbeat Program, helping children with heart conditions </span>
          <i className="ri-heart-3-fill"></i>
          <i className="ri-empathize-fill"></i>
          <i className="ri-heart-3-fill"></i>
          <i className="ri-hearts-fill"></i>
        </p>
        <span>
  <button className='bg-black text-white border border-neutral-50 p-4 rounded-[9px] font-bold'>
    Click Here
  </button>
</span>
        <p className='gtext text-xl md:text-2xl lg:text-2xl xl:text-3xl py-4'>
          Help a child today. Heal the World . Make it a better place
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer1
