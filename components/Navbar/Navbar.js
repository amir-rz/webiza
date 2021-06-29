import React from "react";
import styled from "styled-components";
import { Text, Link, Container } from "@geist-ui/react";

const Navbar = () => {
  return (
    <Container style={NavContainerStyles}>
      <Text h3 style={titleStyles}>
        Webiza
      </Text>
      <PrimaryNavContainer>
        <NavItem className="active">
          <Link>
            <Text p>Home</Text>
          </Link>
        </NavItem>
        <NavItem>
          <Link>
            <Text p>Services</Text>
          </Link>
        </NavItem>
        <NavItem>
          <Link>
            <Text p>Contact</Text>
          </Link>
        </NavItem>
      </PrimaryNavContainer>
    </Container>
  );
};

export default Navbar;

const NavContainerStyles = {
  position: "fixed",
  width: "calc(750pt + 100pt)",
  maxWidth: "100vw",
  padding: "20px 16pt",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  justifyContent: "space-between",
  alignItems: "center",
  overflowX: "auto", // remove this
  zIndex:1,
};

const titleStyles = {
  margin: 0,
};

const PrimaryNavContainer = styled.ul`
  display: flex;

  margin: 0;
  align-items: center;

  .active {
    background-color: black;
    color: white;
  }
`;
const NavItem = styled.li`
  margin: 0;
  padding: 8px 17px;

  p {
    margin: 0;
  }

  ::before {
    content: none;
  }
`;
