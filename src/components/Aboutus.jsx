
import React from 'react';
import Footer2 from './Footer2';
import guest from "./../assets/images/guestm.jpg"
import guest2 from "./../assets/images/guestw.jpg"
import guest3 from "./../assets/images/guestw2.jpg"
import guest4 from "./../assets/images/guestm2.jpg"
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
            <h1 className='ml-[8%] font-bold text-4xl py-2 '> CwoalG orphanage has a three-tier programme for the children: Rehabilitation, Reformation and Reintegration</h1>
          </div>
      </section>
      <section className='mt-[4%] bg-black text-white'>
        <div className="guestspeakers flex gap-5 px-7 py-5">
          <div className="firstone flex flex-col ">
          <img src={guest} alt="" className='w-[400px] rounded-[20px]' />
          <p className='w-[370px] border-2 py-3 border-solid border-gray-200 px-4 rounded-[10px] mt-3'> At CWOALG Orphanage, we believe in the transformative power of positive influence and strive to connect our children with individuals 
            who can inspire them to achieve their fullest potential.
            Our guest speakers come from diverse backgrounds and professions, sharing their unique stories, experiences, and wisdom. Through engaging talks and interactive sessions, they address topics such as overcoming challenges, pursuing education and career goals,
             and the importance of self-belief and perseverance.</p>
          </div>
          <div className="secondone">
          <img src={guest2} alt=""  className='w-[400px] rounded-[20px]'/>
          <p className='w-[370px] border-2 py-3 border-solid border-gray-200 px-4 rounded-[10px] mt-3'>At CWOALG Orphanage, we are thrilled to host events featuring inspiring guest speakers who bring valuable insights and encouragement to
             our children. These events are designed to broaden our children's horizons,
             spark their ambitions, and provide them with role models who exemplify success, resilience, and compassion.</p>
          </div>
          <div className="thirdone flex flex-col gap-5">
          <img src={guest3} alt=""  className='w-[400px] rounded-[20px]'/>
          <img src={guest4} alt=""  className='w-[400px] rounded-[20px]'/>
          </div>
         
        </div>
      </section>
      <Footer2 />
    </div>
    
  );
};

export default Aboutus;
