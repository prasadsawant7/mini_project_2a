import "./Sidebar.css";
import Head from "./Head";
import MainMenu from "./MainMenu";
import Settings from "./Settings";
import HelpCenter from "./HelpCenter";
import Logout from "./Logout";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

export default function Sidebar() {
  return (
    <div className="container">
      <div className="sidebar">
        <Head />
        <MainMenu />
        <Settings />
        <HelpCenter />
        <Logout />
      </div>
      <div className="main-content">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
