import artists from "../../assets/db";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArtistType } from "../../assets/type";
import "./AlbumList.css";

const AlbumList = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<ArtistType>();

  useEffect(() => {
    if (id) setArtist(artists.find((el) => el.id === +id));
  }, [id]);

  return (
    <div className="album-wrapper">
      {artist &&
        artist?.albums.map((album) => (
          <div className="album" key={album.price}>
            <Link to={`${album.albumId}`}>
              <img
                src={`/images/albums/${album.cover}.jpg`}
                alt={`${artist?.name}`}
                className="album-cover"
              />
            </Link>
          </div>
        ))}
    </div>
  );
};
export default AlbumList;
