import Dashboard from "../components/Dashboard";

const AddCategory = () => {
  return (
    <>
      <Dashboard>
        <div className="page-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-8 m-auto">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header-2">
                          <h5>Category Information</h5>
                        </div>

                        <form className="theme-form theme-form-2 mega-form">
                          <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">
                              Category Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Category Name"
                              />
                            </div>
                          </div>

                          <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">
                              Category Image
                            </label>
                            <div className="form-group col-sm-9">
                              <div className="dropzone-wrapper">
                                <div className="dropzone-desc">
                                  <i className="ri-upload-2-line"></i>
                                  <p>Choose an image file or drag it here.</p>
                                </div>
                                <input
                                  type="file"
                                  className="dropzone dz-clickable"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mb-4 row align-items-center">
                            <div className="col-sm-3 form-label-title">
                              Select Category Icon
                            </div>
                            <div className="col-sm-9">
                              <div className="dropdown icon-dropdown">
                                <button
                                  className="btn dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Select Icon
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="./assets/svg/1/vegetable.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/cup.svg"
                                        className="blur-up lazyload"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/meats.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="">
                                      <img
                                        src="../assets/svg/1/breakfast.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/frozen.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/biscuit.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/grocery.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/drink.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/milk.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <img
                                        src="../assets/svg/1/pet.svg"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default AddCategory;
