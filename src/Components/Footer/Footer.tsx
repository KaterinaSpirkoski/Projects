import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // events links
  const events = [
    "Event Now",
    "Event Info",
    "Course Map",
    "Race PAck",
    "Results",
    "FAQs",
    "Am I Registered",
  ];
  //   registration links
  const registration = [
    "Volunteers",
    "Gallery",
    "Press",
    "Results",
    "Privacy Policy",
    "Services Plus",
    "Contact",
  ];
  //   schedule links
  const schedule = [
    "Gallery",
    "About",
    "Videos",
    "Results",
    "FAQs",
    "Resultss",
    "Volunteers",
  ];
  return (
    <div className="Footer">
      <div className="footer-inner">
        <div className="social-networks inner">
          <h3>Social share</h3>
          <div className="social-share-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="event-info inner">
          <h3>Event info</h3>
          <ul className="list">
            {events.map((el, index) => (
              <li className="items" key={index}>
                <a href="#" className="links">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Registration inner">
          <h3>Registration</h3>
          <ul className="list">
            {registration.map((el, index) => (
              <li className="items" key={index}>
                <a href="#" className="links">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="schedule inner">
          <h3>Schedule</h3>
          <ul className="list">
            {schedule.map((el, index) => (
              <li className="items" key={index}>
                <a href="#" className="links">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
