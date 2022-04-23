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
const Services = () => {
  return (
    <>
      <Container id="services">
        <ServicesH1>Well Projects</ServicesH1>
        <Wrapper>
          <Card>
            <SIcon src={Icon1}></SIcon>
            <ServicesH2>Service !</ServicesH2>
            <ServicesP>well some random crap</ServicesP>
          </Card>
          <Card>
            <SIcon src={Icon1}></SIcon>
            <ServicesH2>Service !</ServicesH2>
            <ServicesP>well some random crap</ServicesP>
          </Card>
          <Card>
            <SIcon src={Icon1}></SIcon>
            <ServicesH2>Service !</ServicesH2>
            <ServicesP>well some random crap</ServicesP>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default Services;
