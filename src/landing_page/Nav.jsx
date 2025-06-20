import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className=" navbar border-bottom navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="images/logo.svg" alt="logo" style={{width: "20%", marginLeft:"5rem"}}/>
        </Link>
        <div className="collapse small navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-2 text-muted">
            <li className="nav-item">
              <Link className="nav-link small" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
           
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
