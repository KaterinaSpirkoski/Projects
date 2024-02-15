import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ArtistList from "./Components/ArtistList/ArtistList";
import ArtistPage from "./Components/ArtistPage/ArtistPage";
import AlbumPage from "./Components/AlbumPage/AlbumPage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="artist-container">
        <Routes>
          <Route path="/" element={<ArtistList />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/artist/:id/:albumId" element={<AlbumPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
