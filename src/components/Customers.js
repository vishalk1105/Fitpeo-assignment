import React from "react";
import PieChart from "./chart/PieChart";

const Customers = ({ customerClass }) => {
  return (
    <div className={`card ${customerClass} customer-main-div `}>
      <div className="card-body p-3">
        <div className="d-flex">
          <div>
            <h5 className="fw-bold text-start mb-1">Customers</h5>
            <p className="text-secondary">Customers that buy products</p>
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Customers;
