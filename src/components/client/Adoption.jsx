import React from 'react'
import clip1 from "./../../assets/images/clip1.jpg"
import clip2 from "./../../assets/images/clip2.jpg"
import clip3 from "./../../assets/images/clip3.jpg"


const Adoption = () => {
  return (
    <div className='bg-white text-black dark:bg-black  '>
      <div className="main  xl:px-5 py-5 ">
        <h1 className='font-bold text-3xl flex items-center justify-center py-2'>Adoption</h1>
        <h1 className='font-bold xl:text-3xl flex items-center justify-center py-2'>Welcome to Our Adoption Program</h1>
        <p className='py-2 font-semibold xl:px-0 sm:px-3'>Adopting a child is a profound and life-changing experience. 
        At CwoalG, we are dedicated to helping you navigate this journey with compassion and support.
        Below, you will find detailed information about the adoption process, requirements,
        and how to get started.</p>
      </div>
      <section className=' mt-[1%] xl:px-6 flex xl:flex-row sm:flex-col gap-2'>
      <div className="clips relative xl:w-[700px] sm:w-[400px] h-[400px]">
        <div className="clip clip1 clip-path-custom-shape">
          <img src={clip1} alt=""  className='xl:w-[600px]   h-[250px] object-cover'/>
          
        </div>
        <div className="clip clip2 clip-path-custom-shape2">
        <img src={clip2} alt="" className='xl:w-[600px] h-[250px] object-cover' />
       
        </div>
        <div className="clip clip3 clip-path-custom-shape3">
        <img src={clip3} alt="" className='xl:w-[600px] h-[250px] object-cover' />
        
        </div>
       
      </div>
      <div className="why xl:mt-0  sm:mt-[-27%]">
          <h1 className='xl:text-4xl  sm:text-2xl px-6'>Why Adopt from CwoalG?</h1>
          <ul className='py-3 xl:px-4 sm:px-2'>
            <li>-<i className="ri-heart-fill text-red-700"></i> <span className='xl:text-2xl'>Loving Environment</span> : Our children are raised in a nurturing environment
               that prioritizes their well-being and development.</li>
            <li>-<i className="ri-group-fill"></i> <span className='xl:text-2xl'>Supportive Staff</span>: Our experienced staff will guide you
               through every step of the adoption process.</li>
            <li>-<i className="ri-heart-fill"></i> <span className='xl:text-2xl'>Comprehensive Care</span>: We ensure that every child receives proper medical care,
               education, and emotional support.</li>
            <li></li>
           
          </ul>
          <hr className='p-4 text-white' />
      </div>
      
      </section>
      <div className="process mt-[-6%] ">
        <div className="processs one">
        <h1 className='flex font-bold xl:text-4xl sm:text-2xl items-center justify-center py-3'>Adoption Process</h1>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>1. Initial Inquiry:
        Begin by filling out our Adoption Inquiry Form. This form helps us understand your interest and provides basic
         information about you.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>2. Orientation Session:
        Attend an orientation session to learn more about the adoption process, meet our staff, and understand the expectations and requirements</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>3. Application:
        Submit a detailed adoption application. This includes personal information, background checks, and financial stability assessments.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>4. Home Study:
        A social worker will conduct a home study to ensure a safe and supportive environment for the child.
         This includes home visits, interviews, and documentation reviews.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>5. Matching:
        Once approved, we work to match you with a child whose needs align with your capabilities and preferences. 
        You will receive information about the child and have opportunities to meet and interact</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>6. Placement:
        After a successful match, the child is placed with you.
         This is followed by a period of supervision and support to ensure a smooth transition.</p>
        </div>
        <hr className='p-4 text-white' />

        <div className="processs two"> 
        <h1 className=' font-bold xl:text-4xl sm:text-2xl  py-3 px-5'>Requirements for Adoption</h1>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>1. Age: Prospective parents must be at least 38 years old.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>2.Marital Status: Both single and married individuals can apply.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>3.Financial Stability: Demonstrated ability to provide for the child's needs.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>4.Health: Good physical and mental health.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>5. Background Checks: Clear criminal record and child abuse clearances.</p>
        <p className='font-bold py-2 xl:px-4 sm:px-6'>6. Home Study: Positive home study report from a licensed social worker.</p>
        </div>
        <hr className='p-4 text-white' />

        <div className="processs three">
        <h1 className='flex font-bold xl:text-4xl sm:text-2xl items-center justify-center py-3'>Meet Our Children</h1>
        <p className='font-semibold py-2 xl:px-4 sm:px-6 text-lg'>We have many wonderful children waiting for loving families.
           View Profiles to learn more about their stories, interests, and needs. Each child's profile includes:</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Photos</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Age and Gender</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Personal Interests</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Health and Educational Background</p>
        </div>
      </div>
    </div>
  )
}

export default Adoption
