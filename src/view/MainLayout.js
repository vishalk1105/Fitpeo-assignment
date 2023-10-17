import React from "react";
import Header from "../components/Header";
import DeatilCard from "../components/DeatilCard";
import Overview from "../components/Overview";
import Customers from "../components/Customers";
import ProductSell from "../components/ProductSell";
import SideNavBar from "../components/SideNavBar";

const MainLayout = () => {
  return (
    <div className="container-fluid bg-body-tertiary">
      <div className="row">
        <div className="col-md-2 col-lg-2">
          <div className="text-bg-primary ps-0 h-100">
            <SideNavBar />
          </div>
        </div>
        <div className="col-md-10 col-lg-10">
          <Header />
          <DeatilCard />

          <div className="row mt-5  gy-3">
            <div className="col-md-8">
              <Overview overViewClass="w-100" />
            </div>

            <div className="col-md-4">
              <Customers customerClass="w-100" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ProductSell />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
