import React from "react";
import style from "./header.module.css";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
function Header() {
  return (
    <div>
      <Navbar className={style.MainNavBar} expand="lg">
        <Container>
          <NavLink href="/home">
            <Navbar.Brand className={style.BrandName} >
              Developers Blog
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle
            className={style.NavToggle}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <IconButton>
                {" "}
                <NavLink className={style.HeaderMenu} href="/home">
                  Our Story
                </NavLink>
              </IconButton>

              <IconButton>
                {" "}
                <Nav.Link className={style.HeaderMenu} href="#link">
                  Membership
                </Nav.Link>
              </IconButton>

              <IconButton>
                {" "}
                <Nav.Link className={style.HeaderMenu} href="#">
                  Write you story
                </Nav.Link>
              </IconButton>

              <IconButton>
                {" "}
                <Nav.Link className={style.header__getStarted} href="/login">
                  Get Started
                </Nav.Link>
              </IconButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
