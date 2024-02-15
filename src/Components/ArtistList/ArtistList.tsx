import artists from "../../assets/db";
import ArtistItem from "../ArtistItem/ArtistItem";
import "./ArtistList.css";

const ArtistList = () => {
  return (
    <div className="artist-wrapper">
      <h2>Browse the artist</h2>
      {artists.map(({ id, name, cover, bio, albums }) => (
        <ArtistItem
          key={id}
          id={id}
          name={name}
          cover={cover}
          bio={bio}
          albums={albums}
        />
      ))}
    </div>
  );
};

export default ArtistList;
