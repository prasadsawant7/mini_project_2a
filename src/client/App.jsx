import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/MainMenu/Dashboard/Dashboard";
import Blogs from "./components/MainMenu/Blogs/Blogs";
import Crops from "./components/MainMenu/Crops/Crops";
import Profile from "./components/SettingsMenu/Profile/Profile";
import Settings from "./components/SettingsMenu/Settings/Settings";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<Sidebar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="crops" element={<Crops />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="helpcenter" element={<HelpCenter />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
