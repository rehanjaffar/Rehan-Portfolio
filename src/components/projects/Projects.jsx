import { projects } from "./ProjectData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import project1 from '../../assets/images/Projects/img2.png' 

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section id="projects" className="bg-bg_light_primary dark:bg-slate-800 dark:text-white">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title dark:text-teal-500" data-aos="fade-down">
            {projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {projects.subtitle}
          </h4>{" "}
          <br />
        </div>
        <div className="flex items-center flex-col-reverse gap-5 lg:flex-row">
          <img
            src={projects.image}
            data-aos="fade-right"
            alt="..."
            className="max-w-[45vw] min-w-[22rem]"
          />

          {/* Swipper react component */}
          <Swiper
            direction="vertical"
            pagination={{
              clickable: true,
            }}
            data-aos="fade-up"
            spaceBetween={100}
            slidesPerView={1}
            modules={[Pagination]}
            className="rounded-3xl md:h-80 sm:h-[21rem] projectslide max-w-[500px] drop-shadow-primary self-start"
          >
            {projects.project_content.map((project, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className="bg-white dark:bg-teal-700 rounded-3xl p-5 border-b-8 border-[#faf9fd] h-fit"
                >
                  <img src={project1} className="" alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins text-2xl dark:text-white">{project.title}</h5>
                    <div className="flex justify-between">
                    <button className="font-bold text-gray self-start">
                      <a href={project.github} target="_blank">
                        See Code
                      </a>
                    </button>
                    <button className="font-bold text-gray self-end">
                      <a href={project.netlify} target="_blank">
                        Live Preview
                      </a>{" "}
                    </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
