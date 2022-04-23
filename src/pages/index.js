import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { homeObjOne, homeObjTwo } from "../components/Projects/Data";
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <Navbar toggleOpen={toggleOpen} />
      <Carousel />
      <Services />
      <Projects {...homeObjOne} />
      <Projects {...homeObjTwo} />
    </>
  );
};

export default Home;
