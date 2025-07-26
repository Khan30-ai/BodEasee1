import Carousel from "@/Components/Ui/Carousel";
import About from "@/Components/Section/About";
import Program from "@/Components/Section/Program";
import Service from "@/Components/Section/Service";
import Contact from "@/Components/Section/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <Carousel />
      <section id="about">
        <About />
      </section>
      <Program />
      <Service />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
