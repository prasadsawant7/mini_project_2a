import { TbHelpHexagon } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function HelpCenter() {
  return (
    <div className="help-center">
      <div className="menu-items">
        <NavLink to="helpcenter">
          <div className="item">
            <div className="item-icon">
              <TbHelpHexagon />
            </div>
            <div className="item-name">
              <p>Help Center</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
