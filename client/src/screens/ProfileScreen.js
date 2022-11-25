import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Orders from "../components/ProfileComponents/Orders";

const ProfileScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div className="col-lg-4 p-0 shadow ">
            <div className="author-card pb-0 pb-md-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img src={`/images/user.png`} alt="Profile" />
                </div>
                <div className="author-card-details col-md-7">
                  <h5 className="author-card-name mb-2">
                    <strong>doe</strong>
                  </h5>
                  <span className="author-card-position">
                    Joined November 24, 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard pt-3">
              <div className="d-flex align-items-start">
                <div
                  className="nav align-items-start flex-column col-12 nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile Settings
                  </button>
                  <button
                    className="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Orders List<span className="badge2">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Panels */}
          <div
            className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div>
                <div className="Toastify"></div>
                <div className="Toastify"></div>
              </div>
              <form className="row  form-container">
                <div className="col-md-6">
                  <div className="form">
                    <label htmlFor="account-fn">UserName</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      defaultValue="doe"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label htmlFor="account-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      required
                      defaultValue="doe@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label htmlFor="account-pass">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label htmlFor="account-confirm-pass">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      defaultValue
                    />
                  </div>
                </div>
                <button type="submit">Update Profile</button>
              </form>
            </div>
            {/* No Orders */}
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className=" d-flex justify-content-center align-items-center">
                <div className="col-12 alert alert-info text-center mt-3">
                  No Orders
                  <Link
                    className="btn btn-success mx-2 px-3 py-2"
                    to="/"
                    style={{ fontSize: 12 }}
                  >
                    START SHOPPING
                  </Link>
                </div>
              </div>
              <Orders />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
