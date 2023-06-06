import React from "react";
import LeftBar from "../../components/leftBar/LeftBar";
import Navbar from "../../components/navbar/Navbar";
import "./leaderboard.scss";
import LeaderboardCard from "../leaderboardCard/leaderboardCard";

const Leaderboard = () => {
  const userdata = [
    {
      id: 1,
      name: "John Smith",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 120,
      followers: 1000,
    },
    {
      id: 2,
      name: "Jane Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      score: 125,
      followers: 1080,
    },
    {
      id: 3,
      name: "Emma Brown",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 150,
      followers: 2000,
    },
    {
      id: 4,
      name: "Michael Johnson",
      imageUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 175,
      followers: 2500,
    },
    {
      id: 5,
      name: "Sophia Taylor",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      score: 200,
      followers: 3000,
    },
    {
      id: 6,
      name: "James Lee",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 225,
      followers: 3500,
    },
    {
      id: 7,
      name: "Olivia Harris",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 250,
      followers: 4000,
    },
    {
      id: 8,
      name: "William Clark",
      imageUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      score: 275,
      followers: 4500,
    },
    {
      id: 9,
      name: "Ava Lewis",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
      score: 300,
      followers: 5000,
    },
    {
      id: 10,
      name: "David Young",
      imageUrl:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      score: 325,
      followers: 5500,
    },
    {
      id: 11,
      name: "Mia Walker",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 350,
      followers: 6000,
    },
    {
      id: 12,
      name: "Joseph Hall",
      imageUrl:
        "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      score: 375,
      followers: 6500,
    },
    {
      id: 13,
      name: "Isabella Allen",
      imageUrl:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      score: 400,
      followers: 7000,
    },
    {
      id: 14,
      name: "Daniel Wright",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      score: 425,
      followers: 7500,
    },
    {
      id: 15,
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
      score: 100,
      followers: 200,
    },
    {
      id: 16,
      name: "Jane Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80",
      score: 120,
      followers: 250,
    },
    {
      id: 17,
      name: "Aradhana Singh",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
      score: 180,
      followers: 350,
    },
  ];
  return (
    <div className="homepage-leader">
      <Navbar />
      <div className="home-container-leader">
        <div className="left-container">
          <LeftBar />
        </div>
        <div className="right-container">
          {userdata.map((row) => (
            <LeaderboardCard key={row.id} data={row} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
