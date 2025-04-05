import LoginCallback from "./components/auth/LoginCallback";
import { Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Routes>
      {/* ... other routes ... */}
      <Route path="/login/callback" element={<LoginCallback />} />
      {/* ... other routes ... */}
    </Routes>
  );
};
