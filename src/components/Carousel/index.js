import React from "react";
import video from "../../images/video.mp4";
import {
  Container,
  CarBg,
  VidBg,
  CarHeader,
  CarText,
  Content,
} from "./CarouselElems";
const Carousel = () => {
  return (
    <Container id="home">
      <CarBg>
        <VidBg autoPlay loop muted src={video} type="video/mp4" />
      </CarBg>
      <Content>
        <CarHeader>HOME MADZIAKAPITA</CarHeader>
        <CarText>
          Explore my work experience and stuff, well i gotta admit I dont know
          what to put here.
        </CarText>
      </Content>
    </Container>
  );
};

export default Carousel;
