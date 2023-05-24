import { Fragment } from "react";

//Components
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import Service from "@/Sections/Service";
import About from "@/Sections/About";
import Notice from "@/Sections/Notice";
import Features from "@/Sections/Features";
import Team from "@/Sections/Team";
import Gallery from "@/Sections/Gallery";
import Contact from "@/Sections/Contact";
import Footer from "@/Sections/Footer";

//Seo
import Seo from "@/Utilis/Seo";

const Home = () => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <Hero />
      <Service />
      <About />
      <Notice />
      <Features />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;