import React from 'react';
import background from '../../../../public/image/Rectangle 1.png';
const Banner = () => {
    return (
        <div className='rounded-[24px] w-full'>
             <div className="bg-cover rounded-[24px]" style={{backgroundImage: `url("${background}")`}}>
  <div className="hero-content text-center text-neutral-content ">
    <div className="md:py-[50px] lg:py-[114px] p-6">
      <h1 className="mb-5  md:text-[36px] lg:text-[52px] font-bold text-[#FFFFFF]  lg:w-[897px] mx-auto">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-10 md:text-[18px] lg:w-[933px] mx-auto text-white">Stepping into the elegant ambiance of a fine dining restaurant, you are greeted by soft lighting, plush seating, and the gentle hum of conversation. The flavors dance on your palate, leaving you longing for just one more taste.</p>
                        <div className='space-x-6'>
                              <button className="btn bg-[#0BE58A] btn-primary text-[#150B2B] rounded-[50px] px-6 hover:bg-black hover:text-white border-none" >Explore Now</button>
                              <button className="btn btn-primary text-white rounded-[50px] px-6 ">Our Feedback</button>
    </div>
    </div>
  </div>
</div>
      </div>
    );
};

export default Banner;