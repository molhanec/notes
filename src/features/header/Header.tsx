import React from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand } from "reactstrap"

const Header = () => (
  <header>
    <Navbar dark color="secondary" className="rounded my-3">
      <Link to="/">
        <NavbarBrand>Notes</NavbarBrand>
      </Link>
    </Navbar>
  </header>
)

export default Header
