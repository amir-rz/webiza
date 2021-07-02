import React from "react";
import { Text, Button } from "@geist-ui/react";

const Webiza = () => {
  return (
    <div
      className="max-h-1000 w-screen max-w-full flex flex-col justify-center items-center bg-primary text-secondary"
      id="webiza-section">
      <Text h1 className="text-center uppercase my-20 
      text-5xl
      mobile3:text-6xl
      tablet1:text-7xl
      laptop1:text-8xl
      ">
        Webiza
      </Text>
    </div>
  );
};

export default Webiza;
