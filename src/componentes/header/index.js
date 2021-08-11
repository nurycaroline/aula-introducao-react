import React from "react";
import "./header.css";
import Link from '../link'

function Header({ style, nome }) {
  return (
    <header style={style}>
      Oi, {nome}
      <Link nome="facebook" url="http://facebook.com" />
    </header>
  );
}

export default Header;
