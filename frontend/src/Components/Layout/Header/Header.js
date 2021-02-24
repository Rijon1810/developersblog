import React from "react";
import style from "./header.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
function Header() {
  return (
    <div>
      <Navbar className={style.MainNavBar} expand="lg">
        <Container>
          <Navbar.Brand className={style.BrandName} href="#home">
            Developers Blog
          </Navbar.Brand>
          <Navbar.Toggle className={style.NavToggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <IconButton>
                {" "}
                <Nav.Link className={style.HeaderMenu} href="#home">
                  Our Story
                </Nav.Link>
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
                <Nav.Link className={style.header__getStarted} href="#!">
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
