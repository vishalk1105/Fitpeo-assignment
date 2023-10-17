import React from "react";
import ExpenseChart from "./chart/ExpenseChart";

const Overview = ({ overViewClass }) => {
  return (
    <div className={`card  ${overViewClass} overview-main-div`}>
      <div className="card-body p-3">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="fw-bold text-start mb-1">Overview</h5>
            <p className="text-secondary">Monthly Earning</p>
          </div>
          <div>
            <select
              className="form-select rounded-0"
              aria-label="Default select example"
            >
              <option value={"Daily"}>Daily</option>
              <option value="Monthly">Monthly</option>
              <option defaultValue value="Quartelry">
                Quartelry
              </option>
            </select>
          </div>
        </div>
        <ExpenseChart />
      </div>
    </div>
  );
};

export default Overview;
