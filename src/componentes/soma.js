import React from "react";
import Link from './link'

function soma({ primeiro, segundo }) {
  return (
    <div>
      <span>{primeiro + segundo}</span>

      <Link nome="google" url="http://google.com" />
    </div>
  );
}

export default soma;
