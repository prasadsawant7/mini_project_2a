import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="section1">
        <div className="branding">
          <div className="brand_logo"></div>
          <div className="brand_name"></div>
        </div>
        <div className="collapse"></div>
      </div>
      <div className="search"></div>
      <div className="main-menu"></div>
      <div className="settings"></div>
      <div className="help-center"></div>
      <div className="logout"></div>
    </div>
  );
}
