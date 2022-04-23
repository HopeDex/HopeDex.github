import React from "react";
import { ImgWrap } from "./Pelements";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  TopLine,
  TextWrapper,
  BtnWrap,
  Heading,
  Button,
  Img,
  Subtitle,
  Column2,
} from "./Pelements";
const Projects = ({
  lightBg,
  lightText,
  id,
  primary,
  dark,
  dark2,
  imgStart,
  topLine,
  buttonLabel,
  alt,
  img,
  description,
  darkText,
  headline,
}) => {
  return (
    <>
      <Container lightBg={lightBg} id="projects">
        <Wrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Projects;
