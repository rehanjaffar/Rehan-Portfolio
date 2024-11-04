// import images
import Hero_person from "/src/assets/images/Hero/profile.png";

import html from "/src/assets/images/Skills/html.png";
import css from "/src/assets/images/Skills/css.png";
import js from "/src/assets/images/Skills/js.png";
import reactjs from "/src/assets/images/Skills/react.png";
import nodejs from "/src/assets/images/Skills/node.png";
import express from "/src/assets/images/Skills/express.png";
import github from "/src/assets/images/Skills/github.png";
import tailwind from "/src/assets/images/Skills/tailwind.png";
import bootstrap from "/src/assets/images/Skills/bootstrap.png";

import services_logo1 from "/src/assets/images/Services/logo1.png";
import services_logo2 from "/src/assets/images/Services/logo2.png";
import services_logo3 from "/src/assets/images/Services/logo3.png";

import project1 from "/src/assets/images/projects/img1.png";
import project2 from "/src/assets/images/projects/img2.png";
import project3 from "/src/assets/images/projects/img3.png";
import person_project from "/src/assets/images/projects/person.png";

import avatar1 from "/src/assets/images/Testimonials/avatar1.png";
import avatar2 from "/src/assets/images/Testimonials/avatar2.png";
import avatar3 from "/src/assets/images/Testimonials/avatar3.png";
import avatar4 from "/src/assets/images/Testimonials/avatar4.png";

import Hireme_person from "/src/assets/images/Hireme/person.png";
import Hireme_person2 from "/src/assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "MERN STACK DEVELOPER",
    firstName: "REHAN",
    LastName: "JAFFAR",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "0",
        text: "Year of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "React JS",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Express JS",
        para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
        name: "GitHub",
        para: "Lorem ipsum text  dummy",
        logo: github,
      },
      {
        name: "Tailwind CSS",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "Bootstrap CSS",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
