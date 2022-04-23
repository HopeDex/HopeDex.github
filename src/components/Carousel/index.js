import React from "react";
import video from "../../images/video.mp4";
import { Container, CarBg, VidBg, CarText, Content } from "./CarouselElems";
const Carousel = () => {
  return (
    <Container id="home">
      <CarBg>
        <VidBg autoPlay loop muted src={video} type="video/mp4" />
      </CarBg>
      <Content>
        <CarText>HI THERE! 🐤 I'm </CarText>
        <CarText>HOPE,</CarText>
        <CarText>
          I specialize in web development, if you are a business seeking a web
          presence or are looking to hire, please contact me here
        </CarText>
      </Content>
    </Container>
  );
};

export default Carousel;
