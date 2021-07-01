import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Text, Link, Button } from "@geist-ui/react";
import { Menu } from "@geist-ui/react-icons";
import MobileMenu from "@/components/Navbar/MobileMenu";
import ThemeToggler from "@/components/Navbar/ThemeToggler";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((state) => !state);
  };

  return (
    <Fragment>
      <nav
        className="flex fixed w-screen box-border px-5 py-3 top-0 left-0 items-center overflow-hidden z-50
        bg-secondary dark:bg-primary">
        <Text h3 className="m-0 pr-3 mr-auto">
          Webiza
        </Text>

        <ul className="mobile3:flex hidden m-0 ">
          <NavItem>
            <Link href="#">
              <Text p>Home</Text>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <Text p>Services</Text>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <Text p>Contact</Text>
            </Link>
          </NavItem>
        </ul>

        <Divider className="tablet1:block hidden mx-5 bg-primary dark:bg-secondary" />
        <ThemeToggler />

        <div className="mobile3:hidden block ">
          <Button auto size="large" iconRight={<Menu />} onClick={toggleMenu} />
        </div>
      </nav>
      {openMenu && <MobileMenu handleClose={toggleMenu} />}
    </Fragment>
  );
};

export default Navbar;

const NavItem = styled.li`
  margin: 0;

  a {
    padding: 8px 17px;
    opacity: 0.8;
  }

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
