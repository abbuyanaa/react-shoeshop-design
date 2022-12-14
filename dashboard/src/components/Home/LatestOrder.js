import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Latest orders</h5>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b>User</b>
              </td>
              <td>user@example.com</td>
              <td>$345</td>
              <td>
                <span className="badge rounded-pill alert-success">
                  Paid At Today at 10:13 AM
                </span>
              </td>
              <td>Today at 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link className="text-success" to="/">
                  <i className="fas fa-eye" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <b>User</b>
              </td>
              <td>user@example.com</td>
              <td>$345</td>
              <td>
                <span className="badge rounded-pill alert-danger">
                  Created At Today at 10:13 AM
                </span>
              </td>
              <td>Today at 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link className="text-success" to="/">
                  <i className="fas fa-eye" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
