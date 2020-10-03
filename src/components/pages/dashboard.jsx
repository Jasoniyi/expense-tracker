import React from "react";

import {
  faHome,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <input placeholder="Search for expence" type="text" />
        </div>
        <div className="dashboard-header-right">
          <button>Add expense</button>
          <div className="icons">
            <FontAwesomeIcon icon={faBell} className="icon-left" />
            <FontAwesomeIcon icon={faUserCircle} className="icon-right" />
          </div>
        </div>
      </div>
      <div className="dashboard-transactions">Trans</div>
    </div>
  );
};

export default Home;
