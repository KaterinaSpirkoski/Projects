import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevState) => prevState - 1);
      } else {
        navigate("/");
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, navigate]);

  return (
    <div className="not-found-page">
      The URL {location.pathname} doesn't exist. You will be redirected to the{" "}
      <Link to="/" className="home-page">
        Home Page
      </Link>{" "}
      in {seconds} seconds.
    </div>
  );
};

export default NotFoundPage;
