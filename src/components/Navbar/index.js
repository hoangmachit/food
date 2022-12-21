import { Home, Basket, People, Policy, Contact, Search } from "../Icon";
const Navbar = () => {
  return (
    <>
      <section className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
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
                <a className="nav-link" href="/">
                  <span className="svg">
                    <Home />
                  </span>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="svg">
                    <Basket />
                  </span>
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="svg">
                    <People />
                  </span>
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="svg">
                    <Policy />
                  </span>
                  Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="svg">
                    <Contact />
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Keyword ..."
              aria-label="Keyword ..."
            />
            <button
              className="btn btn-outline-success ms-2 my-sm-0"
              type="submit"
            >
              <span className="svg mr-0">
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
