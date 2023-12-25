import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import react icons
import { FaStar } from "react-icons/fa6";

//import Avatar

import { Avatar } from 'flowbite-react';

import proPic from '../../assets/profile.jpg';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';
import profile4 from '../../assets/profile4.jpg';
import profile5 from '../../assets/profile5.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customer
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              
             <div className="mt-7">
             <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                facilis eos, corporis velit sit ullam impedit eveniet nihil in.
                Veritatis itaque illum, recusandae molestias quam soluta
                obcaecati a mollitia suscipit.
              </p>
             
              <Avatar alt="avatar of Jese" img={proPic} className="w-10 mb-4" rounded  />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO,ABC Company</p>
     
             </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              
             <div className="mt-7">
             <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                facilis eos, corporis velit sit ullam impedit eveniet nihil in.
                Veritatis itaque illum, recusandae molestias quam soluta
                obcaecati a mollitia suscipit.
              </p>
             
              <Avatar alt="avatar of Jese" img={profile1} className="w-10 mb-4" rounded  />
              <h5 className="text-lg font-medium">Harry Potter</h5>
              <p className="text-base">CEO,EFG Company</p>
     
             </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              
             <div className="mt-7">
             <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                facilis eos, corporis velit sit ullam impedit eveniet nihil in.
                Veritatis itaque illum, recusandae molestias quam soluta
                obcaecati a mollitia suscipit.
              </p>
             
              <Avatar alt="avatar of Jese" img={profile2} className="w-10 mb-4" rounded  />
              <h5 className="text-lg font-medium">Chota Bheem</h5>
              <p className="text-base">CEO,HIJ Company</p>
     
             </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              
             <div className="mt-7">
             <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                facilis eos, corporis velit sit ullam impedit eveniet nihil in.
                Veritatis itaque illum, recusandae molestias quam soluta
                obcaecati a mollitia suscipit.
              </p>
             
              <Avatar alt="avatar of Jese" img={profile3} className="w-10 mb-4" rounded  />
              <h5 className="text-lg font-medium">Mogli</h5>
              <p className="text-base">CEO,KLM Company</p>
     
             </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              
             <div className="mt-7">
             <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                facilis eos, corporis velit sit ullam impedit eveniet nihil in.
                Veritatis itaque illum, recusandae molestias quam soluta
                obcaecati a mollitia suscipit.
              </p>
             
              <Avatar alt="avatar of Jese" img={profile4} className="w-10 mb-4" rounded  />
              <h5 className="text-lg font-medium">Doreamon</h5>
              <p className="text-base">CEO,NOP Company</p>
     
             </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-2 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              
             <div className="mt-7">
             <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                facilis eos, corporis velit sit ullam impedit eveniet nihil in.
                Veritatis itaque illum, recusandae molestias quam soluta
                obcaecati a mollitia suscipit.
              </p>
             
              <Avatar alt="avatar of Jese" img={profile5} className="w-10 mb-4" rounded  />
              <h5 className="text-lg font-medium">Nobita</h5>
              <p className="text-base">CEO,QRS Company</p>
     
             </div>
              
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
