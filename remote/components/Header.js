import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Image from "next/image";

function Header() {
  const CONTENT_APP_URL = process.env.NEXT_PUBLIC_CONTENT_APP_URL;
  return (
    <Navbar
      expand="lg"
      bg="white"
      fixed="top"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={`/tekdiLogo.png`}
            alt="Forum Logo"
            marginright="2"
            width={50}
            height={50}
            className="d-inline-block align-top"
          />
          <span className="font-weight-bold">Pratham</span>
          <span className="text-success font-weight-bold">POC</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
