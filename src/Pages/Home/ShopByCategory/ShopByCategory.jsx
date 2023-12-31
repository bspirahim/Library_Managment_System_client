import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import './ShopByCategory.css'

import 'swiper/css/autoplay';




const ShopByCategory = () => {
 const [category, setCatgory] = useState([]);

 useEffect(()=>{
  fetch('Category.json')
  .then(res => res.json())
  .then(data => setCatgory(data))

 },[])
 
  

  return (
    <div className='max-w-screen-lg mx-auto py-12'>
      <div className='w-1/4 mx-auto my-12 text-center'>
        <h1 className='text-2xl font-semibold'>Shop By Category</h1>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={true}


        className="mySwiper"
      >

        {
          category.map(ct => 
          
            <SwiperSlide className='my-5'>
            <div className="card w-auto bg-base-100 shadow-md h-full">
              <figure><img src={ct?.image} alt="Shoes" /></figure>
              <div className=" ">
                <button className="text-sm bg-primary w-full p-1 uppercase rounded-b-lg mt-5 text-white">
                  {ct?.category}
                </button>
              </div>
            </div>
          </SwiperSlide>
            )
        }
      </Swiper>
    </div>
  );
};

export default ShopByCategory;