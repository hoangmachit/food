import React from "react";
import { Link } from "react-router-dom";
import { Home, Basket, People, Policy } from "../Icon";
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const togglePolicy = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }
  return (
    <>
      <section id="navPage">
        <nav className="navbar navbar-expand-lg navbar-white bg-white p-3 justify-content-between">
          <Link className="navbar-brand" to="/" title="Home Page">
            <img
              width={200}
              height={32}
              src="https://allgrow-labo.jp/vn/images/company/logo_agLabo.svg"
              alt="Home Page"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/orders" title="Orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account" title="Account">
                  Account
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" onClick={(e) => togglePolicy(e)} to="/#" title="Policy">
                  Policy
                </Link>
                {toggle &&
                  (<ul className="dropdown-menu show">
                    <li><a className="dropdown-item" href="/">Ordering guide </a></li>
                    <li><a className="dropdown-item" href="/">Pick up policy</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/policy/ranker">Rate the pick-up list</Link></li>
                  </ul>)
                }
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
