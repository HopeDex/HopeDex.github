import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/Projects/Data";
import Sidebar from "../components/Sidebar";

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
      <Projects {...homeObjOne} />
      <Projects {...homeObjTwo} />
      <Projects {...homeObjThree} />
    </>
  );
};

export default Home;
