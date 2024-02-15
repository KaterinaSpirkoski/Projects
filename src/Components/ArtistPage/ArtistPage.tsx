import artists from "../../assets/db";
import AlbumList from "../AlbumList/AlbumList";
import { useParams } from "react-router-dom";
import { ArtistType } from "../../assets/type";
import { useState, useEffect } from "react";
import "./ArtistPage.css";

const ArtistPage = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<ArtistType>();

  useEffect(() => {
    if (id) setArtist(artists.find((el) => el.id === +id));
  }, [id]);

  return (
    <div className="artist-page">
      <div className="artist-page-wrapper">
        <img
          src={`/images/covers/${artist?.cover}.jpg`}
          alt={`${artist?.name}`}
          className="artist-image"
        />
        <h3>{artist?.name}</h3>
        <p className="artist-bio">{artist?.bio}</p>
        <AlbumList />
      </div>
    </div>
  );
};
export default ArtistPage;
