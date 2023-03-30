import { BiUser, BiCog } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <div className="settings">
      <div className="section-header">Settings</div>
      <div className="menu-items">
        <NavLink to="profile">
          <div className="item" id="profile">
            <div className="item-icon">
              <BiUser />
            </div>
            <div className="item-name">
              <p>Profile</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="settings">
          <div className="item" id="settings">
            <div className="item-icon">
              <BiCog />
            </div>
            <div className="item-name">
              <p>Settings</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
