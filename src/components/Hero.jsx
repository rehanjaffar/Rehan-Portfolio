import { content } from '../Content'

const Hero = () => {
  const { hero } = content;
  return (
    <section id='home'>
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos='slide-down'
          data-aos-delay='400'
          className="absolute -z-10 f-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0">
          <h1 className='name rotate-90 absolute  top-[20%] md:top-[34%] lg:right-[-40%] right-[-35%] w-max text-[#eaf2fa]'>
            {hero.firstName}
            <span className='text-dark_primary ml-3'>
              {hero.LastName}
            </span>
          </h1>
        </div>

        {/* first column */}
        <div className='pb-16 px-6 pt-5' data-aos='fade-down'>
          <h2>{hero.title}</h2><br />
          <div className='flex justify-end'>
            <button className='btn'>{hero.btnText}</button>
          </div>
          <div className='flex flex-col gap-10 mt-10'>
            {
              hero.hero_content.map((content, i) => {
                return (
                  <div key={i}
                    data-aos='fade-down'
                    data-aos-delay={i * 300}
                    className={`flex items-center w-80 gap-5 ${i === 1 && 'flex-row-reverse text-right'} `}>
                    <h3>{content.count}</h3>
                    <p>{content.text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* second column */}
        <div className='md:h-[37rem] md:w-auto h-96 w-80'>
          <img src={hero.image}
            data-aos='slide-up'

            alt="...." className='h-full object-fill md:object-cover ' />
        </div>
      </div>
    </section>
  )
};

export default Hero;
