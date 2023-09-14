import { getImageSrc } from "./utils.js";

export default function Food({ foodName, size, recipt }) {
  return (
    <>
      <div className="food">
        <img
          className="foodImage"
          src={getImageSrc(foodName)}
          alt={foodName}
          width={size}
          height={size}
        />
      </div>
      <div className="text">
        <h2 className="foodName">{foodName}</h2>
        <p className="recipt">{recipt}</p>
      </div>
    </>
  );
}
