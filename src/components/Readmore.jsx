import React , {useEffect} from 'react'

const Readmore = () => {
    useEffect(() => {
        const time = () => {
          document.getElementById('year').innerHTML = new Date().getFullYear();
        };
        time();
      }, []);
  return (
    <div className='bg-[#003049] dark:bg-black text-white'>
    <div className="readm xl:px-5 sm:px-4">
      <h1 className='font-bold xl:text-4xl sm:text-lg flex justify-center xl:py-4 sm:py-4'>Adoption: An Act of Love and Devotion</h1>
      <p className='xl:py-2'>
        Adoption is an act of love. It must come from a deep-seated desire to love and nurture a child. This profound decision is motivated by our love for God and humanity, serving as a tangible expression of that love. Adopting a child is not merely about providing a home; it is about offering a heart full of love, support, and devotion.
      </p>
      <p className='xl:py-2'>
        When we choose to adopt, we do so because we want to raise a child for God, demonstrating our commitment to His teachings and our compassion for His creations. Adoption is a way to extend our family and our hearts, making room for another life that is a precious gift from God.
      </p>
      <p className='xl:py-2'>
        Every child is a gift from God. Each one brings their unique joy, challenges, and opportunities for growth. By choosing to adopt, we acknowledge and embrace this divine gift, committing to nurture and guide the child with the same love and care that God extends to us.
      </p>
      <p className='xl:py-5'>
        In conclusion, adoption is more than a legal process; it is a heartfelt decision driven by love and faith. It is a commitment to provide a loving home and to raise a child in the light of God’s love. Through adoption, we become co-creators in God’s plan, offering a child the love, stability, and guidance they need to flourish.
      </p>
      <div className="relative flex justify-center xl:h-[350px] sm:h-[300px] sm:w-[150px] xl:w-[190px] xl:border-4  border-black rounded-2xl bg-gray-50 mt-5 sm:ml-[23%] xl:ml-0"
        style={{ boxShadow: "2px 2px 2.5px 6px rgb(2, 8, 18,)" }}>
        <span className="xl:border border-black bg-black xl:w-20 xl:h-2  rounded-br-xl rounded-bl-xl"></span>
        <span className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"></span>
        <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"></span>
      </div>
    </div>

        <div className="socials z-20 absolute xl:mt-[-24%] sm:mt-[-68%] xl:px-8 sm:px-5 sm:ml-[24%] xl:ml-0 ">
            <ul className='flex gap-6 flex-col'>
                <li><i className="ri-instagram-fill text-purple-500 text-xl md:text-2xl lg:text-3xl xl:text-3xl"></i><a href="//htt" className='text-black font-bold text-[13px]'>@3rdGbolokun</a></li>
                <li><i class="ri-youtube-fill  xl:text-4xl text-red-600"></i><a href="" className='text-black font-bold xl:text-[13px]'>CWOALG</a></li>
                <li><i className="ri-twitter-x-line text-black text-xl md:text-2xl lg:text-3xl xl:text-3xl"></i><a href="" className='text-black font-bold text-[13px]'>@3rdGbolokun</a></li>
                <li><i className="ri-facebook-fill  text-blue-700 text-xl md:text-2xl lg:text-3xl xl:text-3xl"></i>  <a href="" className='text-black font-bold text-[13px]'>@CwoalG</a></li>
                <li><i className="ri-linkedin-fill text-blue-700 xl:text-3xl"></i>  <a href="" className='text-black font-bold xl:text-[13px]'>3rdGbolokun</a></li>
            </ul>
        </div>
        <section className='xl:w-[500px] xl:ml-[24%] xl:mt-[-25%] xl:absolute  sm:px-5 sm:mt-5'>
            <h1 className='font-bold xl:text-4xl '>Connect with Us</h1>
            <p className='text-[13px] xl:py-3'>We love to hear from you! Whether you have questions, feedback, or just want to stay updated with our latest news, you can reach out to us on our social media channels. Follow us, like our posts,
                 and send us a message—we’re always here to connect and engage with our community.</p>
                 <h1 className='font-bold xl:text-4xl py-2'>Follow Us On:</h1>
                 <ul>
                    <li className='py-2'>Facebook: facebook.com/@CwoalG</li>
                    <li className='py-2'>Twitter: twitter.com/@3rdGbolokun</li>
                    <li className='py-2'>Instagram: instagram.com/@3rdGbolokun</li>
                    <li className='py-2'>LinkedIn: linkedin.com/company/@CwoalG</li>
                    <li>Youtube: Subscribe to our channel/Emmanuelforbez</li>
                 </ul>
        </section>
        <div className="awareness flex sm:flex-col xl:flex-row xl:mt-12 justify-center xl:gap-6 xl:px-5 xl:py-5 sm:mt-8 sm:px-5">
                <section className='xl:border-r-4  border-white py-2'>
                  <h2 className='xl:text-2xl font-bold  '>Success stories</h2>
                  <p>Read about the impact of your contributions and the success stories of the children we support.</p>
                </section>
                <section className='xl:border-r-4 border-white py-2'>
                  <h2 className='xl:text-2xl font-bold'>Get Involved</h2>
                  <p>Find out how you can get involved and make a difference in a child's life.</p>
                </section>
                <section className='xl:border-r-4  border-white'>
                  <h2 className='xl:text-2xl font-bold'>Legal</h2>
                  <p>Privacy Policy | Terms of Service.</p>
                </section>
                <section className='py-2' >
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

export default Readmore
