import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "../Firebase/Firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    name: "Juan De La Cruz",
    email: "jdlc@gmail.com",
    coursesEnrolled: [
      {
        courseId: "5",
        progress: 10,
        status: "ongoing"
      },
      {
        courseId: "4",
        progress: 23,
        status: "ongoing"
      },
      {
        courseId: "1",
        progress: 90,
        status: "ongoing"
      },
      {
        courseId: "3",
        progress: 100,
        status: "taken"
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
