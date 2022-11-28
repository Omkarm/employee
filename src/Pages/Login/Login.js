import React from "react";

const Login = () => {
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Click to Login</h3>

            <div className="d-grid gap-2 mt-3">
              <button type="button" class="btn btn-primary ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/dashboard"
                  style={{ textAlign: "center" }}
                >
                  {"   "}
                  Login
                </a>
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Login;
