import React from "react";
import "./straddlecharts.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Straddlechart = () => {
  return (
    <div className="straddlecharts">
      <div className="top">
        <h1 className="title"> Score</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="straddcharts">
          <CircularProgressbar value={80} text={"803"} strokeWidth={3} />
        </div>
        <p className="title">Total p&l generated till date</p>
        <p className="amount">162300</p>
      </div>
    </div>
  );
};

export default Straddlechart;
