import React from "react";
import { Text, Button, Spacer, Link } from "@geist-ui/react";
import styled from "styled-components";

const Hero = () => {
  return (
    <div className="max-h-1000 w-screen h-screen max-w-full flex flex-col justify-center items-center">
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
        We design and develop <br /> production-level <br /> web
        solutions
      </Text>
      <Spacer y={2} />
      <div className="flex flex-col mobile3:flex-row">
        <Button auto type="secondary">
          Tell us about your project
        </Button>
      </div>
    </div>
  );
};

export default Hero;

const quoteStyle = {
  // width: "60%",
  // textAlign: "center",
  // margin: 0,
  // padding: 0,
};
