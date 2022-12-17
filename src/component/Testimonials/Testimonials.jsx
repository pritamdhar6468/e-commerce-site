import React from 'react'
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import { Swiper,SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>
                        Seedily say has suitable disposal and boy.
                        Exercise joy man children rejoiced.
                    </span>
                </div>
                <img src={Hero} alt="" />
                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customer with us</span>
                </div>
            </div>

        <div className={css.reviews}>Reviews</div>    
            <div className={css.carousel}>
                <Swiper
                slidesPerView={3}  slidesPerGroup={1} spaceBetween={20} className={css.tCarousel}
                 breakpoints={{
                    856:{
                        slidesPerView:3
                    },
                    640:{
                        slidesPerView:2
                    },
                    0:{
                        slidesPerView:1
                    }
                }}>
                    {
                        TestimonialsData.map((testimonials, i)=>(
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                    <img src={testimonials.image} alt=""/>
                                    <span>{testimonials.comment}</span>
                                    <hr/>
                                    <span>{testimonials.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};
export default Testimonials;