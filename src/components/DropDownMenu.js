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
            <p class="dropdown-item">Action</p>
          </li>
          <li>
            <p class="dropdown-item">Another action</p>
          </li>
          <li>
            <p class="dropdown-item">Something else here</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
