import React from "react";
import './link.css'

function link({ nome, url }) {
  return <a className="meu-link" href={url}>{nome}</a>;
}

export default link;
