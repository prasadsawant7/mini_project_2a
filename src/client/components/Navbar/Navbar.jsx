import Search from "../Sidebar/Search";
import { BiMoon, BiBell, BiChevronDown } from "react-icons/bi";
import "./Navbar.css";

export default function () {
  return (
    <div className="navbar">
      <div className="page-details">
        <div className="page-name">Configurations</div>
        <div className="bread-crumbs">
          <div className="crumb">Dashboard</div>
          &gt;
          <div className="crumb">Configurations</div>
        </div>
      </div>
      <Search />
      <div className="theme">
        <BiMoon />
      </div>
      <div className="notification">
        <BiBell />
      </div>
      <div className="account-details">
        <div className="profile-image">
          <img src="../../../../public/assets/icons/dark_logo.ico" alt="Profile Image" />
        </div>
        <div className="profile-data">
          <div className="profile-name">John Doe</div>
          <div className="profile-email">johndoe2003@mail.com</div>
        </div>
        <div className="profile-expand">
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
}
