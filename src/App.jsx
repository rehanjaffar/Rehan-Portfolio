// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, [])

  return (
    <div className="">
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
