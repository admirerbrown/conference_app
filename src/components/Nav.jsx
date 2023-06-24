"use client";

import { Navbar } from "flowbite-react";

export default function NavMenu() {
  return (
    <Navbar fluid >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="company Logo"
          className="mr-3 h-6 sm:h-9"
          src="/apple-touch-icon.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          <h2>Alum-nite</h2>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
