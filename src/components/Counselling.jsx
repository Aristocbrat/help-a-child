import React from 'react'
import Footer2 from './Footer2'

const Counselling = () => {
  return (
    <div>
      <div className="couns px-4">
        <h1 className='uppercase font-semibold xl:text-3xl py-2 seperation flex justify-center'>Counseling Services</h1>
        <h2 className='text-2xl font-semibold py-3 '>Emotional Support for Our Children</h2>
        <p className='xl:w-[70%] font-semibold'>At CwoalG, we understand that emotional well-being is as crucial as physical health.
             Many of our children have experienced significant trauma and loss. 
            Our counseling services are designed to provide the support they need to heal and thrive.</p>
      </div>
      <section className='xl:w-[70%]'>
        <h1 className='uppercase font-semibold xl:text-3xl py-3 seperation flex px-5'>Why Counseling Matters</h1>
        <p className='font-semibold px-5 text-2xl'>Children who have been orphaned or abandoned often face:</p>
        <ul className='font-semibold px-5'> 
            <li className='py-1'>Grief and Loss: Coping with the loss of parents or primary caregivers.</li>
            <li className='py-1'>Trauma: Dealing with traumatic experiences from their past.</li>
            <li className='py-1'>Anxiety and Depression: Struggling with mental health issues due to their circumstances.</li>
            <li className='py-1'>Adjustment Issues: Adapting to new environments and relationships.</li>
        </ul>
      </section>
      <div className="help font-semibold px-5 xl:w-[70%]">
      <h1 className='uppercase  xl:text-3xl py-3 seperation flex px-5'>Counseling helps children:</h1>
      <ul>
        <li className='py-1'>Process Emotions: Understand and express their feelings in a healthy way.</li>
        <li className='py-1'>Build Resilience: Develop coping strategies to handle challenges.</li>
        <li className='py-1'>Enhance Self-Esteem: Build confidence and a positive self-image.</li>
      </ul>
      </div>
      <div className="services font-semibold xl:w-[70%] px-5">
      <h1 className='uppercase  xl:text-3xl py-3 seperation flex '>Our Counseling Services</h1>
      <div className="cases py-2">
        <h1>Individual Counseling:</h1>
        <p className='xl:w-[590px]'>One-on-one sessions with licensed therapists to address specific emotional and psychological needs.</p>
      </div>
      <div className="cases py-2">
        <h1>Group Therapy:</h1>
        <p>Group sessions that allow children to share their experiences and support each other.</p>
      </div>
      <div className="cases py-2">
        <h1>Family Counseling:</h1>
        <p>Sessions involving the child and their adoptive or foster families to strengthen family bonds and address any issues.</p>
      </div>
      <div className="cases py-2">
        <h1>Crisis Intervention:</h1>
        <p>Immediate support for children experiencing acute emotional distress.</p>
      </div>
      <div className="cases py-2">
        <h1>Educational Workshops:</h1>
        <p>Workshops on topics such as coping strategies, conflict resolution, and emotional regulation.</p>
      </div>
      </div>
      <div className="meet w-[90%] font-semibold">
      <h1 className='uppercase  xl:text-3xl py-3 seperation flex justify-center'>Meet Our Counselors</h1>
      <p className='px-5'>Our team of dedicated and compassionate counselors is here to help. 
        All our counselors are licensed professionals with experience in child psychology and trauma-informed care. 
        <a href="/Meetus" className='font-bold hover:underline'>Meet Our Team</a> to learn more about their backgrounds and specialties.</p>
      </div>
      <section className='bg-black dark:bg-slate-600 xl:rounded-l-[50%] xl:w-[45%] h-[600px] text-white xl:absolute xl:right-4 xl:mt-[-65%] '>
      <h1 className='uppercase  text-lg font-bold py-6  flex justify-center xl:ml-[15%] xl:px-8 mt-6 '> How to Access Counseling Services</h1>
      <div className="cases py-2 xl:w-[400px] xl:ml-[19%] px-3 xl:px-0" data-aos="slide-left">
        <h1 className='xl:text-2xl'> <i className="ri-arrow-right-double-fill"></i> For Children in Our Care:</h1>
        <p>Children at CwoalG are regularly assessed to determine their need for counseling.
             If a need is identified, our staff will arrange sessions with one of our counselors.</p>
      </div>
      <div className="cases py-2 xl:w-[400px] xl:ml-[26%] px-3 xl:px-0" data-aos="slide-right">
        <h1 className='xl:text-2xl'> <i className="ri-arrow-right-double-fill"></i>For Adoptive and Foster Families:</h1>
        <p>We offer counseling support for families who have adopted or are fostering children from our orphanage.
             This includes pre-adoption counseling, post-adoption support, 
             and crisis intervention. <a href="/Contactus" className='font-bold hover:underline'>Contact-Us</a> to schedule an appointment.</p>
      </div>
      <div className="cases py-2 xl:w-[400px] xl:ml-[34%] px-3 xl:px-0" data-aos="slide-right">
        <h1 className='xl:text-2xl'> <i className="ri-arrow-right-double-fill"></i> Community Outreach:</h1>
        <p>We also extend our counseling services to the broader community,
             including schools and other child welfare organizations.
              Learn More about our community programs.</p>
      </div>
      </section>
    <Footer2/>
    </div>
  )
}

export default Counselling
