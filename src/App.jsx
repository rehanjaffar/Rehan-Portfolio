import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/navbar/NavBar";
import { Hero } from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Service from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonial/Testimonials";
import Hireme from "./components/hireme/Hireme";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <div className="dark:bg-slate-800 dark:text-white relative">
      <NavBar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
