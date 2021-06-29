import React from "react";
import { Text, Container, Row, Button, Spacer } from "@geist-ui/react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Container style={containerStyles}>
      <Text h1 style={quoteStyle}>
        We design and develop production-level web applications
      </Text>
      <Spacer y={2} />
      <Row>
        <Button auto type="secondary">
          Book your free strategy session
        </Button>
        <Spacer x={1} />
        <Button auto type="ghost">
          Services
        </Button>
      </Row>
    </Container>
  );
};

export default Intro;

const containerStyles = {
  width: "100vw",
  height: "100vh",
  maxWidth: "100%",
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const quoteStyle = {
  width: "60%",
  textAlign: "center",
  margin: 0,
  marginTop:"-50px",
  padding: 0,
};
