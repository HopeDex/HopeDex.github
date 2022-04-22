import React from "react";

const Services = () => {
  return (
    <>
      <Container id="services">
        <ServicesH1></ServicesH1>
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
