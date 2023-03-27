import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Logout() {
  return (
    <div className="logout">
      <div className="menu-items">
        <NavLink path="#">
          <div className="item">
            <div className="item-icon">
              <BiLogOut />
            </div>
            <div className="item-name">
              <p>Logout Account</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
