import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h3 className="navbar-brand">Hello Shahrukh,👋</h3>
          <div className="form-group d-flex has-search">
            <input
              type="text"
              placeholder="&#xF002; Search"
              style={{ fontFamily: " FontAwesome " }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
