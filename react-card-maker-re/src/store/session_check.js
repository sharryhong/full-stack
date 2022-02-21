import LoadingSpinner from "components/base/loading-spinner/LoadingSpinner";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const SessionContext = createContext();

const initState = {
  isLoggedIn: false,
  id: undefined,
};

const SessionCheck = ({ authService, children }) => {
  const [session, setSession] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const requiredLogin = () => {
    const paths = ["maker"];
    paths.forEach(
      (path) => location.pathname.includes(path) && navigate("/login")
    );
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setSession({ isLoggedIn: true, id: user.uid });
        navigate("/maker");
      } else {
        setSession({ isLoggedIn: false, id: undefined });
      }
      setIsLoading(true);
    });
  }, [authService]);

  useEffect(() => {
    if (!session.isLoggedIn) {
      requiredLogin();
    }
  }, [location.pathname]);

  const style = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <SessionContext.Provider value={session}>
      {!isLoading && (
        <div style={style}>
          <LoadingSpinner />
        </div>
      )}
      {isLoading && children}
    </SessionContext.Provider>
  );
};

export default SessionCheck;
