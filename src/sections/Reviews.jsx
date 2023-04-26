import TitleHead from '@/components/TitleHead';
import Image from 'next/image';
import React from 'react';
import review1 from '../img/review1.png';
import review2 from '../img/review2.png';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Reviews = () => {
  return (
    <>
      <div className="container-fluid my-5 p-5 reviews">
        <div className="row">
          <TitleHead title="What our customers say"/>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop
            >
              <SwiperSlide>
                <div className="reviewCard">
                  <div className="d-flex align-items-center p-4">
                    <Image src={review1} height={80} width={80} alt="reviews" />
                    <div className="ms-5">
                      <h5 className="title">Alex Bern</h5>
                      <p className="col-grey">CEO by PixelPerfect</p>
                    </div>
                  </div>
                  <p className="col-grey p-4">
                    “Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor
                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem
                    vel eum iure reprehender qui in ea voluptate velit esse quam nihil
                    molesti consequatur, vel illum.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewCard">
                  <div className="d-flex align-items-center p-4">
                    <Image src={review2} height={80} width={80} alt="reviews" />
                    <div className="ms-5">
                      <h5 className="title">Ruben Chifundo</h5>
                      <p className="col-grey">CEO by NOX</p>
                    </div>
                  </div>
                  <p className="col-grey p-4">
                    “Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor
                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem
                    vel eum iure reprehender qui in ea voluptate velit esse quam nihil
                    molesti consequatur, vel illum.”
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
