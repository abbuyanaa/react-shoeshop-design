import React from "react";

const CategoriesTable = () => {
  return (
    <>
      <div className="col-md-12 col-lg-8">
        <table className="table">
          <thead>
            <tr>
              <th>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                  />
                </div>
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                  />
                </div>
              </td>
              <td>1</td>
              <td>
                <b>Men clothes</b>
              </td>
              <td>Men clothes</td>
              <td className="text-end">
                <div className="dropdown">
                  <a
                    data-bs-toggle="dropdown"
                    className="btn btn-light"
                    href="/category"
                  >
                    <i className="fas fa-ellipsis-h" />
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/category">
                      Edit info
                    </a>
                    <a className="dropdown-item text-danger" href="/category">
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                  />
                </div>
              </td>
              <td>2</td>
              <td>
                <b>Women fashion</b>
              </td>
              <td>Fashions for Women</td>
              <td className="text-end">
                <div className="dropdown">
                  <a
                    data-bs-toggle="dropdown"
                    className="btn btn-light"
                    href="/category"
                  >
                    <i className="fas fa-ellipsis-h" />
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/category">
                      Edit info
                    </a>
                    <a className="dropdown-item text-danger" href="/category">
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                  />
                </div>
              </td>
              <td>3</td>
              <td>
                <b>Kids clothes</b>
              </td>
              <td>Clothes for kids</td>
              <td className="text-end">
                <div className="dropdown">
                  <a
                    data-bs-toggle="dropdown"
                    className="btn btn-light"
                    href="/category"
                  >
                    <i className="fas fa-ellipsis-h" />
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/category">
                      Edit info
                    </a>
                    <a className="dropdown-item text-danger" href="/category">
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesTable;
