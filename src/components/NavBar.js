import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return (
    <nav>
      <a id="1" href="#home">
        Home
      </a>
      <a id="2" href="#about">
        About
      </a>
      <a id="3" href="#projects">
        Projects
      </a>
    </nav>
  );
}


export default NavBar;
