import React from "react";

const LoginScreen = () => {
  return (
    <>
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-5 text-center">Sign in</h4>
          <form>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
