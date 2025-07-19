import Carousel from "../Components/Ui/Carousel";
import About from "../Components/Section/About";
import Program from "../Components/Section/Program";
import Service from "../Components/Section/Service";

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
    </div>
  );
};

export default Home;
