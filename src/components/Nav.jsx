import React from "react";

const Nav = ({ firstname, lastname }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        {firstname} {lastname}
      </div>
    </nav>
  );
};

export default Nav;
