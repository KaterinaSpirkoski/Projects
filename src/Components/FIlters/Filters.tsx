import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Filters.css";
import { BrandFilterCounts } from "../../assets/type";
import { BikeType } from "../../assets/type";

const Filters = () => {
  const [bikes, setBikes] = useState<BikeType[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<BikeType[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [brandFilterCounts, setBrandFilterCounts] = useState<BrandFilterCounts>(
    {}
  );
  const [maleCount, setMaleCount] = useState<number>(0);
  const [femaleCount, setFemaleCount] = useState<number>(0);

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data: { products: BikeType[] }) => {
        setBikes(data.products);
        setFilteredBikes(data.products);

        const brandCounts: BrandFilterCounts = data.products.reduce(
          (counts: BrandFilterCounts, bike: BikeType) => {
            counts[bike.brand] = (counts[bike.brand] || 0) + 1;
            return counts;
          },
          {}
        );

        setBrandFilterCounts(brandCounts);
        setMaleCount(
          data.products.filter((bike) => bike.gender === "MALE").length
        );
        setFemaleCount(
          data.products.filter((bike) => bike.gender === "FEMALE").length
        );
      });
  }, []);

  const filterBikes = (item: string, filterType: string) => {
    if (filterType === "gender") {
      setFilteredBikes(bikes.filter((bike) => bike.gender === item));
      setActiveFilter(item);
    } else if (filterType === "brand") {
      setFilteredBikes(bikes.filter((bike) => bike.brand === item));
      setActiveFilter(item);
    }
  };

  const clearFilters = () => {
    setFilteredBikes(bikes);
    setActiveFilter("");
  };

  return (
    <div className="Filters-section">
      <div className="Filters">
        <h3>Filter by:</h3>
        <a
          href="#"
          className={`Category ${activeFilter === "" ? "active" : ""}`}
          onClick={clearFilters}
        >
          <p className="Category-name">Show all</p>
          <span className="Badget">{bikes.length}</span>
        </a>
        <h3>Gender:</h3>
        <ul className="Filters-list">
          <li>
            <a
              href="#"
              className={`Category ${activeFilter === "MALE" ? "active" : ""}`}
              onClick={() => filterBikes("MALE", "gender")}
            >
              <p>Male</p>
              <span className="Badget">{maleCount}</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`Category ${
                activeFilter === "FEMALE" ? "active" : ""
              }`}
              onClick={() => filterBikes("FEMALE", "gender")}
            >
              <p>Female</p>
              <span className="Badget">{femaleCount}</span>
            </a>
          </li>
        </ul>
        <h3>Brand:</h3>
        <ul className="Filters-list">
          {Array.from(new Set(bikes.map((bike) => bike.brand))).map(
            (brand, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`Category ${
                    activeFilter === brand ? "active" : ""
                  }`}
                  onClick={() => filterBikes(brand, "brand")}
                >
                  <p>{brand}</p>
                  <span className="Badget">
                    {brandFilterCounts[brand] || 0}
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="cards">
        <div className="cards-wrapper">
          {filteredBikes &&
            filteredBikes.map((el, index) => (
              <Card
                key={index}
                name={el.name}
                price={el.price}
                gender={el.gender}
                brand={el.brand}
                image={el.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
