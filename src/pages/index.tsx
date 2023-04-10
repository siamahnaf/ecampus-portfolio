import { Fragment } from "react";

//Components
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import Service from "@/Sections/Service";
import About from "@/Sections/About";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Service />
      <About />
    </Fragment>
  );
};

export default Home;