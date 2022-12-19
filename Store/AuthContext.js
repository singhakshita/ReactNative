import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  emailId: "",
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [emailId, setEmailId] = useState();

  function authenticate(token, email) {
    setAuthToken(token);
    setEmailId(email);
  }
  function logout() {
    setAuthToken(null);
    setEmailId(null);
  }
  const value = {
    token: authToken,
    emailId: emailId,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
