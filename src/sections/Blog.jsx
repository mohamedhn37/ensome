import TitleHead from '@/components/TitleHead'
import Image from 'next/image'
import React from 'react'
import blog1 from '../img/blog1.png'
import blog2 from '../img/blog2.png'
import blog3 from '../img/blog3.png'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import logo5 from '../img/logo5.png'
import logo6 from '../img/logo6.png'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Blog = () => {
  return (
    <>
        <div className="container my-4">
            <div className="row my-3 m-auto">
                <div className="col-md-12">
                    <TitleHead title="Ensome blog"/>
                </div>
            </div>
            <div className="row m-auto">
                <div className="col-md-4">
                    <div className="card border-0">
                         <Image src={blog1} className="card-img-top" height={200} width={350} alt="blogCard1" />
                        <div className="card-body">
                            <span className='col-grey'>22 June 2022</span>
                            <h5 className="card-title my-3">Staffing software: key capabilities and top products</h5>
                            <Link href="#" className="btn text-primary p-0">Read More <FaArrowRight/></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                         <Image src={blog2} className="card-img-top" height={200} width={350} alt="blogCard1" />
                        <div className="card-body">
                            <span className='col-grey'>22 June 2022</span>
                            <h5 className="card-title my-3">2022 software development trends explained with benefits</h5>
                            <Link href="#" className="btn text-primary p-0">Read More <FaArrowRight/></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                         <Image src={blog3} className="card-img-top" height={200} width={350} alt="blogCard1" />
                        <div className="card-body">
                            <span className='col-grey'>22 June 2022</span>
                            <h5 className="card-title my-3">Business analysis helps you  in finance</h5>
                            <Link href="#" className="btn text-primary p-0">Read More <FaArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4 m-auto partenaire">
                <div className="col-md-12 col-12">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500 }}
                        loop
                    >
                        <SwiperSlide>
                            <Image src={logo1} height={132} width={180} alt="partenaire1"/>
                            <Image src={logo2} height={132} width={180} alt="partenaire2"/>
                            <Image src={logo3} height={132} width={180} alt="partenaire3"/>
                            <Image src={logo4} height={132} width={180} alt="partenaire4"/>
                            <Image src={logo5} height={132} width={180} alt="partenaire5"/>
                            <Image src={logo6} height={132} width={180} alt="partenaire6"/>
                        </SwiperSlide>    
                        <SwiperSlide>
                            <Image src={logo4} height={132} width={185} alt="partenaire4"/>
                            <Image src={logo5} height={132} width={185} alt="partenaire5"/>
                            <Image src={logo6} height={132} width={185} alt="partenaire6"/>
                        </SwiperSlide>    
                   
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog