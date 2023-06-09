import LoginForm from "../compnents/auth/LoginForm";
import RegisterForm from "../compnents/auth/RegisterForm";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Navigate to="/home" />;
  else
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Welcome to Dev Learn</h1>
          <h4>Keep track what program language you are learning</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
