import React from "react";

const Nav = ({ firstname, lastname }) => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="nav-column">Logo</div>
        <div className="nav-column">
          <span className="nav-username bold">
            {firstname} {lastname}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
