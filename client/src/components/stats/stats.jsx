import "./stats.scss";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">1 Mth :</div>
          <div className="left-data">4%</div>

          <div className="left">3 Mth :</div>
          <div className="left-data negative">-1.5%</div>

          <div className="left">12 Mth :</div>
          <div className="left-data">34%</div>

          <div className="left">Till Date :</div>
          <div className="left-data">132%</div>

          <div className="right"></div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <div className="left">Score :</div>
            <div className="left-data">633</div>
            <div className="left">Followers :</div>
            <div className="left-data">1645</div>
            <div className="left">Followings :</div>
            <div className="left-data">42</div>

            <label htmlFor="file"></label>
          </div>
          <div className="right">
            <Link to="/stats">
              <button>Stats</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
