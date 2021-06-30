import React from "react";
import styled from "styled-components";
import { Button, Link } from "@geist-ui/react";
import { ChevronRight } from "@geist-ui/react-icons";

const MobileMenu = ({ handleClose }) => {
  return (
    <Container className="bg-primary text-secondary">
      <div
        className="fixed top-10 p-2 right-10 cursor-pointer"
        onClick={handleClose}>
        <ChevronRight />
      </div>
      <div className="flex flex-col items-center">
        <Link className="p-2 m-2 cursor-pointer" href="#">
          Home
        </Link>
        <Link className="p-2 m-2 cursor-pointer" href="#">
          Services
        </Link>
        <Link className="p-2 m-2 cursor-pointer" href="#">
          Contact
        </Link>
      </div>
    </Container>
  );
};

export default MobileMenu;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;
