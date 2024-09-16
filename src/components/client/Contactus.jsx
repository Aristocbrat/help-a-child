import React from 'react';

const Contactus = () => {
    
  return (
    <div className='h-full'>
      <h2 className='flex justify-center py-4 xl:text-4xl  font-bold'>Feed African children. Give them life!</h2>
      <div className="alld flex xl:flex-row sm:flex-col gap-7 xl:px-2 sm:px-4">
        <div className="fillthisout bg-[#011627] xl:w-[700px] h-[639px] sm:w-[330px] mx-auto text-white xl:px-1 sm:px-8">
          <p className='xl:text-4xl p-3'>You can get in touch with us.</p>
          <p className='font-bold p-3'>Feel free to drop us a message below, we'll get to you back as soon as possible.</p>
          <div className="forms">
            <form action="/submit-form" method="post" className="flex xl:flex-row sm:flex-wrap justify-between w-full xl:px-6 py-4 gap-4">
              <div>
                <label htmlFor="username" className="block">Username (required):</label>
                <input type="text" id="username" name="username" required className="w-[200px] bg-slate-500" />
              </div>
              <div>
                <label htmlFor="password" className="block">Password (required):</label>
                <input type="password" id="password" name="password" required className="w-[200px] bg-slate-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block">Subject:</label>
                <input type="text" id="subject" name="subject" required className="w-[200px] bg-slate-500" />
              </div>
            </form>
            <div className="message xl:px-5">
              <p className='font-bold xl:p-4'>Your message:</p>
              <textarea
                name="message"
                id="message"
                className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Type your message here..."></textarea>
              <button type="button" className='bg-[#309cd6] px-3 py-2 rounded-[5px] hover:bg-green-500 duration-300 mt-2'>Send message</button>
            </div>
          </div>
        </div>
        <div className="googlemap xl:px-4 sm:px-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3962.7106010281473!2d3.2324227380657824!3d6.682727590373935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1721566910654!5m2!1sen!2sng"
            width="530"
            height="450"
            style={{ border: 0, maxWidth:"100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"> </iframe>
          <div className="address  font-bold py-4" >
              <p>
                <span className='font-bold text-2xl'>Contact Us</span>
                <p>No 7 Victory Avenue Olosun Ota, Ogun State</p>
                <p >Phone: (+234)8020921654</p>
                <a href="mailto:">Email: emmanuelforbez@gmail.com</a></p>
                <h3>Emergency Hotline</h3>
                <p>Line1: (+234)8056113268</p>
                <p>Line2: (+234)9096005136</p>
            </div>
        </div>
      </div>
      <div className="closingremarks flex flex-col justify-center font-bold xl:w-[700px] items-center xl:ml-[23%] bg-[] py-6">
      <h2 className='xl:text-3xl'>Thank you for your kindness dear volunteers</h2>
      <p>Please download the volunteer form below</p>
      <a href="" className='hover:bg-black dark:hover:bg-slate-500 hover:text-white rounded-[5px] py-2 px-4 duration-300'>
        Click here to download form</a>
      </div>
    </div>
  );
}

export default Contactus;


