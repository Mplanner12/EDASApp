import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { AuthProvider } from "./pages/utils/AuthContext";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./pages/utils/PrivateRoutes";

import Appwrite from "appwrite";

const appwrite = new Appwrite();

// Set CORS headers for all Appwrite API requests
appwrite.setHeaders({
  "Access-Control-Allow-Origin":
    "https://edas-p3fcy9xhd-mplanner12s-projects.vercel.app",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
});

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Route>
          {/* Public Routes */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
