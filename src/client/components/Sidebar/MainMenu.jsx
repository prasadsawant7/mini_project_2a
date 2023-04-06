import { BiHomeAlt2 } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { GiFarmer } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
  return (
    <div className="main-menu">
      <div className="section-header">Main Menu</div>
      <div className="menu-items">
        <NavLink to="dashboard">
          <div className="item" id="dashboard">
            <div className="item-icon">
              <BiHomeAlt2 />
            </div>
            <div className="item-name">
              <p>Dashboard</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="blogs">
          <div className="item" id="blogs">
            <div className="item-icon">
              <RiArticleLine />
            </div>
            <div className="item-name">
              <p>Blogs</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="crops">
          <div className="item" id="crops">
            <div className="item-icon">
              <GiFarmer />
            </div>
            <div className="item-name">
              <p>Crops</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
