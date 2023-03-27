import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        {/* <Route index element={<Dashboard />}></Route> */}
      </Route>
    )
  );

  return (
    <div class="app">
      <RouterProvider router={router} />
    </div>
  );
}
