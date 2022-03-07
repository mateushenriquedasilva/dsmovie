import StarFull from "../../assets/img/star-full.svg";
import StarHalf from "../../assets/img/star-half.svg";
import StarEmpty from "../../assets/img/star-empty.svg";
import "./style.css";

export function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <img src={StarFull} alt="" />
      <img src={StarFull} alt="" />
      <img src={StarFull} alt="" />
      <img src={StarHalf} alt="" />
      <img src={StarEmpty} alt="" />
    </div>
  );
}
