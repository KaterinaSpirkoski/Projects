import { ArtistType } from "../../assets/type";
import { Link } from "react-router-dom";
import "./ArtistItem.css";

const ArtistItem = ({ id, name, cover }: ArtistType) => {
  return (
    <div className="card">
      <Link to={`artist/${id}`}>
        <img
          src={`images/covers/${cover}.jpg`}
          alt={name}
          className="artist-img"
        />
        <span className="name">{name}</span>
      </Link>
    </div>
  );
};

export default ArtistItem;
