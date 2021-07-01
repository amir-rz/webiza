import React from "react";
import Image from "next/image";
import ProductDesignImage from "@/images/service-product-design.jpg";
import WebDevelopmentImage from "@/images/service-web-development.jpg";
import AppDevelopmentImage from "@/images/service-app-development.jpg";

import styled from "styled-components";

const Services = () => {
  return (
    <div className="max-h-1000 w-screen h-screen max-w-full flex flex-col justify-center items-center">
      <div className="relative h-1/3 flex items-center overflow-hidden">
        <Image placeholder="blur" src={ProductDesignImage} />
        <Overlay />
        <ServiceTitle>Product design</ServiceTitle>
      </div>
      <div className="relative h-1/3 flex items-center overflow-hidden">
        <Image placeholder="blur" src={WebDevelopmentImage} />
        <Overlay />
        <ServiceTitle>Web development</ServiceTitle>
      </div>
      <div className="relative h-1/3 flex items-center overflow-hidden">
        <Image placeholder="blur" src={AppDevelopmentImage} />
        <Overlay />
        <ServiceTitle>App development</ServiceTitle>
      </div>
    </div>
  );
};

export default Services;

const ServiceTitle = styled.h2.attrs(() => ({
  className: `text-secondary absolute left-1/2 text-white transform -translate-x-1/2 font-light tracking-widest uppercase text-center
    mobile1:text-xl 
    tablet1:text-3xl
    laptop1:text-4xl`,
}))``;

const Overlay = styled.div.attrs(() => ({
  className: "absolute w-full h-full top-0 left-0 bg-primary opacity-60",
}))``;
