import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Explore from "../../assets/explore.png";
import Leader from "../../assets/leader.png";
import Products from "../../assets/product.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profile_pic} alt="" />
          </div>
          <div className="username">{currentUser.name}</div>
          <div className="authentic">
            <div className="verification">Verified</div>
            <div className="scoreboard">803</div>
            <div className="follow">
              <div className="followers">Followers : 340</div>
              <div className="followers">Followings : 45</div>
            </div>
          </div>
          <hr />

          <div className="item">
            <img src={Friends} alt="" />
            <span>Connects</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Explore} alt="" />
            <span>Explore</span>
          </div>
          <div className="item">
            <img src={Leader} alt="" />
            <Link to="/leaderboard" style={{ textDecoration: "none" }}>
              <span>Leaderboard</span>
            </Link>
          </div>

          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Products} alt="" />
            <span>Products</span>
          </div>
        </div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
    </div>
  );
};

export default LeftBar;
