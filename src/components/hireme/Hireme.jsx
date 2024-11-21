import { hireme } from "./HiremeData";

const Hireme = () => {
  return (
    <section className="bg-bg_light_primary dark:bg-slate-800 dark:text-white">
      <div className="md:container px-5 pt-14 ">
        <h2 className="title text-teal-500" data-aos="fade-down">
          {hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {hireme.subtitle}
        </h4>
        <br />
        <div className=" flex items-center lg:flex-row flex-col-reverse">
          <img
            src={hireme.image1}
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
            alt="..."
          />
          <img
            src={hireme.image2}
            data-aos="fade-up"
            className="max-w-sm md:hidden "
            alt="..."
          />
          <div
            data-aos="fade-right"
            className="border-2 border-dark_primary  dark:border-white max-w-sm  p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7 dark:text-white">{hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary dark:bg-teal-500 text-white">
              {hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
