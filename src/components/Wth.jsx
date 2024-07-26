import React from 'react';


import Footer2 from './Footer2';

const Wth = () => {


  return (
    <div className="w-full h-full flex flex-wrap px-7 py-4 font-bold " data-aos="fade-down-right">
      <h1 className="xl:text-4xl sm:text-lg font-bold">There are several ways to help us:</h1>
      <div className="wthcon">
        <p className="py-2 text">-Donate Funds: <span>Financial contributions can assist with daily expenses, 
        educational needs, and healthcare services for the children</span>.</p>
        <p className="py-2 text">-Volunteer Time: <span>Offer your time to help with activities, tutoring, or general care. 
        This can provide much-needed support to both the staff and the children.</span></p>
        <p className="py-2 text">-Donate Goods: <span>Provide essential items such as clothes, food, books, and toys.
        These donations can greatly improve the quality of life for the children.</span></p>
        <p className="py-2 text">-Organize Fundraisers: <span >Host events or online campaigns to raise money and awareness for the orphanage.</span></p>
        <p className="py-2 text">-Advocate and Raise Awareness: <span>Use social media or community events to highlight the needs of the orphanage and encourage others to contribute.</span></p>
        <p className="py-2 text">-Establish Partnerships: <span>Collaborate with local businesses, schools, or other organizations to provide ongoing support and resources.</span></p>
        <p className="py-2 text">-Sponsor a Child: <span >Consider sponsoring a child's education or healthcare, providing them with opportunities for a better future</span>.</p>
      </div>
      
      <Footer2 />
    </div>
    
  );
}

export default Wth;


