import { createElement } from "react";
import { contact } from "./ContactData";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-dark_primary text-white">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col ">
          <form
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="form_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="form_email"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              className="border border-slate-600 p-3 h-44 rounded"
              required
              placeholder="Message"
              id=""
            ></textarea>
            <button className="self-start btn bg-white text-dark_primary">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {contact.social_media.map((content, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-2"
                >
                  <h4 className="text-white">{createElement(content.icon)}</h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
