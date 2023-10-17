import React from "react";

const DropDownMenu = ({ MenuText, src, imgClassName }) => {
  return (
    <div>
      <div class="dropdown">
        <img src={src} alt="" className={imgClassName} />
        <a
          class="btn btn-primary dropdown-toggle"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {MenuText}
        </a>

        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="/">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
