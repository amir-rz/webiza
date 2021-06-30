import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Text, Link, Container, Button } from "@geist-ui/react";
import { Menu } from "@geist-ui/react-icons";
import MobileMenu from "@/components/Navbar/MobileMenu";
import ThemeToggler from "@/components/Navbar/ThemeToggler";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleOpen = () => {
    setOpenMenu(true);
  };

  return (
    <Fragment>
      <Container style={NavContainerStyles}>
        <Text h3 className="m-0 pr-3 mr-auto">
          Webiza
        </Text>

        <PrimaryNavContainer className="mobile3:flex hidden ">
          <NavItem className="active ">
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

        <Divider className="tablet1:block hidden mx-5 bg-primary dark:bg-secondary" />
        <ThemeToggler />

        <div className="mobile3:hidden block">
          <Button auto size="large" iconRight={<Menu />} onClick={handleOpen} />
        </div>
      </Container>
      {openMenu && <MobileMenu handleClose={handleClose} />}
    </Fragment>
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
  alignItems: "center",
  overflowX: "auto", // remove this
  zIndex: 1,
};

const PrimaryNavContainer = styled.ul`
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

const Divider = styled.div`
  height: 50px;
  width: 1px;
  opacity: 0.3;
`;
