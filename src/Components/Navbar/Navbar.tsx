import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to={`/`}>
        <h1> Music DB</h1>
        <img src={`/images/raw/Girls-Listen-Music_0.jpg`} alt="img-girl" />
      </Link>
    </div>
  );
};

export default Navbar;
