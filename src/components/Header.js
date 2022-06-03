import React from 'react';
import logo from '../images/header-logo.svg'

function Header() {
  return (
    <header className="header">
      <img className="logo header__logo" src={logo} alt="логотип сайта mesto russian" />
    </header>
  )
}

export default  Header