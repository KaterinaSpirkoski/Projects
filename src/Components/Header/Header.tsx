import "./Header.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <div className="Header">
      <div className="Navbar">
        <div className="logo-inner">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <NavItem />
          </ul>
        </div>
        <div className="Icon-inner">
          <a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLock} />
          </a>
        </div>
      </div>
      <div className="Title">
        <p>Bikes</p>
      </div>
    </div>
  );
};

export default Header;
