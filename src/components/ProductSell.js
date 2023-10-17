import React from "react";

const ProductSell = () => {
  return (
    <div className="table-responsive mt-5 col-md-12">
      <table border="1" className="table mb-0">
        <tr>
          <th>Product Sell</th>
          <th>
            <input
              type="text"
              placeholder="&#xF002; Search"
              style={{ fontFamily: " FontAwesome" }}
            />
          </th>
          <th colSpan={"2"}>
            <select
              className="form-select rounded-0"
              aria-label="Default select example"
              style={{ width: "150px" }}
            >
              <option value="Last Week">Last Week</option>
              <option defaultValue value="Last 30 days">
                Last 30 days
              </option>
            </select>
          </th>
        </tr>
        <tr>
          <td align="start" className="ps-2">
            Product Name
          </td>
          <td>Stock</td>
          <td>Price</td>
          <td>Total Sales</td>
        </tr>
        <tr>
          <td align="start">
            <div className="d-flex g-2 justify-content-start">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1434153421/photo/neon-glowing-circle-and-rectangle-shape-3d-illustration-image.webp?b=1&s=170667a&w=0&k=20&c=0A2nXeLZLNOJGzIazm1XG7BgsisojYUqys3lH3UvCMc="
                  alt=""
                  style={{ width: "40px" }}
                />
              </div>
              <div className="ms-2">
                <h5>Abstract 3D</h5>
                <p>lorem ipsum</p>
              </div>
            </div>
          </td>
          <td>32 in Stocks</td>
          <td>$45.99</td>
          <td>20</td>
        </tr>
        <tr>
          <td align="start">
            <div className="d-flex g-2 justify-content-start">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1434153421/photo/neon-glowing-circle-and-rectangle-shape-3d-illustration-image.webp?b=1&s=170667a&w=0&k=20&c=0A2nXeLZLNOJGzIazm1XG7BgsisojYUqys3lH3UvCMc="
                  alt=""
                  style={{ width: "40px" }}
                />
              </div>
              <div className="ms-2">
                <h5>Abstract 3D</h5>
                <p>lorem ipsum</p>
              </div>
            </div>
          </td>
          <td>32 in Stocks</td>
          <td>$45.99</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  );
};

export default ProductSell;
