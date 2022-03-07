import ArrowIcon from "../../assets/img/arrow.svg";
import "./style.scss";

export function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <img src={ArrowIcon} alt="icon arrow" />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <img
            src={ArrowIcon}
            alt="icon arrow"
            className="dsmovie-flip-horizontal"
          />
        </button>
      </div>
    </div>
  );
}
