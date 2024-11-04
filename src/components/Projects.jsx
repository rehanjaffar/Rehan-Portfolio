import { content } from "../Content";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';




const Projects = () => {
  const { projects } = content;
  return (
    <section id="projects" className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos='fade-down'>{projects.title}</h2>
          <h4 className="subtitle" data-aos='fade-down'>
            {projects.subtitle}
          </h4> <br />
        </div>
        <div className="flex items-center flex-col-reverse gap-5 lg:flex-row">
          <img src={projects.image} data-aos='fade-right' alt="..." className="max-w-[45vw] min-w-[22rem]" />

          {/* Swipper react component */}
          <Swiper
            direction="vertical"
            pagination={
              {
                clickable: true
              }
            }
            data-aos='fade-up'
            spaceBetween={100}
            slidesPerView={1}
            modules={[Pagination]}
            className="rounded-3xl md:h-72 h-[22rem] max-w-xs drop-shadow-primary self-start"
          >
            {
              projects.project_content.map((project, i) => {
                return (
                  <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#faf9fd] h-fit">
                    <img src={project.image} className="" alt="..." />
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="font-bold font-Poppins">
                        {project.title}
                      </h5>
                      <button className="font-bold text-gray self-end">READ MORE</button>
                    </div>
                  </SwiperSlide>
                )
              })
            }



          </Swiper>

        </div>
      </div>
    </section>
  )
};

export default Projects;
