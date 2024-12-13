import { testimonials } from "./TestimonialData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="dark:bg-slate-800 dark:text-white testimonial">
      <div className="md:container px-5 pt-14 ">
        <h2 className="title dark:text-teal-500" data-aos="fade-down">
          {testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction="vertical"
          pagination={{
            clickable: true,
          }}
         
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.5}
          onSlideChange={(e) => {
          
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination,Autoplay]}
          autoplay={true}
          className="md:h-96 h-[28rem] sm:max-w-3xl "
        >
          {testimonials.testimonials_content.map((content, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className={`duration-500 bg-bg_light_primary sm:mx-8 border-2 p-8 h-full w-[90%] rounded-2xl flex items-center gap-6 border-slate-200 selection-none md:flex-row flex-col ${
                    activeIndex !== i && "scale-75 blur-sm"
                  }`}
                >
                  <img src={content.img} className="h-24" alt="..." />
                  <div>
                    <p className="sm:text-base text-sm">{content.review}</p>
                    <br />
                    <h6>{content.name}</h6>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
