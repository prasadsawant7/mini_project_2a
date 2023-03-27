import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

export default function Head() {
  return (
    <div className="head">
      <div className="branding">
        <div className="brand_logo">
          <img src="../../../../public/assets/images/white_logo.png" alt="" />
        </div>
        <div className="brand_name">FARMBARN</div>
      </div>
      <div className="collapse">
        <TbLayoutSidebarLeftCollapse />
      </div>
    </div>
  );
}
