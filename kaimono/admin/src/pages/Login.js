const Login = () => {
  return (
    <section className="log-in-section section-b-space">
      <a href="/" className="logo-login">
        <img
          src="/assets/images/logo/kaimono.png"
          alt={"Kaimono"}
          className="img-fluid"
        />
      </a>
      <div className="container w-100">
        <div className="row">
          <div className="col-xl-5 col-lg-6 me-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Welcome To Kaimono</h3>
                <h4>Login Your Account</h4>
              </div>

              <div className="input-box">
                <form className="row g-4">
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="forgot-box">
                      <div className="form-check ps-0 m-0 remember-box">
                        <input
                          className="checkbox_animated check-box"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="forgot.html" className="forgot-password">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-animation w-100 justify-content-center"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>or</h6>
              </div>

              <div className="log-in-button">
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/"
                      className="btn google-button w-100"
                    >
                      <img
                        src="/assets/images/inner-page/google.png"
                        className="blur-up lazyload"
                        alt=""
                      />{" "}
                      Log In with Google
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="btn google-button w-100"
                    >
                      <img
                        src="/assets/images/inner-page/facebook.png"
                        className="blur-up lazyload"
                        alt=""
                      />{" "}
                      Log In with Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
