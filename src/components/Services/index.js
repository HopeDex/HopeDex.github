import React from "react";
import {
  Container,
  Wrapper,
  Card,
  SIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";
import Icon1 from "../../images/svg-1.svg";
import fullstack from "../../images/fullstack.jpg";

const Services = () => {
  return (
    <>
      <Container id="services">
        <ServicesH1>Services</ServicesH1>
        <Wrapper>
          <Card>
            <SIcon src={fullstack}></SIcon>
            <ServicesH2>Full Stack Dev</ServicesH2>
            <ServicesP>
              Responsive, Effective and Efficient websites designed and
              developed to turn users to customers{" "}
            </ServicesP>
          </Card>
          <Card>
            <SIcon src={Icon1}></SIcon>
            <ServicesH2>Mobile Dev</ServicesH2>
            <ServicesP>
              Eye Catching mobile applications translated from client website or
              built from literally nothing
            </ServicesP>
          </Card>
          <Card>
            <SIcon src={Icon1}></SIcon>
            <ServicesH2>Data Analysis and Visualization</ServicesH2>
            <ServicesP>
              Removing noise from your data and bring to life by giving it
              meaning but the liees eish lmao
            </ServicesP>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default Services;
