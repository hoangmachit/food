import React from "react";
import { Link } from "react-router-dom";
import { Home, Basket, People, Policy, Contact, Search } from "../Icon";
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const togglePolicy = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }
  return (
    <>
      <section id="navPage">
        <nav className="navbar navbar-expand-lg navbar-white bg-white p-3">
          <a className="navbar-brand" href="/">
            <img
              width={200}
              height={32}
              src="https://allgrow-labo.jp/vn/images/company/logo_agLabo.svg"
              alt="Home Page"
            />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" title="Home">
                  <span className="svg">
                    <Home />
                  </span>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders" title="Orders">
                  <span className="svg">
                    <Basket />
                  </span>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account" title="Account">
                  <span className="svg">
                    <People />
                  </span>
                  Account
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" onClick={(e) => togglePolicy(e)} to="/#" title="Policy">
                  <span className="svg">
                    <Policy />
                  </span>
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
              <li className="nav-item">
                <Link className="nav-link" to="/contact" title="Contact">
                  <span className="svg">
                    <Contact />
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0 d-flex" id="form-search">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Bạn muốn tìm gì ..."
              aria-label="Bạn muốn tìm gì ..."
            />
            <button
              className="btn ms-2 my-sm-0"
              type="submit"
            >
              <span className="svg m-0 mr-0">
                <Search />
              </span>
            </button>
          </form>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
