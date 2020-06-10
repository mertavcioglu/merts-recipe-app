import React from "react"
import logo from './img/logo.png';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo"></img>
      <h1 className="main-title"> Type something to search...</h1>
    </header>
  )
}

export default Header