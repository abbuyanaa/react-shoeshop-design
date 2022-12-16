import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link className="brand-wrap" to="/">
            <img
              src="/images/logo.png"
              style={{ height: 46 }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream" />
            </button>
          </div>
        </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <Link activeclassname="active" className="menu-link" to="/">
                <i className="icon fas fa-home" />
                <span className="text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeclassname="active"
                className="menu-link"
                to="/products"
              >
                <i className="icon fas fa-shopping-bag" />
                <span className="text">Products</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeclassname="active"
                className="menu-link"
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus" />
                <span className="text">Add product</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeclassname="active"
                className="menu-link"
                to="/category"
              >
                <i className="icon fas fa-list" />
                <span className="text">Categories</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/orders">
                <i className="icon fas fa-bags-shopping" />
                <span className="text">Orders</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link activeclassname="active" className="menu-link" to="/users">
                <i className="icon fas fa-user" />
                <span className="text">Users</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeclassname="active"
                className="menu-link disabled"
                to="/sellers"
              >
                <i className="icon fas fa-store-alt" />
                <span className="text">Sellers</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeclassname="active"
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle" />
                <span className="text">Transactions</span>
              </Link>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
