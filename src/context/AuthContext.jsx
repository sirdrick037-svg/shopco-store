import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shopco_user");

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch {
      localStorage.removeItem("shopco_user");
      return null;
    }
  });

  const register = (name, email, password) => {
    const account = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "shopco_account",
      JSON.stringify(account)
    );

    const newUser = {
      name,
      email,
    };

    localStorage.setItem(
      "shopco_user",
      JSON.stringify(newUser)
    );

    setUser(newUser);

    return true;
  };

  const login = (email, password) => {
    const savedAccount =
      localStorage.getItem("shopco_account");

    if (!savedAccount) {
      return {
        success: false,
        message:
          "No account exists. Please create an account first.",
      };
    }

    const account = JSON.parse(savedAccount);

    if (
      account.email !== email ||
      account.password !== password
    ) {
      return {
        success: false,
        message: "Incorrect email or password.",
      };
    }

    const loggedInUser = {
      name: account.name,
      email: account.email,
    };

    localStorage.setItem(
      "shopco_user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

    return {
      success: true,
      user: loggedInUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("shopco_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoggedIn: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}