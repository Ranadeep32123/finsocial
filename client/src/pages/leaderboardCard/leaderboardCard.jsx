import React from "react";
import LeftBar from "../../components/leftBar/LeftBar";
import Navbar from "../../components/navbar/Navbar";
import "./leaderboardCard.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeaderboardCard = ({ data }) => {
  // const { currentUser } = useContext(AuthContext);
  // let followers = 100;
  // let score = 800;
  console.log(data);
  return (
    <div className="card-container">
      <div className="card">
        <img src={data.imageUrl} alt={data.name} className="profile-pic" />
        <h2 className="profile-name">{data.name}</h2>
        <p className="score">Score: {data.score}</p>
        <p className="followers">Followers: {data.followers}</p>
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default LeaderboardCard;
