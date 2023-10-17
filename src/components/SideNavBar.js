import React from "react";
import DropDownMenu from "./DropDownMenu";

const SideNavBar = () => {
  return (
    <div className="sideBar-nav">
      <div className="">
        <ul className="">
          <li>
            <DropDownMenu
              MenuText={"Dashboard"}
              src="https://cdn.iconscout.com/icon/free/png-512/free-dashboard-app-collection-list-categories-30464.png?f=webp&w=30"
            />
          </li>
          <li>
            <DropDownMenu
              MenuText={"Product"}
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-dashboard-app-collection-list-categories-30464.png?f=webp&w=30"
              }
            />
          </li>
          <li>
            <DropDownMenu
              MenuText={"Customer"}
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-dashboard-app-collection-list-categories-30464.png?f=webp&w=30"
              }
            />
          </li>
          <li>
            <DropDownMenu
              MenuText={"Income"}
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-dashboard-app-collection-list-categories-30464.png?f=webp&w=30"
              }
            />
          </li>
          <li>
            <DropDownMenu
              MenuText={"Promote"}
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-dashboard-app-collection-list-categories-30464.png?f=webp&w=30"
              }
            />
          </li>
          <li>
            <DropDownMenu
              MenuText={" Help"}
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-dashboard-app-collection-list-categories-30464.png?f=webp&w=30"
              }
            />
          </li>
        </ul>
      </div>
      <div>
        <div className="card d-flex">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <DropDownMenu
              src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
              MenuText={"Evano"}
              imgClassName="profileImage-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
