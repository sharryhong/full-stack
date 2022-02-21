import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const SessionContext = createContext();

const initState = {
  isLoggedIn: false,
  id: undefined,
};

const SessionCheck = ({ authService, children }) => {
  const [session, setSession] = useState(initState);
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
    });
  }, [authService]);

  useEffect(() => {
    if (!session.isLoggedIn) {
      requiredLogin();
    }
  }, [location.pathname]);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionCheck;
