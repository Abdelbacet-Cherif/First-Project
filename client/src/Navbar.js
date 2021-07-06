import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./actions/authActions";
import { Button } from "././pages/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import "./App.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <div>
      {/* <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          MINZ<strong>CODE</strong>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">register</Link>
          </li>
          <li>
            <Link to="/signin">login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <label for="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
        <div className="container"></div> */}
      <nav className="navbar">
        <div className="navbar-container ">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* PetStore<i class="fas fa-typo3"></i> */}
            <img
              className="nav-roua"
              src="https://demo.qodeinteractive.com/bridge67/wp-content/uploads/2015/03/slider-graphic.png"
              alt="Third slide"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i  className={click ? "fas fa-times" : "fas fa-bars"} />
            {/* <GiHamburgerMenu className="gi" /> */}
            {/* <label for="check">
              <input type="checkbox" className="check" />
              <span></span>
              <span></span>
              <span></span>
            </label> */}
          </div>

          {auth.isAuth ? (
            <div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Profile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/feed"
                    className="nav-links "
                    onClick={closeMobileMenu}
                  >
                    Déposer une annonce
                  </Link>
                </li>
                <li className="nav-item">
                  
                    <Link
                      className="nav-links1"
                      onClick={closeMobileMenu}
                      onClick={() => dispatch(logoutUser())}
                    ><Button  >
                      Déconnexion</Button>
                    </Link>
                  
                </li>
                <li className="nav-item ">
               <Link to="/profile" onClick={closeMobileMenu} >
                <i  class="fas fa-user-circle coloruser" ></i>
                </Link>
                 
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Accueil
                  </Link>
                </li>
                {
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Connexion
                    </Link>
                  </li>
                }

                <li className="nav-item ">
                  <Link to="/register"  onClick={closeMobileMenu}>
                    <Button className="btn btnfont1 " buttonStyle="btn--outline">
                      Déposer une annonce
                    </Button>
                  </Link>
                </li>
                <li className="nav-item ">
               <Link to="/register" onClick={closeMobileMenu} >
                <i  class="fas fa-user-circle coloruser" ></i>
                </Link>
                 
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
