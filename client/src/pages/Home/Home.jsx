import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import UserList from "../../components/UserList/UserList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="listContainer">
          <div className="listTitle">send or request from</div>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Home;
