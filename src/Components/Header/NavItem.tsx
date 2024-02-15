import "./Header.css";
import "./NavItem.css";
const NavItem = () => {
  const nav = [
    "Home",
    "Bikes",
    "Gear",
    "Parts",
    "Tires",
    "Service-info",
    "Catalogues",
    "Contact",
  ];
  return (
    <>
      {nav.map((el, index) => (
        <li className="nav-items" key={index}>
          <a href="#" className="nav-item">
            {el}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItem;
