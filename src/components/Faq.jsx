import React,{useEffect} from 'react'

const Faq = () => {
    useEffect(() => {
        const time = () => {
          document.getElementById('year').innerHTML = new Date().getFullYear();
        };
        time();
      }, []);

      const faqData = [
        {
          question: "Q: What is CwoalG?",
          answer: "Ans: CwoalG [Orphanage Name] is a non-profit organization dedicated to providing a safe, nurturing environment for orphaned and abandoned children. We focus on their overall development, including education, health, and emotional well-being."
        },
        {
          question: "Q: Where is CwoalG located?",
          answer: "Ans: We are located at No 7 Victory Avenue Olosun Ota, Sango-ota, Ogun State, Nigeria. You can find a map and directions on our <a href='/Contactus'>Contact Us</a> page."
        },
        {
          question: "Q: How can I donate to CwoalG?",
          answer: "Ans: You can donate online via our <a href='/Donations'>Donation</a> Page, or you can mail checks to our address. We also accept donations in the form of clothing, toys, books, and other essentials. Please contact us for more details."
        },
        {
          question: "Q: How can I volunteer at CwoalG?",
          answer: "Ans: We welcome volunteers! Please fill out the volunteer application form on our Volunteer Page. After reviewing your application, we will contact you to discuss available opportunities and any necessary training."
        },
        {
          question: "Q: What types of volunteer opportunities are available?",
          answer: "Ans: Volunteers can assist with various tasks, including tutoring, organizing activities, helping with events, and providing administrative support. We match volunteers' skills and interests with our needs."
        },
        {
          question: "Q: How can I adopt a child from CwoalG?",
          answer: "Ans: If you are interested in adopting, please visit our Adoption Page for detailed information on the process, requirements, and application forms. Our adoption coordinator will guide you through every step."
        },
        {
          question: "Q: How can I sponsor a child?",
          answer: "Ans: Sponsoring a child helps provide them with food, education, and healthcare. You can learn more about our sponsorship program and choose a child to sponsor on our <a href=''>Sponsorship</a> Page."
        },
        {
          question: "Q: What do I receive as a sponsor?",
          answer: "Ans: As a sponsor, you will receive regular updates on your sponsored child's progress, letters, and photos. You will see the direct impact of your support on their life."
        },
        {
          question: "Q: Can I visit the orphanage?",
          answer: "Ans: Yes, we welcome visitors! Please contact us to schedule a visit so we can ensure it does not disrupt the children's activities and routines."
        },
      ];
  return (
    <div className='py-4 w-full overflow-hidden'>
        <h1 className='xl:text-4xl sm:text-2xl font-bold flex  items-center justify-center py-2 '> <i className="ri-vip-crown-line"></i> General Information</h1>
        <div className="qandanswers flex flex-wrap sm:flex-col xl:flex-row xl:px-4 sm:px-7 mx-auto gap-4 w-full justify-between text-white">
      {faqData.map((item, index) => (
        <div key={index} className="card1 bg-[#011627] xl:w-[420px] sm:w-full h-[250px] rounded-[10px] p-4" data-aos={index % 2 === 0 ? "slide-right" : "slide-left"} data-aos-duration='1500'>
          <p className='text-xl sm:text-lg py-3'>{item.question}</p>
          <p className='py-3 xl:text-lg sm:text-[12px]' dangerouslySetInnerHTML={{ __html: item.answer }}></p>
        </div>
      ))}
    </div>
      {/* <div className="qandanswers flex flex-wrap sm:flex-col xl:flex-row xl:px-4 sm:px-7 mx-auto gap-4 w-full justify-between text-white ">
        
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px] " data-aos="slide-right" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl sm:text-lg py-3 '>Q: What is CwoalG?</p>
            <p className='px-4 sm:py-1 xl:py-3 '>Ans: CwoalG  [Orphanage Name] is a non-profit organization dedicated to providing a safe,
                 nurturing environment for orphaned and abandoned children.
                 We focus on their overall development, including education, health, and emotional well-being.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-right" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl  py-3'>Q:Where is CwoalG located?</p>
            <p className='px-4  py-4'>Ans: We are located at No 7 Victory Avenue Olosun Ota,
                 Sango-ota, Ogun State, Nigeria. You can find a map and directions on our <a href="/Contactus">Contact Us</a> page.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-right" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl sm:text-lg py-3'>Q: How can I donate to CwoalG? </p>
            <p className='px-4  py-3'>Ans: You can donate online via our <a href="/Donations">Donation</a> Page, or you can mail checks to our address.
             We also accept donations in the form of clothing, toys, books, and other essentials. 
            Please contact us for more details</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-left" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl  py-3'>Q: How can I volunteer at CwoalG?</p>
            <p className='px-4  py-3'>Ans: We welcome volunteers! Please fill out the volunteer application form on our Volunteer Page.
                 After reviewing your application,
                 we will contact you to discuss available opportunities and any necessary training.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-left" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl  py-3'>Q: What types of volunteer opportunities are available?</p>
            <p className='px-4  xl:py-3 sm:py-[-2px]'>Ans: Volunteers can assist with various tasks, including tutoring, organizing activities, helping with events,
                 and providing administrative support.
                 We match volunteers' skills and interests with our needs.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-left" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl py-3'>Q: How can I adopt a child from CwoalG?</p>
            <p className='px-4  py-3'>Ans: If you are interested in adopting, please visit our Adoption Page for detailed information on the process, requirements,
                 and application forms.
                 Our adoption coordinator will guide you through every step.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-right" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl  py-3'>Q: How can I sponsor a child?</p>
            <p className='px-4  py-3'>Ans:  Sponsoring a child helps provide them with food, education, and healthcare. 
                You can learn more about our sponsorship program and choose a child to sponsor on our <a href="">Sponsorship</a> Page.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-right" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl  py-3'>Q: What do I receive as a sponsor?</p>
            <p className='px-4  py-3'>Ans: As a sponsor, you will receive regular updates on your sponsored child's progress, letters, and photos.
                 You will see the direct impact of your support on their life.</p>
          </div>
          <div className="card1 bg-[#011627] xl:w-[420px] sm:w-[330px] h-[250px] rounded-[10px]" data-aos="slide-right" data-aos-duration='1500'>
            <p className='px-4 xl:text-3xl  py-3'>Q: Can I visit the orphanage?</p>
            <p className='px-4  py-3'>Ans: Yes, we welcome visitors! 
                Please contact us to schedule a visit so we can ensure it does not disrupt the children's activities and routines.</p>
          </div>
          
      </div> */}
      <div className="awareness flex xl:flex-row sm:flex-col mt-12 justify-center gap-6 xl:px-7 sm:px-6 ">
                <section className='xl:border-r-4  border-black'>
                  <h2 className='xl:text-2xl font-bold'>Success stories</h2>
                  <p>Read about the impact of your contributions and the success stories of the children we support.</p>
                </section>
                <section className='xl:border-r-4 border-black'>
                  <h2 className='xl:text-2xl font-bold'>Get Involved</h2>
                  <p>Find out how you can get involved and make a difference in a child's life.</p>
                </section>
                <section className='xl:border-r-4  border-black'>
                  <h2 className='xl:text-2xl font-bold'>Legal</h2>
                  <p>Privacy Policy | Terms of Service.</p>
                </section>
                <section >
                  <h2 className='xl:text-2xl font-bold'>Our Mission</h2>
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

export default Faq
