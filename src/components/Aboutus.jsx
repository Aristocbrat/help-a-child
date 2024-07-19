
import React from 'react';
import guest from "./../assets/images/guestm.jpg"
import guest2 from "./../assets/images/guestw.jpg"

const Aboutus = () => {
  return (
    <div className=' w-full h-full px-8'>
      <div className="loader w-[112px] h-[112px] relative">
        <div className="box1 absolute border-8 border-solid border-black block w-[112px] h-[38px] mt-[64px] ml-[0px] animate-abox1"></div>
        <div className="box2 absolute border-8 border-solid border-red-500 block w-[48px] h-[38px] mt-[0px] ml-[0px] animate-abox2"></div>
        <div className="box3 absolute border-8 border-solid border-green-600 block w-[48px] h-[38px] mt-[0px] ml-[64px] animate-abox3"></div>
      </div>
      <span className='uppercase font-bold text-5xl mt-[-5%] ml-[15%] absolute'>Who we are ?</span>
      <section className='mt-[3%]'>
        <div className="textabout font-semibold">
          <p>At CWOALG Orphanage, we believe every child deserves a loving and nurturing environment to grow, learn, and thrive. 
            Our mission is to provide a safe haven for children who have lost their families or have been abandoned, ensuring they receive the care, 
            education, and emotional support they need to build a brighter future. Our dedicated team of caregivers, educators, 
            and volunteers work tirelessly to create a home-like atmosphere where each child feels valued and loved. Through a variety of programs,
             we aim to equip our children with essential life skills, foster their talents, and instill a sense of hope and confidence.</p>
        </div>
        <div className="seperation w-full mt-8">
            <h1 className='ml-[8%] font-bold text-4xl '> CwoalG orphanage has a three-tier programme for the children: Rehabilitation, Reformation and Reintegration</h1>
          </div>
      </section>
      <section className='mt-[4%]'>
        <div className="guestspeakers flex gap-5">
          <div className="firstone">
          <img src={guest} alt="" className='w-[400px]' />
          </div>
          <div className="secondone">
          <img src={guest2} alt=""  className='w-[400px]'/>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
