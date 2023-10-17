import React from "react";
import { data } from "../constatnt";
const DeatilCard = () => {
  console.log(data);
  return (
    <div className="detail-cards row d-flex justify-content-between g-2 ">
      {data.map((ele) => {
        return (
          <div
            className="card deatil-card col-xs-12 col-sm-6 col-md-4 col-lg-2"
            key={ele.key}
          >
            <div className="card-body d-flex p-2">
              <div>
                <img className="detail-card-img" src={ele.imgUrl} alt="" />
              </div>
              <div className="descr-details">
                <p>{ele.title}</p>
                <h6>${ele.amount}</h6>
                <p>{ele.return} this month</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeatilCard;
