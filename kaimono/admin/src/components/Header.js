import {Link} from "react-router-dom";

const Header = (props) => {

    const setDarkMode = () => {
        if (document.body.className === "dark-only") {
            document.body.className = ""
        } else {
            document.body.className = "dark-only"
        }
    };

    return (
        <>
            <div className={props.showSideBar}>
                <div className="header-wrapper m-0">
                    <div className="header-logo-wrapper p-0">
                        <div className="logo-wrapper">
                            <Link to={"/"} data-bs-original-title="" title="">
                                <img className="img-fluid main-logo" src="/assets/images/logo/1.png" alt="logo"/>
                                <img className="img-fluid white-logo" src="/assets/images/logo/1-white.png" alt="logo"/>
                            </Link>
                        </div>
                        <div className="toggle-sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-align-center status_toggle middle sidebar-toggle">
                                <line x1="18" y1="10" x2="6" y2="10"></line>
                                <line x1="21" y1="6" x2="3" y2="6"></line>
                                <line x1="21" y1="14" x2="3" y2="14"></line>
                                <line x1="18" y1="18" x2="6" y2="18"></line>
                            </svg>
                            <Link to={"/"} data-bs-original-title="" title="">
                                <img src="/assets/images/logo/1.png" className="img-fluid" alt=""/>
                            </Link>
                        </div>
                    </div>

                    <form className="form-inline search-full" action="javascript:void(0)" method="get">
                        <div className="form-group w-100">
                            <div className="Typeahead Typeahead--twitterUsers">
                                <div className="u-posRelative">
                                    <input className="demo-input Typeahead-input form-control-plaintext w-100"
                                           type="text" placeholder="Search Fastkart .." name="q" title="" autoFocus=""
                                           data-bs-original-title=""/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-x close-search">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                    <div className="spinner-border Typeahead-spinner" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                <div className="Typeahead-menu"></div>
                            </div>
                        </div>
                    </form>
                    <div className="nav-right col-6 pull-right right-header p-0">
                        <ul className="nav-menus">
                            <li>
                            <span className="header-search">
                                <i className="ri-search-line"></i>
                            </span>
                            </li>
                            <li className="onhover-dropdown">
                                <div className="notification-box">
                                    <i className="ri-notification-line"></i>
                                    <span className="badge rounded-pill badge-theme">4</span>
                                </div>
                                <ul className="notification-dropdown onhover-show-div">
                                    <li>
                                        <i className="ri-notification-line"></i>
                                        <h6 className="f-18 mb-0">Notitications</h6>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-primary"></i>Delivery processing <span
                                            className="pull-right">10 min.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-success"></i>Order Complete<span
                                            className="pull-right">1 hr</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-info"></i>Tickets Generated<span
                                            className="pull-right">3 hr</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-danger"></i>Delivery Complete<span
                                            className="pull-right">6 hr</span>
                                        </p>
                                    </li>
                                    <li>
                                        <a className="btn btn-primary" href="javascript:void(0)"
                                           data-bs-original-title="" title="">Check all notification</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div className="mode" onClick={() => setDarkMode()}>
                                    <i className="ri-moon-line"></i>
                                </div>
                            </li>
                            <li className="profile-nav onhover-dropdown pe-0 me-0">
                                <div className="media profile-media">
                                    <img className="user-profile rounded-circle" src="/assets/images/users/4.jpg"
                                         alt=""/>
                                    <div className="user-name-hide media-body">
                                        <span>Emay Walter</span>
                                        <p className="mb-0 font-roboto">Admin<i
                                            className="middle ri-arrow-down-s-line"></i></p>
                                    </div>
                                </div>
                                <ul className="profile-dropdown onhover-show-div">
                                    <li>
                                        <a href="all-users.html" data-bs-original-title="" title="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-users">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                            <span>Users</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="order-list.html" data-bs-original-title="" title="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-archive">
                                                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                                <rect x="1" y="3" width="22" height="5"></rect>
                                                <line x1="10" y1="12" x2="14" y2="12"></line>
                                            </svg>
                                            <span>Orders</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="support-ticket.html" data-bs-original-title="" title="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-phone">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            <span>Spports Tickets</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile-setting.html" data-bs-original-title="" title="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-settings">
                                                <circle cx="12" cy="12" r="3"></circle>
                                                <path
                                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                            </svg>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                           href="javascript:void(0)" data-bs-original-title="" title="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-log-out">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                <polyline points="16 17 21 12 16 7"></polyline>
                                                <line x1="21" y1="12" x2="9" y2="12"></line>
                                            </svg>
                                            <span>Log out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;
