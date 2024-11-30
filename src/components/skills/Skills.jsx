import { createElement, useState } from "react";
import { skills } from "./SkillsData";
import Modal from "react-modal";
import { BiLeftArrow } from "react-icons/bi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="skills" className="min-h-fit bg-bg_light_primary dark:bg-slate-800 dark:text-white">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2 ">
          <img
            src={selectSkill.logo}
            alt="..."
            className="mix-blend-hard-light h-10 w-10 md:w-[92px] md:h-[92px] object-cover"
          />
          <h6>{selectSkill.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit amet cour adipisicing.</li>
          <li>Lorem ipsum dolor siicing.</li>
          <li>Lorem ipsum dolor amet conseame adipisicing.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>
            Lorem ipsum dolor sur Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. adipisicing.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content  */}
      <div className="md:container  px-5 py-14 ">
        <h2 className="title dark:text-teal-400" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => {
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 300}
                className="bg-white relative group w-full flex items-center gap-5 p-5 sm:max-w-sm rounded-md border-2 border-slate-200 sm:cursor-pointer"
              >
                <div>
                  <img
                    src={skill.logo}
                    alt="..."
                    className="w-10 h-10 object-cover group-hover:scale-125 duration-200 "
                  />
                </div>
                <div>
                  <h6>{skill.name}</h6>
                  <p className="italic">{skill.para}</p>
                  <div
                    onClick={() => {
                      setSelectSkill(skill);

                      openModal();
                    }}
                    className="text-xl absolute top-3 right-3"
                  >
                    {createElement(skills.icon)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
