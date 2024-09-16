import React from 'react'
import guest3 from "./../../assets/images/guestw2.jpg"
import walk2 from "./../../assets/images/walk2.jpg"
import walk3 from "./../../assets/images/walk3.jpg"
const Awareness = () => {
   
  return (
    <div className='bg-black text-white'>
        <div className="raise">
            <h1 className='xl:text-4xl font-bold flex  justify-center py-3 '>Raise Awareness</h1>
            <h2 className='xl:text-3xl font-semibold flex justify-center py-4'>The Plight of Orphaned Children</h2>
            <div className="protest w-full flex flex-col py-3 px-5 gap-5">
            <hr className='xl:p-4 text-black' />
                <img src={walk2} alt="" className='w-[500px] '/>
                <span className='absolute xl:ml-[40%] xl:w-[500px] font-semibold xl:mt-12 sm:mt-[70%] text-[13px] xl:text-lg px-4'>Every child deserves a safe and loving home. Unfortunately,
                     millions of children around the world are orphaned, abandoned, 
                    or separated from their families. These children face significant challenges, including: <br/>
                    Lack of Basic Needs: Many orphaned children struggle 
                    to access basic necessities like food, clean water, and shelter.<br/>
                    Education Deficit: Without a stable home, many children miss out on education,
                    limiting their future opportunities.<br/>
                    Promote Education: Offer educational opportunities and support to help children reach their full potential.
                    </span>


                <hr className='p-4 text-black mt-[90%] xl:mt-0' />
                <img src={guest3} alt="" className='w-[500px] xl:ml-[50%] mt-[2%]'/>
                <span className='absolute xl:w-[500px] font-semibold xl:mt-[36%] sm:mt-[235%] xl:ml-5 text-[13px] xl:text-lg px-4'>
                Health Risks: Orphaned children often lack access to proper medical care and are at higher
                 risk for health issues. <br/>
                 Emotional Trauma: The loss of parents and family can lead to severe emotional and psychological trauma.<br/>
                 Our Mission at CwoalG
                 At CwoalG, we are dedicated to providing a safe, nurturing environment for orphaned and abandoned children.
                  Our mission is to:<br/>
                 Provide Comprehensive Care: Ensure that every child has access to food, shelter, education, and medical care.<br/>
                 Create a Loving Environment: Foster a sense of family and belonging for all children in our care.
                </span>
                <hr className='p-4 font-bold text-black mt-[99%] xl:mt-0' />

                <img src={walk3} alt="" className='w-[500px] ' />
                <span className='absolute xl:w-[500px] font-semibold xl:mt-[62%] sm:mt-[384%] xl:ml-[43%] text-[13px] xl:text-lg px-4 py-0 xl:py-5'>
                Success Stories<br/>
                Here are a few stories of how your support has made a difference:<br/>
                Maria's Journey:<br/>
                Maria came to us at the age of five, malnourished and without access to education.
                With the support of our donors and volunteers,
                she is now a thriving 10-year-old who loves school and dreams of becoming a teacher.<br/>
                Aisha's New Beginning:<br/>
               Aisha was abandoned at birth but found a new family through our adoption program. 
               She is now part of a loving home where she is cherished and cared for.
                </span>
                <hr className='p-4 font-bold text-black mt-[95%] xl:mt-0' /> 

            </div>
        </div>
        <div className="hych px-5 bg-black text-white  xl:mt-0 ">
        {/* <hr className='p-4 font-bold text-black' /> */}
            <h1 className='xl:text-3xl flex justify-center py-4'>How You Can Help</h1>
            <p className='font-semibold'> There are many ways you can support the children at CwoalG:</p>
            <div className="ways">
                <p className='py-2'>1. Your financial contributions make a huge difference. <a href="/Donations" className='hover:underline font-bold'>Donate</a> Now to help provide essential care and support for our children.</p>
                <p className='py-2'>2.We welcome volunteers to help with various tasks, from tutoring to organizing activities. Learn More about volunteer opportunities.</p>
                <p className='py-2'>3.Become a sponsor and support a child's growth and development. Sponsor a Child to make a direct impact on their life.</p>
                <p className='py-2'>4.Help us raise awareness by sharing our mission with your friends, family, and social networks.
                <i className="ri-twitter-x-fill"></i>  <i className="ri-linkedin-fill"></i>  <i className="ri-instagram-fill"></i> Follow us on  and share our posts.</p>
                <p className='py-2'>5. Join us at our fundraising events and community programs. Check Our Events Calendar for upcoming activities.</p>
            </div>
            <div className="hr mt-5">
                <h1 className='xl:text-3xl flex justify-center py-4'>Resources and Information</h1>
                <div className="classes flex flex-col xl:flex-row justify-around xl:px-8">
                    <div className="stats w-[300px] xl:border-r-2 py-3 xl:py-0 ">
                        <h1 className='xl:text-2xl'>Statistics and Reports:</h1>
                        <p className='xl:ml-[-10%]'>Learn more about the global orphan crisis with our detailed reports and statistics. 
                            View <a href="" className='hover:underline'>Reports</a></p>
                    </div>
                    <div className="edumat w-[300px] xl:border-r-2 py-3 xl:py-0">
                        <h1 className='xl:text-2xl'>Educational Materials:</h1>
                        <p className='xl:ml-[-19%]'>Access educational materials and resources to understand the issues faced by orphaned children. <a href="">Read More</a></p>
                    </div>
                    <div className="partner w-[300px] py-3 xl:py-0">
                        <h1 className='xl:text-2xl'>Partner with Us:</h1>
                        <p className='xl:ml-[-19%]'>We collaborate with various organizations and businesses to enhance our impact. 
                            Partner with Us to learn more about partnership opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
       
      
    </div>
  )
}

export default Awareness
