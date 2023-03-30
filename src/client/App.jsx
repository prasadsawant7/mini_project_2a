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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="crops" element={<Crops />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="helpcenter" element={<HelpCenter />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
