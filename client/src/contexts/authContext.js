import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { apiUrl, LOCALSTORAGE_TOKEN_NAME } from "./constants";
import { setAuthToken } from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCALSTORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCALSTORAGE_TOKEN_NAME]);
    }

    try {
      const respond = await axios.get(`${apiUrl}/auth`);
      if (respond.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, user: respond.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  //Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCALSTORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  //Register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCALSTORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // logout user
  const logoutUser = () => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };

  //context data
  const authContextData = { loginUser, registerUser, logoutUser, authState };

  //Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
