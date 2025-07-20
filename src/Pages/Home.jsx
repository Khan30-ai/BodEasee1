import Carousel from "@/Components/Ui/Carousel";
import About from "@/Components/Section/About";
import Program from "@/Components/Section/Program";
import Service from "@/Components/Section/Service";
import Contact from "@/Components/Section/Contact";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Carousel />
      </section>
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
