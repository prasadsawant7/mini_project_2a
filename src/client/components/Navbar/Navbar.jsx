import Search from "./Search";
import { BiMoon, BiBell, BiChevronDown } from "react-icons/bi";
import "./Navbar.css";
import BreadCrumbs from "./BreadCrumbs";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function () {
  const location = useLocation();
  const [pageName, setPageName] = useState("");

  const expandProfile = () => {};

  useEffect(() => {
    let pgName = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")[0];

    pgName = pgName?.charAt(0).toUpperCase() + pgName?.slice(1);
    setPageName(pgName ? pgName : "Dashboard");
  }, [location]);

  return (
    <div className="navbar">
      <div className="page-details">
        <div className="page-name">{pageName}</div>
        <div className="bread-crumbs">
          <BreadCrumbs />
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
          <img
            src="../../../../public/assets/icons/dark_logo.ico"
            alt="Profile Image"
          />
        </div>
        <div className="profile-data">
          <div className="profile-name">John Doe</div>
          <div className="profile-email">johndoe2003@mail.com</div>
        </div>
        <div className="profile-expand">
          <BiChevronDown onClick={expandProfile} />
        </div>
      </div>
    </div>
  );
}
