import artists from "../../assets/db";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArtistType, AlbumType } from "../../assets/type";
import "./AlbumPage.css";

const AlbumPage = () => {
  const { id, albumId } = useParams<{ id: string; albumId: string }>();
  const [artist, setArtist] = useState<ArtistType>();
  const [album, setAlbum] = useState<AlbumType>();

  useEffect(() => {
    if (id && artists) {
      setArtist(artists.find((el) => el.id === +id));
    }
  }, [id, artists]);

  useEffect(() => {
    if (albumId && artist) {
      const selectedAlbum = artist.albums.find((el) => el.albumId === albumId);
      setAlbum(selectedAlbum);
    }
  }, [albumId, artist]);

  return (
    <div className="album-page">
      <div className="album-page-wrapper">
        {album && (
          <img
            src={`/images/albums/${album.cover}.jpg`}
            alt={album.title}
            className="album-image"
          />
        )}
      </div>
      <div className="album-info">
        <p className="">Title:</p> <span> {album?.title}</span>
      </div>
      <div className="album-info">
        <p className="">Year:</p> <span> {album?.year}</span>
      </div>
      <div className="album-info">
        <p className="">Price:</p> <span> {album?.price} $</span>
      </div>
    </div>
  );
};

export default AlbumPage;
