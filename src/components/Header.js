import React from "react"
import logo from './img/logo.png';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo"></img>
    </header>
  )
}

export default Header