import { hero } from "./HeroData";

export const Hero = () => {
  return (
    <section id="home">
      <div className="pt-16 relative dark:bg-slate-800 flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-down"
          data-aos-delay="400"
          className="absolute z-10 bg-primaryLinear dark:bg-darkLinear f-full md:w-4/12 w-8/12 top-0 right-0  bottom-0"
        >
          <h1 className="name rotate-90 absolute  top-[20%] md:top-[30%] lg:right-[-30%] right-[-35%] w-max text-[#eaf2fa]">
            {hero.firstName}
            <span className="text-dark_primary ml-3 dark:text-teal-500">
              {hero.LastName}
            </span>
          </h1>
        </div>

        {/* first column */}
        <div
          className="pb-16 px-3 sm:px-6 w-full pt-5 dark:z-40 z-40 overflow-hidden dark:bg-slate-800 dark:text-white "
          data-aos="fade-down"
        >
          <h2 className="dark:text-white">{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn dark:border-white dark:bg-teal-700">
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5 ${
                    i === 1 && "flex-row-reverse text-right"
                  } `}
                >
                  <h3 className="dark:text-white">{content.count}</h3>
                  <p className="dark:text-white">{content.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* second column */}
        <div className="md:h-[37rem] md:w-auto h-96 w-80 z-20">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="...."
            className="h-full object-fill md:object-cover "
          />
        </div>
      </div>
    </section>
  );
};
