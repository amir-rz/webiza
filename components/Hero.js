import React from "react";
import { Text, Button, Link } from "@geist-ui/react";
import styled from "styled-components";

const Hero = () => {
  return (
    <div className="max-h-1000 w-screen h-screen max-w-full flex flex-col justify-center items-center">
      <Text
        className="
        laptop1:text-6xl
        tablet1:text-5xl
        mobile3:text-4xl
        text-3xl
        text-center
        "
        h1
        style={quoteStyle}>
        We design and develop <br /> production-level <br /> solutions
      </Text>
      <Button auto type="secondary" className="mt-10">
        <Link href="#contact-section">Tell us about your project</Link>
      </Button>
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
