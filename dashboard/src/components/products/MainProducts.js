import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import products from "../../data/products";

const MainProducts = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
              <div className="card card-product-grid shadow-sm">
                <Link className="img-wrap" to="/products">
                  <img src="/images/6.png" alt="Product" />
                </Link>
                <div className="info-wrap">
                  <Link className="title text-truncate" to="/products">
                    Velcro Ballerinas For Girls (Pink)
                  </Link>
                  <div className="price mb-2">$89</div>
                  <div className="row">
                    <Link
                      className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                      to="/product/1/edit"
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                      to="/products"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
              <div className="card card-product-grid shadow-sm">
                <Link className="img-wrap" to="/products">
                  <img src="/images/5.png" alt="Product" />
                </Link>
                <div className="info-wrap">
                  <Link className="title text-truncate" to="/products">
                    Velcro Sneakers For Boys &amp; Girls (Blue)
                  </Link>
                  <div className="price mb-2">$599</div>
                  <div className="row">
                    <Link
                      className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                      to="/product/2/edit"
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                      to="/products"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
              <div className="card card-product-grid shadow-sm">
                <Link className="img-wrap" to="/products">
                  <img src="/images/4.png" alt="Product" />
                </Link>
                <div className="info-wrap">
                  <Link className="title text-truncate" to="/products">
                    Sesame Street Unisex-Child ELMO Puppet Slipper
                  </Link>
                  <div className="price mb-2">$929</div>
                  <div className="row">
                    <Link
                      className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                      to="/product/3/edit"
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                      to="/products"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
              <div className="card card-product-grid shadow-sm">
                <Link className="img-wrap" to="/products">
                  <img src="/images/3.png" alt="Product" />
                </Link>
                <div className="info-wrap">
                  <Link className="title text-truncate" to="/products">
                    Lace Casual Boots For Boys &amp; Girls (Tan)
                  </Link>
                  <div className="price mb-2">$399</div>
                  <div className="row">
                    <Link
                      className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                      to="/product/4/edit"
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                      to="/products"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
              <div className="card card-product-grid shadow-sm">
                <Link className="img-wrap" to="/products">
                  <img src="/images/2.png" alt="Product" />
                </Link>
                <div className="info-wrap">
                  <Link className="title text-truncate" to="/products">
                    Lace Walking Shoes For Boys &amp; Girls (Pink)
                  </Link>
                  <div className="price mb-2">$49</div>
                  <div className="row">
                    <Link
                      className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                      to="/product/5/edit"
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                      to="/products"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
              <div className="card card-product-grid shadow-sm">
                <Link className="img-wrap" to="/products">
                  <img src="/images/1.png" alt="Product" />
                </Link>
                <div className="info-wrap">
                  <Link className="title text-truncate" to="/products">
                    Women Red Heels Sandal
                  </Link>
                  <div className="price mb-2">$29</div>
                  <div className="row">
                    <Link
                      className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                      to="/product/6/edit"
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                      to="/products"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="/products">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="/products">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/products">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/products">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/products">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
