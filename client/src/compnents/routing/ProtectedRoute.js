import { Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../../contexts/authContext";
import SideBar from "../layout/Sidebar";
import Header from "../layout/Header";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const [sidebarToggle, setSidebarToggle] = useState("");
  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );

  // if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <>
      <div className={`home ${sidebarToggle}`}>
        <SideBar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="page__wrapper">
          <Header
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
          {children}
        </div>
      </div>
      );
      {/* <NavbarMenu />
      {children} */}
    </>
  );
};

export default ProtectedRoute;
