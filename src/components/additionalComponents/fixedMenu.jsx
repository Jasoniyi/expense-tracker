import React from "react";

import {
  faCogs,
  faUserFriends,
  faUserCog,
  faSitemap,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fixedMenu = () => {
  return (
    <div className="fixed-menu-wrapper">
      <ul className="fixed-menu-list">
        <li>
          <span>
            <FontAwesomeIcon icon={faGripHorizontal} />
          </span>
          Dashboard
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faUserFriends} />
          </span>
          Friends
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faUserCog} />
          </span>
          Groups
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faSitemap} />
          </span>
          Activity
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faCogs} />
          </span>
          Settings
        </li>
      </ul>
    </div>
  );
};

export default fixedMenu;
