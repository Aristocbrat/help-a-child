import React,{useEffect} from 'react'
import guest3 from "./../assets/images/guestw2.jpg"
import walk2 from "./../assets/images/walk2.jpg"
import walk3 from "./../assets/images/walk3.jpg"
const Awareness = () => {
    useEffect(() => {
        const time = () => {
          document.getElementById('year').innerHTML = new Date().getFullYear();
        };
        time();
      }, []);
  return (
    <div className='bg-black text-white'>
        <div className="raise">
            <h1 className='text-4xl font-bold flex justify-center py-3 '>Raise Awareness</h1>
            <h2 className='text-3xl font-semibold flex justify-center py-4'>The Plight of Orphaned Children</h2>
            <div className="protest w-full flex flex-col py-3 px-5 gap-5">
            <hr className='p-4 text-black' />
                <img src={walk2} alt="" className='w-[500px] '/>
                <span className='absolute ml-[40%] w-[500px] font-semibold mt-12'>Every child deserves a safe and loving home. Unfortunately,
                     millions of children around the world are orphaned, abandoned, 
                    or separated from their families. These children face significant challenges, including: <br/>
                    Lack of Basic Needs: Many orphaned children struggle 
                    to access basic necessities like food, clean water, and shelter.<br/>
                    Education Deficit: Without a stable home, many children miss out on education,
                    limiting their future opportunities.<br/>
                    Promote Education: Offer educational opportunities and support to help children reach their full potential.
                    </span>


                <hr className='p-4 text-black' />
                <img src={guest3} alt="" className='w-[500px] ml-[50%]'/>
                <span className='absolute w-[500px] font-semibold mt-[36%] ml-5'>
                Health Risks: Orphaned children often lack access to proper medical care and are at higher
                 risk for health issues. <br/>
                 Emotional Trauma: The loss of parents and family can lead to severe emotional and psychological trauma.<br/>
                 Our Mission at CwoalG
                 At CwoalG, we are dedicated to providing a safe, nurturing environment for orphaned and abandoned children.
                  Our mission is to:<br/>
                 Provide Comprehensive Care: Ensure that every child has access to food, shelter, education, and medical care.<br/>
                 Create a Loving Environment: Foster a sense of family and belonging for all children in our care.
                </span>
                <hr className='p-4 font-bold text-black' />

                <img src={walk3} alt="" className='w-[500px] ' />
                <span className='absolute w-[500px] font-semibold mt-[65%] ml-[43%]'>
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

            </div>
        </div>
        <div className="hych px-5 bg-black text-white ">
        <hr className='p-4 font-bold text-black' />
            <h1 className='text-3xl flex justify-center py-4'>How You Can Help</h1>
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
                <h1 className='text-3xl flex justify-center py-4'>Resources and Information</h1>
                <div className="classes flex justify-around px-8">
                    <div className="stats w-[300px] border-r-2">
                        <h1 className='text-2xl'>Statistics and Reports:</h1>
                        <p className='ml-[-10%]'>Learn more about the global orphan crisis with our detailed reports and statistics. 
                            View <a href="" className='hover:underline'>Reports</a></p>
                    </div>
                    <div className="edumat w-[300px] border-r-2">
                        <h1 className='text-2xl'>Educational Materials:</h1>
                        <p className='ml-[-19%]'>Access educational materials and resources to understand the issues faced by orphaned children. <a href="">Read More</a></p>
                    </div>
                    <div className="partner w-[300px]">
                        <h1 className='text-2xl'>Partner with Us:</h1>
                        <p className='ml-[-19%]'>We collaborate with various organizations and businesses to enhance our impact. 
                            Partner with Us to learn more about partnership opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className='p-4 font-bold ' />
        <div className="address  font-bold  px-7" >
              <p>
                <span className='font-bold text-2xl'>Contact Us</span>
                <p data-aos="fade-down-right">No 7 Victory Avenue Olosun Ota, Ogun State</p>
                <p data-aos="fade-down-right">Phone: (+234)8020921654</p>
                <a href="mailto:">Email: emmanuelforbez@gmail.com</a></p>
                <p className="py-4 ms-[24%]  text-5xl  ps-4"><span className='spanex'></span></p>
            </div>
           
            <div className="awareness flex mt-12 justify-center gap-6 px-6">
                <section className='border-r-4  border-red-500'>
                  <h2 className='text-2xl font-bold'>Success stories</h2>
                  <p>Read about the impact of your contributions and the success stories of the children we support.</p>
                </section>
                <section className='border-r-4 border-white'>
                  <h2 className='text-2xl font-bold'>Get Involved</h2>
                  <p>Find out how you can get involved and make a difference in a child's life.</p>
                </section>
                <section className='border-r-4  border-green-500'>
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

export default Awareness
