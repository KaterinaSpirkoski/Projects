export type AlbumType = {
  albumId: number | string;
  title: string;
  year: number;
  cover: string;
  price: number;
};

export type ArtistType = {
  id: number | string;
  name: string;
  cover: string;
  bio: string;
  albums: AlbumType[];
};
