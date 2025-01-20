'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const Carousel = () => {
  const items = [
    { id: 1, image: '/Image (1).png', title: 'Nike Air Max Pulse', price: '₹ 13,995', category: "Women's Shoes" },
    { id: 2, image: '/Image (2).png', title: 'Nike Air Max Pulse', price: '₹ 13,995', category: "Men's Shoes" },
    { id: 3, image: '/Image (3).png', title: 'Nike Air Max 97 SE', price: '₹ 16,995', category: "Men's Shoes" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-lg font-semibold mb-6">Best of Air Max</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-full h-auto rounded-md mb-4" />
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.category}</p>
              <p className="text-gray-900 font-semibold">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

