import "./Dashboard.css";
import { FcCalendar } from "react-icons/fc";

export default function Dashboard() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const todayDate = new Date();
  let date = todayDate.getDate();
  let month = monthNames[todayDate.getMonth()];
  let year = todayDate.getFullYear();
  return (
    <div className="dashboard">
      <h1 className="text-white">Welcome back, Shetkari!</h1>
      <div className="date">
        <div className="date-icon">
          <FcCalendar />
        </div>
        <div className="date-text">{`${date} ${month}, ${year}`}</div>
      </div>
    </div>
  );
}
