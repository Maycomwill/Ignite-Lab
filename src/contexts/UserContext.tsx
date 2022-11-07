import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebaseConfig";

interface UserProps {
  name: string;
  email: string;
  photoURL?: string;
  userId?: string;
}

export interface UserContextDataProps {
  user: any;
  userData: UserProps | null;
  signInWithGoogle: () => Promise<void>;
  handleWithUserDataFromDb: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextDataProps);

export function UserContextProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [user, loading, error] = useAuthState(auth);

  async function handleWithUserDataFromDb() {
    const docCollectionRef = collection(db, "users");
    const q = query(docCollectionRef, where("userId", "==", `${user!.uid}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const result = doc.data() as UserProps;
      setUserData({
        name: result.name,
        email: result.email,
        userId: result.userId,
        photoURL: result.photoURL,
      });
    });
  }

  useEffect(() => {
    if (user) {
      handleWithUserDataFromDb();
    } else {}
  }, [user]);

  const signInWithGoogle = async () => {
    const docCollectionRef = collection(db, "users");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setDoc(doc(docCollectionRef, auth.currentUser?.uid), {
          name: user.displayName,
          lasName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          createdAt: serverTimestamp(),
          userId: auth.currentUser?.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <UserContext.Provider
      value={{
        user,
        signInWithGoogle,
        userData,
        handleWithUserDataFromDb,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
