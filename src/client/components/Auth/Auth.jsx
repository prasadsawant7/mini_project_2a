import { Outlet } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  return (
    <div className="auth">
      <div className="images">
        <div id="image1"></div>
        <div id="image2"></div>
      </div>
      <div className="forms">
        <Outlet />
      </div>
    </div>
  );
}
