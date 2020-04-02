import React from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand } from "reactstrap"
import LanguageSwitch from "./../languageSwitch/LanguageSwitch"
import { useTranslate } from "./../../app/translations"

const Header = () => {
  const t = useTranslate()
  return (
    <header>
      <Navbar dark color="dark" className="rounded my-3">
        <Link to="/">
          <NavbarBrand>{t("appTitle")}</NavbarBrand>
        </Link>
        <LanguageSwitch />
      </Navbar>
    </header>
  )
}

export default Header
