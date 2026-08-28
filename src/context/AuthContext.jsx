import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("shopco_user");

    try {
      return savedUser
        ? JSON.parse(savedUser)
        : null;
    } catch {
      return null;
    }
  });

  const login = (email, password) => {
    const savedUsers =
      JSON.parse(
        localStorage.getItem("shopco_users") || "[]"
      );

    const existingUser = savedUsers.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!existingUser) {
      return {
        success: false,
        message:
          "Invalid email or password.",
      };
    }

    const loggedInUser = {
      name: existingUser.name,
      email: existingUser.email,
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "shopco_user",
      JSON.stringify(loggedInUser)
    );

    return {
      success: true,
    };
  };

  const register = (
    name,
    email,
    password
  ) => {
    const savedUsers =
      JSON.parse(
        localStorage.getItem("shopco_users") || "[]"
      );

    const userExists = savedUsers.some(
      (item) => item.email === email
    );

    if (userExists) {
      return {
        success: false,
        message:
          "An account with this email already exists.",
      };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    const updatedUsers = [
      ...savedUsers,
      newUser,
    ];

    localStorage.setItem(
      "shopco_users",
      JSON.stringify(updatedUsers)
    );

    const loggedInUser = {
      name,
      email,
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "shopco_user",
      JSON.stringify(loggedInUser)
    );

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem(
      "shopco_user"
    );
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}