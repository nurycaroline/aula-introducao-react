import React from "react";
import Header from "./header";

function Quadrado({ children }) {
  return (
    <div className="quadrado">
      <Header nome="Maria" />
      {children}
    </div>
  );
}

export default Quadrado;
