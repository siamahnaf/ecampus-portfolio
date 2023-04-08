import { Fragment } from "react";

//Components
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import About from "@/Sections/About";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
    </Fragment>
  );
};

export default Home;