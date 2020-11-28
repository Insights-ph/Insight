import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "../Firebase/Firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// {
//   name: "Juan De La Cruz",
//   email: "jdlc@gmail.com",
//   coursesEnrolled: [
//     {
//       courseId: "5",
//       progress: 10,
//       status: "ongoing",
//     },
//     {
//       courseId: "4",
//       progress: 23,
//       status: "ongoing",
//     },
//     {
//       courseId: "1",
//       progress: 90,
//       status: "ongoing",
//     },
//     {
//       courseId: "3",
//       progress: 100,
//       status: "taken",
//     },
//   ],
// }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    coursesEnrolled: [
      {
        courseId: "5",
        progress: 10,
        status: "ongoing",
      },
      {
        courseId: "4",
        progress: 23,
        status: "ongoing",
      },
      {
        courseId: "1",
        progress: 90,
        status: "ongoing",
      },
      {
        courseId: "3",
        progress: 100,
        status: "taken",
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  function register({ email, firstName, lastName, password }) {
    return auth.createUserWithEmailAndPassword(email, password).then((data) => {
      const currentUser = auth.currentUser;
      const name = `${firstName} ${lastName}`;
      currentUser
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          db.collection("users").doc(data.user.uid).set({
            firstName: firstName,
            lastName: lastName,
            role: "user",
            uid: data.user.uid,
            createdAt: new Date(),
            isOnline: true,
            coursesEnrolled: [],
          });
        });
    });
  }

  function login({ email, password }) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async (data) => {
        await db
          .collection("users")
          .doc(data.user.uid)
          .update({
            isOnline: true,
          })
          .then(() => {
            const name = data.user.displayName;

            setCurrentUser({
              ...currentUser,
              name,
              email: data.user.email,
            });
          });

        // await db
        //   .collection("users")
        //   .doc(data.user.uid)
        //   .get()
        //   .then((query) => {
        //     const data = query.data();
        //     setCurrentUser({
        //       ...currentUser,
        //       ...data,
        //     });
        //   });
      });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(
        user
          ? {
              ...currentUser,
              name: user.displayName,
              email: user.email,
            }
          : { ...currentUser }
      );
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
