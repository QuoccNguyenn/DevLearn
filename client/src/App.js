import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./compnents/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/authContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./compnents/routing/ProtectedRoute";
import About from "./views/About";
import PostContextProvider from "./contexts/postContext";
import Home from "./views/Home";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Auth authRoute="login" />} />
            <Route path="/register" element={<Auth authRoute="register" />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
