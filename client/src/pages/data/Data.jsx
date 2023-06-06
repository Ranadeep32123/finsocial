import React from "react";
import List from "../../components/list/List";
// import homepage from "./homepage.scss";
import { Widget } from "../../components/widget/Widget";
import LeftBar from "../../components/leftBar/LeftBar";
import Navbar from "../../components/navbar/Navbar";
import { Plcharts } from "../../components/charts/Plcharts";
import Straddlechart from "../../components/charts/Straddlechart";
import "./data.scss";

const Data = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="home-container">
        <div className="left-container">
          <LeftBar />
        </div>
        <div className="right-container">
          <div className="widget-container">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <div className="stradd">
              <Straddlechart />
            </div>
            <div className="pl">
              <Plcharts aspect={2 / 1} />
            </div>
          </div>
          <div className="table">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

{
  /* 
<LeftBar />

<div className="widget-container">
  <Widget type="user" />
  <Widget type="order" />
  <Widget type="earning" />
  <Widget type="balance" />
</div>
<div className="charts">
  <div className="stradd">
    <Straddlechart />
  </div>
  <div className="pl">
    <Plcharts aspect={2.45 / 1} />
  </div>
</div>
<div className="table">
  <List />
</div>
</div> */
}
