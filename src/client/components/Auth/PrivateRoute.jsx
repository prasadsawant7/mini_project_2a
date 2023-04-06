import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/auth" replace />
  );
}
