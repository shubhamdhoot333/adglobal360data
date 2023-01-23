import React from "react";
import { NavLink, Link } from "react-router-dom";
import { accountOn } from "../../services/user/user_api";
import { useCookies } from "react-cookie";
import Dropdown from "react-bootstrap/Dropdown";
// import { Dropdown } from 'react-bootstrap';

function Camp_header(props) {
  const toggleOpen = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies();
  // const navigate = useNavigate();
  let token = cookies.access_token;
  const onAccount = async () => {
    let res = await accountOn(token);
    if (res.data.flag === "False") {
      alert(res.data.activationLinkMessage);
    } else if (res.data.flag === "True") {
      alert(res.data.Email);
    }
    console.log(res.data);
  };

  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <div className="me-3">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div>
          <Link className="navbar-brand brand-logo" href="#">
            {/* <img src="images/logo_ebux.png" alt="logo" /> */}
            <div className="container">
              <div className="row mt-2" style={{ marginLeft: "-35px" }}>
                <h3 className="animate-charcter">
                  Ebux <br />
                  Automation
                </h3>
              </div>
            </div>
          </Link>
          <Link className="navbar-brand brand-logo-mini" href="#">
            <img src="images/logo3.png" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-top">
        <ul className="navbar-nav">
          <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
            <h1 className="welcome-text">
              <span className="text-dark fw-bold">{props.title}</span>
            </h1>
            <h3 className="welcome-sub-text text-success">
              Your performance summary this week
            </h3>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item">
            <form className="search-form" action="#">
              <i className="fa fa-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
            </form>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="nav-link count-indicator hide-carret"
              >
                <i className="fa fa-envelope-o"></i>
                <span className="count-symbol bg-warning"></span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <h6 className="p-3 bg-primary text-white py-4 mb-0">
                  Messages
                </h6>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <img src=" " alt="user" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      {" "}
                      Mark send you a message{" "}
                    </h6>
                    <p className="text-gray mb-0"> 1 Minutes ago </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <img src=" " alt="user" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      {" "}
                      Cregh send you a message{" "}
                    </h6>
                    <p className="text-gray mb-0"> 15 Minutes ago </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <img src=" " alt="user" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      {" "}
                      Profile picture updated{" "}
                    </h6>
                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center cursor-pointer">
                  4 new messages{" "}
                </h6>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                <i className="fa fa-bell-o"></i>
                <span className="count-symbol bg-danger"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <h6 className="p-3 mb-0 bg-primary text-white py-4">
                  Notifications
                </h6>
                <div className="dropdown-divider"></div>

                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar"></i>
                    </div>
                  </div>

                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <Link
                      onClick={onAccount}
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <h6 className="preview-subject font-weight-normal mb-1">
                        Account Activate
                      </h6>
                      <p className="text-gray ellipsis mb-0">
                        Go to your gmail to Activate account
                      </p>
                    </Link>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>

                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center cursor-pointer">
                  See all notifications
                </h6>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item nav-profile nav-language">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator">
                <div className="img-md rounded-circle">
                  <img src="images/face8.jpg " alt="Profile image" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black"> Henry Klein </p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="p-3 text-center bg-primary">
                  <img
                    className="img-avatar img-avatar48 img-avatar-thumb"
                    src="images/face8.jpg"
                    alt="Profile image"
                  />
                </div>
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                    {" "}
                    User Options{" "}
                  </h5>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span> Inbox </span>
                    <span className="p-0">
                      <span className="badge badge-primary">3</span>
                      <i className="mdi mdi-email-open-outline ml-1"></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span> Profile </span>
                    <span className="p-0">
                      <span className="badge badge-success">1</span>
                      <i className="mdi mdi-account-outline ml-1"></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span> Settings </span>
                    <i className="mdi mdi-settings"></i>
                  </Dropdown.Item>
                  <div role="separator" className="dropdown-divider"></div>
                  <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">
                    {" "}
                    Actions{" "}
                  </h5>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span> Lock Account </span>
                    <i className="mdi mdi-lock ml-1"></i>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <NavLink
                      className="dropdown-item mx-2"
                      aria-current="page"
                      to="/logout"
                    >
                      logout
                    </NavLink>
                    <i className="mdi mdi-logout ml-1"></i>
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOpen}
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

export default Camp_header;
