import React from "react";
import { Text, Container, Row, Button, Spacer } from "@geist-ui/react";

const Intro = () => {
  return (
    <Container style={containerStyles}>
      <Text
        className="
        laptop1:text-6xl
        tablet1:text-5xl
        mobile3:text-3xl
        text-2xl
        text-center
        "
        h1
        style={quoteStyle}>
        We <br /> design and develop <br /> production-level <br /> web
        applications
      </Text>
      <Spacer y={2} />
      <div className="flex flex-col mobile3:flex-row">
        <Button auto type="secondary">
          Book your free strategy session
        </Button>
        <Spacer x={1} />
        <Button auto type="ghost">
          Services
        </Button>
      </div>
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
  // width: "60%",
  // textAlign: "center",
  // margin: 0,
  // padding: 0,
};
