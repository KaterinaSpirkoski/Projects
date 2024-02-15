import "./Card.css";
import { BikeType } from "../../assets/type";

const Card = ({ name, price, image }: BikeType) => {
  return (
    <div className="card-inner">
      <img src={`./assets/${image}.png`} alt="bike-img" />
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-price"> {price}$</p>
      </div>
    </div>
  );
};
export default Card;
