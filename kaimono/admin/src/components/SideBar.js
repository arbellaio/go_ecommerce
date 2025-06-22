/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = (props) => {
  const [showSideBar, setShowSideBar] = useState("sidebar-wrapper");

  const [productActive, setProductActive] = useState(
    "linear-icon-link sidebar-link sidebar-title"
  );
  const [productBlock, setProductBlock] = useState("none");
  const [productArrow, setProductArrow] = useState("ri-arrow-right-s-line");

  const [categoryActive, setCategoryActive] = useState(
    "linear-icon-link sidebar-link sidebar-title"
  );
  const [categoryBlock, setCategoryBlock] = useState("none");
  const [categoryArrow, setCategoryArrow] = useState("ri-arrow-right-s-line");

  const [orderActive, setOrderActive] = useState(
    "linear-icon-link sidebar-link sidebar-title"
  );
  const [orderBlock, setOrderBlock] = useState("none");
  const [orderArrow, setOrderArrow] = useState("ri-arrow-right-s-line");

  const [attributeActive, setAttributeActive] = useState(
    "linear-icon-link sidebar-link sidebar-title"
  );
  const [attributeBlock, setAttributeBlock] = useState("none");
  const [attributeArrow, setAttributeArrow] = useState("ri-arrow-right-s-line");

  const [attributeTypeActive, setAttributeTypeActive] = useState(
    "linear-icon-link sidebar-link sidebar-title"
  );
  const [attributeTypeBlock, setAttributeTypeBlock] = useState("none");
  const [attributeTypeArrow, setAttributeTypeArrow] = useState(
    "ri-arrow-right-s-line"
  );

  const [usersActive, setUsersActive] = useState(
    "linear-icon-link sidebar-link sidebar-title"
  );
  const [userBlock, setUsersBlock] = useState("none");
  const [userArrow, setUserArrow] = useState("ri-arrow-right-s-line");

  const onSideBarClicked = (type) => {
    switch (type) {
      case "product":
        if (productActive === "linear-icon-link sidebar-link sidebar-title") {
          setProductActive(
            "linear-icon-link sidebar-link sidebar-title active"
          );
          setProductBlock("");
          setProductArrow("ri-arrow-down-s-line");
          return;
        }
        setProductActive("linear-icon-link sidebar-link sidebar-title");
        setProductBlock("none");
        setProductArrow("ri-arrow-right-s-line");
        break;
      case "category":
        if (categoryActive === "linear-icon-link sidebar-link sidebar-title") {
          setCategoryActive(
            "linear-icon-link sidebar-link sidebar-title active"
          );
          setCategoryBlock("");
          setCategoryArrow("ri-arrow-down-s-line");
          return;
        }
        setCategoryActive("linear-icon-link sidebar-link sidebar-title");
        setCategoryBlock("none");
        setCategoryArrow("ri-arrow-right-s-line");
        break;

      case "order":
        if (orderActive === "linear-icon-link sidebar-link sidebar-title") {
          setOrderActive("linear-icon-link sidebar-link sidebar-title active");
          setOrderBlock("");
          setOrderArrow("ri-arrow-down-s-line");
          return;
        }
        setOrderActive("linear-icon-link sidebar-link sidebar-title");
        setOrderBlock("none");
        setOrderArrow("ri-arrow-right-s-line");
        break;

      case "attribute":
        if (attributeActive === "linear-icon-link sidebar-link sidebar-title") {
          setAttributeActive(
            "linear-icon-link sidebar-link sidebar-title active"
          );
          setAttributeBlock("");
          setAttributeArrow("ri-arrow-down-s-line");
          return;
        }
        setAttributeActive("linear-icon-link sidebar-link sidebar-title");
        setAttributeBlock("none");
        setAttributeArrow("ri-arrow-right-s-line");
        break;

      case "attributeType":
        if (
          attributeTypeActive === "linear-icon-link sidebar-link sidebar-title"
        ) {
          setAttributeTypeActive(
            "linear-icon-link sidebar-link sidebar-title active"
          );
          setAttributeTypeBlock("");
          setAttributeTypeArrow("ri-arrow-down-s-line");
          return;
        }
        setAttributeTypeActive("linear-icon-link sidebar-link sidebar-title");
        setAttributeTypeBlock("none");
        setAttributeTypeArrow("ri-arrow-right-s-line");
        break;

      case "user":
        if (
          attributeTypeActive === "linear-icon-link sidebar-link sidebar-title"
        ) {
          setAttributeTypeActive(
            "linear-icon-link sidebar-link sidebar-title active"
          );
          setAttributeTypeBlock("");
          setAttributeTypeArrow("ri-arrow-down-s-line");
          return;
        }
        setAttributeTypeActive("linear-icon-link sidebar-link sidebar-title");
        setAttributeTypeBlock("none");
        setAttributeTypeArrow("ri-arrow-right-s-line");
        break;
      default:
        return;
    }
  };

  const onClickSideBar = () => {
    if (showSideBar === "sidebar-wrapper close_icon") {
      props.onClickTopBar("page-header");
      setShowSideBar("sidebar-wrapper");
    } else {
      props.onClickTopBar("page-header close_icon");
      setShowSideBar("sidebar-wrapper close_icon");
    }
  };

  return (
    <div className={showSideBar}>
      <div id="sidebarEffect">
        <canvas width="2048" height="1092"></canvas>
      </div>
      <div>
        <div className="logo-wrapper logo-wrapper-center">
          <Link to={"/"} data-bs-original-title="" title="">
            <img
              className="img-fluid for-white"
              src="/assets/images/logo/full-white.png"
              alt="logo"
            />
          </Link>
          <div className="back-btn">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="toggle-sidebar" onClick={() => onClickSideBar()}>
            <i className="ri-apps-line status_toggle middle sidebar-toggle"></i>
          </div>
        </div>
        <div className="logo-icon-wrapper">
          <Link to={"/"} data-bs-original-title="" title="">
            <img
              className="img-fluid main-logo main-white"
              src="/assets/images/logo/logo.png"
              alt="logo"
            />
            <img
              className="img-fluid main-logo main-dark"
              src="/assets/images/logo/logo-white.png"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="sidebar-main">
          <div className="left-arrow disabled" id="left-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>

          <div id="sidebar-menu">
            <ul
              className="sidebar-links"
              id="simple-bar"
              data-simplebar="init"
              style={{ display: "block" }}
            >
              <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: "0px", bottom: "0px" }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: "100%", overflow: "hidden" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: "0px" }}
                      >
                        <li className="back-btn"></li>

                        <li className="sidebar-list">
                          <Link
                            className="sidebar-link sidebar-title link-nav active"
                            to={"/"}
                            data-bs-original-title=""
                            title=""
                          >
                            <i className="ri-home-line"></i>
                            <span>Dashboard</span>
                            <div className="according-menu">
                              <i className="ri-arrow-right-s-line"></i>
                            </div>
                          </Link>
                        </li>

                        <li className="sidebar-list">
                          <a
                            onClick={() => onSideBarClicked("product")}
                            className={productActive}
                            data-bs-original-title=""
                            title=""
                          >
                            <i className="ri-store-3-line"></i>
                            <span>Product</span>
                            <div className="according-menu">
                              <i className={productArrow}></i>
                            </div>
                          </a>
                          <ul
                            className="sidebar-submenu"
                            style={{ display: productBlock }}
                          >
                            <li>
                              <Link
                                to={"/products"}
                                data-bs-original-title=""
                                title=""
                              >
                                Products
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={"add-product"}
                                data-bs-original-title=""
                                title=""
                              >
                                Add New Product
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="sidebar-list">
                          <a
                            onClick={() => onSideBarClicked("category")}
                            className={categoryActive}
                            data-bs-original-title=""
                            title=""
                          >
                            <i className="ri-list-check-2"></i>
                            <span>Category</span>
                            <div className="according-menu">
                              <i className={categoryArrow}></i>
                            </div>
                          </a>
                          <ul
                            className="sidebar-submenu"
                            style={{ display: categoryBlock }}
                          >
                            <li>
                              <Link
                                to={"/categories"}
                                data-bs-original-title=""
                                title=""
                              >
                                Categories
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={"add-category"}
                                data-bs-original-title=""
                                title=""
                              >
                                Add New Category
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="sidebar-list">
                          <a
                            onClick={() => onSideBarClicked("order")}
                            className={orderActive}
                            data-bs-original-title=""
                            title=""
                          >
                            <i className="ri-list-check-2"></i>
                            <span>Order</span>
                            <div className="according-menu">
                              <i className={orderArrow}></i>
                            </div>
                          </a>
                          <ul
                            className="sidebar-submenu"
                            style={{ display: orderBlock }}
                          >
                            <li>
                              <Link
                                to={"/orders"}
                                data-bs-original-title=""
                                title=""
                              >
                                Orders
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={"add-order"}
                                data-bs-original-title=""
                                title=""
                              >
                                Add New Order
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="sidebar-list">
                          <a
                            className="linear-icon-link sidebar-link sidebar-title"
                            data-bs-original-title=""
                            title=""
                          >
                            <i className="ri-list-settings-line"></i>
                            <span>Attributes</span>
                            <div className="according-menu">
                              <i className={attributeArrow}></i>
                            </div>
                          </a>
                          <ul
                            className="sidebar-submenu"
                            style={{ display: "none" }}
                          >
                            <li>
                              <Link
                                to={"/attributes"}
                                data-bs-original-title=""
                                title=""
                              >
                                Attributes
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={"add-attribute"}
                                data-bs-original-title=""
                                title=""
                              >
                                Add Attributes
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="sidebar-list">
                          <a
                            className="sidebar-link sidebar-title"
                            data-bs-original-title=""
                            title=""
                          >
                            <i className="ri-user-3-line"></i>
                            <span>Users</span>
                            <div className="according-menu">
                              <i className="ri-arrow-right-s-line"></i>
                            </div>
                          </a>
                          <ul
                            className="sidebar-submenu"
                            style={{ display: "none" }}
                          >
                            <li>
                              <Link
                                to={"/users"}
                                data-bs-original-title=""
                                title=""
                              >
                                Users
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/add-user"}
                                data-bs-original-title=""
                                title=""
                              >
                                Add User
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: "auto", height: "848px" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: "0px", display: "none" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: "0px",
                    transform: "translate3d(0px, 0px, 0px)",
                    display: "none",
                  }}
                ></div>
              </div>
            </ul>
          </div>

          <div className="right-arrow" id="right-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
