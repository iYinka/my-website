import React, { useEffect, useState } from 'react'
import './testimonials.css'
import { urlFor, client } from '../../client'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => setTestimonialData(data))
  }, []);

console.log("recommendation", testimonialData);
return (
    <section id="testimonials">
        <h5 className="text-light">Great minds' thought?</h5>
        <h2 className="text-light">Quotes</h2>
        <Swiper
            className="container testimonials__container"
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={true}
            pagination={{ clickable: true }}
        >
            {testimonialData.map(
                ({ imgUrl, name, position, company, review }, index) => {
                    return (
                        <SwiperSlide
                            className="testimonial"
                            data-swiper-autoplay="20"
                        >
                            <div className="client__avatar">
                                <img src={urlFor(imgUrl)} alt={name} />
                            </div>
                            <small className="client__review">{review}</small>
                            <h5 className="client__name">{name}</h5>
                            <h5 className="client__position">
                                {position} - {company}
                            </h5>
                        </SwiperSlide>
                    );
                }
            )}
        </Swiper>
    </section>
);
}

export default Testimonials