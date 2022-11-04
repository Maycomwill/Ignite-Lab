import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import { createContext, ReactNode, useState } from "react";
import { auth, db } from "../services/firebaseConfig";

interface UserProps {
  name: string;
  email: string;
  photoURL?: string;
  userId?: string;
}

export interface UserContextDataProps {
  userData: UserProps;
  signInWithGoogle: () => Promise<void>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextDataProps);

export function UserContextProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);

  async function handleWithUserDataFromDb() {
    const docCollectionRef = collection(db, "users");
    const q = query(docCollectionRef, where("userId", "==", `${auth.currentUser?.uid}`))
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data())
    })
  }

  const signInWithGoogle = async () => {
    const docCollectionRef = collection(db, "users");
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user.displayName)
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
      handleWithUserDataFromDb()
      
    return;
  };
  return (
    <UserContext.Provider
      value={{
        signInWithGoogle,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
