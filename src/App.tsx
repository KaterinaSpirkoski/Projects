import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Filters from "./Components/FIlters/Filters";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;
