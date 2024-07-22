import React,{useEffect} from 'react'
import clip1 from "./../assets/images/clip1.jpg"
import clip2 from "./../assets/images/clip2.jpg"
import clip3 from "./../assets/images/clip3.jpg"


const Adoption = () => {
  useEffect(() => {
    const time = () => {
      document.getElementById('year').innerHTML = new Date().getFullYear();
    };
    time();
  }, []);

  return (
    <div className='bg-[#6c584c] text-white '>
      <div className="main  px-5 py-5 ">
        <h1 className='font-bold text-3xl flex items-center justify-center py-2'>Adoption</h1>
        <h1 className='font-bold text-3xl flex items-center justify-center py-2'>Welcome to Our Adoption Program</h1>
        <p className='py-2 font-semibold'>Adopting a child is a profound and life-changing experience. 
        At CwoalG, we are dedicated to helping you navigate this journey with compassion and support.
        Below, you will find detailed information about the adoption process, requirements,
        and how to get started.</p>
      </div>
      <section className=' mt-[1%] px-6 flex gap-2'>
      <div className="clips relative w-[700px] h-[400px]">
        <div className="clip clip1 clip-path-custom-shape">
          <img src={clip1} alt=""  className='w-[600px] h-[250px] object-cover'/>
          
        </div>
        <div className="clip clip2 clip-path-custom-shape2">
        <img src={clip2} alt="" className='w-[600px] h-[250px] object-cover' />
       
        </div>
        <div className="clip clip3 clip-path-custom-shape3">
        <img src={clip3} alt="" className='w-[600px] h-[250px] object-cover' />
        
        </div>
       
      </div>
      <div className="why">
          <h1 className='text-4xl '>Why Adopt from CwoalG?</h1>
          <ul className='py-3 px-4'>
            <li>-<i className="ri-heart-fill text-red-700"></i> <span className='text-2xl'>Loving Environment</span> : Our children are raised in a nurturing environment
               that prioritizes their well-being and development.</li>
            <li>-<i className="ri-group-fill"></i> <span className='text-2xl'>Supportive Staff</span>: Our experienced staff will guide you
               through every step of the adoption process.</li>
            <li>-<i className="ri-heart-fill"></i> <span className='text-2xl'>Comprehensive Care</span>: We ensure that every child receives proper medical care,
               education, and emotional support.</li>
            <li></li>
           
          </ul>
          <hr className='p-4 text-white' />
      </div>
      
      </section>
      <div className="process mt-[-6%]">
        <div className="processs one">
        <h1 className='flex font-bold text-4xl items-center justify-center py-3'>Adoption Process</h1>
        <p className='font-bold py-2 px-4'>1. Initial Inquiry:
        Begin by filling out our Adoption Inquiry Form. This form helps us understand your interest and provides basic
         information about you.</p>
        <p className='font-bold py-2 px-4'>2. Orientation Session:
        Attend an orientation session to learn more about the adoption process, meet our staff, and understand the expectations and requirements</p>
        <p className='font-bold py-2 px-4'>3. Application:
        Submit a detailed adoption application. This includes personal information, background checks, and financial stability assessments.</p>
        <p className='font-bold py-2 px-4'>4. Home Study:
        A social worker will conduct a home study to ensure a safe and supportive environment for the child.
         This includes home visits, interviews, and documentation reviews.</p>
        <p className='font-bold py-2 px-4'>5. Matching:
        Once approved, we work to match you with a child whose needs align with your capabilities and preferences. 
        You will receive information about the child and have opportunities to meet and interact</p>
        <p className='font-bold py-2 px-4'>6. Placement:
        After a successful match, the child is placed with you.
         This is followed by a period of supervision and support to ensure a smooth transition.</p>
        </div>
        <hr className='p-4 text-white' />

        <div className="processs two"> 
        <h1 className=' font-bold text-4xl  py-3 px-5'>Requirements for Adoption</h1>
        <p className='font-bold py-2 px-4'>1. Age: Prospective parents must be at least 38 years old.</p>
        <p className='font-bold py-2 px-4'>2.Marital Status: Both single and married individuals can apply.</p>
        <p className='font-bold py-2 px-4'>3.Financial Stability: Demonstrated ability to provide for the child's needs.</p>
        <p className='font-bold py-2 px-4'>4.Health: Good physical and mental health.</p>
        <p className='font-bold py-2 px-4'>5. Background Checks: Clear criminal record and child abuse clearances.</p>
        <p className='font-bold py-2 px-4'>6. Home Study: Positive home study report from a licensed social worker.</p>
        </div>
        <hr className='p-4 text-white' />

        <div className="processs three">
        <h1 className='flex font-bold text-4xl items-center justify-center py-3'>Meet Our Children</h1>
        <p className='font-semibold py-2 px-4 text-lg'>We have many wonderful children waiting for loving families.
           View Profiles to learn more about their stories, interests, and needs. Each child's profile includes:</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Photos</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Age and Gender</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Personal Interests</p>
        <p className='font-bold py-2 px-4'> <i className="ri-arrow-right-double-line"></i> Health and Educational Background</p>
        </div>
      </div>

      <hr className='p-4 text-white' />
      <div className="address  font-bold  px-7" >
              <p>
                <span className='font-bold text-2xl'>Contact Us</span>
                <p data-aos="fade-down-right">No 7 Victory Avenue Olosun Ota, Ogun State</p>
                <p data-aos="fade-down-right">Phone: (+234)8020921654</p>
                <a href="mailto:">Email: emmanuelforbez@gmail.com</a></p>
                <p className="py-4 ms-[24%]  text-5xl  ps-4"><span className='spanex'></span></p>
            </div>
           
            <div className="awareness flex mt-12 justify-center gap-6 px-6">
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
  )
}

export default Adoption
